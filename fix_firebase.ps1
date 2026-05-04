$path = 'c:\Users\user\Desktop\jeu_pokemon\pokedoku.html'
$content = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
$content = $content.Replace('doc(db, "pokedoku_rooms"', '_doc("pokedoku_rooms"')
$content = $content.Replace('doc(db, "users"', '_doc("users"')
$content = $content.Replace('await setDoc(', 'await _setDoc(')
$content = $content.Replace('await getDoc(', 'await _getDoc(')
$content = $content.Replace('await updateDoc(', 'await _updateDoc(')
$content = $content.Replace('updateDoc(roomRef', '_updateDoc(roomRef')
$content = $content.Replace('onSnapshot(roomRef', '_onSnapshot(roomRef')
[System.IO.File]::WriteAllText($path, $content, [System.Text.Encoding]::UTF8)
Write-Host "Done"
