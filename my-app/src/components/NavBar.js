import React from "react";
import { LinksDiv, Links, Nav, Logo } from "../styles/StyledComponents";

function NavBar() {
  return (
    <Nav>
      <Logo>
        <Links to="/home">Home</Links>
      </Logo>
      <LinksDiv>
        <Links to="/">Log In</Links>
        <Links to="/signup">Sign Up</Links>
      </LinksDiv>
    </Nav>
  );
}

export default NavBar;
