import React, { useReducer, useRef } from 'react';
import styled from 'styled-components';
import ReactToPrint from 'react-to-print';
import initialState from '../../assets/typeOne';
import Header from '../header/Header';
import Invitation from '../invitation/Invitation';
import Controls from '../controls/Controls';
import reducer from '../reducers/reducer';

const RightSideStyled = styled.div`
display: flex;
margin-top: 1rem;
margin-right 1rem;
margin-left: 1rem;
margin-bottom: 1rem;
width 45rem;`;
const ContainerStyled = styled.div`
  display: flex;
  flex-wrap: reverse;
  align-items: flex-end;
  padding-left: 1em;
  padding-right: 1em;
`;

const Print = styled.div`
  display: none;
`

const Container = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const componentRef = useRef();
  return (
    <div>
      <Header />
      <ContainerStyled>
        <div>
          <Invitation things={state.things} texts={state.texts} ref={componentRef} />
        </div>
        <RightSideStyled>
          <Controls things={state.things} dispatch={dispatch} inputs={state.texts} />
        </RightSideStyled>
      </ContainerStyled>
    </div>
  );
};

export default Container;
