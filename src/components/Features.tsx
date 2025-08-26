import { DollarSign, Shield, Heart, Globe, Play, ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import ad from "@/assets/Ad.mp4"
import thumb from "@/assets/thumb.png"


const features = [
  {
    icon: DollarSign,
    title: "Best Value",
    description:
      "Reasonable prices for unforgettable experiences. We believe great travel shouldn't break the bank.",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    hoverBg: "group-hover:bg-emerald-100",
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    icon: Heart,
    title: "Comfort",
    description:
      "Quality accommodations and comfortable transportation ensuring your journey is as enjoyable as your destination.",
    color: "text-rose-600",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-200",
    hoverBg: "group-hover:bg-rose-100",
    gradient: "from-rose-500 to-pink-500"
  },
  {
    icon: Shield,
    title: "Safety",
    description:
      "Your safety is our priority. We ensure secure and well-planned itineraries with trusted local partners.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    hoverBg: "group-hover:bg-blue-100",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Globe,
    title: "Friendly Service",
    description:
      "Warm, courteous service with personalized attention. We're here to make your travel dreams come true.",
    color: "text-violet-600",
    bgColor: "bg-violet-50",
    borderColor: "border-violet-200",
    hoverBg: "group-hover:bg-violet-100",
    gradient: "from-violet-500 to-purple-500"
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: 50,
    scale: 0.9 
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const videoVariants: Variants = {
  hidden: { opacity: 0, x: -50, scale: 0.9 },
  visible: { 
    opacity: 1, 
    x: 0, 
    scale: 1,
    transition: { 
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    }
  },
};

const handleExploreTours = () => {
	const toursSection = document.getElementById("contact");
	if (toursSection) {
		toursSection.scrollIntoView({ behavior: "smooth" });
	}
}

const Features = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald-200/30 to-rose-200/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-yellow-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Enhanced Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 via-purple-50 to-emerald-50 border border-blue-100 mb-6 shadow-lg"
          >
            <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">✨ Why Choose Us</span>
          </motion.div>
          
          <h2 className="font-bold text-3xl md:text-4xl lg:text-6xl xl:text-7xl mb-6 leading-tight">
            Experience the{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600">
                Jazzy Travels
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 rounded-full transform origin-left"
              ></motion.div>
            </span>
            <br />Difference
          </h2>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Discover why thousands choose us for their dream adventures. 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold"> Your perfect journey awaits.</span>
          </p>
        </motion.div>

        {/* Main Content: Video Left, Features Right */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start">
          
          {/* Left Side - Enhanced Video Section */}
          <motion.div
            variants={videoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="sticky top-8">
              {/* Video Container */}
              <div className="relative group">
                {/* Floating Elements */}
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity }
                  }}
                  className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full shadow-lg z-10"
                ></motion.div>
                
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    delay: 1
                  }}
                  className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-lg shadow-lg z-10"
                ></motion.div>

                {/* Enhanced Decorative Elements */}
                <div className="absolute -inset-6 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-emerald-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
                <div className="absolute -inset-3 bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-emerald-400/30 rounded-2xl blur-lg group-hover:scale-105 transition-all duration-700"></div>
                
                {/* Video Element with Enhanced Styling */}
                <div className="relative aspect-square lg:aspect-[4/5] xl:aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 border-4 border-white/50">
                  <video
                    className="w-full h-full object-cover"
                    controls={isVideoPlaying}
					autoPlay
                    poster={thumb}
                    onPlay={() => setIsVideoPlaying(true)}
                    onPause={() => setIsVideoPlaying(false)}
                    loop
                    muted
                  >
                    <source src={ad} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Enhanced Custom Play Button */}
                  {!isVideoPlaying && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm cursor-pointer group"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="relative"
                      >
                        <div className="absolute inset-0 bg-white/20 rounded-full blur-xl"></div>
                        <div className="relative bg-white/95 backdrop-blur-md rounded-full p-8 shadow-2xl group-hover:bg-white transition-all duration-300">
                          <Play className="w-10 h-10 text-blue-600 ml-1" fill="currentColor" />
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </div>
                
                {/* Enhanced Video Caption */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 text-center lg:text-left"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3 leading-tight">
                    Journey into 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Wonder</span>
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed mb-4">
                    Watch our carefully crafted travel experiences come to life in stunning detail
                  </p>
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-slate-500">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span>Live preview of destinations</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Enhanced Feature Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
          >
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className={`group relative p-8 rounded-3xl bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${feature.borderColor} cursor-pointer overflow-hidden`}
              >
                {/* Enhanced Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-all duration-500`}></div>
                <div className={`absolute inset-0 ${feature.bgColor} ${feature.hoverBg} transition-all duration-500 opacity-0 group-hover:opacity-100`}></div>
                
                {/* Content Layout */}
                <div className="relative flex items-start gap-6">
                  {/* Enhanced Icon */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.4 }
                    }}
                    className={`flex-shrink-0 p-4 rounded-2xl ${feature.bgColor} ${feature.borderColor} border-2 shadow-sm group-hover:shadow-lg transition-all duration-300 group-hover:border-opacity-60`}
                  >
                    <feature.icon className={`h-7 w-7 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-3 text-slate-800 group-hover:text-slate-900 transition-colors flex items-center gap-2">
                      {feature.title}
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                    </h3>
                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Enhanced Hover Effect Lines */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                
                {/* Corner Accent */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}

            {/* Enhanced Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 pt-8"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center gap-3 px-8 py-6 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
				onClick={handleExploreTours}
              >
                <span>Start Your Adventure Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
              
              <p className="text-center text-sm text-slate-500 mt-4">
                Join 10,000+ happy travelers • No booking fees
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;