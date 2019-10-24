import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Checkbox from 'react-bounce-checkbox';

const SelectThingStyled = styled.div`
  display: flex;
  padding-left: 4em;
`;

const SelectThing = ({ name, action, id, selected }) => {
  return (
    <div>
      <SelectThingStyled>
        <Checkbox
          textClassName="bouncechk__text"
          text={name}
          modifierClass="purple"
          checked={selected}
          onChange={() => {
            action({ type: 'changeSelected', id });
          }}
        />
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
