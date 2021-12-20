export const decodeHtmlEntity = str =>
  str
    .replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec))
    .replace('&amp;', '&')
