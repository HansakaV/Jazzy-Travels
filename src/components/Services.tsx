import { Button } from "@/components/ui/button";
import {
	Plane,
	MapPin,
	Hotel,
	Car,
	Camera,
	FileText,
	CheckCircle,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

const services = [
	{
		icon: Plane,
		title: "Air Ticketing",
		description:
			"Best deals on international and domestic flights with flexible booking options.",
		features: ["Competitive prices", "24/7 support", "Easy cancellation"],
	},
	{
		icon: FileText,
		title: "Visa Assistance",
		description:
			"Complete visa processing support for all destinations with expert guidance.",
		features: ["Document verification", "Fast processing", "Success guarantee"],
	},
	{
		icon: Camera,
		title: "Tourist Packages",
		description:
			"Curated tour packages covering all major attractions and hidden gems.",
		features: ["All-inclusive tours", "Local guides", "Group & private options"],
	},
	{
		icon: Hotel,
		title: "Accommodation",
		description:
			"Premium hotels and resorts booking with best price guarantees.",
		features: ["Verified properties", "Best rates", "Instant confirmation"],
	},
	{
		icon: Car,
		title: "Transportation",
		description:
			"Comfortable and reliable transport solutions for all your travel needs.",
		features: ["Airport transfers", "City tours", "Private vehicles"],
	},
	{
		icon: MapPin,
		title: "Custom Itineraries",
		description:
			"Personalized travel plans designed according to your preferences and budget.",
		features: ["Tailored experiences", "Flexible scheduling", "Local insights"],
	},
];

const cardVariants: Variants = {
	hidden: { opacity: 0, scale: 0.9 },
	visible: (i: number) => ({
		opacity: 1,
		scale: 1,
		transition: {
			delay: i * 0.15,
			duration: 0.6,
			ease: "easeOut",
		},
	}),
};

const Services = () => {
	return (
		<section id="services" className="py-24 bg-muted/20">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h2 className="font-heading font-extrabold text-4xl md:text-5xl mb-4">
						Our{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
							Services
						</span>
					</h2>
					<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
						From planning to execution, we handle every aspect of your journey to
						ensure a seamless and unforgettable travel experience.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, i) => (
						<motion.div
							key={service.title}
							variants={cardVariants}
							custom={i}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.3 }}
							className="group p-8 rounded-2xl bg-card shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-500 border flex flex-col"
						>
							<motion.div
								whileHover={{ scale: 1.1, rotate: 5 }}
								className="inline-flex p-4 rounded-xl bg-primary/10 text-primary mb-6 self-start"
							>
								<service.icon className="h-8 w-8" />
							</motion.div>

							<h3 className="font-heading font-bold text-2xl mb-4 text-foreground">
								{service.title}
							</h3>

							<p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
								{service.description}
							</p>

							<ul className="space-y-3">
								{service.features.map((feature, idx) => (
									<li
										key={idx}
										className="flex items-center text-muted-foreground"
									>
										<CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
										<span>{feature}</span>
									</li>
								))}
							</ul>
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
					<Button size="lg" className="text-lg px-8 py-6">
						Get Free Consultation
					</Button>
				</motion.div>
			</div>
		</section>
	);
};

export default Services;