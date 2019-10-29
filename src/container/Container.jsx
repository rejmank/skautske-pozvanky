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
@media print {
      display: none;
}`;
const ContainerStyled = styled.div`
  max-width: 90em;
  margin: auto;
  @media (max-width: 1400px) {
    max-width: 45em;
  }
`;

const PrintOnly = styled.div`
  display: none;
  @media print {
    display: block;
  }
`;

const ColoredBackground = styled.div`
  background-color: #f2f2f2;
  height: 100vh;
`;

const Buttons = styled.div`
  text-align: center;
  padding-bottom: 3rem;
  padding-top: 2em @media print {
    display: none;
  }
`;

const Button = styled.button`
  border-radius: 8.53px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 1.2em;
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 15px;
  border: none;
  background-color: ${props => (props.color ? props.color : '#333333')};
  color: white;
`;

const Container = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const componentRef = useRef();
  return (
    <ColoredBackground>
      <Header />
      <ContainerStyled>
        <Layout
          left={
            <div>
              <Invitation
                bw={state.bw}
                things={state.things}
                texts={state.texts}
                ref={componentRef}
              />
              <Buttons>
                <Button
                  onClick={() =>
                    dispatch({
                      type: 'switchToBw'
                    })
                  }
                >
                  Černobílá verze
                </Button>
                <Button color={'#008836'} onClick={() => window.print()}>
                  Dokončit
                </Button>
              </Buttons>
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
    </ColoredBackground>
  );
};

export default Container;
