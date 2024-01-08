import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  const context = useContext(ThemeContext);
  return <div>Header + {context.theme}</div>;
};

export default Header;
