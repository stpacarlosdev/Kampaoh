import { BASE_URL } from "application/constants/app-constants";

export default function getFullLinks(rawLinks) {
  return Object.keys(rawLinks).reduce((acc, k) => {
    acc[k] = `${BASE_URL}${rawLinks[k]}`;
    return acc;
  }, {});
}
