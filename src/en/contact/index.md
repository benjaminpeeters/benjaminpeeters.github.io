---
layout: page.njk
title: Contact
lang: en
permalink: /en/contact/
---

<div class="contact-container">
  <div class="contact-header">
    <h1>I'd love to hear from you!</h1>
    <p class="contact-intro">Have a question, collaboration idea, or just want to connect? Feel free to reach out using the form below or through my social channels.</p>
  </div>

  <div class="contact-content">
    <div class="contact-info-simple">
      <a href="mailto:benjaminpeeters@protonmail.com" class="contact-link">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
        benjaminpeeters@protonmail.com
      </a>
      <span class="contact-separator">|</span>
      <a href="tel:+32496399505" class="contact-link">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
        +32 496 399 505
      </a>
    </div>

    <div class="contact-form-wrapper">
      <h2>Send a Message</h2>

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

        <button type="submit" class="submit-button">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
          Send Message
        </button>
      </form>

      <div id="form-status" style="display:none; margin-top: 1rem; padding: 1rem; border-radius: 4px;"></div>
    </div>
  </div>
</div>
