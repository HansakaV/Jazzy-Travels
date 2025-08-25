import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";
import bangkokHero from "@/assets/bangkok-hero.jpg";
import singaporeHero from "@/assets/singapore-hero.jpg";
import malaysiaHero from "@/assets/malaysia-hero.jpg";
import dubaiHero from "@/assets/dubai-hero.jpg";
import cambodia from "@/assets/cambodia.jpg";
import indonesia from "@/assets/indonisia.jpg";
import { useNavigate } from "react-router-dom";

const destinations = [
	{
		id: 1,
		name: "Thailand Tour",
		image: bangkokHero,
		route: "/thailand" // Updated to match router
	},
	{
		id: 2,
		name: "Singapore Tour",
		image: singaporeHero,
		route: "/singapore"
	},
	{
		id: 3,
		name: "Malaysia Tour",
		image: malaysiaHero,
		route: "/malaysia"
	},
	{
		id: 4,
		name: "Dubai Tour",
		image: dubaiHero,
		route: "/dubai" // Updated route
	},
	{
		id: 5,
		name : "Cambodia Tour",
		image: cambodia,
		route: "/cambodia"
	},
	{
		id: 6,
		name: "Indonesia Tour",
		image: indonesia,
		route: "/indonesia"
	}
	
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
  const navigate = useNavigate();

  const handleImageClick = (route: string) => {
    console.log(`Navigating to ${route}`);
    navigate(route); // ✅ Correct way
  };

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

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{destinations.map((destination, i) => (
						<motion.div
							key={destination.id}
							variants={cardVariants}
							custom={i}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.2 }}
							className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
							onClick={() => handleImageClick(destination.route)}
						>
							<div className="relative h-64 overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
								<img
									src={destination.image}
									alt={destination.name}
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
								<div className="absolute bottom-4 left-4 text-white">
									<h3 className="font-heading font-bold text-xl group-hover:text-primary transition-colors duration-300">
										{destination.name}
									</h3>
								</div>
								{/* Hover overlay */}
								<div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center">
									<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 px-4 py-2 rounded-full">
										<span className="text-primary font-semibold">Click to Explore</span>
									</div>
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
					{/* <Button variant="secondary" size="lg">
						View All Destinations
					</Button>
	 */}			</motion.div>
			</div>
		</section>
	);
};

export default Destinations;