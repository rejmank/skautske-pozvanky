/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styled from 'styled-components';
import propTypes, { arrayOf } from 'prop-types';
import Thing from './Thing/Thing';
import tvar from '../../assets/tvar.svg';
import tvarBw from '../../assets/tvarbw.svg';
import logo from '../../assets/logo_color.svg';
import logobw from '../../assets/logo_bw.svg';
import Text from './text/text';

const CardStyled = styled.div`
  display: flex;
  border: 2px solid ${props => (props.bw ? '#152469' : '#535355')};
  -webkit-print-color-adjust: exact;
  height: 480px;
  width: 640px;
  position: relative;
  padding: 1rem 1rem 0.7rem;
  margin-left: 1rem;
  background-color: white;
}
`;

const LeftStyled = styled.div`
  width: 40%;
  margin-top: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;
`;

const RightStyled = styled.div`
  background-image: url(${props => (props.bw ? tvarBw : tvar)});
  background-size: contain;
  background-repeat: no-repeat;
  width: 45%;
  padding: 1.3rem;
  margin-top: 1.5rem;
`;

const PackHeader = styled.h2`
  font-size: 1.1rem;
  margin-top: 0.2rem;
  margin-bottom: 0.5rem;
  color: ${props => (props.bw ? '#2d2d30' : '#5a2591')};
  text-align: center;
  margin-left: 35%;
  margin-right: 35%;
  font-family: skautbold, sans-serif;
  font-weight: normal;
`;

const Logo = styled.div`
  position: absolute;
  left: 2rem;
  bottom: 1.2rem;
`;

const ThingsContainer = styled.div`
  font-size: 1rem;
  display: flex;
  flex-flow: column wrap;
  max-height: 80%;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  margin-left: 1rem;
  margin-right: 1rem;
`;

// must be class component because of react-to-print

class Invitation extends React.Component {
  render() {
    const { things, texts, bw } = this.props;
    return (
      <>
        <CardStyled>
          <LeftStyled>
            {texts.map(text => {
              return (
                <Text
                  key={text.id}
                  id={text.id}
                  type={text.type}
                  text={text.text}
                  markdown={text.markdown}
                  color={bw ? '#535355' : text.color}
                />
              );
            })}
            <Logo>
              <img style={{ width: '42px' }} src={bw ? logobw : logo} alt="skautske logo" />
            </Logo>
          </LeftStyled>
          <RightStyled bw={bw}>
            <PackHeader bw={bw}> ZABAL SI S SEBOU:</PackHeader>
            <ThingsContainer>
              {things
                .filter(thing => thing.selected)
                .map(thing => {
                  return <Thing key={thing.id} bw={bw} thing={thing} />;
                })}
            </ThingsContainer>
          </RightStyled>
        </CardStyled>
      </>
    );
  }
}

Invitation.propTypes = {
  texts: arrayOf(
    propTypes.shape({
      text: propTypes.string,
      color: propTypes.string,
      colorbw: propTypes.string,
      type: propTypes.oneOf(['header', 'normal', 'footer']),
      markdown: propTypes.bool,
      id: propTypes.number.isRequired
    })
  ).isRequired,
  things: arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      selected: propTypes.bool.isRequired,
      id: propTypes.number.isRequired
    })
  ).isRequired,
  bw: propTypes.bool
};

Invitation.defaultProps = {
  bw: false
};

export default Invitation;
