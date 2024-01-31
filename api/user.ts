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
  console.log("teste");

  return new Promise((resolve, reject) => {
    api
      .post("http://localhost:8080/login", user)
      .then(({ data }) => {
        console.log(data);
        resolve(data);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};
