// script.js
document.getElementById('homeLink').addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah aksi default dari link

    // Menampilkan pesan di dalam elemen
    const messageContainer = document.getElementById('message');
    messageContainer.classList.remove('hidden'); // Tampilkan pesan

    // Menghilangkan pesan setelah 3 detik
    setTimeout(function() {
        messageContainer.classList.add('hidden'); // Sembunyikan pesan
    }, 4000);
});



// Ambil elemen tombol menu dan navigasi
const menuBtn = document.getElementById('menu-btn');
const navigasi = document.getElementById('navigasi');

// Tambahkan event listener untuk tombol menu
menuBtn.addEventListener('click', () => {
    // Toggle visibility navigasi di mobile
    navigasi.classList.toggle('hidden');
});
