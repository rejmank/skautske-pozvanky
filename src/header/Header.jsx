import React from 'react';
import styled from 'styled-components';
import { BigText, StandardText } from '../styled/Styled';

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding-left: 0.3rem;
  box-shadow: rgba(0, 0, 0, 0.75) 0px 2px 5px 0px;
  font-family: skautbold, sans-serif;
  font-weight: normal;
  background-color: #a0067d;
  @media print {
    display: none;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  width: 90em;
  align-items: baseline;
  justify-content: center;
  margin: auto;
`;

const AStyled = styled.a`
  color: white;
  text-decoration: none;
  padding-left: 1em;
`;

const Header = () => {
  return (
    <HeaderStyled>
      <HeaderContainer>
        <BigText color="white">Generátor pozvánek</BigText>
      </HeaderContainer>
    </HeaderStyled>
  );
};

export default Header;
