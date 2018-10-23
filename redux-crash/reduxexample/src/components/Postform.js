import React from "react";

class Postform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    fetch("http://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label>
            <br />
            <input
              name="title"
              type="text"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <br />
          <div>
            <label>Body: </label>
            <br />
            <input
              name="body"
              type="textarea"
              onChange={this.onChange}
              value={this.state.body}
            />
          </div>
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Postform;
