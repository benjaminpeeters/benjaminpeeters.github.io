---
layout: page.njk
title: 联系
lang: zh
permalink: /zh/contact/
---

<div class="contact-container">
<div class="contact-header">

# 联系方式

我一直对研究合作、气候影响研究或其他专业咨询感兴趣。欢迎通过以下表单与我联系。
{.contact-intro}

</div>

<div class="contact-content">

<div class="contact-info-section">

## 工作地址

Potsdam Institute for Climate Impact Research (PIK)
Telegrafenberg A 31
14473 Potsdam
德国

---

如有代码相关问题或疑问，请通过 [GitHub](https://github.com/benjaminpeeters) 与我联系。

</div>

<div class="contact-form-wrapper">

## 发送消息

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

        <button type="submit" class="submit-button">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
          发送消息
        </button>
      </form>

      <div id="form-status" style="display:none; margin-top: 1rem; padding: 1rem; border-radius: 4px;"></div>
    </div>
  </div>
</div>
