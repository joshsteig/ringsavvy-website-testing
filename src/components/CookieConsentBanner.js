import React from 'react';
import CookieConsent from 'react-cookie-consent';
const CookieConsentBanner = () => {
  return (
    <CookieConsent
      location='bottom'
      buttonText='Accept'
      declineButtonText='Decline'
      cookieName='cookieConsent'
      enableDeclineButton
    >
      {' '}
      This website uses cookies to enhance the user experience. Accept or
      decline the use of cookies.{' '}
    </CookieConsent>
  );
};
export default CookieConsentBanner;
