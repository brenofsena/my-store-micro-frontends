import React, { useState, useEffect } from "react";
import AsyncLoader from "../asyncLoader";
import Logo from "../logo";
import * as S from "./styles";

const Cart = React.lazy(() => import('checkout/Cart'));

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);

  const handleFixedHeader = () => 
    (!isFixed && window.pageYOffset > 20) ? setIsFixed(true) : setIsFixed(false);

  useEffect(() => {
    window.addEventListener('scroll', handleFixedHeader);
    return () => window.removeEventListener('scroll', handleFixedHeader);
  }, []);


  return (
    <AsyncLoader>
      <S.Navbar isFixed={isFixed}>
        <S.Wrapper>
          <Logo />
          <Cart />
        </S.Wrapper>
      </S.Navbar>
    </AsyncLoader>
  );
};

export default Navbar;