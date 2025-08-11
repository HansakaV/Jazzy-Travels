import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, Star } from "lucide-react";
import { motion, Variants } from "framer-motion";
import bangkokHero from "@/assets/bangkok-hero.jpg";
import singaporeHero from "@/assets/singapore-hero.jpg";
import malaysiaHero from "@/assets/malaysia-hero.jpg";
import dubaiHero from "@/assets/dubai-hero.jpg";

const destinations = [
	{
		id: 1,
		name: "Thailand Tour",
		location: "Bangkok & Pattaya",
		image: bangkokHero,
		duration: "6 Days / 5 Nights",
		groupSize: "2-20 People",
		rating: 4.8,
		price: "From $799",
		highlights: [
			"Golden Temples",
			"Floating Markets",
			"Thai Cuisine",
			"Cultural Shows",
		],
		description:
			"Experience the vibrant culture and stunning beauty of Thailand with visits to iconic temples, bustling markets, and pristine beaches.",
	},
	{
		id: 2,
		name: "Singapore Tour",
		location: "Marina Bay & Sentosa",
		image: singaporeHero,
		duration: "4 Days / 3 Nights",
		groupSize: "2-15 People",
		rating: 4.9,
		price: "From $999",
		highlights: [
			"Marina Bay Sands",
			"Universal Studios",
			"Gardens by the Bay",
			"Night Safari",
		],
		description:
			"Discover the modern marvels and multicultural charm of Singapore, from futuristic architecture to world-class attractions.",
	},
	{
		id: 3,
		name: "Malaysia Tour",
		location: "Kuala Lumpur & Penang",
		image: malaysiaHero,
		duration: "5 Days / 4 Nights",
		groupSize: "2-18 People",
		rating: 4.7,
		price: "From $699",
		highlights: [
			"Petronas Towers",
			"Batu Caves",
			"George Town",
			"Local Cuisine",
		],
		description:
			"Explore Malaysia's diverse landscapes, rich heritage, and delicious street food in this comprehensive cultural journey.",
	},
	{
		id: 4,
		name: "Dubai Tour",
		location: "Modern Dubai & Old Dubai",
		image: dubaiHero,
		duration: "5 Days / 4 Nights",
		groupSize: "2-12 People",
		rating: 4.9,
		price: "From $1299",
		highlights: ["Burj Khalifa", "Desert Safari", "Dubai Mall", "Gold Souk"],
		description:
			"Experience luxury and innovation in Dubai, where traditional Arabian culture meets cutting-edge modernity.",
	},
];

const cardVariants: Variants = {
	hidden: { opacity: 0, y: 50 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.2,
			duration: 0.8,
			ease: "easeOut",
		},
	}),
};

const Destinations = () => {
	return (
		<section id="destinations" className="py-24 bg-background">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h2 className="font-heading font-extrabold text-4xl md:text-5xl mb-4">
						Popular{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
							Destinations
						</span>
					</h2>
					<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
						Discover our handpicked destinations that offer unforgettable
						experiences and memories to last a lifetime.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
					{destinations.map((destination, i) => (
						<motion.div
							key={destination.id}
							variants={cardVariants}
							custom={i}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.2 }}
							className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-card border"
						>
							<div className="relative h-72 overflow-hidden">
								<img
									src={destination.image}
									alt={destination.name}
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
								<div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold text-sm shadow-md">
									{destination.price}
								</div>
								<div className="absolute bottom-4 left-4 text-white">
									<div className="flex items-center space-x-2 mb-1">
										<MapPin className="h-5 w-5 text-primary" />
										<span className="font-semibold">{destination.location}</span>
									</div>
									<h3 className="font-heading font-bold text-2xl">
										{destination.name}
									</h3>
								</div>
							</div>
							<div className="p-6">
								<div className="flex items-center justify-between mb-4 text-muted-foreground">
									<div className="flex items-center space-x-2">
										<Clock className="h-5 w-5" />
										<span>{destination.duration}</span>
									</div>
									<div className="flex items-center space-x-2">
										<Users className="h-5 w-5" />
										<span>{destination.groupSize}</span>
									</div>
									<div className="flex items-center space-x-1">
										<Star className="h-5 w-5 text-primary fill-current" />
										<span className="font-bold text-foreground">
											{destination.rating}
										</span>
									</div>
								</div>
								<p className="text-muted-foreground mb-6">
									{destination.description}
								</p>
								<div className="mb-6">
									<h4 className="font-semibold mb-3">Tour Highlights:</h4>
									<div className="flex flex-wrap gap-2">
										{destination.highlights.map((highlight, index) => (
											<span
												key={index}
												className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
											>
												{highlight}
											</span>
										))}
									</div>
								</div>
								<div className="flex space-x-4">
									<Button className="flex-1">View Details</Button>
									<Button variant="outline" className="flex-1">
										Book Now
									</Button>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.8, delay: 0.5 }}
					className="text-center mt-16"
				>
					<Button variant="secondary" size="lg">
						View All Destinations
					</Button>
				</motion.div>
			</div>
		</section>
	);
};

export default Destinations;