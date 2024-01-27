import React from "react";
import type { ActionFunctionArgs } from "@remix-run/node";
import { Form } from "@remix-run/react";
import locker from "public/locker.png";
import TextField from "~/components/inputs/text";
import BasicButton from "~/components/buttons/basicButton";
import { authenticator } from "utils/auth.server";

export async function action({ request }: ActionFunctionArgs) {
  return await authenticator.authenticate("form", request, {
    successRedirect: "/home",
    failureRedirect: "/login"
  });
}

export default function login() {
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div className="flex items-center">
      <div className="grid justify-center items-center w-3/4 h-screen">
        <img src={locker} alt="Locker icon" />
      </div>
      <div className="w-1/4 bg-dark_yellow h-screen py-4">
        <div className="text-center">
          <h2 className="text-2xl text-semibold">Login</h2>
        </div>
        <div className="p-2">
          <Form method="POST">
            <div className="py-4">
              <TextField
                label="Usuario/Email"
                type="text"
                htmlFor="email"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </div>
            <div className=" py-4">
              <TextField
                label="Senha"
                type="password"
                htmlFor="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-center py-4">
              <BasicButton title="Entrar" typeBtn="submit" />
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
