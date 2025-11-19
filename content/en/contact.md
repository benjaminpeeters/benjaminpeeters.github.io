---
title: Contact
type: page
---

## Get in Touch

I welcome questions, collaboration opportunities, and discussions about research. Please use the form below to send me a message, or connect through the channels listed.

### Institutional Address

Potsdam Institute for Climate Impact Research (PIK)
Research Department: Transformation Pathways
Telegrafenberg A 31
14473 Potsdam, Germany

Website: [www.pik-potsdam.de](https://www.pik-potsdam.de/en/home)

### Professional Profiles

- ORCID: [0000-0002-5095-2021](https://orcid.org/0000-0002-5095-2021)
- [Google Scholar](https://scholar.google.com/citations?user=ACbL7v0AAAAJ)
- [GitHub](https://github.com/benjaminpeeters)
- [LinkedIn](https://www.linkedin.com/in/benjamin-peeters)

### Code and Technical Questions

For code-related questions, bug reports, or technical issues with my repositories, please open an issue on [GitHub](https://github.com/benjaminpeeters). This helps maintain a public record and allows others to benefit from the discussion.

---

## Send a Message

<form class="contact-form" id="contact-form" method="POST" action="https://formcarry.com/s/_n_QcqvTqp6">
  <div class="form-group">
    <label for="name">Name <span class="required">(required)</span></label>
    <input type="text" id="name" name="name" required aria-required="true" aria-label="Your name">
  </div>

  <div class="form-group">
    <label for="email">Email <span class="required">(required)</span></label>
    <input type="email" id="email" name="email" required aria-required="true" aria-label="Your email address">
  </div>

  <div class="form-group">
    <label for="subject">Subject <span class="required">(required)</span></label>
    <input type="text" id="subject" name="subject" required aria-required="true" aria-label="Message subject">
  </div>

  <div class="form-group">
    <label for="message">Message <span class="required">(required)</span></label>
    <textarea id="message" name="message" rows="6" required aria-required="true" aria-label="Your message"></textarea>
  </div>

  <div class="form-group">
    <div class="h-captcha" data-sitekey="f3daf6a4-fe6c-4090-ba50-1810dd7210cc"></div>
  </div>

  <button type="submit">Send Message</button>
</form>

<div id="form-status" class="form-status" style="display:none;"></div>

<script src="https://js.hcaptcha.com/1/api.js" async defer></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (form) {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();

      const submitButton = form.querySelector('button[type="submit"]');
      const originalButtonText = submitButton.textContent;

      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';

      try {
        const formData = new FormData(form);
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          formStatus.className = 'form-status success';
          formStatus.textContent = 'Thank you! Your message has been sent successfully.';
          formStatus.style.display = 'block';
          form.reset();
          if (typeof hcaptcha !== 'undefined') { hcaptcha.reset(); }
        } else {
          const data = await response.json();
          formStatus.className = 'form-status error';
          formStatus.textContent = data.error || 'Oops! There was a problem sending your message. Please try again.';
          formStatus.style.display = 'block';
        }
      } catch (error) {
        formStatus.className = 'form-status error';
        formStatus.textContent = 'Oops! There was a problem sending your message. Please try again.';
        formStatus.style.display = 'block';
      } finally {
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
      }
    });
  }
});
</script>
