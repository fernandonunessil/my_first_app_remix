import {
  redirect,
  type LoaderFunctionArgs,
  type MetaFunction
} from "@remix-run/node";

import PrLogotype from "public/PH.png";
import { authenticator } from "utils/auth.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Profession Hub" },
    { name: "description", content: "Welcome to Remix!" }
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Rota privada</h1>
    </div>
  );
}
