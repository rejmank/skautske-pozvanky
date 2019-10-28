import React from 'react';
import styled from 'styled-components';
import { BigText } from '../styled/Styled';

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
const Header = () => {
  return (
    <HeaderStyled>
      <BigText color="white">Generátor pozvánek</BigText>
    </HeaderStyled>
  );
};

export default Header;
