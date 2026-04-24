(function() {
  const style = document.createElement('style');
  style.textContent = `
    footer { background: #1a2918; padding: 4rem 2.5rem 2.5rem; color: rgba(245,242,235,0.55); }
    .footer__inner { max-width: 1100px; margin: 0 auto; }
    .footer__top { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 3rem; padding-bottom: 3rem; border-bottom: 1px solid rgba(255,255,255,0.08); margin-bottom: 2rem; }
    .footer__logo { font-family: 'Arkhip', sans-serif; font-size: 1.4rem; color: #F5F2EB; margin-bottom: 0.75rem; display: block; }
    .footer__about { font-size: 0.85rem; line-height: 1.7; max-width: 320px; }
    .footer__heading { font-size: 0.72rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--accent); margin-bottom: 1.25rem; font-weight: 500; }
    .footer__links { list-style: none; display: flex; flex-direction: column; gap: 0.6rem; padding: 0; margin: 0; }
    .footer__links a { font-size: 0.875rem; color: rgba(245,242,235,0.55); text-decoration: none; transition: color 0.2s; }
    .footer__links a:hover { color: #F5F2EB; }
    .footer__bottom { display: flex; justify-content: space-between; align-items: center; font-size: 0.78rem; }
    .footer__social { display: flex; gap: 1rem; }
    .footer__social a { color: rgba(245,242,235,0.4); text-decoration: none; font-size: 0.8rem; transition: color 0.2s; }
    .footer__social a:hover { color: var(--accent); }
    @media (max-width: 1024px) { .footer__top { grid-template-columns: 1fr 1fr; } }
    @media (max-width: 768px) {
      .footer__top { grid-template-columns: 1fr; gap: 2rem; }
      .footer__bottom { flex-direction: column; gap: 1rem; text-align: center; }
    }
  `;
  document.head.appendChild(style);

  const footerHTML = `
<footer>
  <div class="footer__inner">
    <div class="footer__top">
      <div>
        <span class="footer__logo">Альба</span>
        <p class="footer__about">
          <span class="lang-content active" data-lang="ru">Информационный проект о парке Альба в Несвиже. Цель — рассказать об этом уникальном месте и помочь его восстановлению.</span>
          <span class="lang-content" data-lang="be">Інфармацыйны праект пра парк Альба ў Нясвіжы. Мэта — расказаць пра гэтае унікальнае месца і дапамагчы яго аднаўленню.</span>
        </p>
      </div>
      <div>
        <p class="footer__heading">
          <span class="lang-content active" data-lang="ru">Страницы</span>
          <span class="lang-content" data-lang="be">Старонкі</span>
        </p>
        <ul class="footer__links">
          <li><a href="index.html"><span class="lang-content active" data-lang="ru">Главная</span><span class="lang-content" data-lang="be">Галоўная</span></a></li>
          <li><a href="history.html"><span class="lang-content active" data-lang="ru">История</span><span class="lang-content" data-lang="be">Гісторыя</span></a></li>
          <li><a href="hidden-nesvizh.html"><span class="lang-content active" data-lang="ru">Несвиж без замка</span><span class="lang-content" data-lang="be">Нясвіж без замка</span></a></li>
          <li><a href="volunteer.html"><span class="lang-content active" data-lang="ru">Волонтёрам</span><span class="lang-content" data-lang="be">Валанцёрам</span></a></li>
          <li><a href="how-to-get.html"><span class="lang-content active" data-lang="ru">Как добраться</span><span class="lang-content" data-lang="be">Як дабрацца</span></a></li>
        </ul>
      </div>
      <div>
        <p class="footer__heading">
          <span class="lang-content active" data-lang="ru">Соцсети</span>
          <span class="lang-content" data-lang="be">Сацсеткі</span>
        </p>
        <ul class="footer__links">
          <li><a href="https://www.instagram.com/alba_neswizh/" target="_blank">Instagram @alba_neswizh</a></li>
          <li><a href="https://vk.com/savealba" target="_blank">VK savealba</a></li>
          <li><a href="https://t.me/alba_poselok_nesvisz" target="_blank">Telegram</a></li>
          <li><a href="tel:+375291984942">+375 29 198-49-42</a></li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <span>
        <span class="lang-content active" data-lang="ru">© 2025 Парк Альба, Несвиж. Волонтёрский проект.</span>
        <span class="lang-content" data-lang="be">© 2025 Парк Альба, Нясвіж. Валанцёрскі праект.</span>
      </span>
      <div class="footer__social">
        <a href="https://www.instagram.com/alba_neswizh/" target="_blank">Instagram</a>
        <a href="https://vk.com/savealba" target="_blank">VK</a>
        <a href="https://t.me/alba_poselok_nesvisz" target="_blank">Telegram</a>
      </div>
    </div>
  </div>
</footer>`;

  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // Re-apply language after footer is injected
  const savedLang = localStorage.getItem('alba-lang');
  if (savedLang) {
    setTimeout(function() { if (window.setLang) setLang(savedLang); }, 50);
  }
})();
