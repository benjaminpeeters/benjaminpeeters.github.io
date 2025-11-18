// Contact form submission handler
(function() {
  'use strict';

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContactForm);
  } else {
    initContactForm();
  }

  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', handleSubmit);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const statusDiv = document.getElementById('form-status');
    const submitButton = form.querySelector('.submit-button');

    if (!statusDiv || !submitButton) return;

    // Show loading state
    submitButton.disabled = true;
    submitButton.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:20px;height:20px;"><circle cx="12" cy="12" r="10"></circle></svg> ' +
      (submitButton.dataset.sendingText || 'Sending...');

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        showSuccess(statusDiv, submitButton, form);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      showError(statusDiv, submitButton);
    }
  }

  function showSuccess(statusDiv, submitButton, form) {
    statusDiv.className = 'success';
    statusDiv.textContent = statusDiv.dataset.successMessage ||
      'Thank you for your message! I will get back to you soon.';
    statusDiv.style.display = 'block';

    form.reset();

    // Reset hCaptcha if available
    if (typeof hcaptcha !== 'undefined') {
      hcaptcha.reset();
    }

    resetButton(submitButton);
  }

  function showError(statusDiv, submitButton) {
    statusDiv.className = 'error';
    statusDiv.textContent = statusDiv.dataset.errorMessage ||
      'Oops! There was a problem sending your message. Please try again.';
    statusDiv.style.display = 'block';

    resetButton(submitButton);
  }

  function resetButton(submitButton) {
    submitButton.disabled = false;
    submitButton.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:20px;height:20px;"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> ' +
      (submitButton.dataset.submitText || 'Send Message');
  }
})();
