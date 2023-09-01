import { API_URL } from "application/constants/app-constants";
import getHeaders from "./getHeaders";

export default function searchUsers(setData, auxData, countPerPage, terms) {
  const config = {
    headers: getHeaders(),
  };

  if (terms !== "") {
    fetch(`${API_URL}/users?name=${terms}`, config)
      .then((response) => response.json())
      .then((data) => {
        const users = auxData ? [...auxData, ...data].flat() : data;
        setData(users);
      })
      .catch((error) => console.error("Error fetching data:", error));
  } else {
    fetch(`${API_URL}/users?page=${countPerPage}?per_page=10?name=${terms}`, config)
      .then((response) => response.json())
      .then((data) => {
        const users = auxData ? [...auxData, ...data].flat() : data;
        setData(users);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }
}
