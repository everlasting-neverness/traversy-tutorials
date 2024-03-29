import { Link, redirect, ActionFunction, useActionData, json } from "remix";
import { db } from "~/utils/db.server";

function validateTitle(title?: string) {
  if (!title || typeof title !== 'string' || title.length < 3) {
    return 'Title should be at least 3 chars long';
  }
}

function validateBody(body?: string) {
  if (!body || typeof body !== 'string' || body.length < 10) {
    return 'Body should be at least 10 chars long';
  }
}

function badRequest(data: any) {
  return json(data, { status: 400 });
}

// runs only on the server side
export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const title = form.get('title') as string;
  const body = form.get('body') as string;

  const fields = { title, body };

  const fieldErrors = {
    title: validateTitle(title),
    body: validateBody(body),
  }

  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({ fieldErrors, fields });
  }

  const post = await db.post.create({ data: fields as any });

  return redirect(`/posts/${post.id}`);
}

function NewPost() {
  const actionData = useActionData();

  return (
    <>
      <div className="page-header">
        <h1>New Post</h1>
        <Link to="/posts" className="btn btn-reverse">
          Back
        </Link>
      </div>
      <div className="page-content">
        <form method="POST">
          <div className="form-control">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" defaultValue={actionData?.fields?.title} />
            <div className="error">
              <p>{actionData?.fieldErrors?.title ? (actionData?.fieldErrors?.title) : null}</p>
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="body">Post Body</label>
            <textarea name="body" id="body" defaultValue={actionData?.fields?.body} />
            <div className="error">
              <p>{actionData?.fieldErrors?.body ? (actionData?.fieldErrors?.body) : null}</p>
            </div>
          </div>
          <button type="submit" className="btn btn-block">
            Add Post
          </button>
        </form>
      </div>
    </>
  )
}

export default NewPost;