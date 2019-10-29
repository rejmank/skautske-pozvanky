import React, { useState } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Layout from '../layout/layout';
import SelectThing from './SelectThing/SelectThing';
import InputBox from './InputBox/inputBox';
import { BigText } from '../styled/Styled';

const Padding = styled.div`
  padding-left: 2em;
`;

const StyledInput = styled.input`
  height: 3rem;
  border: none;
  margin: 0px;
  padding: 0px;
  padding-left: 5px;
  font-size: 1.2em;
  border-radius: 4px;
`;

const StyledButton = styled.button`
  background-color: white;
  height: 3rem;
  width: 2em;
  border-left: none;
  border-top: none;
  border-bottom: none;
  border-right: 1px solid #999999;
  font-size: 1.5em;
  border-radius: 4px;
`;
const Adder = styled.div`
  height: 3rem;
  margin-top: 5px;
  border: 1px solid #999999;
  backgroud-color: #dddddd;
  display: flex;
  border-radius: 4px;
`;

const Controls = ({ things, inputs, dispatch }) => {
  const [input, setInput] = useState('');
  return (
    <Layout
      right={
        <Padding>
          <BigText>Seznam potřeb</BigText>
          {things.map(thing => {
            return (
              <SelectThing
                key={thing.id}
                name={thing.name}
                id={thing.id}
                action={dispatch}
                selected={thing.selected}
              />
            );
          })}
          <Adder>
            <StyledButton
              type="button"
              onClick={() =>
                dispatch({
                  type: 'addThing',
                  name: input
                })
              }
            >
              +
            </StyledButton>
            <StyledInput value={input} onChange={e => setInput(e.target.value)} />
          </Adder>
        </Padding>
      }
      left={
        <div>
          {inputs.map(input => {
            return (
              <InputBox
                key={input.id}
                type={input.type}
                action={dispatch}
                header={input.name}
                id={input.id}
                text={input.text}
              />
            );
          })}
        </div>
      }
    />
  );
};

Controls.propTypes = {
  things: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      action: propTypes.func,
      id: propTypes.number.isRequired,
      selected: propTypes.bool.isRequired
    })
  ).isRequired,
  inputs: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      text: propTypes.string.isRequired,
      color: propTypes.string.isRequired,
      type: propTypes.oneOf(['header', 'normal', 'footer']),
      name: propTypes.string.isRequired,
      markdown: propTypes.bool
    })
  ).isRequired,
  dispatch: propTypes.func.isRequired
};

export default Controls;
