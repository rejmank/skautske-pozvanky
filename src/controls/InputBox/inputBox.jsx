import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { BigText } from '../../styled/Styled';

const getHeight = type => {
  switch (type) {
    case 'header':
      return 3;
    case 'normal':
      return 12;
    default:
      return 3;
  }
};

const TextArea = styled.textarea`
  resize: none;
  width: 25em;
  color: #333333;
  border-radius: 4px;
  padding: 5px;
  height: ${props => (props.type ? getHeight(props.type) : '1.5')}em;
`;
const InputBox = ({ action, header, id, text, type }) => {
  return (
    <>
      <BigText>{header}</BigText>
      <TextArea
        type={type}
        onChange={e => {
          action({
            type: 'changeText',
            value: { value: e.target.value, id }
          });
        }}
        value={text}
      />
    </>
  );
};

InputBox.propTypes = {
  action: propTypes.func,
  header: propTypes.string.isRequired,
  id: propTypes.number.isRequired,
  text: propTypes.string,
  type: propTypes.oneOf(['header', 'normal', 'footer']).isRequired
};

InputBox.defaultProps = {
  action: () => {},
  text: ''
};

export default InputBox;
