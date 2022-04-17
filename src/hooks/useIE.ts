function isIE() {
  const ua = navigator.userAgent.toLowerCase();
  return (navigator.appName === 'Netscape' && ua.indexOf('trident') !== -1) || ua.indexOf('msie') !== -1;
}

export default isIE;