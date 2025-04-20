import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SimpleLayout = () => {
  return (
    <>
      <Navbar />
      <main className="px-4 py-8">
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default SimpleLayout;
