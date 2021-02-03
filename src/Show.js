import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Redirect } from "react-router-dom";

import "./App.css";

class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (!this.props.posts) {
      return (
        <div className="post mt-3">
          <h1>Posts:</h1>{" "}
        </div>
      );
    }
    if(this.state.redirect) {
       return (<Redirect to={`/show/${this.state.redirect}`} />)
    }
    return (
      <div className="post mt-3">
        <h1>Posts:</h1>
        {this.props.posts.map((post) => (
          <Card key={post.id} className="text-center w-100 m-3">
            <Card.Header>{post.title}</Card.Header>
            <Card.Body>
              <Card.Text>{post.message} </Card.Text>
              <Link  to={{ pathname: `/show/${post.id}`, state: post }}>
                Read full article
              </Link>
            </Card.Body>
            <Card.Footer className="text-muted d-flex flex-nowrap justify-content-between">
              <Card.Text>
                {" "}
                {post.user} wrote at {post.time}
              </Card.Text>

              <div className="inline">
               <Link to={{ pathname: `/edit/${post.id}`, state: post }}>  <Button variant="light" className="btn-sm">
                  <FaEdit />
                </Button> </Link>
                <Button
                  variant="light"
                  className="btn-sm"
                  onClick={this.props.deletePost.bind(this, post.id)}
                >
                  <FaTrash />
                </Button>
              </div>
            </Card.Footer>
          </Card>
        ))}
      </div>
    );
  }
}

export default Show;
