export function collectUserInfo() {
   // TODO: privacy policy??
   const userInfo = {
      userAgent: navigator.userAgent,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      browserLanguage: navigator.language,
      referrer: document.referrer,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
   };

   return userInfo;
}
