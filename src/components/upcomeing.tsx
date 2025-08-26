import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

// import your ads
import thai from "@/assets/thailandAD.jpg"
import singapore from "@/assets/singaporeAD.jpg"
import malayasia from "@/assets/malayasiaAD.jpg"
import dubai from "@/assets/dubaiAD.jpg"
import combo from "@/assets/thai-mala-comboAD.jpg"
import travels from "@/assets/photos.mp4"
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react"


const images = [
  { src: thai, title: "Thailand Adventure", subtitle: "Discover exotic temples and beaches" },
  { src: singapore, title: "Singapore Getaway", subtitle: "Modern city meets tradition" },
  { src: malayasia, title: "Malaysia Explorer", subtitle: "Tropical paradise awaits" },
  { src: dubai, title: "Dubai Luxury", subtitle: "Experience world-class attractions" },
  { src: combo, title: "Combo Package", subtitle: "Best of Southeast Asia" }
]

const AdSlider = () => {
  const [current, setCurrent] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const imgRef = useRef(null)
  const videoRef = useRef(null)
  const intervalRef = useRef(null)

  const startSlider = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 4000)
  }

  const stopSlider = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  useEffect(() => {
    if (isPlaying) {
      startSlider()
    } else {
      stopSlider()
    }
    return () => stopSlider()
  }, [isPlaying])

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length)
  }

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause()
        setIsVideoPlaying(false)
      } else {
        videoRef.current.play().catch(console.error)
        setIsVideoPlaying(true)
      }
    }
  }

  const handleVideoPlay = () => setIsVideoPlaying(true)
  const handleVideoPause = () => setIsVideoPlaying(false)

  const handleExploreTours = () => {
		// Scroll to the tours section
		const toursSection = document.getElementById("contact");
		if (toursSection) {
			toursSection.scrollIntoView({ behavior: "smooth" });
		}
	};

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Discover Your Next Adventure
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Explore breathtaking destinations and create unforgettable memories with our curated travel experiences
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col xl:flex-row justify-center gap-8 lg:gap-12">
          {/* LEFT: Upcoming Trips Slider */}
          <div className="flex flex-col items-center flex-1 max-w-3xl">
            <div className="flex items-center justify-between w-full mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Upcoming Trips</h2>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                {isPlaying ? 'Pause' : 'Play'}
              </button>
            </div>
            
            <div className="relative w-full max-w-2xl aspect-square overflow-hidden rounded-3xl shadow-2xl bg-white p-2">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <img
                  ref={imgRef}
                  src={images[current].src}
                  alt={images[current].title}
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{images[current].title}</h3>
                  <p className="text-sm md:text-base opacity-90">{images[current].subtitle}</p>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="text-white" size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="text-white" size={20} />
                </button>

                {/* Progress Bar */}
                <div className="absolute top-4 left-4 right-4">
                  <div className="flex gap-1">
                    {images.map((_, index) => (
                      <div
                        key={index}
                        className={`h-1 rounded-full flex-1 transition-all duration-300 ${
                          current === index ? 'bg-white' : 'bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Dots Navigation */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                      current === index 
                        ? "bg-blue-500 scale-125" 
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Video */}
          <div className="flex flex-col items-center flex-1 max-w-2xl">
            <div className="flex items-center justify-between w-full mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Travel Experience</h2>
              <button
                onClick={toggleVideoPlay}
                className="flex items-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {isVideoPlaying ? <Pause size={16} /> : <Play size={16} />}
                {isVideoPlaying ? 'Pause' : 'Play'}
              </button>
            </div>

            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl bg-white p-2 group">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  loop
                  muted
                  autoPlay
                  playsInline
                  onPlay={handleVideoPlay}
                  onPause={handleVideoPause}
                  controls
                >
                  <source src={travels} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Video Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Play Button Overlay */}
                {!isVideoPlaying && (
                  <button
                    onClick={toggleVideoPlay}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Play className="text-white ml-1" size={24} />
                  </button>
                )}
              </div>
            </div>

            {/* Video Info */}
            <div className="mt-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Journey Highlights</h3>
              <p className="text-gray-600 text-sm md:text-base max-w-md">
                Watch stunning moments from our travelers' adventures across Asia's most beautiful destinations
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button 
          onClick={handleExploreTours}
          className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 text-lg">
            Book Your Adventure Today
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdSlider