import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';

const StyledButton = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: lightblue;
  }
`;

const Button = () => {
  const context = useContext(ThemeContext);
  const { changeTheme, theme } = context;
  return (
    <StyledButton
      style={{
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      onClick={() => {
        changeTheme(() => {
          if (theme === 'light') {
            return 'dark';
          }
          return 'light';
        });
      }}
    >
      {theme === 'light' ? 'Light' : 'Dark'}
    </StyledButton>
  );
};

export default Button;
