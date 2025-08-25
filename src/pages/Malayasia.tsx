import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Star, Clock, Users, MapPin, MessageCircle, Home, ArrowLeft } from "lucide-react";

const Malaysia = () => {
	const malaysiaData = {
		id: 5,
		name: "Malaysia Discovery Tour",
		location: "Kuala Lumpur & Langkawi",
		image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
		duration: "6 Days / 5 Nights",
		groupSize: "2-20 People",
		rating: 4.8,
		price: "From LKR 750000",
		highlights: [
			"Petronas Twin Towers",
			"Batu Caves",
			"Langkawi Island",
			"Street Food Tours",
		],
		description:
			"Explore the vibrant culture and natural beauty of Malaysia with modern city attractions and pristine tropical islands.",
		detailedInfo: "Immerse yourself in Malaysia's diverse culture and stunning landscapes. Marvel at the iconic Petronas Twin Towers in Kuala Lumpur, explore the colorful Batu Caves, experience the bustling street food scene, and relax on the pristine beaches of Langkawi. Visit traditional markets, take cable car rides with breathtaking views, and enjoy the perfect blend of modern urban life and tropical paradise."
	};

	const itinerary = [
		{
			day: 1,
			title: "Arrival in Kuala Lumpur",
			activities: ["Airport pickup", "Hotel check-in", "Petronas Twin Towers visit", "KLCC Park evening stroll"]
		},
		{
			day: 2,
			title: "Cultural Kuala Lumpur",
			activities: ["Batu Caves exploration", "Central Market shopping", "Chinatown food tour", "KL Tower observation deck"]
		},
		{
			day: 3,
			title: "City Highlights & Flight to Langkawi",
			activities: ["Merdeka Square visit", "National Mosque tour", "Flight to Langkawi", "Beach resort check-in"]
		},
		{
			day: 4,
			title: "Langkawi Island Adventure",
			activities: ["Cable car & Sky Bridge", "Oriental Village", "Underwater World", "Sunset cruise"]
		},
		{
			day: 5,
			title: "Island Hopping & Relaxation",
			activities: ["Island hopping tour", "Eagle watching", "Beach activities", "Duty-free shopping"]
		},
		{
			day: 6,
			title: "Departure",
			activities: ["Hotel checkout", "Last-minute shopping", "Airport transfer", "Flight departure"]
		}
	];

	// WhatsApp contact function
	const handleWhatsAppContact = () => {
		const phoneNumber = "+94710356244"; // Replace with your actual WhatsApp number
		const message = encodeURIComponent(`Hi! I'm interested in the ${malaysiaData.name} package. Could you please provide more details?`);
		const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
		window.open(whatsappUrl, '_blank');
	};

	// Back to home function
	const handleBackToHome = () => {
		// Replace with your actual home page navigation
		// If using React Router: navigate('/');
		// For now, using window.history or you can replace with your routing solution
		window.history.back();
	};

	return (
		<div className="min-h-screen bg-background">
			{/* Navigation Bar */}
			<motion.nav
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b"
			>
				<div className="container mx-auto px-4 py-4 flex justify-between items-center">
					<Button
						variant="ghost"
						size="sm"
						onClick={handleBackToHome}
						className="flex items-center gap-2 hover:bg-primary/10"
					>
						<ArrowLeft className="w-4 h-4" />
						Back to Home
					</Button>
					
					<Button
						onClick={handleWhatsAppContact}
						className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white"
					>
						<MessageCircle className="w-4 h-4" />
						WhatsApp Us
					</Button>
				</div>
			</motion.nav>

			{/* Hero Section */}
			<motion.section 
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
				className="relative h-screen flex items-center justify-center overflow-hidden"
			>
				<div className="absolute inset-0 z-0">
					<img
						src={malaysiaData.image}
						alt={malaysiaData.name}
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 bg-black/50" />
				</div>
				
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.3 }}
					className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mt-16"
				>
					<h1 className="font-heading font-extrabold text-5xl md:text-7xl mb-6">
						{malaysiaData.name}
					</h1>
					<p className="text-xl md:text-2xl mb-8 opacity-90">
						{malaysiaData.description}
					</p>
					<div className="flex flex-wrap justify-center gap-6 mb-8 text-lg">
						<div className="flex items-center gap-2">
							<MapPin className="w-5 h-5 text-primary" />
							<span>{malaysiaData.location}</span>
						</div>
						<div className="flex items-center gap-2">
							<Clock className="w-5 h-5 text-primary" />
							<span>{malaysiaData.duration}</span>
						</div>
						<div className="flex items-center gap-2">
							<Users className="w-5 h-5 text-primary" />
							<span>{malaysiaData.groupSize}</span>
						</div>
						<div className="flex items-center gap-2">
							<Star className="w-5 h-5 text-primary fill-primary" />
							<span>{malaysiaData.rating}/5</span>
						</div>
					</div>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button size="lg" className="text-lg px-8 py-3">
							Book Now - {malaysiaData.price}
						</Button>
						<Button 
							size="lg" 
							variant="outline" 
							onClick={handleWhatsAppContact}
							className="text-lg px-8 py-3 text-white border-white hover:bg-green-600 hover:border-green-600 flex items-center gap-2"
						>
							<MessageCircle className="w-5 h-5" />
							Chat on WhatsApp
						</Button>
					</div>
				</motion.div>
			</motion.section>

			{/* Overview Section */}
			<section className="py-20 px-4">
				<div className="container mx-auto max-w-6xl">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="grid md:grid-cols-2 gap-12 items-center"
					>
						<div>
							<h2 className="font-heading font-bold text-4xl mb-6">
								Why Choose Our{" "}
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
									Malaysia Experience?
								</span>
							</h2>
							<p className="text-lg text-muted-foreground mb-6 leading-relaxed">
								{malaysiaData.detailedInfo}
							</p>
							<div className="grid grid-cols-2 gap-4">
								{malaysiaData.highlights.map((highlight, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.5, delay: index * 0.1 }}
										className="flex items-center gap-3 p-3 rounded-lg bg-primary/5"
									>
										<div className="w-2 h-2 bg-primary rounded-full" />
										<span className="font-semibold">{highlight}</span>
									</motion.div>
								))}
							</div>
						</div>
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
							className="relative"
						>
							<img
								src="https://images.unsplash.com/photo-1508062878650-88b52897f298?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
								alt="Malaysia attractions"
								className="w-full h-96 object-cover rounded-2xl shadow-2xl"
							/>
							<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
								<div className="text-center">
									<div className="text-3xl font-bold text-primary">{malaysiaData.rating}</div>
									<div className="flex gap-1 mt-1">
										{[...Array(5)].map((_, i) => (
											<Star
												key={i}
												className={`w-4 h-4 ${
													i < Math.floor(malaysiaData.rating)
														? "text-yellow-400 fill-yellow-400"
														: "text-gray-300"
												}`}
											/>
										))}
									</div>
									<div className="text-sm text-muted-foreground mt-1">Rating</div>
								</div>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Itinerary Section */}
			<section className="py-20 bg-muted/30">
				<div className="container mx-auto px-4 max-w-6xl">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="text-center mb-16"
					>
						<h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
							Your Malaysia{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
								Discovery
							</span>
						</h2>
						<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
							A perfectly balanced journey through Malaysia's vibrant cities and tropical paradise
						</p>
					</motion.div>

					<div className="grid gap-8">
						{itinerary.map((day, index) => (
							<motion.div
								key={day.day}
								initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: index * 0.1 }}
								className="flex gap-8 items-start"
							>
								<div className="flex-shrink-0">
									<div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl">
										{day.day}
									</div>
								</div>
								<div className="flex-1 bg-white p-6 rounded-xl shadow-lg">
									<h3 className="font-heading font-bold text-2xl mb-4 text-primary">
										Day {day.day}: {day.title}
									</h3>
									<div className="grid md:grid-cols-2 gap-3">
										{day.activities.map((activity, actIndex) => (
											<div
												key={actIndex}
												className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg"
											>
												<div className="w-2 h-2 bg-secondary rounded-full" />
												<span>{activity}</span>
											</div>
										))}
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-gradient-to-r from-primary to-secondary">
				<div className="container mx-auto px-4 text-center">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="max-w-4xl mx-auto text-white"
					>
						<h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
							Ready for Your Malaysia Adventure?
						</h2>
						<p className="text-xl mb-8 opacity-90">
							Book your Malaysia discovery tour today and experience the perfect blend of culture and nature
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button size="lg" variant="secondary" className="text-lg px-8 py-3">
								Book Now - {malaysiaData.price}
							</Button>
							<Button size="lg" variant="outline" className="text-lg px-8 py-3 text-white border-white hover:bg-white hover:text-primary">
								Get Free Quote
							</Button>
							<Button 
								size="lg" 
								onClick={handleWhatsAppContact}
								className="text-lg px-8 py-3 bg-green-600 hover:bg-green-700 flex items-center gap-2"
							>
								<MessageCircle className="w-4 h-4" />
								Contact WhatsApp
							</Button>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Floating WhatsApp Button */}
			<motion.div
				initial={{ opacity: 0, scale: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5, delay: 1 }}
				className="fixed bottom-6 right-6 z-50"
			>
				<Button
					onClick={handleWhatsAppContact}
					className="w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
					title="Chat with us on WhatsApp"
				>
					<MessageCircle className="w-6 h-6" />
				</Button>
			</motion.div>
		</div>
	);
};

export default Malaysia;