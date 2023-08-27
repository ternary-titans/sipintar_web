import axios from "axios";

export default axios.create({
  // https://sipintar-api.fly.dev/api
  // http://localhost:3000/api
  baseURL: "https://sipintar-api.fly.dev/api",
});
