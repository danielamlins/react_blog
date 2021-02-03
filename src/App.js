import "./App.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "./Nav";
import Home from "./Home";
import Create from "./Create";
import Show from "./Show";
import Article from "./Article";
import Edit from "./Edit";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        // { user: "1", title: "1", message: "1", id: 1 },
        // { user: "2", title: "2", message: "2", id: 2 },
      ],
      idCount: 2,
    };
  }

  createPost = (newPost) => {
    this.setState((state) => ({
      posts: [...newPost, ...state.posts],
      idCount: state.idCount + 1,
    }));
  };

  deletePost = (id) => {
    let newState = this.state.posts.filter((el) => el.id !== id);
    console.log(newState);
    this.setState({ posts: newState });
  };

  editPost = (id, newPost) => {
    this.deletePost(id);
    this.createPost(newPost);
  };
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav posts={this.state} />
          <Route path="/" exact component={Home} />
          <Route
            path="/create"
            render={(props) => (
              <Create
                createPost={this.createPost}
                posts={this.state.posts}
                idCount={this.state.idCount}
              />
            )}
          />
          <Route
            path="/show"
            exact
            render={(props) => (
              <Show
                createPost={this.createPost}
                deletePost={this.deletePost}
                posts={this.state.posts}
                idCount={this.state.idCount}
              />
            )}
          />
          <Route
            path="/show/:id"
            render={(props) => (
              <Article
                createPost={this.createPost}
                deletePost={this.deletePost}
                posts={this.state.posts}
                idCount={this.state.idCount}
              />
            )}
          />
          <Route
            path="/edit/:id"
            render={(props) => (
              <Edit
                editPost={this.editPost}
                posts={this.state.posts}
                idCount={this.state.idCount}
              />
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
