import React, { useState } from "react";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { deletePost, addStorage, updateId, getDateTime } from "./utils.js";
import { Redirect, useLocation } from "react-router-dom";

// class Edit extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { redirect: false };
//   }
//   handleChange = (key, e) => {
//     this.setState({
//       [key]: e.target.value,
//     });
//   };

//   handleCancelBtn = (e) => {
//     e.preventDefault();
//     this.setState({ redirect: true });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     let dateTime = getDateTime();
//     const newPost = [
//       {
//         user: this.state.user,
//         title: this.state.title,
//         message: this.state.content,
//         id: this.props.idCount,
//         time: dateTime,
//       },
//     ];
//     this.props.editPost(this.props.idCount, newPost);

//     this.setState({ redirect: true });
//   };

//   componentDidMount() {
//   }
//   render() {
//     const style = {
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       alignItems: "center",
//       height: "300px",
//       background: "#E8ECEF",
//       color: "#202528",
//     };
//     if (this.state.redirect) {
//       return <Redirect to="/show" />;
//     }
//     return (
//       <div style={style}>
//         <h1 className="mb-4">Edit</h1>
//         <Form className="w-75">
//           <Form.Label htmlFor="title" srOnly>
//             Username
//           </Form.Label>
//           <InputGroup className="mb-2 w-100">
//             <InputGroup.Prepend>
//               <InputGroup.Text>Title</InputGroup.Text>
//             </InputGroup.Prepend>
//             <FormControl
//               required
//               id="title"
//               onChange={this.handleChange.bind(this, "title")}
//               defaultValue={this.state.title}
//             />
//           </InputGroup>

//           <InputGroup>
//             <InputGroup.Prepend>
//               <InputGroup.Text>Content</InputGroup.Text>
//             </InputGroup.Prepend>
//             <FormControl
//               required
//               as="textarea"
//               aria-label="content"
//               onChange={this.handleChange.bind(this, "content")}
//               defaultValue={this.state.content}
//             />
//           </InputGroup>

//           <InputGroup className="d-flex justify-content-center">
//             <Button
//               variant="danger"
//               type="submit"
//               className="mt-3 mr-5"
//               onClick={this.handleCancelBtn}
//             >
//               Cancel
//             </Button>

//             <Button
//               variant="success"
//               type="submit"
//               className="mt-3"
//               onClick={this.handleSubmit}
//             >
//               Save
//             </Button>
//           </InputGroup>
//         </Form>
//       </div>
//     );
//   }
// }

// export default Edit;

function Edit({editPost, idCount, posts}) {
  
  let location = useLocation();
  let id = +location.pathname.slice(-1);
  let post = posts.filter(el => el.id === id);

  const [redirect, setRedirect] = useState(false);
  const [title, setTitle] = useState(post[0].title);
  const [message, setMessage] = useState(post[0].message);

  
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeMsg = (e) => {
    setMessage(e.target.value);
  };

  const handleCancelBtn = (e) => {
    e.preventDefault();
    setRedirect(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let dateTime = getDateTime();
    const newPost = [
      {
        user: post.user,
        title: title,
        message: message,
        id: id,
        time: dateTime,
      },
    ];
    editPost(id, newPost);

    setRedirect(true)
    console.log(post[0])
  };

  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "300px",
    background: "#E8ECEF",
    color: "#202528",
  };
  if (redirect) {
    return <Redirect to="/show" />;
  }
  return (
    <div style={style}>
      <h1 className="mb-4">Edit</h1>
      <Form className="w-75">
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
            onChange={handleChangeTitle}
            defaultValue={post[0].title}
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
            onChange={handleChangeMsg}
            defaultValue={post[0].message}
          />
        </InputGroup>

        <InputGroup className="d-flex justify-content-center">
          <Button
            variant="danger"
            type="submit"
            className="mt-3 mr-5"
            onClick={handleCancelBtn}
          >
            Cancel
          </Button>

          <Button
            variant="success"
            type="submit"
            className="mt-3"
            onClick={handleSubmit}
          >
            Save
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
}

export default Edit;
