import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Link } from './Layout.styled';
import { Nav } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/tweets">Tweets</Link>
      </Nav>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
