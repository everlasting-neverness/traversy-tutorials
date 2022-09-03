import {
  useLoaderData,
  ActionFunction,
  useActionData,
  json,
  Link,
  redirect,
} from "remix";
import { db } from "~/utils/db.server";
import { login, createUserSession } from "~/utils/session.server";

function validateUserName(username?: string) {}

function validatePassword(password?: string) {}

function badRequest(data: any) {
  return json(data, { status: 400 });
}

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const loginType = form.get("loginType") as string;
  const username = form.get("username") as string;
  const password = form.get("password") as string;

  const fields = { loginType, username, password };
  const fieldErrors = {
    username: validateUserName(username),
    password: validatePassword(password),
  };

  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({ fieldErrors, fields });
  }

  switch(loginType) {
    case "login":
      const user = await login({ username, password });
      if (!user) {
        return badRequest({
          fields,
          fieldErrors: {
            username: "Invalid credentials",
          }
        });
      }
      return createUserSession(user.id, '/posts');
    case "register":

    default:
      return badRequest({
        fields,
        formError: "Login type is not valid",
      })
  }
};

function Login() {
  const actionData = useActionData();

  return (
    <div className="auth-container">
      <div className="page-header">
        <h1>Login</h1>
        <Link to="/" className="btn btn-reverse">
          Back
        </Link>
      </div>
      <div className="page-content">
        <form method="POST">
          <fieldset>
            <legend>Login or Register</legend>
            <label>
              <input
                type="radio"
                name="loginType"
                value="login"
                defaultChecked={
                  !actionData?.fields?.loginType ||
                  actionData?.fields?.loginType === "login"
                }
              />{" "}
              Login
            </label>
            <label>
              <input type="radio" name="loginType" value="register" /> Register
            </label>
          </fieldset>
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              defaultValue={actionData?.fields?.username}
            />
            <div className="error">
              {actionData?.fieldErrors?.username &&
                actionData.fieldErrors.username}
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              defaultValue={actionData?.fields?.password}
            />
            <div className="error">
              {actionData?.fieldErrors?.password &&
                actionData.fieldErrors.password}
            </div>
          </div>
          <button type="submit" className="btn btn-block">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
