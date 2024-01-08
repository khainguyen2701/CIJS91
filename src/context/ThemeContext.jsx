/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';

/**
 * Bước 1: Mình phải tạo 1 con text với hook createContext
 * Bước 2 Khi tạo xong context thì mình phải tạo 1 Provider
 * Provider => store nơi lưu trữ dữ liệu (state)
 *  điều kiện (Phải có context, phải có provider)
 */

export const ThemeContext = createContext();
// const GlobalStateContext = createContext()

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const handleChangeTheme = (value) => {
    setTheme(value);
  };

  //   const handleRemoveTodo = (id) => {
  //     // logic xoá todo list
  //   };

  //   const handleSaveTodo = (id) => {
  //     // logic xoá todo list
  //   };
  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        changeTheme: handleChangeTheme,
        age: 29,
        name: 'mindx',
        // deleteTodo: handleRemoveTodo,
      }}
    >
      <div
        style={{
          height: '500px',
          backgroundColor: theme === 'light' ? '#beedca' : '#1E1E1E',
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
