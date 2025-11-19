---
title: Contact
type: page
---

## Entrer en Contact

Je suis ouvert aux questions, aux opportunités de collaboration et aux discussions sur la recherche. Utilisez le formulaire ci-dessous pour m'envoyer un message, ou connectez-vous via les canaux répertoriés.

### Adresse Institutionnelle

Institut de Potsdam pour la Recherche sur l'Impact Climatique (PIK)
Département de Recherche: Transformation Pathways
Telegrafenberg A 31
14473 Potsdam, Allemagne

Site web: [www.pik-potsdam.de](https://www.pik-potsdam.de/en/home)

### Profils Professionnels

- ORCID: [0000-0002-5095-2021](https://orcid.org/0000-0002-5095-2021)
- [Google Scholar](https://scholar.google.com/citations?user=ACbL7v0AAAAJ)
- [GitHub](https://github.com/benjaminpeeters)
- [LinkedIn](https://www.linkedin.com/in/benjamin-peeters)

### Questions sur le Code et Aspects Techniques

Pour les questions liées au code, les rapports de bugs ou les problèmes techniques avec mes dépôts, veuillez ouvrir une issue sur [GitHub](https://github.com/benjaminpeeters). Cela permet de conserver un historique public et permet à d'autres de bénéficier de la discussion.

---

## Envoyer un Message

<form class="contact-form" id="contact-form" method="POST" action="https://formspree.io/f/manlrveb">
  <div class="form-group">
    <label for="name">Nom <span class="required">(obligatoire)</span></label>
    <input type="text" id="name" name="name" required aria-required="true" aria-label="Votre nom">
  </div>

  <div class="form-group">
    <label for="email">Email <span class="required">(obligatoire)</span></label>
    <input type="email" id="email" name="email" required aria-required="true" aria-label="Votre adresse email">
  </div>

  <div class="form-group">
    <label for="subject">Sujet <span class="required">(obligatoire)</span></label>
    <input type="text" id="subject" name="subject" required aria-required="true" aria-label="Sujet du message">
  </div>

  <div class="form-group">
    <label for="message">Message <span class="required">(obligatoire)</span></label>
    <textarea id="message" name="message" rows="6" required aria-required="true" aria-label="Votre message"></textarea>
  </div>

  <div class="form-group">
    <div class="h-captcha" data-sitekey="f3daf6a4-fe6c-4090-ba50-1810dd7210cc"></div>
  </div>

  <button type="submit">Envoyer le Message</button>
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
      submitButton.textContent = 'Envoi en cours...';

      try {
        const formData = new FormData(form);
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          formStatus.className = 'form-status success';
          formStatus.textContent = 'Merci! Votre message a été envoyé avec succès.';
          formStatus.style.display = 'block';
          form.reset();
          if (typeof hcaptcha !== 'undefined') { hcaptcha.reset(); }
        } else {
          const data = await response.json();
          formStatus.className = 'form-status error';
          formStatus.textContent = data.error || 'Oups! Un problème est survenu lors de l\'envoi de votre message. Veuillez réessayer.';
          formStatus.style.display = 'block';
        }
      } catch (error) {
        formStatus.className = 'form-status error';
        formStatus.textContent = 'Oups! Un problème est survenu lors de l\'envoi de votre message. Veuillez réessayer.';
        formStatus.style.display = 'block';
      } finally {
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
      }
    });
  }
});
</script>
