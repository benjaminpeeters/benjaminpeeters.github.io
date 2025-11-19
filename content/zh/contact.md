---
title: 联系
type: page
---

## 联系方式

我欢迎问题、合作机会以及有关研究的讨论。请使用下面的表单向我发送消息，或通过列出的渠道联系。

### 机构地址

波茨坦气候影响研究所（PIK）
研究部门：转型路径
Telegrafenberg A 31
14473 Potsdam, 德国

网站：[www.pik-potsdam.de](https://www.pik-potsdam.de/en/home)

### 专业资料

- ORCID: [0000-0002-5095-2021](https://orcid.org/0000-0002-5095-2021)
- [Google Scholar](https://scholar.google.com/citations?user=ACbL7v0AAAAJ)
- [GitHub](https://github.com/benjaminpeeters)
- [LinkedIn](https://www.linkedin.com/in/benjamin-peeters)

### 代码和技术问题

对于与代码相关的问题、错误报告或与我的存储库有关的技术问题，请在 [GitHub](https://github.com/benjaminpeeters) 上开启一个议题。这有助于保持公开记录，并使其他人能够从讨论中受益。

---

## 发送消息

<form class="contact-form" id="contact-form" method="POST" action="https://formspree.io/f/manlrveb">
  <div class="form-group">
    <label for="name">姓名 <span class="required">(必填)</span></label>
    <input type="text" id="name" name="name" required aria-required="true" aria-label="您的姓名">
  </div>

  <div class="form-group">
    <label for="email">电子邮件 <span class="required">(必填)</span></label>
    <input type="email" id="email" name="email" required aria-required="true" aria-label="您的电子邮件地址">
  </div>

  <div class="form-group">
    <label for="subject">主题 <span class="required">(必填)</span></label>
    <input type="text" id="subject" name="subject" required aria-required="true" aria-label="消息主题">
  </div>

  <div class="form-group">
    <label for="message">消息 <span class="required">(必填)</span></label>
    <textarea id="message" name="message" rows="6" required aria-required="true" aria-label="您的消息"></textarea>
  </div>

  <div class="form-group">
    <div class="h-captcha" data-sitekey="f3daf6a4-fe6c-4090-ba50-1810dd7210cc"></div>
  </div>

  <button type="submit">发送消息</button>
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
      submitButton.textContent = '发送中...';

      try {
        const formData = new FormData(form);
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          formStatus.className = 'form-status success';
          formStatus.textContent = '谢谢！您的消息已成功发送。';
          formStatus.style.display = 'block';
          form.reset();
          if (typeof hcaptcha !== 'undefined') { hcaptcha.reset(); }
        } else {
          const data = await response.json();
          formStatus.className = 'form-status error';
          formStatus.textContent = data.error || '糟糕！发送消息时出现问题。请重试。';
          formStatus.style.display = 'block';
        }
      } catch (error) {
        formStatus.className = 'form-status error';
        formStatus.textContent = '糟糕！发送消息时出现问题。请重试。';
        formStatus.style.display = 'block';
      } finally {
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
      }
    });
  }
});
</script>
