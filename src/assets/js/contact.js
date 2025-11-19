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

    // Verify hCaptcha response
    const hcaptchaResponse = formData.get('h-captcha-response');
    if (!hcaptchaResponse) {
      showError(statusDiv, submitButton, 'Please complete the CAPTCHA verification.');
      return;
    }

    // Show loading state
    submitButton.disabled = true;
    const originalButtonHTML = submitButton.innerHTML;
    submitButton.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:20px;height:20px;"><circle cx="12" cy="12" r="10"></circle></svg> Sending...';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        showSuccess(statusDiv, submitButton, form, originalButtonHTML);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      showError(statusDiv, submitButton, null, originalButtonHTML);
    }
  }

  function showSuccess(statusDiv, submitButton, form, originalButtonHTML) {
    statusDiv.className = 'success';
    statusDiv.textContent = 'Thank you for your message! I will get back to you soon.';
    statusDiv.style.display = 'block';
    statusDiv.style.backgroundColor = '#d4edda';
    statusDiv.style.color = '#155724';
    statusDiv.style.border = '1px solid #c3e6cb';

    form.reset();

    // Reset hCaptcha if available
    if (typeof hcaptcha !== 'undefined') {
      hcaptcha.reset();
    }

    resetButton(submitButton, originalButtonHTML);
  }

  function showError(statusDiv, submitButton, customMessage, originalButtonHTML) {
    statusDiv.className = 'error';
    statusDiv.textContent = customMessage || 'Oops! There was a problem sending your message. Please try again.';
    statusDiv.style.display = 'block';
    statusDiv.style.backgroundColor = '#f8d7da';
    statusDiv.style.color = '#721c24';
    statusDiv.style.border = '1px solid #f5c6cb';

    if (originalButtonHTML) {
      resetButton(submitButton, originalButtonHTML);
    }
  }

  function resetButton(submitButton, originalHTML) {
    submitButton.disabled = false;
    submitButton.innerHTML = originalHTML;
  }
})();
