(function() {
  // Determine base path (for pages in subdirectories if needed)
  const base = '';

  // CSS for nav and mobile menu
  const style = document.createElement('style');
  style.textContent = `
    /* NAV */
    .nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; padding: 0 2.5rem; height: 60px; display: flex; align-items: center; justify-content: space-between; background: rgba(238,234,223,0.97); backdrop-filter: blur(14px); border-bottom: 1px solid var(--border); transition: box-shadow 0.3s; }
    .nav__logo { display: flex; align-items: center; text-decoration: none; cursor: pointer; background: none; border: none; padding: 0; }
    .nav__logo img { height: 40px; width: 40px; object-fit: contain; display: block; }
    .nav__links { display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0; }
    .nav__links a { font-size: 0.875rem; color: var(--muted); text-decoration: none; letter-spacing: 0.02em; transition: color 0.2s; }
    .nav__links a:hover, .nav__links a.active { color: var(--green); }
    .nav__lang { display: flex; gap: 0.375rem; }
    .nav__lang button { background: none; border: none; font-family: 'Inter', sans-serif; font-size: 0.78rem; color: var(--muted); cursor: pointer; padding: 3px 8px; border-radius: 4px; transition: all 0.2s; letter-spacing: 0.04em; }
    .nav__lang button.active, .nav__lang button:hover { background: var(--green); color: #fff; }
    .nav__burger { display: none; flex-direction: column; justify-content: center; gap: 5px; width: 36px; height: 36px; cursor: pointer; padding: 4px; background: none; border: none; }
    .nav__burger span { display: block; width: 22px; height: 2px; background: var(--green); border-radius: 2px; transition: all .25s; transform-origin: center; }
    .nav__burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
    .nav__burger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
    .nav__burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
    @media (max-width: 768px) {
      .nav { padding: 0 1.25rem; }
      .nav__burger { display: flex; }
      .nav__links { display: none !important; }
    }
    /* MOBILE MENU */
    .mob-menu { display: none; position: fixed; top: 60px; left: 0; right: 0; bottom: 0; width: 100%; max-width: 100vw; background: var(--bg); z-index: 99; overflow-y: auto; overflow-x: hidden; padding: 0 0 4rem; }
    .mob-menu.open { display: block; }
    .mob-menu__links { display: flex; flex-direction: column; border-top: 1px solid var(--border); padding: 0 1.5rem; }
    .mob-menu__links a { font-size: 1.05rem; color: var(--text); text-decoration: none; padding: 1rem 0; border-bottom: 1px solid var(--border); transition: color .2s; }
    .mob-menu__links a:hover, .mob-menu__links a.active { color: var(--green); }
    .mob-menu__bottom { padding: 1.5rem 1.5rem 0; display: flex; flex-direction: column; gap: 1rem; }
    .mob-menu__contacts { display: flex; flex-direction: column; gap: .6rem; }
    .mob-menu__contacts a { font-size: .9rem; color: var(--muted); text-decoration: none; }
    .mob-menu__contacts a:hover { color: var(--green); }
    .mob-menu__lang { display: flex; gap: .5rem; }
    .mob-menu__lang button { padding: .5rem 1.25rem; border-radius: 4px; border: 1px solid var(--border); background: none; font-family: 'Inter', sans-serif; font-size: .875rem; color: var(--muted); cursor: pointer; transition: all .2s; }
    .mob-menu__lang button.active { background: var(--green); color: #fff; border-color: var(--green); }
  `;
  document.head.appendChild(style);

  // Current page for active link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  function navLink(href, ru, be) {
    const active = currentPage === href ? ' class="active"' : '';
    return `<li><a href="${href}"${active}>
      <span class="lang-content active" data-lang="ru">${ru}</span>
      <span class="lang-content" data-lang="be">${be}</span>
    </a></li>`;
  }

  function mobLink(href, ru, be) {
    const active = currentPage === href ? ' class="active"' : '';
    return `<a href="${href}"${active}>
      <span class="lang-content active" data-lang="ru">${ru}</span>
      <span class="lang-content" data-lang="be">${be}</span>
    </a>`;
  }

  // Navbar HTML
  const navHTML = `
<nav class="nav">
  <a href="index.html" class="nav__logo" aria-label="Альба — на главную" title="Альба" onclick="window.location.href='index.html'; return false;">
    <img src="logo.png" alt="Альба логотип">
  </a>
  <ul class="nav__links">
    ${navLink('history.html', 'История', 'Гісторыя')}
    ${navLink('hidden-nesvizh.html', 'Несвиж без замка', 'Нясвіж без замка')}
    ${navLink('gallery.html', 'Галерея', 'Галерэя')}
    ${navLink('events.html', 'События', 'Падзеі')}
    ${navLink('volunteer.html', 'Волонтёрам', 'Валанцёрам')}
    ${navLink('how-to-get.html', 'Как добраться', 'Як дабрацца')}
  </ul>
  <div style="display:flex;align-items:center;gap:.75rem;">
    <div class="nav__lang">
      <button class="active" onclick="setLang('ru')">RU</button>
      <button onclick="setLang('be')">BE</button>
    </div>
    <button class="nav__burger" onclick="toggleMob()" aria-label="Меню">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<div id="mob-menu" class="mob-menu">
  <nav class="mob-menu__links">
    ${mobLink('index.html', 'Главная', 'Галоўная')}
    ${mobLink('history.html', 'История', 'Гісторыя')}
    ${mobLink('hidden-nesvizh.html', 'Несвиж без замка', 'Нясвіж без замка')}
    ${mobLink('gallery.html', 'Галерея', 'Галерэя')}
    ${mobLink('events.html', 'События', 'Падзеі')}
    ${mobLink('volunteer.html', 'Волонтёрам', 'Валанцёрам')}
    ${mobLink('how-to-get.html', 'Как добраться', 'Як дабрацца')}
  </nav>
  <div class="mob-menu__bottom">
    <div class="mob-menu__contacts">
      <a href="https://www.instagram.com/alba_neswizh/" target="_blank">Instagram @alba_neswizh</a>
      <a href="https://vk.com/savealba" target="_blank">VK savealba</a>
      <a href="https://t.me/alba_poselok_nesvisz" target="_blank">Telegram</a>
      <a href="tel:+375291984942">+375 29 198-49-42</a>
    </div>
    <div class="mob-menu__lang">
      <button class="active" onclick="setLang('ru');toggleMob()">Русский</button>
      <button onclick="setLang('be');toggleMob()">Беларускі</button>
    </div>
  </div>
</div>`;

  // Inject navbar at top of body
  document.body.insertAdjacentHTML('afterbegin', navHTML);

  // Close mobile menu on outside click
  document.addEventListener('click', function(e) {
    var m = document.getElementById('mob-menu');
    var b = document.querySelector('.nav__burger');
    if (m && m.classList.contains('open') && !m.contains(e.target) && b && !b.contains(e.target)) {
      m.classList.remove('open');
      b.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  // Restore language from localStorage
  const savedLang = localStorage.getItem('alba-lang');
  if (savedLang && savedLang !== 'ru') {
    setTimeout(function() { if (window.setLang) setLang(savedLang); }, 0);
  }
})();
