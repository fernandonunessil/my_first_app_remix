import { api } from "./api";

export const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    api
      .get("/getAllUsers")
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {});
  });
};
