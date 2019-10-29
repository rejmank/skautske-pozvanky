import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { StandardText } from '../../styled/Styled';

const ThingsStyled = styled.div`
  max-width: 50%;
  display: flex;
  font-size: 1rem;
  display: flex;
  flex-flow: column wrap;
  max-height: 80%;
  justify-content: space-between;
`;

const Thing = ({ thing, bw }) => {
  return (
    <ThingsStyled>
      <StandardText fontSize="1rem" color={bw ? '#535355' : '#9a158f'}>
        ☐ {thing.name}
      </StandardText>
    </ThingsStyled>
  );
};

Thing.propTypes = {
  thing: PropTypes.shape({
    name: PropTypes.string
  }),
  bw: PropTypes.bool
};

Thing.defaultProps = {
  thing: {
    name: ''
  },
  bw: false
};

export default Thing;
