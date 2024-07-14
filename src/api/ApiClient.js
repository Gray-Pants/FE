import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://localhost:8080/api", // 백엔드 서버 주소
});
