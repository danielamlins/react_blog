import "./App.css";
import { Link } from "react-router-dom";

function Nav({ posts }) {
  const linkStyle = {
    marginRight: "30px",
    textDecoration: "none",
    color: "#007BFE",
  };
  const navStyle = {
    height: "8vh",
    minHeight: "40px",
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    background: "rgb(243, 242, 242)",
  };

  const ulStyle = {
    width: "60%",
    margin: "0",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    listStyleType: "none",
  };

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <Link style={linkStyle} to="/">
          <li>Home </li>
        </Link>
        <Link
          style={linkStyle}
          to={{
            pathname: "/create",
            state: {posts: posts},
          }}
        >
          <li>Create a Post </li>
        </Link>
        <Link style={linkStyle} to="/show">
          <li>Show Current Posts</li>
        </Link>
      </ul>
    </nav>
  );
}
export default Nav;
