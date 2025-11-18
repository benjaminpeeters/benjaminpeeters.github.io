---
page_id: contact
layout: page
title: contact
permalink: /contact/
description: Get in touch with me
nav: true
nav_order: 7
scripts:
  - https://js.hcaptcha.com/1/api.js
  - /assets/js/contact.js
---

<div class="contact-container">
  <div class="contact-header">
    <h2>Get in Touch</h2>
    <p class="contact-intro">
      Whether you have a question about my research, want to discuss a potential collaboration,
      or simply want to connect, I'd be happy to hear from you.
    </p>
  </div>

  <div class="contact-sections">
    <div class="contact-section">
      <h3>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        Office Address
      </h3>
      <div class="address-block">
        <strong>Potsdam Institute for Climate Impact Research (PIK)</strong><br>
        Research Department: Transformation Pathways<br>
        Telegrafenberg A 31<br>
        14473 Potsdam<br>
        Germany
      </div>
    </div>

    <div class="contact-section">
      <h3>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
        Code & Technical Questions
      </h3>
      <p>
        For questions or issues related to code, software, or technical discussions,
        please reach out via <a href="https://github.com/benjaminpeeters" target="_blank" rel="noopener noreferrer">GitHub</a>.
        This helps keep technical conversations organized and publicly accessible.
      </p>
    </div>
  </div>

  <div class="contact-form-wrapper">
    <h3>Send a Message</h3>
    <form class="contact-form" id="contact-form" method="POST" action="https://formspree.io/f/manlrveb">
      <div class="form-group">
        <label for="name">Name <span class="required">(required)</span></label>
        <input type="text" id="name" name="name" required>
      </div>

      <div class="form-group">
        <label for="email">Email <span class="required">(required)</span></label>
        <input type="email" id="email" name="email" required>
      </div>

      <div class="form-group">
        <label for="subject">Subject <span class="required">(required)</span></label>
        <input type="text" id="subject" name="subject" required>
      </div>

      <div class="form-group">
        <label for="message">Message <span class="required">(required)</span></label>
        <textarea id="message" name="message" rows="6" required></textarea>
      </div>

      <div class="form-group">
        <div class="h-captcha" data-sitekey="f3daf6a4-fe6c-4090-ba50-1810dd7210cc"></div>
      </div>

      <button type="submit" class="submit-button" data-submit-text="Send Message" data-sending-text="Sending...">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
        Send Message
      </button>
    </form>

    <div id="form-status"
         data-success-message="Thank you for your message! I will get back to you soon."
         data-error-message="Oops! There was a problem sending your message. Please try again.">
    </div>
  </div>
</div>
