
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Calculator, Globe, Microscope, Palette, Music } from 'lucide-react';

const AcademicsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const subjects = [
    {
      icon: BookOpen,
      title: "Languages",
      description: "English, Kiswahili, and Foreign Languages",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Calculator,
      title: "Mathematics",
      description: "Pure Math, Applied Math, and Statistics",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Microscope,
      title: "Sciences",
      description: "Physics, Chemistry, Biology, and Computer Science",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Globe,
      title: "Humanities",
      description: "History, Geography, Religious Studies",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Palette,
      title: "Creative Arts",
      description: "Fine Art, Design Technology, Drama",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Music,
      title: "Performing Arts",
      description: "Music, Dance, and Public Speaking",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section id="academics" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Academic Excellence
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#02032d] via-[#02033eb6] to-[#02033e] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive curriculum is designed to challenge and inspire students, 
            preparing them for success in higher education and beyond.
          </p>
        </motion.div>

        {/* Academic Programs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {subjects.map((subject, index) => (
            <motion.div
              key={subject.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-accentfade rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${subject.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <subject.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{subject.title}</h3>
              <p className="text-gray-600 leading-relaxed">{subject.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-[#02032d] via-[#02033eb6] to-[#02033e] rounded-3xl p-8 text-white"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-4xl font-bold mb-2"
              >
                98%
              </motion.div>
              <p className="text-blue-100">University Admission Rate</p>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-4xl font-bold mb-2"
              >
                A-
              </motion.div>
              <p className="text-blue-100">Average Grade</p>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="text-4xl font-bold mb-2"
              >
                50+
              </motion.div>
              <p className="text-blue-100">Academic Awards</p>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="text-4xl font-bold mb-2"
              >
                15:1
              </motion.div>
              <p className="text-blue-100">Student-Teacher Ratio</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AcademicsSection;
