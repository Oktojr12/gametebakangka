let angkaRahasia = Math.floor(Math.random() * 100) + 1;
let kesempatan = 6;

document.getElementById('submit').addEventListener('click', function() {
 let tebakan = document.getElementById('tebakan').value;
 kesempatan--;

 if (tebakan == angkaRahasia) {
 document.getElementById('hasil').innerText = 'Selamat! Anda menang!';
 document.getElementById('submit').disabled = true;
 } else if (kesempatan == 0) {
 document.getElementById('hasil').innerText = 'Game Over! Angka rahasia adalah ' + angkaRahasia;
 document.getElementById('submit').disabled = true;
 } else if (tebakan < angkaRahasia) {
 document.getElementById('hasil').innerText = 'Terlalu Rendah!';
 } else {
 document.getElementById('hasil').innerText = 'Terlalu Tinggi!';
 }

 document.getElementById('kesempatan').innerText = 'Kesempatan: ' + kesempatan;
});