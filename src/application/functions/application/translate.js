import { has, isEmpty, startsWith, replace, split, endsWith } from "ramda";
import messages from "application/messages";

export default function translate(key) {
  const lang = navigator.language || navigator.userLanguage;

  const appLocale = replace("-", "_", lang.toLowerCase());

  if (!isEmpty(getTranslation(appLocale, key))) {
    return getTranslation(appLocale, key);
  }

  if (startsWith("zh", appLocale)) {
    return getChineseleTranslation(appLocale, key);
  }

  const splittedLocale = split("_", appLocale)[0];

  if (!isEmpty(getTranslation(splittedLocale, key))) {
    return getTranslation(splittedLocale, key);
  }

  if (!isEmpty(getTranslation("en", key))) {
    return getTranslation("en", key);
  }

  return key;
}

function getTranslation(locale, key) {
  if (has(locale, messages)) {
    const translations = messages[locale];
    if (has(key, translations)) {
      const result = translations[key];
      return result;
    }
  }
  return "";
}

function getChineseleTranslation(locale, key) {
  let message = "";
  if (endsWith("hant", locale) || endsWith("hk", locale) || endsWith("tw", locale)) {
    message = getTranslation("zh_tw", key);
  } else {
    message = getTranslation("zh_cn", key);
  }

  if (!isEmpty(message)) {
    return message;
  }

  if (!isEmpty(getTranslation("en", key))) {
    return getTranslation("en", key);
  }
  return key;
}
