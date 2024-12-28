
  function toggleMenu() {
    const mobileMenu = document.querySelector(".mobileMenu");
    if (mobileMenu) {
      mobileMenu.classList.toggle("hidden");
    } else {
      console.error("Mobile menu element not found.");
    }
  }

