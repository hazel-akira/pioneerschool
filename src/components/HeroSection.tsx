
import { motion } from 'framer-motion';
import { ArrowRight, Play, Users, Trophy, BookOpen,ClipboardList } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
  id="home"
  className="relative min-h-screen pt-10 flex items-center overflow-hidden"
>
  {/* Background Image with Gradient Overlay */}
  <div
    className="absolute inset-0 bg-[url('bg.png')] bg-cover bg-center"
  >
    <div className="absolute inset-0 bg-gradient-to-br  bg-black/60" />
  </div>
      {/* Animated background shapes */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-white/5"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1.2, 1, 1.2],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-white/3"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-white"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-l md:text-7xl font-bold mb-6 leading-tight"
            >
             Unlock your
              <span className="bg-gradient-to-r from-[#0C356A] to-blue-400 bg-clip-text text-transparent">
                {" "}child's full{" "}
              </span>
              potential
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-l md:text-2xl text-blue-100 mb-8 leading-relaxed"
            >
              At Pioneer Boys School, we transfrom young men into leaders and agents of change
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-xl"
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-full flex items-center justify-center gap-2 transition-all duration-300"
              >
                <Play className="w-5 h-5" />
                Watch Video
              </motion.button>
            </motion.div>
            
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="grid grid-cols-3 gap-8"
            >
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-yellow-400 mr-2" />
                  <span className="text-3xl font-bold">1200+</span>
                </div>
                <p className="text-blue-200">Students</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Trophy className="w-6 h-6 text-yellow-400 mr-2" />
                  <span className="text-3xl font-bold">50+</span>
                </div>
                <p className="text-blue-200">Awards</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <BookOpen className="w-6 h-6 text-yellow-400 mr-2" />
                  <span className="text-3xl font-bold">25+</span>
                </div>
                <p className="text-blue-200">Years</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-full max-w-lg mx-auto"
              >
                <div className="aspect-square bg-gradient-to-br from-white/20 to-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/20">
                  <div className="w-full h-full bg-gradient-to-br from-[#0C356A] to-blue-400/20 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-white/90 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        >
                          <ClipboardList className="w-16 h-16 text-[#0C356A]" />
                        </motion.div>
                      </div>
                      <h3 className="text-5xl font-bold text-[#E4AF23]  mb-2">Grade 10 admissions in AUGUST 2025</h3>
                      <p className="text-blue-100"></p>   
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
