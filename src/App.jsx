import { useEffect, useState } from 'react';
import Button from './component/Button';
import Header from './component/Header';
import ThemeProvider from './context/ThemeContext';

function App() {
  const [heading, setHeading] = useState('heading');
  const [footer, setFooter] = useState('footer');

  useEffect(() => {
    console.log('Re-render');
  }, [heading, footer]);

  return (
    <>
      <ThemeProvider>
        <>
          <Button />
          <Header />
        </>
      </ThemeProvider>
      <button
        onClick={() => {
          setHeading(heading + '1');
        }}
      >
        Button1
      </button>
      <button
        onClick={() => {
          setFooter(footer + '1');
        }}
      >
        Button
      </button>
      <div> {heading}</div>
      <div> {footer}</div>
    </>
  );
}

export default App;
