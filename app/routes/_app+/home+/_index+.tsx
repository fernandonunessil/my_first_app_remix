import React from "react";
import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import { NavLink, Outlet } from "@remix-run/react";

// auth
import { authenticator } from "utils/auth.server";

// //Components
import Header from "../../../components/Header/Header";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const isAuthenticated = await authenticator.isAuthenticated(request);

  if (!isAuthenticated) {
    return redirect("/login");
  }

  return null;
};

export default function index() {
  return (
    <div>
      <Header />
      <main className="py-6 text-lg w-full text-center">
        <h2 className="text-6xl">Bem-Vindos</h2>
        <p className="px-16 py-4 text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          doloremque, totam, corrupti quo molestias facere inventore, quam
          explicabo veniam quasi deserunt? Porro possimus debitis numquam ullam
          odit at beatae praesentium? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Omnis rem tempore aspernatur, laborum minus atque.
          Tempore eligendi quod fuga voluptates necessitatibus? Deleniti dolorem
          blanditiis nihil voluptatum recusandae eum tenetur accusamus? Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
          molestiae, incidunt nostrum nisi autem expedita assumenda magnam
          facilis. Quo facere neque, odit animi dolor facilis adipisci quibusdam
          molestiae incidunt autem!
        </p>
        <p className="px-16 py-4 text-right">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          doloremque, totam, corrupti quo molestias facere inventore, quam
          explicabo veniam quasi deserunt? Porro possimus debitis numquam ullam
          odit at beatae praesentium? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Omnis rem tempore aspernatur, laborum minus atque.
          Tempore eligendi quod fuga voluptates necessitatibus? Deleniti dolorem
          blanditiis nihil voluptatum recusandae eum tenetur accusamus? Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
          molestiae, incidunt nostrum nisi autem expedita assumenda magnam
          facilis. Quo facere neque, odit animi dolor facilis adipisci quibusdam
          molestiae incidunt autem!
        </p>
        <NavLink to="/professionals"><div className="p-4 bg-dark_yellow w-1/2 mx-auto rounded hover:shadow-lg">Procurar Profissionais</div></NavLink>
      </main>
      <footer></footer>
    </div>
  );
}
