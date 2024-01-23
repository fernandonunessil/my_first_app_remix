import {
  redirect,
  type LoaderFunctionArgs,
  type MetaFunction
} from "@remix-run/node";

export const loader = async () => {
  return redirect("/home");
};

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
