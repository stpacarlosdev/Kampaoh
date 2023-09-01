import { AUTH_TOKEN } from "application/constants/app-constants";
import { mergeRight } from "ramda";

export default function getHeaders() {
  const localeHeader = { "Accept-language": getLocaleForHeaders() };
  const authToken = { Authorization: AUTH_TOKEN };

  const requiredHeaders = mergeRight(authToken, localeHeader);

  return requiredHeaders;
}

const getLocaleForHeaders = () => {
  return navigator.language || navigator.userLanguage;
};
