import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://192.168.100.211:8080/api", // 백엔드 서버 주소
});
