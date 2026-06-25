@echo off
cd /d "%~dp0"
where node >nul 2>nul && (node build-manifest.js) || (python build-manifest.py)
echo.
echo Done. You can close this window.
pause
