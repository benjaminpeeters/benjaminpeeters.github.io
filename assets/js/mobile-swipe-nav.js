/**
 * Mobile Swipe Navigation
 * Swipe right from left edge to open hamburger menu on mobile devices
 *
 * Features:
 * - Detects swipe-right gesture from left screen edge
 * - Only activates on mobile (< 576px width, matching Bootstrap's sm breakpoint)
 * - Uses passive event listeners for optimal scrolling performance
 * - Automatically closes menu when resizing to desktop view
 */
(function () {
  "use strict";

  // Configuration
  const CONFIG = {
    mobileBreakpoint: 576, // Match Bootstrap's sm breakpoint
    minSwipeDistance: 80, // Minimum horizontal swipe distance in pixels
    maxVerticalDeviation: 50, // Maximum vertical movement allowed
    edgeThreshold: 50, // Must start within this distance from left edge
  };

  // Check if device is in mobile viewport
  const isMobile = () => window.innerWidth < CONFIG.mobileBreakpoint;

  // Exit early if not on mobile device
  if (!isMobile()) return;

  // Touch position tracking
  let touchStartX = 0;
  let touchStartY = 0;
  let touchEndX = 0;
  let touchEndY = 0;

  /**
   * Record initial touch position
   */
  document.addEventListener(
    "touchstart",
    (e) => {
      if (!isMobile()) return;

      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    },
    { passive: true }
  );

  /**
   * Record final touch position and check for valid swipe
   */
  document.addEventListener(
    "touchend",
    (e) => {
      if (!isMobile()) return;

      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;

      handleSwipeGesture();
    },
    { passive: true }
  );

  /**
   * Analyze touch movement and trigger menu if conditions met
   */
  function handleSwipeGesture() {
    // Calculate movement
    const horizontalDiff = touchEndX - touchStartX;
    const verticalDiff = Math.abs(touchEndY - touchStartY);

    // Validate gesture conditions
    const startedFromLeftEdge = touchStartX < CONFIG.edgeThreshold;
    const isRightSwipe = horizontalDiff > CONFIG.minSwipeDistance;
    const isHorizontalSwipe = verticalDiff < CONFIG.maxVerticalDeviation;

    // Get navbar elements
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector("#navbarNav");

    // Exit if elements not found
    if (!navbarToggler || !navbarCollapse) return;

    // Check if menu is currently closed
    const isMenuClosed = !navbarCollapse.classList.contains("show");

    // Open menu if all conditions are met
    if (startedFromLeftEdge && isRightSwipe && isHorizontalSwipe && isMenuClosed) {
      navbarToggler.click();
    }
  }

  /**
   * Handle window resize - close menu if viewport becomes desktop size
   */
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (!isMobile()) {
        const navbarCollapse = document.querySelector("#navbarNav");
        const navbarToggler = document.querySelector(".navbar-toggler");

        // Close menu if it's open
        if (navbarCollapse && navbarCollapse.classList.contains("show") && navbarToggler) {
          navbarToggler.click();
        }
      }
    }, 250); // Debounce resize events
  });
})();
