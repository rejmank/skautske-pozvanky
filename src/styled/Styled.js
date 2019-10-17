import styled from 'styled-components';

const H1 = styled.h1`
  color: ${props => (props.color ? props.color : '#2d2d30')};
`;

const BigText = styled.h3`
  font-size: 1.8em;
  color: ${props => (props.color ? props.color : '#2d2d30')};
  font-style: ${props => (props.type ? props.type : 'normal')};
`;

const StandardText = styled.div`
  font-size: ${props => (props.fontSize ? props.fontSize : '0.8em')};
  color: ${props => (props.color ? props.color : '#2d2d30')};
  font-style: ${props => (props.type ? props.type : 'normal')};
`;

export { H1, BigText, StandardText };
