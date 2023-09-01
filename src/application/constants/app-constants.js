import variables from "./variables";

export const ENV = process.env.REACT_APP_ENVIRONMENT;

export const typeName = "__typename";

export const BASE_URL = variables[ENV]["baseUrl"];
export const AUTH_TOKEN = variables[ENV]["authToken"];
export const API_URL = variables[ENV]["apiUrl"];
