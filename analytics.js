(function () {
  var YANDEX_METRIKA_ID = "108811891";
  var GOOGLE_ANALYTICS_ID = "";

  if (YANDEX_METRIKA_ID) {
    (function (m, e, t, r, i, k, a) {
      m[i] = m[i] || function () {
        (m[i].a = m[i].a || []).push(arguments);
      };
      m[i].l = 1 * new Date();
      for (var j = 0; j < e.scripts.length; j++) {
        if (e.scripts[j].src === r) {
          return;
        }
      }
      k = e.createElement(t);
      a = e.getElementsByTagName(t)[0];
      k.async = 1;
      k.src = r;
      a.parentNode.insertBefore(k, a);
    })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js?id=" + YANDEX_METRIKA_ID, "ym");

    window.ym(Number(YANDEX_METRIKA_ID), "init", {
      ssr: true,
      clickmap: true,
      ecommerce: "dataLayer",
      referrer: document.referrer,
      url: location.href,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true
    });
  }

  if (GOOGLE_ANALYTICS_ID) {
    var gtagScript = document.createElement("script");
    gtagScript.async = true;
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(GOOGLE_ANALYTICS_ID);
    document.head.appendChild(gtagScript);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", GOOGLE_ANALYTICS_ID);
  }
})();
