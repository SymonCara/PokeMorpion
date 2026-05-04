$path = 'c:\Users\user\Desktop\jeu_pokemon\pokedoku.html'
$content = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
# In compat SDK, .exists is a boolean property not a function
$content = $content.Replace('snap.exists()', 'snap.exists')
$content = $content.Replace('snap.exists()', 'snap.exists')
[System.IO.File]::WriteAllText($path, $content, [System.Text.Encoding]::UTF8)
Write-Host "Done"
