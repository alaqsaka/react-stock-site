import React from "react";
import styled from "styled-components";
import Icon from "../assets/logo.svg";

const Navbar = () => {
  return (
    <NavbarConainter>
      <NavbarWrap>
        <Nav>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/">MARKET</NavLink>
          <NavLink to="/">TRADE</NavLink>
          <NavLink to="/">PRICING</NavLink>
          <NavLink to="/">DOWNLOAD</NavLink>
          <NavLink to="/">HELP</NavLink>
        </Nav>
        <Search>
          <SearchWrap>
            <Input type="text" placeholder="Symbol/Name" />
          </SearchWrap>
        </Search>
        <ButtonContainer>
          <Button>SIGN UP</Button>
          <Button>LOG IN</Button>
        </ButtonContainer>
      </NavbarWrap>
    </NavbarConainter>
  );
};

export default Navbar;
