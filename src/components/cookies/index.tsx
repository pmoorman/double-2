// src/components/CookiesConsent.js
import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';

const CookiesConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const isConsentGiven = localStorage.getItem('cookies-consent');
    if (!isConsentGiven) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookies-consent', 'true');
    setShowConsent(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookies-consent', 'false');
    setShowConsent(false);
  };

  return (
    <>
      {!showConsent && (
        <div className={styles.cookiesConsent}>
          <h4>Oh, cookies!</h4>
          <p>
            Just like a good recipe, our website uses cookies to enhance your visit.
            Rest assured, they’re entirely digital & calorie-free!
          </p>
          <div className={styles.buttons}>
            <button className={styles.consent} onClick={handleAccept}>
              I consent
            </button>
            <button className={styles.reject} onClick={handleReject}>
              I do not consent
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CookiesConsent;
