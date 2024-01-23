import { Authenticator, AuthorizationError } from "remix-auth";
import { sessionStorage } from "./session.server";
import { FormStrategy } from "remix-auth-form";
import { Login } from "api/user";

const sessionSecret = process.env.SESSION_SECRET;

if (!sessionSecret) {
  throw new Error("session secret is required");
}

const authenticator = new Authenticator<any>(sessionStorage, {
  sessionKey: "accessToken"
});



authenticator.use(
  new FormStrategy(async ({ form }) => {
    const email = form.get("email");
    const password = form.get("password");
    let user = await Login({ email: email, password: password });

    console.log(user);

    return user.accessToken;
  }),
  "form"
);


export { authenticator };
