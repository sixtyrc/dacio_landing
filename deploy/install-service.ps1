param(
    [string]$AppDirectory = "C:\www\dacio\LandingPage",
    [string]$ServiceName = "DACIO-Web",
    [int]$Port = 3010,
    [string]$NssmPath = "C:\nssm\nssm.exe"
)

$ErrorActionPreference = "Stop"

if (-not (Test-Path -LiteralPath $NssmPath)) {
    throw "No se encontró NSSM en: $NssmPath"
}

$nodePath = (Get-Command node -ErrorAction Stop).Source
$nextCli = Join-Path $AppDirectory "node_modules\next\dist\bin\next"
if (-not (Test-Path -LiteralPath $nextCli)) {
    throw "No se encontró Next.js. Ejecute pnpm install y pnpm run build antes de instalar el servicio."
}
$logDirectory = Join-Path $AppDirectory "logs"
New-Item -ItemType Directory -Force -Path $logDirectory | Out-Null

& $NssmPath install $ServiceName $nodePath
& $NssmPath set $ServiceName AppDirectory $AppDirectory
& $NssmPath set $ServiceName AppParameters "`"$nextCli`" start --hostname 127.0.0.1 --port $Port"
& $NssmPath set $ServiceName AppEnvironmentExtra "NODE_ENV=production" "PORT=$Port"
& $NssmPath set $ServiceName AppStdout (Join-Path $logDirectory "stdout.log")
& $NssmPath set $ServiceName AppStderr (Join-Path $logDirectory "stderr.log")
& $NssmPath set $ServiceName AppRotateFiles 1
& $NssmPath set $ServiceName AppRotateOnline 1
& $NssmPath set $ServiceName AppRotateBytes 10485760
& $NssmPath set $ServiceName AppExit Default Restart
& $NssmPath set $ServiceName AppRestartDelay 5000
& $NssmPath set $ServiceName Start SERVICE_AUTO_START

Write-Host "Servicio $ServiceName configurado con Node $nodePath en 127.0.0.1:$Port"
Write-Host "Inícielo con: nssm start $ServiceName"
