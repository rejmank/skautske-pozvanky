import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const BaseText = styled.div`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  color: ${props => (props.color ? props.color : '#2d2d30')};
`;
const HeaderText = styled.h1`
  font-family: skautbold, sans-serif;
  font-weight: normal;
  font-size: 1.2em;
`;
const FooterText = styled.div`
  font-style: italic;
`;

const get = (type, markdown, text) => {
  switch (type) {
    case 'header':
      return <HeaderText> {markdown ? <ReactMarkdown source={text} /> : text}</HeaderText>;
      break;
    case 'normal':
      return <> {markdown ? <ReactMarkdown source={text} /> : text}</>;
      break;
    case 'footer':
      return <FooterText> {markdown ? <ReactMarkdown source={text} /> : text}</FooterText>;
      break;
    default:
      break;
  }
};

const Text = ({ type, color, text, markdown }) => {
  return <BaseText color={color}>{get(type, markdown, text)}</BaseText>;
};

Text.propTypes = {
  type: propTypes.oneOf(['header', 'normal', 'footer']).isRequired,
  color: propTypes.string,
  text: propTypes.string,
  markdown: propTypes.bool
};

Text.defaultProps = {
  color: null,
  text: '',
  markdown: false
};
// markdown ? <ReactMarkdown source={text} /> : text
export default Text;
