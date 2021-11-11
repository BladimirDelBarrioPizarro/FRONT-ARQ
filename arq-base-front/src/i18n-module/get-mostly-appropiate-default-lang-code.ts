interface MatchObj {
  [key: string]: {
    default: string
    availables?: string[]
  }
}
type t = (userLang: string | null, availableLanguages: MatchObj) => string

const getMostlyAppropiateLangCode: t = (userLang, availableLanguages) => {
  const defaultLang = availableLanguages[availableLanguages.default.default].default
  if (userLang === null) {
    return defaultLang
  }

  const language = userLang.slice(0, 2)
  if (availableLanguages[language] === undefined) {
    return defaultLang
  }

  let languageSelected = availableLanguages[language].default
  availableLanguages[language].availables.forEach(match => {
    if (match.toLowerCase() === userLang.toLowerCase()) {
      languageSelected = match
    }
  })

  return languageSelected
}

export { getMostlyAppropiateLangCode }
