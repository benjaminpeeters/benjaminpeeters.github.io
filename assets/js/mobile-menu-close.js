/**
 * Mobile Menu Auto-Close
 * Close hamburger menu when clicking outside or scrolling
 *
 * Features:
 * - Closes menu when user clicks anywhere outside the navbar
 * - Closes menu when user scrolls (mobile only)
 * - Provides standard mobile UX behavior
 */
(function () {
  "use strict";

  // Get navbar elements
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector("#navbarNav");

  // Exit if elements not found
  if (!navbarToggler || !navbarCollapse) return;

  /**
   * Check if menu is currently open
   */
  function isMenuOpen() {
    return navbarCollapse.classList.contains("show");
  }

  /**
   * Close the menu by triggering click on toggler
   */
  function closeMenu() {
    if (isMenuOpen()) {
      navbarToggler.click();
    }
  }

  /**
   * Close menu when clicking outside navbar
   */
  document.addEventListener("click", function (event) {
    // Only proceed if menu is open
    if (!isMenuOpen()) return;

    // Check if click was inside navbar
    const navbar = document.querySelector("#navbar");
    const clickedInsideNavbar = navbar && navbar.contains(event.target);

    // Close if clicked outside
    if (!clickedInsideNavbar) {
      closeMenu();
    }
  });

  /**
   * Close menu when scrolling
   * Only on mobile (< 576px width) to match Bootstrap's sm breakpoint
   */
  let scrollTimer;
  window.addEventListener(
    "scroll",
    function () {
      // Only close on mobile viewport
      if (window.innerWidth >= 576) return;

      // Debounce scroll events (wait 150ms for scroll to settle)
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(function () {
        closeMenu();
      }, 150);
    },
    { passive: true }
  );
})();
