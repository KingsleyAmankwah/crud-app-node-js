import axios from "axios";

const API_URL = axios.create({ baseURL: "http://localhost:8000" });

const createUser = async (userData) => {
  const response = await API_URL.post("/api/users/", userData);

  return response.data;
};

const getUsers = async () => {
  const response = await API_URL.get("/api/users/getUsers");

  return response.data;
};

const getUser = async (userId) => {
  const response = await API_URL.get(`/api/users/getUser/${userId}`);

  return response.data;
};

const deleteUser = async (userId) => {
  const response = await API_URL.delete(`/api/users/${userId}`);
  return response.data;
};

const userService = {
  createUser,
  getUsers,
  getUser,
  deleteUser,
};

export default userService;
