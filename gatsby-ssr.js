import React from 'react';

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  setHeadComponents([
    <meta name='msvalidate.01' content='93412F300B0C82D98FEFE579669661BA' />,
    <script
      type='text/javascript'
      key='gtm'
      dangerouslySetInnerHTML={{
        __html: `
        (function (w, d, s, l, i) {
          w[l] = w[l] || [];
          w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
          var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != 'dataLayer' ? '&l=' + l : '';
          j.async = true;
          j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
          f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-MPT49DQ');
        `,
      }}
    />,
    <script
      type='text/javascript'
      key='taboola'
      dangerouslySetInnerHTML={{
        __html: `
        window._tfa = window._tfa || [];
        window._tfa.push({notify: 'event', name: 'page_view', id: 1276144});
        !function (t, f, a, x) {
          if (!document.getElementById(x)) {
            t.async = 1;t.src = a;t.id=x;f.parentNode.insertBefore(t, f);
          }
        }(document.createElement('script'),
        document.getElementsByTagName('script')[0],
        '//cdn.taboola.com/libtrc/unip/1276144/tfa.js',
        'tb_tfa_script');
        `,
      }}
    />,
    <noscript
      key='taboola_noscript'
      dangerouslySetInnerHTML={{
        __html: `<img src='https://trc.taboola.com/1276144/log/3/unip?en=page_view' width='0' height='0' style='display:none' />`,
      }}
    />,
  ]);

  setPostBodyComponents([
    <script
      async
      src='https://www.googletagmanager.com/gtag/js?id=UA-69982381-8'
    />,
    <script
      type='text/javascript'
      key='ga'
      dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'UA-69982381-8');
        `,
      }}
    />,
    <script
      type='text/javascript'
      dangerouslySetInnerHTML={{
        __html: `
        window._mfq = window._mfq || [];
        (function() {
          var mf = document.createElement("script");
          mf.type = "text/javascript"; mf.async = true;
          mf.src = "//cdn.mouseflow.com/projects/862ae4a5-e979-4db0-8e2b-e3e42db9c527.js";
          document.getElementsByTagName("head")[0].appendChild(mf);
        })();
        `,
      }}
    />,
    <script src='//scripts.iconnode.com/53231.js' />,
  ]);
};
