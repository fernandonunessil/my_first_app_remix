import type { LinksFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

import styles from "./tailwind.css";
import { getAllUsers } from "api/user";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

// export const loader = async () => {
//   const userInfo = await getAllUsers();

//   return json(userInfo);
// };

export default function App() {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-light_yellow">
        <div className="flex">
          <div className="w-[13%]">
            <nav className="bg-medium_yellow h-screen">
              <ul className="p-2">
                <li className="p-2 bg-dark_yellow rounded my-2">Usuario</li>
                <li className="p-2 bg-dark_yellow rounded my-2">Usuario</li>
                <li className="p-2 bg-dark_yellow rounded my-2">Usuario</li>
                <li className="p-2 bg-dark_yellow rounded my-2">Usuario</li>
                <li className="p-2 bg-dark_yellow rounded my-2">Usuario</li>
                <li className="p-2 bg-dark_yellow rounded my-2">Usuario</li>
                <li className="p-2 bg-dark_yellow rounded my-2">Usuario</li>
              </ul>
            </nav>
          </div>
          <div className="w-full">
            <Outlet />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
          </div>
        </div>
      </body>
    </html>
  );
}
