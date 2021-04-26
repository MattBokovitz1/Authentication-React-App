import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: "https://localhost:5000",
    headers: {
      authorization: localStorage.getItem("token"),
    },
  });
};

export default axiosWithAuth;
