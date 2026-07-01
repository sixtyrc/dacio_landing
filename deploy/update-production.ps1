param(
    [string]$AppDirectory = "C:\www\dacio\LandingPage",
    [string]$ServiceName = "DACIO-Web",
    [string]$Branch = "test",
    [string]$NssmPath = "C:\nssm\nssm.exe"
)

$ErrorActionPreference = "Stop"
Set-Location -LiteralPath $AppDirectory

git fetch origin
git switch $Branch
git pull --ff-only origin $Branch
pnpm install --frozen-lockfile
pnpm run build

& $NssmPath restart $ServiceName
if ($LASTEXITCODE -ne 0) {
    throw "NSSM no pudo reiniciar el servicio $ServiceName"
}

Write-Host "Deploy de origin/$Branch finalizado."
