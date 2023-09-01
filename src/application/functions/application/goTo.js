import replaceLinkParams from "./replaceLinkParams";

export default function goTo(history, link, params) {
  if (params) {
    history.push(replaceLinkParams(link, params));
  } else {
    history.push(link);
  }
}
