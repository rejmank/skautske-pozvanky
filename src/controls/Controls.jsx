import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Layout from '../layout/layout';
import SelectThing from './SelectThing/SelectThing';
import InputBox from './InputBox/inputBox';

const Controls = ({ things, inputs, dispatch }) => {
  const [input, setInput] = useState('');
  return (
    <Layout
      right={
        <div>
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
        </div>
      }
      left={
        <div>
          {inputs.map(input => {
            return <InputBox action={dispatch} header="Test" id={input.id} value={input.value} />;
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
