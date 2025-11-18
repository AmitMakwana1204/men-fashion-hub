@echo off
cd /d "%~dp0"
echo Starting Vite server on port 3000...
start /B cmd /C "npm run dev -- --port 3000"
echo Vite server started in background. Open http://localhost:3000