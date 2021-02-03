import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { deletePost } from "./utils.js";
import { Redirect, useLocation } from "react-router-dom";

function Article({ createPost, deletePost, idCount, posts }) {
  const [redirect, setRedirect] = useState(false)
  let location = useLocation();
  let findId = +location.pathname.slice(-1);
  let post = posts.filter((el) => el.id === findId);

  const deleteHandler = (e) => {
    e.preventDefault();
    deletePost(post[0].id);
    setRedirect(true);
    console.log(post[0].id.toString());
  };

  if (redirect) {
    return <Redirect to="/show" />;
  }
  return (
    <div className="post mt-3">
      <h1>{post[0].title}</h1>
      <Card key={post[0].id} className="text-center w-100 m-3">
        <Card.Body>
          <Card.Text>{post[0].message}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Card.Text>
            {" "}
            {post[0].user} wrote at {post[0].time}
          </Card.Text>

          <div>
            <Link
              to={{
                pathname: `/edit/${post[0].id}`,
              }}
            >
              {" "}
              <Button variant="primary" className="btn-sm">
                Edit
              </Button>{" "}
            </Link>
            <Button className="mx-2 btn-sm" variant="danger" onClick={deleteHandler}>
              Delete
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Article;
