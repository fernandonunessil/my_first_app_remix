import { NavLink } from "@remix-run/react";
import React from "react";
import LogOut from "~/routes/_auth+/logout";

export default function Header() {
  return (
    <div className="p-5 w-full bg-dark_yellow px-16">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-zinc-700 text-2xl font-semibold">Profession Hub</h1>
        </div>
        <div>
          <div className="w-8 h-8  rounded-full">
            <NavLink to="/logout">Sair</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}