import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SelectThingStyled = styled.div`
  display: flex;
`;

const SelectThing = ({ name, action, id, selected }) => {
  return (
    <div>
      <SelectThingStyled>
        <input
          type="checkbox"
          value={selected}
          onClick={() => action({ type: 'changeSelected', id })}
        />
        <h1>{name}</h1>
      </SelectThingStyled>
    </div>
  );
};

SelectThing.propTypes = {
  name: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired
};

export default SelectThing;
