import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import ScrollToTop from './ScrollToTop';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow w-full overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
