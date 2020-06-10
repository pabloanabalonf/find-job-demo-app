import React from'react';
import styled from'styled-components/native';

const Separator = styled.View`
  border-top-width: 2px;
  border-top-color: ${props => props.color};
`;

export default ({color}) => <Separator color={color || '#4c4c4c'} />;