import React from "react";

function Home() {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "200px",
    background: "#E8ECEF",
    color: "#202528",
  };

  return (
    <div style={style}>
      <h1>Welcome to our blog site</h1>
    </div>
  );
}

export default Home;
