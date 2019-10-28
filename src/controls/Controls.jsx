import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
                type={input.type}
                action={dispatch}
                header={input.name}
                id={input.id}
                value={input.text}
              />
            );
          })}
        </div>
      }
    />
  );
};

Controls.propTypes = {
  things: PropTypes.arrayOf({
    name: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    selected: PropTypes.bool.isRequired
  }).isRequired,
  inputs: PropTypes.arrayOf({}).isRequired,
  dispatch: PropTypes.func.isRequired
};

export default Controls;
