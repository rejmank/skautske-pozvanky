import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StandardText } from '../../styled/Styled';
import Checkbox from 'react-bounce-checkbox';

const SelectThingStyled = styled.div`
  display: flex;
  padding-top: 0.5em;
`;

const SelectThing = ({ name, action, id, selected }) => {
  return (
    <div>
      <SelectThingStyled>
        <Checkbox
          textClassName="bouncechk__text"
          text={<StandardText fontSize="1.2em">{name}</StandardText>}
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
