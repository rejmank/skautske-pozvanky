import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const OuptutText = styled.div`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-size: ${props => {
    switch (props.type) {
      case 'standard':
        return '1eem';
      case 'header':
        return '1.2em';
      case 'footer':
        return '1em';
      default:
        return '1em';
    }
  }};
  font-style: ${props => {
    switch (props.type) {
      case 'standard':
        return 'normal;';
      case 'header':
        return 'normal';
      case 'footer':
        return 'italic';
      default:
        return 'normal';
    }
  }};
  color: ${props => (props.color ? props.color : '#2d2d30')};
`;

const Text = ({ type, color, text, markdown }) => {
  return (
    <OuptutText props={{ color, type }}>
      {markdown ? <ReactMarkdown source={text} /> : text}
    </OuptutText>
  );
};

export default Text;
