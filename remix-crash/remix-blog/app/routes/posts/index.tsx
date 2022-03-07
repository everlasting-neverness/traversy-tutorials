import { useLoaderData, Link } from "remix";
import { db } from "~/utils/db.server";

// loader runs on the server side
export const loader = async () => {
  const data = {
    posts: await db.post.findMany({
      take: 20,
      select: { id: true, title: true, createdAt: true },
      orderBy: { createdAt: 'desc' },
    })
  }
  return data;
}

function PostItems() {
  const { posts } = useLoaderData();

  return (
    <>
    <div className="page-header">
      <h1>Posts</h1>
      <Link to="/posts/new" className="btn">
        New Post
      </Link>
    </div>
    <ul className="posts-list">
      {posts.map((p: any, index: number) => (
        <li key={p.id}>
          <Link to={p.id}>
            <h3>{p.title}</h3>
            {new Date(p.createdAt).toLocaleString()}
          </Link>
        </li>
      ))}
    </ul>
    </>
  )
}

export default PostItems