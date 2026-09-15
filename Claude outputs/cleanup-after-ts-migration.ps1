# Run from the repo root (G:\Github\portfolio) in PowerShell.
# Deletes the old .js/.jsx files now superseded by their .ts/.tsx versions.
$oldFiles = @(
"src\App.jsx",
    "src\components\about\CoComida.jsx",
    "src\components\about\CoGames.jsx",
    "src\components\about\CoManga.jsx",
    "src\components\about\CoSport.jsx",
    "src\components\context\NavigationContext.js",
    "src\components\context\ScrollToTop.js",
    "src\components\context\useScreenSize.js",
    "src\components\context\varExperiencia.js",
    "src\components\context\varRedes.js",
    "src\components\context\varTrabajos.js",
    "src\components\general\CoBtn.jsx",
    "src\components\general\CoConozca.jsx",
    "src\components\general\CoFile.jsx",
    "src\components\general\CoFooter.jsx",
    "src\components\general\CoIcon.jsx",
    "src\components\general\CoKPI.jsx",
    "src\components\general\CoLanguageSwitch.jsx",
    "src\components\general\CoNav.jsx",
    "src\components\general\CoNavLeft.jsx",
    "src\components\general\CoTitle.jsx",
    "src\components\general\CoWorkCard.jsx",
    "src\components\general\CoWorkList.jsx",
    "src\components\home\CoColab.jsx",
    "src\components\home\CoHola.jsx",
    "src\components\home\CoTrabajos.jsx",
    "src\components\works\CoSumario.jsx",
    "src\components\works\CoTimeline.jsx",
    "src\components\works\CoTrabajos.jsx",
    "src\components\works\glue\CoAutoma.jsx",
    "src\components\works\glue\CoContexto.jsx",
    "src\components\works\glue\CoFuture.jsx",
    "src\components\works\glue\CoInsumos.jsx",
    "src\components\works\glue\CoTech.jsx",
    "src\components\works\hubbub\CoContexto.jsx",
    "src\components\works\hubbub\CoDesign.jsx",
    "src\components\works\hubbub\CoFuture.jsx",
    "src\components\works\hubbub\CoInvest.jsx",
    "src\components\works\hubbub\CoProgra.jsx",
    "src\components\works\movilidad\CoAmbNoti.jsx",
    "src\components\works\movilidad\CoContexto.jsx",
    "src\components\works\movilidad\CoFlow.jsx",
    "src\components\works\movilidad\CoFuture.jsx",
    "src\components\works\movilidad\CoInvest.jsx",
    "src\i18n.js",
    "src\main.jsx",
    "src\routes\RoAbout.jsx",
    "src\routes\RoCarga.jsx",
    "src\routes\RoError.jsx",
    "src\routes\RoHome.jsx",
    "src\routes\RoResume.jsx",
    "src\routes\RoWorks.jsx",
    "src\routes\about\RoComida.jsx",
    "src\routes\about\RoGames.jsx",
    "src\routes\about\RoManga.jsx",
    "src\routes\about\RoSport.jsx",
    "src\routes\works\RoGLUE.jsx",
    "src\routes\works\RoHUBBUB.jsx",
    "src\routes\works\RoMovilidad.jsx",
    "src\utils\accentColors.js",
    "src\utils\breakpoints.js",
    "src\utils\languages.js",
    "src\utils\preloadable.js",
    "vite.config.js"
)
foreach ($f in $oldFiles) {
    if (Test-Path $f) { Remove-Item $f; Write-Host "Deleted $f" }
    else { Write-Host "Not found (already gone?): $f" }
}

# Install the new devDependencies (typescript, sass, postcss, autoprefixer, etc.)
npm install

# Rebuild CSS from the new SCSS partials (sanity check)
npm run build:css

# Type-check the whole project
npx tsc -b

# Smoke test
npm run dev
