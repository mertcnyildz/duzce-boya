const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');

toggle?.addEventListener('click', () => {
  const open = header.classList.toggle('menu-open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Menüyü kapat' : 'Menüyü aç');
});

document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.remove('menu-open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

// Google Ads/Analytics kurulduğunda dönüşüm olayları bu isimlerle yakalanabilir.
function trackConversion(eventName) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, { method: eventName === 'phone_call_click' ? 'phone' : 'whatsapp' });
  }
}

document.querySelectorAll('.track-call').forEach((link) => link.addEventListener('click', () => trackConversion('phone_call_click')));
document.querySelectorAll('.track-whatsapp').forEach((link) => link.addEventListener('click', () => trackConversion('whatsapp_click')));
