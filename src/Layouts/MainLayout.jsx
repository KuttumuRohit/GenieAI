import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <main className="px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
