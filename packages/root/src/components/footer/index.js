import React from "react";
import Logo from "../logo";
import * as S from "./styles";

const Footer = () => {
  return (
    <S.Footer>
      <S.Wrapper>
        <Logo />
        <S.Copyright data-testid="copyright">
          © {new Date().getFullYear()} Your Store - Todos os direitos reservados.
        </S.Copyright>
      </S.Wrapper>
    </S.Footer>
  );
};

export default Footer;