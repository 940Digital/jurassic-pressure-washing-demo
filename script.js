(function () {
  var header = document.getElementById('siteHeader');
  var sprayFill = document.getElementById('sprayFill');

  function onScroll() {
    if (header) header.classList.toggle('solid', window.scrollY > 40);
    if (sprayFill) {
      var doc = document.documentElement;
      var scrolled = window.scrollY;
      var max = doc.scrollHeight - window.innerHeight;
      var pct = max > 0 ? Math.min(100, (scrolled / max) * 100) : 0;
      sprayFill.style.height = pct + '%';
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var navToggle = document.getElementById('navToggle');
  var navClose = document.getElementById('navClose');
  var mobileNav = document.getElementById('mobileNav');
  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', function () {
      mobileNav.classList.add('open');
      navToggle.setAttribute('aria-expanded', 'true');
    });
  }
  if (navClose && mobileNav) {
    navClose.addEventListener('click', function () {
      mobileNav.classList.remove('open');
      navToggle && navToggle.setAttribute('aria-expanded', 'false');
    });
  }
  if (mobileNav) {
    mobileNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { mobileNav.classList.remove('open'); });
    });
  }

  var form = document.getElementById('contactForm');
  var status = document.getElementById('formStatus');
  if (form && status) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      status.textContent = 'This is a preview site — the form isn\'t wired up yet. Call or text (913) 909-7010 directly for now.';
    });
  }
})();
