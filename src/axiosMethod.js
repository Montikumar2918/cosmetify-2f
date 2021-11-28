import axios from "axios";

const BASE_URL = "https://cosemetify.herokuapp.com/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
