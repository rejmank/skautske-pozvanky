/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styled from 'styled-components';
import PropTypes, { arrayOf } from 'prop-types';
import Thing from './Thing/Thing';
import tvar from '../../assets/tvar.svg';
import logo from '../../assets/logo_color.svg';
import Text from './text/text';

const CardStyled = styled.div`
  display: flex;
  box-shadow: 1px 1px 10px;
  height: 480px;
  width: 640px;
  position: relative;
  padding: 1rem 1rem 0.7rem;
`;

const LeftStyled = styled.div`
  width: 40%;
  margin-top: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;
`;

const RightStyled = styled.div`
  background-image: url(${tvar});
  background-size: contain;
  background-repeat: no-repeat;
  width: 45%;
  padding: 1.3rem;
  margin-top: 1.5rem;
`;

const PackHeader = styled.h2`
  font-size: 1.1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  color: rgb(90, 37, 145);
  text-align: center;
  margin-left: 25%;
  margin-right: 25%;
`;

const Logo = styled.div`
  position: absolute;
  left: 0px;
  bottom: 1.2rem;
  margin-left: 1rem;
`;

// must be class component because of react-to-print

class Invitation extends React.Component {
  render() {
    const { things, texts } = this.props;
    return (
      <CardStyled>
        <LeftStyled>
          {texts.map(text => {
            return <Text id={text.id} type={text.type} text={text.text} markdown={text.markdown} />;
          })}
          <Logo>
            <img src={logo} alt="skautske logo" />
          </Logo>
        </LeftStyled>
        <RightStyled>
          <PackHeader> ZABAL SI S SEBOU:</PackHeader>
          {things
            .filter(thing => thing.selected)
            .map(thing => {
              return <Thing thing={thing} />;
            })}
        </RightStyled>
      </CardStyled>
    );
  }
}

Invitation.propTypes = {
  texts: arrayOf({
    text: PropTypes.string,
    color: PropTypes.string,
    colorbw: PropTypes.string,
    type: PropTypes.oneOf(['normal', 'bold', 'italic']),
    markdown: PropTypes.bool,
    id: PropTypes.number
  }).isRequired,
  things: arrayOf({
    name: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired
  }).isRequired
};

export default Invitation;
