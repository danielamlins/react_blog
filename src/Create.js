import React from "react";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { deletePost, addStorage, getDateTime } from "./utils.js";
import { Redirect } from "react-router-dom";


class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {redirect: false}
    // this.state = this.props.location.state;
  }
  handleChange = (key, e) => {
    this.setState({
      [key]: e.target.value.toString(),
    });
  };

  handleSubmit = (e) => {
    // e.preventDefault();
    let id = this.props.idCount + 1;
    let dateTime = getDateTime();
    const newPost = [
      {
        user: this.state.user,
        title: this.state.title,
        message: this.state.content,
        id: id,
        time: dateTime,
      },
    ];
    this.props.createPost(newPost);

    this.setState({redirect: true})
  };


  render() {
    const style = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "300px",
      background: "#E8ECEF",
      color: "#202528",
    };
    if(this.state.redirect){
      return (<Redirect to="/show" />)
    }

    return (
      <div style={style}>
        <h1 className="mb-4">Create a Post</h1>
        <Form onSubmit={this.handleSubmit} className="w-75">
          <Form.Label htmlFor="username" srOnly>
            Username
          </Form.Label>
          <InputGroup className="mb-2 w-100">
            <InputGroup.Prepend>
              <InputGroup.Text>Username</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              required
              id="username"
              onChange={this.handleChange.bind(this, "user")}
            />
          </InputGroup>

          <Form.Label htmlFor="title" srOnly>
            Username
          </Form.Label>
          <InputGroup className="mb-2 w-100">
            <InputGroup.Prepend>
              <InputGroup.Text>Title</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              required
              id="title"
              onChange={this.handleChange.bind(this, "title")}
            />
          </InputGroup>

          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>Content</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              required
              as="textarea"
              aria-label="content"
              onChange={this.handleChange.bind(this, "content")}
            />
          </InputGroup>

          <Button
            variant="success"
            type="submit"
            className="mt-3"
            // onClick={this.handleSubmit}
          >
            Create a Post
          </Button>
        </Form>
      </div>
    );
  }
}


export default Create;
