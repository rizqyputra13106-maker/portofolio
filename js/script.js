// Menunggu sampai seluruh DOM (HTML) selesai dimuat
document.addEventListener("DOMContentLoaded", function () {

  // ==========================================
  // 1. AUTO-CLOSE NAVBAR PADA TAMPILAN MOBILE
  // ==========================================
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      // Cek apakah menu navbar sedang terbuka (collapse show)
      if (navbarCollapse.classList.contains("show")) {
        // Gunakan instance Bootstrap Collapse untuk menutupnya
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });

  // ==========================================
  // 2. SIMULASI PENGIRIMAN FORM KONTAK
  // ==========================================
  const contactForm = document.querySelector("#kontak form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Mencegah reload halaman

      // Ambil nilai input dari form
      const nameInput = contactForm.querySelector('input[type="text"]').value.trim();
      const emailInput = contactForm.querySelector('input[type="email"]').value.trim();
      const messageInput = contactForm.querySelector('textarea').value.trim();

      // Validasi sederhana
      if (nameInput && emailInput && messageInput) {
        // Tampilkan pesan sukses
        alert(`Terima kasih, ${nameInput}! Pesan kamu telah berhasil terkirim.`);
        
        // Reset isi form
        contactForm.reset();
      } else {
        alert("Mohon lengkapi semua bidang sebelum mengirim pesan.");
      }
    });
  }

});