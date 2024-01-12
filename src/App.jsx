import { Link, NavLink, Route, Routes } from 'react-router-dom';
import Layout from './layout';
import About from './page/About';
import Contact from './page/Contact';
import Home from './page/Home';
import { Button } from '@mui/material';
import Phone from './page/Phone';
import Email from './page/Email';
import Gender from './page/Gerder';
import Error from './page/Error';

function App() {
  const defineRouter = [
    { id: '1', path: '/', component: <Home /> },
    { id: '2', path: '/contact', component: <Contact /> },
    { id: '3', path: '/about', component: <About /> },
  ];

  return (
    <Layout>
      <Phone />
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} extract>
            <Route path="phone" element={<Phone />} />
            <Route path="email" element={<Email />} />
            <Route path="gender" element={<Gender />} />
          </Route>
          <Route path="/about" element={<About />} />

          <Route path="*" element={<Error />} />

          {/* {defineRouter.map((route) => (
          <Route key={route.id} element={route.component} path={route.path} />
        ))} */}
        </Routes>
      </>
    </Layout>
  );
}

export default App;
