import { LoginParams, User } from "types/api/user/type";
import { api } from "./api";

export const getAllUsers = () => {
  return new Promise<User[]>((resolve, reject) => {
    api
      .get("/getAllUsers")
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {});
  });
};

export const Login = (user: LoginParams) => {
  return new Promise((resolve, reject) => {
    api
      .post("http://localhost:8080/login", user)
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
