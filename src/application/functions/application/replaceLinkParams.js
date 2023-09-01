import { replace } from "ramda";

export default function replaceLinkParams(link, params) {
  return Object.keys(params).reduce((acc, k) => {
    return replace(k, params[k], acc);
  }, link);
}
