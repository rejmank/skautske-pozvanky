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
  max-height: 70%;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  margin-left: 1rem;
  margin-right: 1rem;
`;

const Thing = ({ thing }) => {
  return (
    <ThingsStyled>
      <StandardText fontSize="1rem" color="rgb(154, 21, 143)">
        ☐ {thing.name}
      </StandardText>
    </ThingsStyled>
  );
};

Thing.propTypes = {
  thing: PropTypes.shape({
    name: PropTypes.string
  })
};

Thing.defaultProps = {
  thing: {
    name: ''
  }
};

export default Thing;
