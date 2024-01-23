import type { LoaderFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { authenticator } from "utils/auth.server";
import { Outlet } from "@remix-run/react";
import React from "react";

export async function loader({ request }: LoaderFunctionArgs) {
  console.log(request);
  const isAuthenticated = authenticator.isAuthenticated(request);

  if (!isAuthenticated) {
    return redirect("/login");
  }

  return isAuthenticated;
}

export default function layout() {
  return <Outlet />;
}
