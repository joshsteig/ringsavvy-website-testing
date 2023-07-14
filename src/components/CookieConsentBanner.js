import React, { useState } from 'react';
import CookieConsent from 'react-cookie-consent';
import Cookies from 'js-cookie';

const CookieConsentBanner = () => {
  const [cookiesEnabled, setCookiesEnabled] = useState(Cookies.get('cookiesEnabled'));

  const handleToggleCookies = () => {
    const enabled = !cookiesEnabled;
    setCookiesEnabled(enabled);
  
    if (enabled) {
      // User has enabled cookies
      Cookies.set('cookiesEnabled', 'true');
    } else {
      // User has disabled cookies
      Cookies.remove('cookiesEnabled');
  
      // Remove any existing cookies
      const allCookies = Cookies.get();
      Object.keys(allCookies).forEach((cookieName) => {
        Cookies.remove(cookieName, { sameSite: 'Strict' });
      });
    }
  };

  return (
    <CookieConsent
      location="bottom"
      buttonText={cookiesEnabled ? 'Disable Cookies' : 'Enable Cookies'}
      onAccept={handleToggleCookies}
    >
      This website uses cookies to ensure you get the best experience.{' '}
      {cookiesEnabled ? 'Cookies are enabled.' : 'Cookies are disabled.'}
    </CookieConsent>
  );
};

export default CookieConsentBanner;