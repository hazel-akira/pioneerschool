import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SplashScreen from '@/components/SplashScreen';
import Navigation2 from '@/components/Navigation2';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import AcademicsSection from '@/components/AcademicsSection';
import FacilitiesSection from '@/components/FacilitiesSection';
import Footer from '@/components/Footer';
import { MenuProvider } from '@/components/MenuContext';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {showSplash ? (
          <SplashScreen key="splash" />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <MenuProvider>
              <Navigation2/>
             
              <HeroSection />
              <AboutSection />
              <AcademicsSection />
              <FacilitiesSection />
              <Footer />
            </MenuProvider>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
