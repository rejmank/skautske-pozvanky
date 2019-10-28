import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Flexed = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  align-items: flex-end;
  justify-content: space-between;
`;

const Layout = React.memo(({ left, right }) => {
  return (
    <Flexed>
      <div>{left}</div>
      <div>{right}</div>
    </Flexed>
  );
});

Layout.propTypes = {
  left: PropTypes.element.isRequired,
  right: PropTypes.element.isRequired
};

export default Layout;
