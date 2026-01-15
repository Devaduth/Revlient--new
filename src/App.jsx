import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet, ScrollRestoration } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Background3D from './components/layout/Background3D';
import Hero from './components/sections/Hero';
import ScrollStory from './components/sections/ScrollStory';
import Services from './components/sections/Services';
import FeaturedProduct from './components/sections/FeaturedProduct';
import Process from './components/sections/Process';
import TechStack from './components/sections/TechStack';
import CallToAction from './components/sections/CallToAction';
import BrandStatement from './components/sections/BrandStatement';
import ServiceDetail from './pages/ServiceDetail';
import AudioController from './components/ui/AudioController';
import Preloader from './components/ui/Preloader';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

const Home = () => (
  <>
    <Hero />
    <ScrollStory />
    <Services />
    <FeaturedProduct />
    <Process />
    <TechStack />
    <CallToAction />
  </>
);

const Layout = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-background min-h-screen text-white selection:bg-white selection:text-black">
      <ScrollRestoration />
      {/* <Background3D /> Removed in favor of Hero-specific background */}
      
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <Header />
      <main>
        <Outlet />
      </main>
      <BrandStatement />
      <Footer />
      <AudioController />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/service/:id",
        element: <ServiceDetail />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
