import React from "react";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null
    };
    fetch("http://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => this.setState({ posts: data }));
  }

  render() {
    const postItems = this.state.posts
      ? this.state.posts.map(post => {
          return (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          );
        })
      : null;
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

export default Posts;
