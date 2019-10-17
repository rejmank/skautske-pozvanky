import React from 'react';
import propTypes from 'prop-types';
import { BigText } from '../../styled/Styled';

const InputBox = ({ action, header, id, value }) => {
  return (
    <>
      <BigText>{header}</BigText>
      <input
        onChange={e => {
          action({
            type: 'changeText',
            value: { value: e.target.value, id }
          });
        }}
        value={value}
      />
    </>
  );
};

export default InputBox;
