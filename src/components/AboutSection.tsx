import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Heart, Globe, Award } from 'lucide-react';
import Lottie from "lottie-react";
import topAnimation from "../animations/books.json";
import sideAnimation from "../animations/chat.json";
import sceneAnimation from "../animations/bulbBooks.json";
//import { CheckCircle } from "lucide-react";

const animations = [ sideAnimation,topAnimation,sceneAnimation];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const values = [
    {
      icon: Target,
      title: "EDUCATING LEADERS AND AGENTS OF CHANGE",
      description: "Pioneer School with a myriad of experiences. When these experiences are coupled with advice and guidance from parents and teachers, boys leave childhood behind and become young men. This has been our mission in the past and it is not going to change in the future."
      
      /*(
        <ul className="list-none text-left space-y-2 mt-2"><h3>Students acquire a solid academic foundation through:</h3>
  <li className="flex items-start gap-2">
    <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
   Rigorous curriculum that emphasizes depth and breadth of knowledge.
  </li>
  <li className="flex items-start gap-2">
    <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
    Ongoing follow-up and support
  </li>
  <br></br>
  <br></br>
  Students also:
  <li className="flex items-start gap-2">
    <CheckCircle className="w-4 h-4 text-green-600 mt-1" />Cultivate efficient learning skills.</li>
    <li className="flex items-start gap-2">
    <CheckCircle className="w-4 h-4 text-green-600 mt-1" />Learn additional world languages and cultures.</li>
    <li className="flex items-start gap-2">
    <CheckCircle className="w-4 h-4 text-green-600 mt-1" />Experience regular reality checks.</li>
    <li className="flex items-start gap-2">
    <CheckCircle className="w-4 h-4 text-green-600 mt-1" />Transfer with ease to other school systems worlwide.</li>
</ul>)*/

    },
    {
      icon: Heart,
      title: "DISCIPLINE",
      description: "We have the highest of expectations of our students. We expect all boys to be properly dressed, punctual,and well-mannered as they set out to learn and achieve their academic goals. We enforce our behaviour policy robustly and consistently across the school. The student code of conduct sets out the high standards of behaviour that we expect with clear consequences for misbehaviour and a zero tolerance of bullying,abusive or discriminatory language and violence. We believe that outstanding behaviour improves students’ capacity to learn."
    },
    {
      icon: Globe,
      title: "HIGH EXPECTATIONS",
      description: "We work hard to create a culture of high aspirations throughout the school. We set ambitious targets for every student. Our aim is that every student should achieve at least a grade higher than the national expectation in each level of their learning. Staff, students, and parents are involved in the whole process of setting the targets and are expected to take responsibility for them once they are agreed."
    },
    {
      icon: Award,
      title: "A HIGH-POWERED, KNOWLEDGE-BASED ACADEMIC CURRICULUM",
      description: "The 8-4-4- curriculum is broad, but we adopt it to a more coherent and cumulative curriculum with an emphasis on the critical importance of knowledge acquisition. We require our students to read extensively from the broad range of increasingly challenging literary and technical material across all subjects in form 1 and 2 which helps them better determine their specializations in senior high (form 3 and 4). We not only design the curriculum to cultivate well-rounded, intelligent, and socially aware boys, but it is also tailored to deliver excellent academic results. Regardless of background or prior ability, we aim to secure the best outcomes for all our boys, ensuring that our curriculum gives a solid foundation for future careers."
    }
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-accentfade">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-5xl font-bold text-[#0C356A] mb-6">
            About <span className='text-[#E4AF23]'> Pioneer</span> <span className='text-[#0C356A]'>School</span> 
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0C356A] via-orange-400 to-[#E4AF23] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over years, Pioneer Boys School has been at the forefront of educational excellence in Kenya, 
            nurturing young minds and building character that lasts a lifetime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            Pioneer school is a private boy's school started in 2000 as a result of a persistent request from parents.
            It has grown to be a giant of many fronts and haslived to its name;
            pioneering many firsts in the history of academic institutions in kenya.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our holistic approach to education combines rigorous academics with character 
              development, ensuring our students graduate as well-rounded individuals ready 
              to make a positive impact in the world.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#E4AF23] via-[#0C356A] to-[#0C356A] text-white font-bold py-3 px-8 rounded-full hover:shadow-lg transition-all duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div
              className="aspect-square rounded-3xl p-8 bg-[url('/psenv.png')] bg-cover bg-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0C356A]/80 to-[#E4AF23]/80 rounded-3xl z-0"></div>

              <div className="relative w-full h-full bg-white/20 rounded-2xl shadow-xl flex items-center justify-center z-10">
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-24 h-24 bg-[#0C356A]  rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <img src="/ps.png" alt="ps env" className="w-20 h-20 object-cover rounded-full" />
                  </motion.div>

                  <h4 className="text-2xl font-bold text-gray-900 mb-2">25+ Years</h4>
                  <p className="text-gray-900 text-xl">of Educational Excellence</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {values.map((value, index) => (
    <motion.div
      key={value.title}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
      whileHover={{ y: -10 }}
      className="text-center p-6 max-h-sm mx-auto bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center bg-white">
        <Lottie
          animationData={animations[index % animations.length]}
          loop
          autoplay
          style={{ height: "60px", width: "60px" }}
        />
      </div>
      <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
      <div className="text-gray-600 leading-relaxed">{value.description}</div>
    </motion.div>
  ))}
</div>


        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
