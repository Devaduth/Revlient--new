import React from 'react';
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

function App() {
  return (
    <div className="bg-background min-h-screen text-white selection:bg-white selection:text-black">
      <Background3D />
      <Header />
      <main>
        <Hero />
        <ScrollStory />
        <Services />
        <FeaturedProduct />
        <Process />
        <TechStack />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
