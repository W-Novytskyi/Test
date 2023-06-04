import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Link } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/tweets">Tweets</Link>
      </nav>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
