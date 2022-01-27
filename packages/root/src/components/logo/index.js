import React from "react";
import * as S from "./styles";
import MyStoreLogo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <S.Wrapper>
      <Link to="/">
        <img src={MyStoreLogo} width={120} />
      </Link>
    </S.Wrapper>
  );
};

export default Logo;