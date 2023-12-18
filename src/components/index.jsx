import React from 'react';
import styled from 'styled-components';

const Styled = styled.div`
  color: red;
`;

const Test = (props) => {
  return <Styled>{props.name}</Styled>;
};

export default Test;
