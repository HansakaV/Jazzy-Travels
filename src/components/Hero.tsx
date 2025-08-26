import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MapPin, Star } from "lucide-react";
import { gsap } from "gsap";
import bangKokhero from "@/assets/bangkok-hero.jpg";
import SingaporeHero from "@/assets/singapore-hero.jpg";
import MalaysiaHero from "@/assets/malaysia-hero.jpg";
import dubaiHero from "@/assets/dubai-hero.jpg";
import CambodiaHero from "@/assets/cambodia.jpg";

// Mock images for demo - replace with your actual imports
//const bangkokHero = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop";
//const singaporeHero = "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1920&h=1080&fit=crop";
//const malaysiaHero = "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1920&h=1080&fit=crop";
//const dubaiHero = "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&h=1080&fit=crop";

const destinations = [
	{
		id: 1,
		name: "Thailand",
		subtitle: "Land of Smiles",
		image: bangKokhero,
		description: "Experience the vibrant culture, stunning temples, and amazing street food of Thailand.",
	},
	{
		id: 2,
		name: "Singapore",
		subtitle: "Lion City",
		image: SingaporeHero,
		description: "Discover the modern marvels and multicultural charm of Singapore.",
	},
	{
		id: 3,
		name: "Malaysia",
		subtitle: "Truly Asia",
		image: MalaysiaHero,
		description: "Explore the diverse landscapes and rich heritage of Malaysia.",
	},
	{
		id: 4,
		name: "Dubai",
		subtitle: "City of Gold",
		image: dubaiHero,
		description: "Experience luxury and innovation in the magnificent city of Dubai.",
	},
	{
		id: 5,
		name: "Cambodia",
		subtitle: "Kingdom of Wonder",
		image: CambodiaHero,
		description: "Discover the ancient temples and rich history of Cambodia.",
	},
];

