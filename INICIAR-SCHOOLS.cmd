@echo off
setlocal
cd /d "%~dp0"
title Schools by Lyriq - ambiente local

where node >nul 2>nul
if errorlevel 1 (
  echo.
  echo Node.js nao foi encontrado. Instale a versao LTS em https://nodejs.org/
  echo Depois execute este arquivo novamente.
  pause
  exit /b 1
)

where npm >nul 2>nul
if errorlevel 1 (
  echo.
  echo npm nao foi encontrado. Reinstale o Node.js LTS em https://nodejs.org/
  pause
  exit /b 1
)

if not exist node_modules\next\package.json (
  echo Instalando as dependencias do Schools...
  call npm install
  if errorlevel 1 (
    echo.
    echo A instalacao falhou. Veja o erro acima e tente novamente.
    pause
    exit /b 1
  )
)

echo.
echo Schools iniciando em http://localhost:3000
start "" "http://localhost:3000"
call npm run dev -- --hostname 127.0.0.1
if errorlevel 1 (
  echo.
  echo O servidor parou com erro. Veja a mensagem acima.
  pause
  exit /b 1
)
endlocal
