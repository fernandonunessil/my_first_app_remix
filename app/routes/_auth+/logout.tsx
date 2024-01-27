import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import { sessionStorage } from "../../../utils/session.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );

  console.log(session);

  if (session.has("userId")) {
    await sessionStorage.destroySession(session, { request });
  }

  return redirect("/login");
};

export default function LogOut() {
  return <p>Saindo</p>;
}
