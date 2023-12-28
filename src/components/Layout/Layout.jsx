import { useState } from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Loading from '../Loading/Loading';
import { Popup } from '../Popups';

export const Layout = () => {
  const [showPopup, setShowPopup] = useState(true);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <Header />
      <main className="main">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      {showPopup && <Popup onClose={togglePopup} />}
    </>
  );
};
