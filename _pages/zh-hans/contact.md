---
page_id: contact
layout: page
title: 联系方式
permalink: /contact/
description: 与我联系
nav: true
nav_order: 7
scripts:
  - https://js.hcaptcha.com/1/api.js
  - /assets/js/contact.js
---

<div class="contact-container">
  <div class="contact-header">
    <h2>联系我</h2>
    <p class="contact-intro">
      无论您对我的研究有疑问、希望讨论潜在的合作，
      还是只是想建立联系，我都很乐意听到您的声音。
    </p>
  </div>

  <div class="contact-sections">
    <div class="contact-section">
      <h3>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        办公地址
      </h3>
      <div class="address-block">
        <strong>波茨坦气候影响研究所 (PIK)</strong><br>
        研究部门：转型路径<br>
        Telegrafenberg A 31<br>
        14473 Potsdam<br>
        德国
      </div>
    </div>

    <div class="contact-section">
      <h3>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
        代码与技术问题
      </h3>
      <p>
        对于与代码、软件或技术讨论相关的问题，
        请通过 <a href="https://github.com/benjaminpeeters" target="_blank" rel="noopener noreferrer">GitHub</a> 联系我。
        这有助于保持技术对话的组织性和公开性。
      </p>
    </div>
  </div>

  <div class="contact-form-wrapper">
    <h3>发送消息</h3>
    <form class="contact-form" id="contact-form" method="POST" action="https://formspree.io/f/manlrveb">
      <div class="form-group">
        <label for="name">姓名 <span class="required">(必填)</span></label>
        <input type="text" id="name" name="name" required>
      </div>

      <div class="form-group">
        <label for="email">电子邮件 <span class="required">(必填)</span></label>
        <input type="email" id="email" name="email" required>
      </div>

      <div class="form-group">
        <label for="subject">主题 <span class="required">(必填)</span></label>
        <input type="text" id="subject" name="subject" required>
      </div>

      <div class="form-group">
        <label for="message">消息 <span class="required">(必填)</span></label>
        <textarea id="message" name="message" rows="6" required></textarea>
      </div>

      <div class="form-group">
        <div class="h-captcha" data-sitekey="f3daf6a4-fe6c-4090-ba50-1810dd7210cc"></div>
      </div>

      <button type="submit" class="submit-button" data-submit-text="发送消息" data-sending-text="发送中...">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
        发送消息
      </button>
    </form>

    <div id="form-status"
         data-success-message="感谢您的留言！我会尽快回复您。"
         data-error-message="哎呀！发送消息时出现问题。请重试。">
    </div>
  </div>
</div>
