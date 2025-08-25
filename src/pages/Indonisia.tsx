import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Star, Clock, Users, MapPin, MessageCircle, Home, ArrowLeft, Mountain, Waves, Sunset } from "lucide-react";

const Indonesia = () => {
	const indonesiaData = {
		id: 6,
		name: "Indonesia Cultural Odyssey",
		location: "Bali, Yogyakarta & Jakarta",
		image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
		duration: "8 Days / 7 Nights",
		groupSize: "2-18 People",
		rating: 4.7,
		price: "From LKR 650000",
		highlights: [
			"Borobudur Temple at Sunrise",
			"Active Volcano Trekking",
			"Traditional Batik Workshops",
			"Authentic Javanese Culture",
		],
		description:
			"Discover the incredible diversity of Indonesia through ancient temples, volcanic adventures, vibrant cultures, and pristine tropical landscapes.",
		detailedInfo: "Experience the extraordinary cultural tapestry of Indonesia, from the mystical sunrise over Borobudur temple to the volcanic landscapes of Java and the artistic soul of Bali. Trek active volcanoes, learn traditional batik art from master craftsmen, explore royal palaces in Yogyakarta, witness traditional dance performances, and discover hidden waterfalls in lush rainforests. Immerse yourself in local village life, taste authentic Indonesian cuisine, and experience the warmth of Indonesian hospitality across multiple islands that showcase the incredible diversity of this archipelago nation."
	};

	const itinerary = [
		{
			day: 1,
			title: "Jakarta Arrival & Urban Culture",
			activities: ["Airport welcome with traditional lei", "Hotel check-in", "National Monument visit", "Traditional Indonesian dinner with cultural show"]
		},
		{
			day: 2,
			title: "Yogyakarta - Heart of Java",
			activities: ["Flight to Yogyakarta", "Sultan Palace (Kraton) exploration", "Traditional batik workshop", "Evening at Malioboro Street"]
		},
		{
			day: 3,
			title: "Borobudur Sunrise & Temple Complex",
			activities: ["Pre-dawn departure for Borobudur sunrise", "Guided temple exploration", "Traditional Javanese lunch", "Mendut and Pawon temples visit"]
		},
		{
			day: 4,
			title: "Volcano Adventure & Village Life",
			activities: ["Mount Merapi jeep safari", "Traditional village visit", "Local cooking class", "Hot springs relaxation"]
		},
		{
			day: 5,
			title: "Magical Bali Arrival",
			activities: ["Flight to Bali", "Ubud monkey forest sanctuary", "Traditional Balinese massage", "Rice terrace sunset walk"]
		},
		{
			day: 6,
			title: "Bali Temples & Waterfalls",
			activities: ["Tanah Lot temple visit", "Sekumpul waterfall trekking", "Traditional Balinese lunch", "Uluwatu temple sunset & Kecak dance"]
		},
		{
			day: 7,
			title: "Island Paradise & Culture",
			activities: ["Traditional market visit", "Silver jewelry workshop", "Beach relaxation time", "Farewell dinner with gamelan performance"]
		},
		{
			day: 8,
			title: "Departure with Memories",
			activities: ["Last-minute souvenir shopping", "Traditional blessing ceremony", "Airport transfer"]
		}
	];

	// WhatsApp contact function
	const handleWhatsAppContact = () => {
		const phoneNumber = "+94710356244"; // Replace with your actual WhatsApp number
		const message = encodeURIComponent(`Hi! I'm interested in the ${indonesiaData.name} package. Could you please provide more details about this cultural adventure?`);
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
						src={indonesiaData.image}
						alt={indonesiaData.name}
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
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
						<div className="inline-flex items-center gap-2 bg-emerald-600/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
							<Mountain className="w-4 h-4 text-emerald-200" />
							Cultural Adventure
						</div>
					</motion.div>
					
					<h1 className="font-heading font-extrabold text-4xl md:text-6xl mb-6 bg-gradient-to-r from-emerald-200 via-blue-200 to-purple-200 bg-clip-text text-transparent">
						{indonesiaData.name}
					</h1>
					<p className="text-xl md:text-2xl mb-8 opacity-90 font-light">
						{indonesiaData.description}
					</p>
					<div className="flex flex-wrap justify-center gap-6 mb-8 text-lg">
						<div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
							<MapPin className="w-5 h-5 text-emerald-300" />
							<span>{indonesiaData.location}</span>
						</div>
						<div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
							<Clock className="w-5 h-5 text-emerald-300" />
							<span>{indonesiaData.duration}</span>
						</div>
						<div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
							<Users className="w-5 h-5 text-emerald-300" />
							<span>{indonesiaData.groupSize}</span>
						</div>
						<div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
							<Star className="w-5 h-5 text-emerald-300 fill-emerald-300" />
							<span>{indonesiaData.rating}/5</span>
						</div>
					</div>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button size="lg" className="text-lg px-8 py-3 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 hover:from-emerald-700 hover:via-blue-700 hover:to-purple-700 shadow-lg">
							Start Adventure - {indonesiaData.price}
						</Button>
						<Button 
							size="lg" 
							variant="outline" 
							onClick={handleWhatsAppContact}
							className="text-lg px-8 py-3 text-white border-white hover:bg-green-600 hover:border-green-600 flex items-center gap-2 backdrop-blur-sm"
						>
							<MessageCircle className="w-5 h-5" />
							Plan Journey
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
								<span className="inline-flex items-center gap-2 text-emerald-600 font-medium text-sm bg-emerald-50 px-3 py-1 rounded-full">
									<Waves className="w-4 h-4" />
									Island Adventure
								</span>
							</motion.div>
							<h2 className="font-heading font-bold text-4xl mb-6">
								Experience Indonesia's{" "}
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600">
									Cultural Treasures
								</span>
							</h2>
							<p className="text-lg text-muted-foreground mb-6 leading-relaxed">
								{indonesiaData.detailedInfo}
							</p>
							<div className="grid grid-cols-1 gap-4">
								{indonesiaData.highlights.map((highlight, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.5, delay: index * 0.1 }}
										className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-emerald-50 via-blue-50 to-purple-50 border border-emerald-100"
									>
										<div className="w-3 h-3 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 rounded-full flex-shrink-0" />
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
									src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
									alt="Borobudur Temple Indonesia"
									className="w-full h-96 object-cover"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
							</div>
							<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-emerald-100">
								<div className="text-center">
									<div className="text-3xl font-bold text-emerald-600">{indonesiaData.rating}</div>
									<div className="flex gap-1 mt-1">
										{[...Array(5)].map((_, i) => (
											<Star
												key={i}
												className={`w-4 h-4 ${
													i < Math.floor(indonesiaData.rating)
														? "text-emerald-400 fill-emerald-400"
														: "text-gray-300"
												}`}
											/>
										))}
									</div>
									<div className="text-sm text-muted-foreground mt-1">Adventure Rating</div>
								</div>
							</div>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: 0.3 }}
								className="absolute top-4 left-4 bg-emerald-600/90 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-medium"
							>
								17,000+ Islands to Explore
							</motion.div>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Itinerary Section */}
			<section className="py-20 bg-gradient-to-b from-emerald-50 via-blue-50 to-purple-50">
				<div className="container mx-auto px-4 max-w-6xl">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="text-center mb-16"
					>
						<div className="inline-flex items-center gap-2 text-emerald-600 font-medium text-sm bg-white px-4 py-2 rounded-full mb-4">
							<Sunset className="w-4 h-4" />
							Cultural Journey
						</div>
						<h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
							Your Indonesian{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600">
								Adventure
							</span>
						</h2>
						<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
							A comprehensive journey through Indonesia's most captivating destinations, from ancient temples to volcanic landscapes
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
									<div className="w-16 h-16 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
										{day.day}
									</div>
								</div>
								<div className="flex-1 bg-white p-6 rounded-xl shadow-lg border border-emerald-100">
									<h3 className="font-heading font-bold text-2xl mb-4 text-emerald-700">
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
												className="flex items-center gap-3 p-3 bg-gradient-to-r from-emerald-50 via-blue-50 to-purple-50 rounded-lg border border-emerald-100"
											>
												<div className="w-2 h-2 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 rounded-full flex-shrink-0" />
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

			{/* Special Features Section */}
			<section className="py-20">
				<div className="container mx-auto px-4 max-w-6xl">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="text-center mb-12"
					>
						<h2 className="font-heading font-bold text-4xl mb-4">
							Unique Indonesian{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600">
								Experiences
							</span>
						</h2>
					</motion.div>
					
					<div className="grid md:grid-cols-3 gap-8">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.1 }}
							className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-xl text-center"
						>
							<Mountain className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
							<h3 className="font-bold text-xl mb-2 text-emerald-800">Volcano Adventures</h3>
							<p className="text-emerald-700">Trek active volcanoes and witness the raw power of nature in Indonesia's Ring of Fire</p>
						</motion.div>
						
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center"
						>
							<Waves className="w-12 h-12 text-blue-600 mx-auto mb-4" />
							<h3 className="font-bold text-xl mb-2 text-blue-800">Island Hopping</h3>
							<p className="text-blue-700">Explore pristine beaches and tropical paradises across the Indonesian archipelago</p>
						</motion.div>
						
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.3 }}
							className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center"
						>
							<Sunset className="w-12 h-12 text-purple-600 mx-auto mb-4" />
							<h3 className="font-bold text-xl mb-2 text-purple-800">Cultural Heritage</h3>
							<p className="text-purple-700">Immerse yourself in ancient traditions, temples, and diverse local cultures</p>
						</motion.div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600">
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
							<Mountain className="w-12 h-12 mx-auto text-emerald-200 mb-4" />
						</motion.div>
						<h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
							Ready to Explore Indonesia?
						</h2>
						<p className="text-xl mb-8 opacity-90">
							Discover the incredible diversity of cultures, landscapes, and adventures waiting for you across Indonesia's magical islands
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button size="lg" variant="secondary" className="text-lg px-8 py-3 bg-white text-emerald-600 hover:bg-emerald-50">
								Start Adventure - {indonesiaData.price}
							</Button>
							<Button size="lg" variant="outline" className="text-lg px-8 py-3 text-white border-white hover:bg-white hover:text-emerald-600">
								Custom Itinerary
							</Button>
							<Button 
								size="lg" 
								onClick={handleWhatsAppContact}
								className="text-lg px-8 py-3 bg-green-600 hover:bg-green-700 flex items-center gap-2"
							>
								<MessageCircle className="w-4 h-4" />
								Plan Your Journey
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
					title="Plan your Indonesian adventure on WhatsApp"
				>
					<MessageCircle className="w-6 h-6" />
				</Button>
			</motion.div>
		</div>
	);
};

export default Indonesia;