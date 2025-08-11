import { DollarSign, Shield, Heart, Globe } from "lucide-react";
import { motion, Variants } from "framer-motion";

const features = [
	{
		icon: DollarSign,
		title: "Best Value",
		description:
			"Reasonable prices for unforgettable experiences. We believe great travel shouldn't break the bank.",
		color: "text-green-500",
		bgColor: "bg-green-500/10",
	},
	{
		icon: Heart,
		title: "Comfort",
		description:
			"Quality accommodations and comfortable transportation ensuring your journey is as enjoyable as your destination.",
		color: "text-red-500",
		bgColor: "bg-red-500/10",
	},
	{
		icon: Shield,
		title: "Safety",
		description:
			"Your safety is our priority. We ensure secure and well-planned itineraries with trusted local partners.",
		color: "text-blue-500",
		bgColor: "bg-blue-500/10",
	},
	{
		icon: Globe,
		title: "Friendly Service",
		description:
			"Warm, courteous service with personalized attention. We're here to make your travel dreams come true.",
		color: "text-purple-500",
		bgColor: "bg-purple-500/10",
	},
];

const cardVariants: Variants = {
	hidden: { opacity: 0, y: 30 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.2,
			duration: 0.7,
			ease: "easeOut",
		},
	}),
};

const Features = () => {
	return (
		<section className="py-24 bg-background">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h2 className="font-heading font-extrabold text-4xl md:text-5xl mb-4">
						Why Choose{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
							Jazzy Travels
						</span>
						?
					</h2>
					<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
						With years of experience and thousands of satisfied customers, we
						deliver exceptional travel experiences tailored to you.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{features.map((feature, i) => (
						<motion.div
							key={feature.title}
							variants={cardVariants}
							custom={i}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.4 }}
							className="group p-8 rounded-2xl bg-card shadow-lg hover:shadow-xl transition-all duration-400 border text-center"
						>
							<motion.div
								whileHover={{ scale: 1.1, rotate: -5 }}
								className={`inline-flex p-4 rounded-full mb-6 ${feature.bgColor}`}
							>
								<feature.icon className={`h-9 w-9 ${feature.color}`} />
							</motion.div>

							<h3 className="font-heading font-bold text-2xl mb-3 text-foreground">
								{feature.title}
							</h3>

							<p className="text-muted-foreground leading-relaxed">
								{feature.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;