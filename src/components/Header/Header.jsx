import React from "react";
import "./Header.css";
import { HeaderLogo, HeaderRightImg, HeaderSearchIcon } from "../export_img";
import styled from "styled-components";
import { Link } from "react-router-dom";


const StyledHeader = styled.header`
  padding: 12px 100px;
  display: flex;
  align-items: center;
  max-width: 100%;
  height: 72px;
  border: var(--border);
`;

export default function Header() {
  return (
    <StyledHeader className="header">
      <div className="headerleft">
        <Link to='/'>
          <img src={HeaderLogo} alt="logo header" className="headerleft_logo" />
        </Link>
        <form>
          <img src={HeaderSearchIcon} alt="icon" />
        </form>
      </div>
      <div className="headerRight">
        <img src={HeaderRightImg} alt="" />
      </div>
    </StyledHeader>
  );
}
