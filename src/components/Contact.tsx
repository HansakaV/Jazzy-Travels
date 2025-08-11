import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Facebook, Send } from "lucide-react";
import { motion } from "framer-motion";

const contactInfo = [
	{
		icon: Phone,
		title: "Phone",
		details: ["+94 77 383 8238", "+94 71 070 9888"],
		color: "text-blue-500",
		bgColor: "bg-blue-500/10",
	},
	{
		icon: Mail,
		title: "Email",
		details: ["jz@jazzytravels-tours.com", "srilankajazzytravels@gmail.com"],
		color: "text-red-500",
		bgColor: "bg-red-500/10",
	},
	{
		icon: MapPin,
		title: "Location",
		details: ["Sri Lanka", "Serving worldwide"],
		color: "text-green-500",
		bgColor: "bg-green-500/10",
	},
	{
		icon: Clock,
		title: "Hours",
		details: ["Mon-Sat: 9am-6pm", "Sun: 10am-4pm"],
		color: "text-purple-500",
		bgColor: "bg-purple-500/10",
	},
];

const Contact = () => {
	return (
		<section id="contact" className="py-24 bg-muted/20">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h2 className="font-heading font-extrabold text-4xl md:text-5xl mb-4">
						Get in{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
							Touch
						</span>
					</h2>
					<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
						Ready to plan your next adventure? Contact us today and let's
						create your perfect travel experience.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
					{/* Contact Information */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.9 }}
						className="lg:col-span-2 space-y-8"
					>
						<h3 className="font-heading font-bold text-3xl mb-6">
							Contact Information
						</h3>
						<div className="space-y-6">
							{contactInfo.map((info) => (
								<div key={info.title} className="flex items-start space-x-4">
									<div
										className={`p-3 rounded-full ${info.bgColor} ${info.color}`}
									>
										<info.icon className="h-6 w-6" />
									</div>
									<div>
										<h4 className="font-semibold text-lg text-foreground">
											{info.title}
										</h4>
										{info.details.map((detail) => (
											<p key={detail} className="text-muted-foreground">
												{detail}
											</p>
										))}
									</div>
								</div>
							))}
						</div>
						<Card className="bg-card border shadow-lg">
							<CardHeader>
								<CardTitle className="flex items-center space-x-3">
									<Facebook className="h-6 w-6 text-blue-600" />
									<span className="text-xl">Follow Us on Facebook</span>
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground mb-4">
									Stay updated with our latest tours and travel tips.
								</p>
								<Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
									Visit Our Page
								</Button>
							</CardContent>
						</Card>
					</motion.div>

					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.9 }}
						className="lg:col-span-3"
					>
						<Card className="p-8 bg-card border shadow-lg">
							<CardHeader className="text-center p-0 mb-6">
								<CardTitle className="text-3xl font-heading">
									Send us a Message
								</CardTitle>
								<p className="text-muted-foreground pt-2">
									We'll get back to you within 24 hours.
								</p>
							</CardHeader>
							<CardContent className="p-0">
								<form className="space-y-6">
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
										<Input placeholder="First Name" />
										<Input placeholder="Last Name" />
									</div>
									<Input type="email" placeholder="Email Address" />
									<Input type="tel" placeholder="Phone Number" />
									<Input placeholder="Destination of Interest (e.g., Thailand)" />
									<Textarea
										placeholder="Tell us about your travel plans..."
										className="min-h-[140px]"
									/>
									<Button size="lg" className="w-full text-lg">
										<Send className="h-5 w-5 mr-2" />
										Send Message
									</Button>
								</form>
							</CardContent>
						</Card>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Contact;