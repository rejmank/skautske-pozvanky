import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SelectThing from './SelectThing/SelectThing';
import InputBox from './InputBox/inputBox';

const ControlsStyled = styled.div`
  margin: 1rem;
  width: 45rem;
`;

const Controls = ({ things, inputs, dispatch }) => {
  const [input, setInput] = useState('');
  return (
    <ControlsStyled>
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
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: 'addThing',
            name: input
          })
        }
      >
        +
      </button>
      {inputs.map(input => {
        return <InputBox action={dispatch} header="Test" id={input.id} value={input.value} />;
      })}
    </ControlsStyled>
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
