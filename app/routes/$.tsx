import { NavLink } from "@remix-run/react";
import React from "react";

export default function $() {
  return (
    <div>
      <h1>This routes dont exists</h1>{" "}
      <NavLink to={"/"}>Return to home page</NavLink>
    </div>
  );
}