const Hero = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const heroRef = useRef(null);
	const contentRef = useRef(null);
	const imageRef = useRef(null);
	const overlayRef = useRef(null);
	const subtitleRef = useRef(null);
	const titleRef = useRef(null);
	const descriptionRef = useRef(null);
	const starsRef = useRef(null);
	const buttonsRef = useRef(null);
	const indicatorsRef = useRef(null);
	const arrowsRef = useRef([]);
	
	const timelineRef = useRef(null);
	const autoSlideRef = useRef(null);

	const currentDestination = destinations[currentSlide];

	// Initialize GSAP animations
	useEffect(() => {
		// Set initial states
		gsap.set([subtitleRef.current, titleRef.current, descriptionRef.current, starsRef.current, buttonsRef.current], {
			opacity: 0,
			y: 50
		});

		// Create entrance animation timeline
		const tl = gsap.timeline({ paused: true });
		
		tl.to(imageRef.current, {
			scale: 1,
			opacity: 1,
			duration: 1.2,
			ease: "power3.out"
		})
		.to(overlayRef.current, {
			opacity: 1,
			duration: 0.8,
			ease: "power2.out"
		}, "-=0.8")
		.to(subtitleRef.current, {
			opacity: 1,
			y: 0,
			duration: 0.8,
			ease: "back.out(1.2)"
		}, "-=0.4")
		.to(titleRef.current, {
			opacity: 1,
			y: 0,
			duration: 1,
			ease: "back.out(1.2)"
		}, "-=0.6")
		.to(descriptionRef.current, {
			opacity: 1,
			y: 0,
			duration: 0.8,
			ease: "power2.out"
		}, "-=0.4")
		.to(starsRef.current, {
			opacity: 1,
			y: 0,
			duration: 0.6,
			ease: "back.out(1.2)"
		}, "-=0.3")
		.to(buttonsRef.current, {
			opacity: 1,
			y: 0,
			duration: 0.8,
			ease: "back.out(1.2)",
			stagger: 0.1
		}, "-=0.2");

		timelineRef.current = tl;
		tl.play();

		// Animate arrows on mount
		gsap.fromTo(arrowsRef.current, 
			{ scale: 0, rotation: -180 },
			{ scale: 1, rotation: 0, duration: 0.6, ease: "back.out(1.2)", delay: 0.5 }
		);

		// Animate indicators
		gsap.fromTo(indicatorsRef.current?.children,
			{ scale: 0, opacity: 0 },
			{ scale: 1, opacity: 1, duration: 0.4, stagger: 0.1, delay: 1 }
		);

		return () => {
			if (timelineRef.current) timelineRef.current.kill();
			if (autoSlideRef.current) clearInterval(autoSlideRef.current);
		};
	}, []);

	// Auto slide functionality
	useEffect(() => {
		autoSlideRef.current = setInterval(() => {
			nextSlide();
		}, 6000);

		return () => {
			if (autoSlideRef.current) clearInterval(autoSlideRef.current);
		};
	}, [currentSlide]);

	// Slide transition animation
	useEffect(() => {
		animateSlideTransition();
	}, [currentSlide]);

	const animateSlideTransition = () => {
		const tl = gsap.timeline();
		
		// Animate out current content
		tl.to([subtitleRef.current, titleRef.current, descriptionRef.current, starsRef.current, buttonsRef.current], {
			opacity: 0,
			y: -30,
			duration: 0.4,
			ease: "power2.in",
			stagger: 0.05
		})
		// Change background image with zoom effect
		.to(imageRef.current, {
			scale: 1.1,
			duration: 0.6,
			ease: "power2.inOut"
		}, "-=0.2")
		.call(() => {
			// This would update the image source in a real implementation
		})
		.to(imageRef.current, {
			scale: 1,
			duration: 0.8,
			ease: "power2.out"
		})
		// Animate in new content
		.to(subtitleRef.current, {
			opacity: 1,
			y: 0,
			duration: 0.6,
			ease: "back.out(1.2)"
		}, "-=0.4")
		.to(titleRef.current, {
			opacity: 1,
			y: 0,
			duration: 0.8,
			ease: "back.out(1.2)"
		}, "-=0.5")
		.to([descriptionRef.current, starsRef.current], {
			opacity: 1,
			y: 0,
			duration: 0.6,
			ease: "power2.out",
			stagger: 0.1
		}, "-=0.3")
		.to(buttonsRef.current, {
			opacity: 1,
			y: 0,
			duration: 0.8,
			ease: "back.out(1.2)"
		}, "-=0.2");
	};

	const nextSlide = () => {
		if (autoSlideRef.current) clearInterval(autoSlideRef.current);
		setCurrentSlide((prev) => (prev + 1) % destinations.length);
	};

	const prevSlide = () => {
		if (autoSlideRef.current) clearInterval(autoSlideRef.current);
		setCurrentSlide((prev) => (prev - 1 + destinations.length) % destinations.length);
	};

	const goToSlide = (index) => {
		if (autoSlideRef.current) clearInterval(autoSlideRef.current);
		setCurrentSlide(index);
	};

	const handleArrowHover = (ref, scale = 1.15) => {
		gsap.to(ref, { scale, duration: 0.3, ease: "back.out(1.2)" });
	};

	const handleArrowLeave = (ref) => {
		gsap.to(ref, { scale: 1, duration: 0.3, ease: "power2.out" });
	};

	const handleButtonHover = (e) => {
		gsap.to(e.target, { 
			scale: 1.05, 
			y: -2,
			duration: 0.3, 
			ease: "back.out(1.2)",
			boxShadow: "0 10px 25px rgba(0,0,0,0.3)"
		});
	};

	const handleButtonLeave = (e) => {
		gsap.to(e.target, { 
			scale: 1, 
			y: 0,
			duration: 0.3, 
			ease: "power2.out",
			boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
		});
	};

	const handleWhatsAppContact = () => {
		const phoneNumber = "+94710356244";
		const message = encodeURIComponent(`Hi! I'm interested in ${currentDestination.name}. Could you please provide more details?`);
		const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
		window.open(whatsappUrl, '_blank');
	};

	const handleExploreTours = () => {
		// Scroll to the tours section
		const toursSection = document.getElementById("destinations");
		if (toursSection) {
			toursSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section
			ref={heroRef}
			id="home"
			className="relative min-h-screen flex items-center justify-center overflow-hidden"
		>
			{/* Background Image */}
			<div className="absolute inset-0">
				<div
					ref={imageRef}
					className="w-full h-full bg-cover bg-center bg-no-repeat transform scale-105"
					style={{
						backgroundImage: `url(${currentDestination.image})`,
						filter: 'brightness(0.7) contrast(1.1) saturate(1.2)'
					}}
				/>
				<div 
					ref={overlayRef}
					className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/50"
				/>
			</div>

			{/* Animated Particles Background */}
			<div className="absolute inset-0 opacity-20">
				{[...Array(50)].map((_, i) => (
					<div
						key={i}
						className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							animationDelay: `${Math.random() * 3}s`,
							animationDuration: `${2 + Math.random() * 3}s`
						}}
					/>
				))}
			</div>

			{/* Navigation Arrows */}
			<button
				ref={(el) => arrowsRef.current[0] = el}
				className="absolute left-6 md:left-10 z-20 group"
				onClick={prevSlide}
				onMouseEnter={() => handleArrowHover(arrowsRef.current[0])}
				onMouseLeave={() => handleArrowLeave(arrowsRef.current[0])}
			>
				<div className="bg-white/15 backdrop-blur-md border border-white/20 text-white rounded-full h-14 w-14 flex items-center justify-center transition-all duration-300 group-hover:bg-white/25 group-hover:border-white/40">
					<ChevronLeft className="h-7 w-7" />
				</div>
			</button>

			<button
				ref={(el) => arrowsRef.current[1] = el}
				className="absolute right-6 md:right-10 z-20 group"
				onClick={nextSlide}
				onMouseEnter={() => handleArrowHover(arrowsRef.current[1])}
				onMouseLeave={() => handleArrowLeave(arrowsRef.current[1])}
			>
				<div className="bg-white/15 backdrop-blur-md border border-white/20 text-white rounded-full h-14 w-14 flex items-center justify-center transition-all duration-300 group-hover:bg-white/25 group-hover:border-white/40">
					<ChevronRight className="h-7 w-7" />
				</div>
			</button>

			{/* Content */}
			<div
				ref={contentRef}
				className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto"
			>
				<div
					ref={subtitleRef}
					className="flex items-center justify-center space-x-3 mb-6"
				>
					<div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
						<MapPin className="h-5 w-5 text-white" />
					</div>
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold text-lg md:text-xl tracking-widest uppercase">
						{currentDestination.subtitle}
					</span>
				</div>

				<h1
					ref={titleRef}
					className="font-extrabold text-4xl md:text-6xl lg:text-8xl mb-8 leading-none"
				>
					<span className="block mb-2 text-white">Discover</span>
					<span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-2xl">
						{currentDestination.name}
					</span>
				</h1>

				<p
					ref={descriptionRef}
					className="text-lg md:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto leading-relaxed font-light"
				>
					{currentDestination.description}
				</p>

				<div
					ref={starsRef}
					className="flex items-center justify-center space-x-2 mb-12"
				>
					<div className="flex space-x-1">
						{[...Array(5)].map((_, i) => (
							<Star 
								key={i} 
								className="h-6 w-6 text-yellow-400 fill-current drop-shadow-lg" 
								style={{ animationDelay: `${i * 0.1}s` }}
							/>
						))}
					</div>
					<span className="ml-4 text-gray-300 text-lg font-medium">
						Trusted by 1,000+ travelers
					</span>
				</div>

				<div
					ref={buttonsRef}
					className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8"
				>
					<button
						className="group relative px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-300 hover:from-blue-500 hover:to-purple-500 shadow-lg hover:shadow-2xl"
						onMouseEnter={handleButtonHover}
						onMouseLeave={handleButtonLeave}
					>
						<button 
						onClick={handleExploreTours}
						className="relative z-10">Explore Tours</button>
						<div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
					</button>
					
					<button
						onClick={handleWhatsAppContact}
						className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
						onMouseEnter={handleButtonHover}
						onMouseLeave={handleButtonLeave}
					>
						<span className="relative z-10">Let's Talk</span>
						<div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
					</button>
				</div>
			</div>

			{/* Slide Indicators */}
			<div
				ref={indicatorsRef}
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-10"
			>
				{destinations.map((_, index) => (
					<button
						key={index}
						className={`relative w-4 h-4 rounded-full transition-all duration-500 transform hover:scale-125 ${
							index === currentSlide 
								? "bg-gradient-to-r from-blue-400 to-purple-400 shadow-lg" 
								: "bg-white/40 hover:bg-white/70"
						}`}
						onClick={() => goToSlide(index)}
						onMouseEnter={(e) => gsap.to(e.target, { scale: 1.3, duration: 0.2 })}
						onMouseLeave={(e) => gsap.to(e.target, { scale: index === currentSlide ? 1.1 : 1, duration: 0.2 })}
					>
						{index === currentSlide && (
							<div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse" />
						)}
					</button>
				))}
			</div>

			{/* Decorative Elements */}
			<div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse" />
			<div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse delay-1000" />
		</section>
	);
};

export default Hero;