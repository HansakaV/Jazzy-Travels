import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Star, Clock, Users, MapPin, MessageCircle, Home, ArrowLeft, Heart, Camera } from "lucide-react";
import cambodia from "@/assets/cambodia.jpg";
import cambodia2 from "@/assets/cam2.jpg";

const Cambodia = () => {
	const cambodiaData = {
		id: 5,
		name: "Cambodia Buddhist Heritage Tour",
		location: "Siem Reap & Phnom Penh",
		image: cambodia,
		duration: "6 Days / 5 Nights",
		groupSize: "2-20 People",
		rating: 4.8,
		price: "Contact for Pricing",
		highlights: [
			"Angkor Wat Temple Complex",
			"Buddhist Monastery Visits",
			"Sunrise Meditation",
			"Traditional Blessing Ceremonies",
		],
		description:
			"Embark on a spiritual journey through Cambodia's ancient Buddhist heritage, exploring magnificent temples and experiencing authentic Buddhist culture.",
		detailedInfo: "Discover the profound spiritual heritage of Cambodia through its magnificent temple complexes and living Buddhist traditions. Experience sunrise meditation at the iconic Angkor Wat, receive blessings from Buddhist monks, explore hidden temples deep in the jungle, and witness the daily alms-giving ceremonies. Visit active monasteries where you can learn about Buddhist philosophy, participate in traditional water blessing ceremonies, and enjoy peaceful moments of reflection in sacred spaces that have welcomed pilgrims for over 800 years."
	};

	const itinerary = [
		{
			day: 1,
			title: "Arrival & Spiritual Welcome",
			activities: ["Airport pickup with traditional blessing", "Hotel check-in", "Welcome ceremony at local monastery", "Evening meditation session"]
		},
		{
			day: 2,
			title: "Angkor Wat Sunrise & Buddhist Temples",
			activities: ["Pre-dawn departure for Angkor Wat sunrise", "Guided temple exploration with Buddhist history", "Angkor Thom & Bayon Temple", "Monk blessing ceremony"]
		},
		{
			day: 3,
			title: "Hidden Temples & Monastery Life",
			activities: ["Ta Prohm jungle temple", "Visit active Buddhist monastery", "Lunch with monks", "Traditional alms-giving participation"]
		},
		{
			day: 4,
			title: "Spiritual Phnom Penh",
			activities: ["Flight to Phnom Penh", "Silver Pagoda visit", "Royal Palace Buddhist art collection", "Wat Phnom temple blessing"]
		},
		{
			day: 5,
			title: "Cultural Immersion & Reflection",
			activities: ["Morning meditation at Wat Ounalom", "Traditional Khmer Buddhist art workshop", "Mekong River sunset ceremony", "Farewell dinner with cultural show"]
		},
		{
			day: 6,
			title: "Peaceful Departure",
			activities: ["Final temple visit for travel blessings", "Traditional souvenir shopping", "Airport transfer with monk's blessing"]
		}
	];

	// WhatsApp contact function
	const handleWhatsAppContact = () => {
		const phoneNumber = "+94710356244"; // Replace with your actual WhatsApp number
		const message = encodeURIComponent(`Hi! I'm interested in the ${cambodiaData.name} package. Could you please provide more details about this spiritual journey?`);
		const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
		window.open(whatsappUrl, '_blank');
	};

	// Back to home function
	const handleBackToHome = () => {
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
						src={cambodiaData.image}
						alt={cambodiaData.name}
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
				</div>
				
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.3 }}
					className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mt-16"
				>
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 1, delay: 0.5 }}
						className="mb-4"
					>
						<div className="inline-flex items-center gap-2 bg-orange-600/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
							<Heart className="w-4 h-4 text-orange-200" />
							Spiritual Journey
						</div>
					</motion.div>
					
					<h1 className="font-heading font-extrabold text-4xl md:text-6xl mb-6 bg-gradient-to-r from-orange-200 to-yellow-200 bg-clip-text text-transparent">
						{cambodiaData.name}
					</h1>
					<p className="text-xl md:text-2xl mb-8 opacity-90 font-light">
						{cambodiaData.description}
					</p>
					<div className="flex flex-wrap justify-center gap-6 mb-8 text-lg">
						<div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
							<MapPin className="w-5 h-5 text-orange-300" />
							<span>{cambodiaData.location}</span>
						</div>
						<div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
							<Clock className="w-5 h-5 text-orange-300" />
							<span>{cambodiaData.duration}</span>
						</div>
						<div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
							<Users className="w-5 h-5 text-orange-300" />
							<span>{cambodiaData.groupSize}</span>
						</div>
						<div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
							<Star className="w-5 h-5 text-orange-300 fill-orange-300" />
							<span>{cambodiaData.rating}/5</span>
						</div>
					</div>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button size="lg" className="text-lg px-8 py-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 shadow-lg">
							Begin Your Journey - {cambodiaData.price}
						</Button>
						<Button 
							size="lg" 
							variant="outline" 
							onClick={handleWhatsAppContact}
							className="text-lg px-8 py-3 text-white border-white hover:bg-green-600 hover:border-green-600 flex items-center gap-2 backdrop-blur-sm"
						>
							<MessageCircle className="w-5 h-5" />
							Spiritual Guidance
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
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6 }}
								className="mb-4"
							>
								<span className="inline-flex items-center gap-2 text-orange-600 font-medium text-sm bg-orange-50 px-3 py-1 rounded-full">
									<Heart className="w-4 h-4" />
									Sacred Journey
								</span>
							</motion.div>
							<h2 className="font-heading font-bold text-4xl mb-6">
								Discover Cambodia's{" "}
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
									Buddhist Soul
								</span>
							</h2>
							<p className="text-lg text-muted-foreground mb-6 leading-relaxed">
								{cambodiaData.detailedInfo}
							</p>
							<div className="grid grid-cols-1 gap-4">
								{cambodiaData.highlights.map((highlight, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.5, delay: index * 0.1 }}
										className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-orange-50 to-red-50 border border-orange-100"
									>
										<div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex-shrink-0" />
										<span className="font-semibold text-gray-800">{highlight}</span>
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
							<div className="relative overflow-hidden rounded-2xl shadow-2xl">
								<img
									src={cambodia2}
									alt="Buddhist monks at Angkor Wat"
									className="w-full h-96 object-cover"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
							</div>
							<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-orange-100">
								<div className="text-center">
									<div className="text-3xl font-bold text-orange-600">{cambodiaData.rating}</div>
									<div className="flex gap-1 mt-1">
										{[...Array(5)].map((_, i) => (
											<Star
												key={i}
												className={`w-4 h-4 ${
													i < Math.floor(cambodiaData.rating)
														? "text-orange-400 fill-orange-400"
														: "text-gray-300"
												}`}
											/>
										))}
									</div>
									<div className="text-sm text-muted-foreground mt-1">Spiritual Rating</div>
								</div>
							</div>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: 0.3 }}
								className="absolute top-4 left-4 bg-orange-600/90 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-medium"
							>
								Sacred Temples Await
							</motion.div>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Itinerary Section */}
			<section className="py-20 bg-gradient-to-b from-orange-50 to-red-50">
				<div className="container mx-auto px-4 max-w-6xl">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="text-center mb-16"
					>
						<div className="inline-flex items-center gap-2 text-orange-600 font-medium text-sm bg-white px-4 py-2 rounded-full mb-4">
							<Camera className="w-4 h-4" />
							Sacred Journey
						</div>
						<h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
							Your Spiritual{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
								Awakening
							</span>
						</h2>
						<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
							A thoughtfully designed pilgrimage through Cambodia's most sacred Buddhist sites and living traditions
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
									<div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
										{day.day}
									</div>
								</div>
								<div className="flex-1 bg-white p-6 rounded-xl shadow-lg border border-orange-100">
									<h3 className="font-heading font-bold text-2xl mb-4 text-orange-700">
										Day {day.day}: {day.title}
									</h3>
									<div className="grid md:grid-cols-2 gap-3">
										{day.activities.map((activity, actIndex) => (
											<motion.div
												key={actIndex}
												initial={{ opacity: 0, y: 10 }}
												whileInView={{ opacity: 1, y: 0 }}
												viewport={{ once: true }}
												transition={{ duration: 0.4, delay: actIndex * 0.1 }}
												className="flex items-center gap-3 p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-100"
											>
												<div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex-shrink-0" />
												<span className="text-gray-700">{activity}</span>
											</motion.div>
										))}
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-gradient-to-r from-orange-600 via-red-600 to-orange-700">
				<div className="container mx-auto px-4 text-center">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="max-w-4xl mx-auto text-white"
					>
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="mb-6"
						>
							<Heart className="w-12 h-12 mx-auto text-orange-200 mb-4" />
						</motion.div>
						<h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
							Ready for Your Sacred Journey?
						</h2>
						<p className="text-xl mb-8 opacity-90">
							Experience the profound peace and spiritual awakening that awaits you in Cambodia's ancient temples
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button size="lg" variant="secondary" className="text-lg px-8 py-3 bg-white text-orange-600 hover:bg-orange-50">
								Begin Journey - {cambodiaData.price}
							</Button>
							<Button size="lg" variant="outline" className="text-lg px-8 py-3 text-white border-white hover:bg-white hover:text-orange-600">
								Request Blessing
							</Button>
							<Button 
								size="lg" 
								onClick={handleWhatsAppContact}
								className="text-lg px-8 py-3 bg-green-600 hover:bg-green-700 flex items-center gap-2"
							>
								<MessageCircle className="w-4 h-4" />
								Spiritual Guidance
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
					title="Get spiritual guidance on WhatsApp"
				>
					<MessageCircle className="w-6 h-6" />
				</Button>
			</motion.div>
		</div>
	);
};

export default Cambodia;