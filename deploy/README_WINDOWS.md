# Deploy de DACIO en Windows

Arquitectura:

`Cloudflare -> Caddy :443 -> Next.js/NSSM 127.0.0.1:3010`

## 1. DNS y Cloudflare

Crear un registro `A`:

- Nombre: `dacio`
- Destino: IP pública del servidor
- Al comenzar: **DNS only** (nube gris)

Cuando Caddy ya haya emitido el certificado y el sitio responda por HTTPS, se
puede activar **Proxied** (nube naranja). En Cloudflare usar SSL/TLS
**Full (strict)**. No usar Flexible.

## 2. Clonar la rama de despliegue

Ejecutar PowerShell como administrador:

```powershell
New-Item -ItemType Directory -Force C:\www\dacio
Set-Location C:\www\dacio
git clone --branch test --single-branch URL_DEL_REPOSITORIO LandingPage
Set-Location C:\www\dacio\LandingPage
```

Verificar herramientas:

```powershell
node --version
corepack enable
pnpm --version
```

Si `corepack enable` falla por permisos, instalar pnpm globalmente desde una
consola de administrador:

```powershell
npm install --global pnpm
```

## 3. Variables y build

Crear `.env.production` en la raíz, sin subirlo a Git:

```dotenv
RESEND_API_KEY=REEMPLAZAR
CONTACT_FROM_EMAIL=Notificaciones DACIO <dacio@ctsoft.com.ar>
CONTACT_TO_EMAIL=dacio@ctsoft.com.ar
```

Construir:

```powershell
pnpm install --frozen-lockfile
pnpm run build
```

Probar antes de crear el servicio:

```powershell
pnpm start -- --hostname 127.0.0.1 --port 3010
```

En otra consola:

```powershell
Invoke-WebRequest http://127.0.0.1:3010
```

## 4. Instalar el servicio NSSM

El script presupone NSSM en `C:\nssm\nssm.exe`. Si está en otra ubicación,
pasarla mediante `-NssmPath`.

```powershell
Set-ExecutionPolicy -Scope Process Bypass
.\deploy\install-service.ps1
C:\nssm\nssm.exe start DACIO-Web
C:\nssm\nssm.exe status DACIO-Web
```

Los logs quedan en `C:\www\dacio\LandingPage\logs`.

## 5. Agregar Caddy

Copiar el bloque de `deploy\Caddyfile.dacio` al final del Caddyfile actual.
Validar y recargar sin detener los demás sitios:

```powershell
Set-Location C:\caddy
.\caddy.exe validate --config C:\caddy\Caddyfile
.\caddy.exe reload --config C:\caddy\Caddyfile
```

Comprobar:

```powershell
Invoke-WebRequest https://dacio.ctsoft.com.ar
```

## 6. Actualizaciones desde `test`

Antes de desplegar, confirmar que los cambios deseados estén enviados a
`origin/test`. En el servidor:

```powershell
Set-Location C:\www\dacio\LandingPage
Set-ExecutionPolicy -Scope Process Bypass
.\deploy\update-production.ps1
```

El script hace `pull --ff-only`, instala exactamente el lockfile, compila y
recién entonces reinicia NSSM. Si falla el build, conserva corriendo la versión
anterior.

## Diagnóstico

```powershell
C:\nssm\nssm.exe status DACIO-Web
Get-Content C:\www\dacio\LandingPage\logs\stderr.log -Tail 100
Get-Content C:\caddy\logs\dacio.log -Tail 100
Get-NetTCPConnection -LocalPort 3010 -State Listen
```
