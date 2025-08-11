import {
	MapPin,
	Phone,
	Mail,
	Facebook,
	Twitter,
	Instagram,
	Send,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { motion } from "framer-motion";

const Footer = () => {
	const tourDestinations = [
		"Thailand",
		"Singapore",
		"Malaysia",
		"Cambodia",
		"Indonesia",
		"Dubai",
	];
	const services = [
		"Air Ticketing",
		"Visa Assistance",
		"Hotel Booking",
		"Transportation",
	];

	return (
		<footer className="bg-foreground text-background pt-20">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				{/* Newsletter Section */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.8 }}
					className="bg-card text-card-foreground rounded-2xl p-8 md:p-12 -mt-40 mb-20 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8"
				>
					<div>
						<h3 className="font-heading font-bold text-3xl md:text-4xl mb-2">
							Subscribe to Our Newsletter
						</h3>
						<p className="text-muted-foreground text-lg">
							Get the latest travel deals and updates straight to your inbox.
						</p>
					</div>
					<form className="w-full lg:w-auto flex flex-col sm:flex-row gap-4">
						<Input
							type="email"
							placeholder="Enter your email"
							className="flex-grow"
						/>
						<Button size="lg" className="w-full sm:w-auto">
							<Send className="h-5 w-5 mr-2" />
							Subscribe
						</Button>
					</form>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
					{/* Company Info */}
					<div className="space-y-6 lg:col-span-1">
						<h3 className="font-heading font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
							Jazzy Travels
						</h3>
						<p className="text-background/80 leading-relaxed">
							Your trusted partner for creating unforgettable memories and
							extraordinary travel experiences.
						</p>
						<div className="flex space-x-4">
							{[Facebook, Twitter, Instagram].map((Icon, i) => (
								<motion.a
									key={i}
									href="#"
									whileHover={{ scale: 1.2, rotate: 10 }}
									className="inline-flex p-3 rounded-full bg-background/10 text-background hover:bg-primary hover:text-foreground transition-colors"
								>
									<Icon className="h-5 w-5" />
								</motion.a>
							))}
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="font-heading font-semibold text-xl mb-6 text-primary">
							Quick Links
						</h4>
						<ul className="space-y-3">
							{["Home", "Destinations", "Services", "Contact"].map((link) => (
								<li key={link}>
									<a
										href={`#${link.toLowerCase()}`}
										className="text-background/80 hover:text-primary transition-colors flex items-center"
									>
										<span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
										{link}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Popular Tours */}
					<div>
						<h4 className="font-heading font-semibold text-xl mb-6 text-primary">
							Popular Tours
						</h4>
						<ul className="space-y-3">
							{tourDestinations.map((destination) => (
								<li key={destination}>
									<a
										href="#destinations"
										className="text-background/80 hover:text-primary transition-colors"
									>
										{destination} Tours
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h4 className="font-heading font-semibold text-xl mb-6 text-primary">
							Contact Us
						</h4>
						<div className="space-y-4">
							<div className="flex items-start space-x-3">
								<MapPin className="h-5 w-5 text-primary mt-1" />
								<p className="text-background/80">
									Sri Lanka (Worldwide Services)
								</p>
							</div>
							<div className="flex items-start space-x-3">
								<Phone className="h-5 w-5 text-primary mt-1" />
								<p className="text-background/80">+94 77 383 8238</p>
							</div>
							<div className="flex items-start space-x-3">
								<Mail className="h-5 w-5 text-primary mt-1" />
								<p className="text-background/80 break-all">
									jz@jazzytravels-tours.com
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="border-t border-background/20 pt-8 pb-8">
					<div className="text-center text-sm text-background/60">
						<p>
							&copy; {new Date().getFullYear()} Jazzy Travels and Tours. All
							rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;