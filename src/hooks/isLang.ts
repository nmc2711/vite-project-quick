export default {
  isHangle: (str: string) => {
    if (typeof str !== 'string' || str.length === 0) {
      return false;
    }

    const hanglePatt = /[\u3130-\u318F\uAC00-\uD7AF]/g

    return hanglePatt.test(str)
  },
  isEnglish: (str: string) => {
    if (typeof str !== 'string' || str.length === 0) {
      return false;
    }

    const englishPatt = /[a-zA-Z]/g

    return englishPatt.test(str)
  }
}