import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main>
        {/* defines where the content child routes will be rendered */}
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
