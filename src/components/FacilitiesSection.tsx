
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building, Utensils, Heart, Wifi, Car, Trophy } from 'lucide-react';

const FacilitiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const facilities = [
    {
      icon: Building,
      title: "Modern Classrooms",
      description: "State-of-the-art learning environments with smart boards and climate control",
      image: "bg-gradient-to-br from-blue-100 to-blue-200"
    },
    {
      icon: Utensils,
      title: "Dining Hall",
      description: "Nutritious meals prepared by professional chefs in our modern kitchen",
      image: "bg-gradient-to-br from-green-100 to-green-200"
    },
    {
      icon: Heart,
      title: "Health Center",
      description: "Fully equipped medical facility with qualified healthcare professionals",
      image: "bg-gradient-to-br from-red-100 to-red-200"
    },
    {
      icon: Wifi,
      title: "ICT Center",
      description: "High-speed internet and modern computer labs for digital learning",
      image: "bg-gradient-to-br from-purple-100 to-purple-200"
    },
    {
      icon: Car,
      title: "Transport",
      description: "Safe and reliable school bus service covering major routes",
      image: "bg-gradient-to-br from-yellow-100 to-yellow-200"
    },
    {
      icon: Trophy,
      title: "Sports Complex",
      description: "Football field, basketball court, and indoor sports facilities",
      image: "bg-gradient-to-br from-orange-100 to-orange-200"
    }
  ];

  return (
    <section id="facilities" ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            World-Class Facilities
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#02032d] via-[#02033eb6] to-[#02033e] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our campus provides a comprehensive learning environment with modern facilities 
            that support both academic excellence and personal development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
            >
              <div className={`h-48 ${facility.image} relative`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/90 rounded-xl flex items-center justify-center shadow-lg">
                    <facility.icon className="w-6 h-6 text-gray-700" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {facility.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {facility.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Campus Tour CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-3xl p-8 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Experience Our Campus
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Schedule a visit to see our facilities firsthand and meet our dedicated staff.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#02032d] via-[#02033eb6] to-[#02033e] text-white font-bold py-4 px-8 rounded-full hover:shadow-lg transition-all duration-300"
              >
                Schedule Campus Tour
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 font-bold py-4 px-8 rounded-full transition-all duration-300"
              >
                Virtual Tour
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
