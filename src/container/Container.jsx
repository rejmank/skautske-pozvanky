import React, { useReducer, useRef } from 'react';
import styled from 'styled-components';
import Layout from '../layout/layout';
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
width 45rem;
@media print {
      display: none;
}`;
const ContainerStyled = styled.div`
  padding-left: 1em;
  padding-right: 1em;
`;

const PrintOnly = styled.div`
  display: none;
  @media print {
    display: block;
  }
`;

const Container = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const componentRef = useRef();
  return (
    <div>
      <Header />
      <ContainerStyled>
        <Layout
          left={
            <div>
              <Invitation things={state.things} texts={state.texts} ref={componentRef} />
              <PrintOnly>
                <Invitation things={state.things} texts={state.texts} ref={componentRef} />
              </PrintOnly>
            </div>
          }
          right={
            <RightSideStyled>
              <Controls things={state.things} dispatch={dispatch} inputs={state.texts} />
            </RightSideStyled>
          }
        />
      </ContainerStyled>
    </div>
  );
};

export default Container;
