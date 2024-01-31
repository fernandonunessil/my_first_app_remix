import React from "react";

import { redirect, LoaderFunctionArgs } from "@remix-run/node";
import { authenticator } from "utils/auth.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const isAuthenticated = await authenticator.isAuthenticated(request);

  console.log(!isAuthenticated);

  if (!isAuthenticated) {
    return redirect("/login");
  }

  return redirect("/home");
};

export default function index() {
  return <div></div>;
}
