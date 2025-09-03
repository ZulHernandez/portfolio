@echo off
SETLOCAL ENABLEDELAYEDEXPANSION

for /R "src\assets\imgs" %%f in (*.webp) do (
  echo Recomprimiendo: %%~nxf
  cwebp -q 80 "%%f" -o "%%~dpnf.optimized.webp"
  if exist "%%~dpnf.optimized.webp" (
    for %%I in ("%%f") do set "original=%%~zI"
    for %%I in ("%%~dpnf.optimized.webp") do set "optimized=%%~zI"
    if !optimized! LSS !original! (
      move /Y "%%~dpnf.optimized.webp" "%%f" >nul
      ) else (
      del "%%~dpnf.optimized.webp"
    )
  )
)
echo ✅ Optimización completada.
