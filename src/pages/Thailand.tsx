import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Star, Clock, Users, MapPin, MessageCircle, Home, ArrowLeft } from "lucide-react";

const Thailand = () => {
	const thailandData = {
		id: 7,
		name: "Thailand Paradise Tour",
		location: "Bangkok & Phuket",
		image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
		duration: "7 Days / 6 Nights",
		groupSize: "2-25 People",
		rating: 4.8,
		price: "From LKR 209990 per person",
		highlights: [
			"Grand Palace Bangkok",
			"Phi Phi Islands",
			"Thai Cooking Classes",
			"Traditional Massage",
		],
		description:
			"Experience the Land of Smiles with its golden temples, pristine beaches, delicious cuisine, and warm hospitality.",
		detailedInfo: "Immerse yourself in Thailand's rich culture and natural beauty. Explore Bangkok's magnificent temples including the Grand Palace and Wat Pho, cruise through floating markets, learn authentic Thai cooking, and relax on the stunning beaches of Phuket. Take island-hopping tours to the famous Phi Phi Islands, enjoy traditional Thai massages, experience vibrant nightlife, and discover the perfect balance between spiritual tranquility and tropical paradise."
	};

	const itinerary = [
		{
			day: 1,
			title: "Arrival in Bangkok",
			activities: ["Airport pickup", "Hotel check-in", "Welcome dinner", "Khao San Road evening walk"]
		},
		{
			day: 2,
			title: "Bangkok Temple Tour",
			activities: ["Grand Palace visit", "Wat Pho temple", "Wat Arun temple", "Chao Phraya River cruise"]
		},
		{
			day: 3,
			title: "Bangkok Markets & Culture",
			activities: ["Floating market tour", "Thai cooking class", "Traditional massage", "Shopping at Chatuchak Market"]
		},
		{
			day: 4,
			title: "Flight to Phuket",
			activities: ["Morning flight to Phuket", "Beach resort check-in", "Patong Beach relaxation", "Sunset dinner"]
		},
		{
			day: 5,
			title: "Phi Phi Islands Day Trip",
			activities: ["Speedboat to Phi Phi Islands", "Maya Bay visit", "Snorkeling", "Beach BBQ lunch"]
		},
		{
			day: 6,
			title: "Phuket Island Exploration",
			activities: ["Big Buddha visit", "Kata Viewpoint", "Old Phuket Town", "Thai cultural show"]
		},
		{
			day: 7,
			title: "Departure",
			activities: ["Beach relaxation", "Last-minute shopping", "Airport transfer", "Flight departure"]
		}
	];

	// WhatsApp contact function
	const handleWhatsAppContact = () => {
		const phoneNumber = "+94773838238"; // Replace with your actual WhatsApp number
		const message = encodeURIComponent(`Hi! I'm interested in the ${thailandData.name} package. Could you please provide more details?`);
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
						src={thailandData.image}
						alt={thailandData.name}
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
						{thailandData.name}
					</h1>
					<p className="text-xl md:text-2xl mb-8 opacity-90">
						{thailandData.description}
					</p>
					<div className="flex flex-wrap justify-center gap-6 mb-8 text-lg">
						<div className="flex items-center gap-2">
							<MapPin className="w-5 h-5 text-primary" />
							<span>{thailandData.location}</span>
						</div>
						<div className="flex items-center gap-2">
							<Clock className="w-5 h-5 text-primary" />
							<span>{thailandData.duration}</span>
						</div>
						<div className="flex items-center gap-2">
							<Users className="w-5 h-5 text-primary" />
							<span>{thailandData.groupSize}</span>
						</div>
						<div className="flex items-center gap-2">
							<Star className="w-5 h-5 text-primary fill-primary" />
							<span>{thailandData.rating}/5</span>
						</div>
					</div>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button size="lg" className="text-lg px-8 py-3">
							Book Now - {thailandData.price}
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
									Thailand Experience?
								</span>
							</h2>
							<p className="text-lg text-muted-foreground mb-6 leading-relaxed">
								{thailandData.detailedInfo}
							</p>
							<div className="grid grid-cols-2 gap-4">
								{thailandData.highlights.map((highlight, index) => (
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
								src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
								alt="Thailand attractions"
								className="w-full h-96 object-cover rounded-2xl shadow-2xl"
							/>
							<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
								<div className="text-center">
									<div className="text-3xl font-bold text-primary">{thailandData.rating}</div>
									<div className="flex gap-1 mt-1">
										{[...Array(5)].map((_, i) => (
											<Star
												key={i}
												className={`w-4 h-4 ${
													i < Math.floor(thailandData.rating)
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
							Your Thailand{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
								Paradise
							</span>
						</h2>
						<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
							A perfect blend of cultural immersion in Bangkok and tropical relaxation in Phuket
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
							Ready for Your Thailand Adventure?
						</h2>
						<p className="text-xl mb-8 opacity-90">
							Book your Thailand paradise tour today and experience the perfect blend of culture, cuisine, and tropical beauty
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button size="lg" variant="secondary" className="text-lg px-8 py-3">
								Book Now - {thailandData.price}
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

export default Thailand;