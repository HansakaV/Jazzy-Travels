import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MapPin, Star } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import bangkokHero from "@/assets/bangkok-hero.jpg";
import singaporeHero from "@/assets/singapore-hero.jpg";
import malaysiaHero from "@/assets/malaysia-hero.jpg";
import dubaiHero from "@/assets/dubai-hero.jpg";

const destinations = [
	{
		id: 1,
		name: "Thailand",
		subtitle: "Land of Smiles",
		image: bangkokHero,
		description:
			"Experience the vibrant culture, stunning temples, and amazing street food of Thailand.",
	},
	{
		id: 2,
		name: "Singapore",
		subtitle: "Lion City",
		image: singaporeHero,
		description:
			"Discover the modern marvels and multicultural charm of Singapore.",
	},
	{
		id: 3,
		name: "Malaysia",
		subtitle: "Truly Asia",
		image: malaysiaHero,
		description:
			"Explore the diverse landscapes and rich heritage of Malaysia.",
	},
	{
		id: 4,
		name: "Dubai",
		subtitle: "City of Gold",
		image: dubaiHero,
		description:
			"Experience luxury and innovation in the magnificent city of Dubai.",
	},
];

const Hero = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % destinations.length);
		}, 7000); // Increased interval for a more relaxed feel
		return () => clearInterval(timer);
	}, []);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % destinations.length);
	};

	const prevSlide = () => {
		setCurrentSlide(
			(prev) => (prev - 1 + destinations.length) % destinations.length
		);
	};

	const currentDestination = destinations[currentSlide];

	const contentVariants: Variants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: "easeOut",
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants: Variants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
	};

	return (
		<section
			id="home"
			className="relative min-h-screen flex items-center justify-center overflow-hidden"
		>
			<AnimatePresence mode="wait">
				<motion.div
					key={currentSlide}
					initial={{ opacity: 0, scale: 1.05 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.95 }}
					transition={{ duration: 1.2, ease: "easeInOut" }}
					className="absolute inset-0"
				>
					<img
						src={currentDestination.image}
						alt={currentDestination.name}
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 bg-black/50" />
					<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
				</motion.div>
			</AnimatePresence>

			{/* Navigation Arrows */}
			<motion.div whileHover={{ scale: 1.1 }}>
				<Button
					variant="ghost"
					size="icon"
					className="absolute left-4 md:left-8 z-10 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 rounded-full h-12 w-12"
					onClick={prevSlide}
				>
					<ChevronLeft className="h-7 w-7" />
				</Button>
			</motion.div>
			<motion.div whileHover={{ scale: 1.1 }}>
				<Button
					variant="ghost"
					size="icon"
					className="absolute right-4 md:right-8 z-10 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 rounded-full h-12 w-12"
					onClick={nextSlide}
				>
					<ChevronRight className="h-7 w-7" />
				</Button>
			</motion.div>

			{/* Content */}
			<motion.div
				variants={contentVariants}
				initial="hidden"
				animate="visible"
				key={currentSlide} // Re-trigger animation on slide change
				className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
			>
				<motion.div
					variants={itemVariants}
					className="flex items-center justify-center space-x-3 mb-4"
				>
					<MapPin className="h-6 w-6 text-primary" />
					<span className="text-primary font-semibold text-lg tracking-wider">
						{currentDestination.subtitle}
					</span>
				</motion.div>

				<motion.h1
					variants={itemVariants}
					className="font-heading font-extrabold text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight"
				>
					Discover{" "}
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary">
						{currentDestination.name}
					</span>
				</motion.h1>

				<motion.p
					variants={itemVariants}
					className="text-lg md:text-xl mb-10 text-white/90 max-w-2xl mx-auto"
				>
					{currentDestination.description}
				</motion.p>

				<motion.div
					variants={itemVariants}
					className="flex items-center justify-center space-x-2 mb-10"
				>
					{[...Array(5)].map((_, i) => (
						<Star key={i} className="h-5 w-5 text-primary fill-current" />
					))}
					<span className="ml-2 text-white/90">Trusted by 1,000+ travelers</span>
				</motion.div>

				<motion.div
					variants={itemVariants}
					className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
				>
					<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
						<Button size="lg" className="text-lg px-8 py-6 w-full sm:w-auto">
							Explore Tours
						</Button>
					</motion.div>
					<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
						<Button
							variant="outline"
							size="lg"
							className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 w-full sm:w-auto"
						>
							Get Custom Quote
						</Button>
					</motion.div>
				</motion.div>
			</motion.div>

			{/* Slide Indicators */}
			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
				{destinations.map((_, index) => (
					<motion.button
						key={index}
						whileHover={{ scale: 1.2 }}
						className={`w-3 h-3 rounded-full transition-colors duration-300 ${
							index === currentSlide ? "bg-primary" : "bg-white/50 hover:bg-white/80"
						}`}
						onClick={() => setCurrentSlide(index)}
					/>
				))}
			</div>
		</section>
	);
};

export default Hero;