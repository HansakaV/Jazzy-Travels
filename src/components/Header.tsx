import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navigation = [
		{ name: "Home", href: "#home" },
		{ name: "Destinations", href: "#destinations" },
		{ name: "Services", href: "#services" },
		{ name: "Contact", href: "#contact" },
	];

	const menuVariants = {
		hidden: { opacity: 0, y: -20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				staggerChildren: 0.1,
			},
		},
		exit: { opacity: 0, y: -20 },
	};

	const menuItemVariants = {
		hidden: { opacity: 0, y: -10 },
		visible: { opacity: 1, y: 0 },
	};
	const handleWhatsAppContact = () => {
		const phoneNumber = "+94773838238"; // Replace with your actual WhatsApp number
		const message = encodeURIComponent(`Hi! I'm interested. Could you please provide more details?`);
		const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
		window.open(whatsappUrl, '_blank');
	};

	return (
		<motion.header
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b"
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-20">
					<motion.div
						whileHover={{ scale: 1.05 }}
						className="font-heading font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
					>
						Jazzy Travels
					</motion.div>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-8">
						{navigation.map((item) => (
							<motion.a
								key={item.name}
								href={item.href}
								whileHover={{ y: -2, color: "var(--primary)" }}
								transition={{ duration: 0.2 }}
								className="text-foreground font-medium"
							>
								{item.name}
							</motion.a>
						))}
						<motion.div whileHover={{ scale: 1.05 }}>
							<Button 
							className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white"
							onClick={handleWhatsAppContact}> WhatsApp </Button>
						</motion.div>
					</nav>

					{/* Mobile menu button */}
					<Button
						variant="ghost"
						size="icon"
						className="md:hidden"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						{isMenuOpen ? (
							<X className="h-6 w-6" />
						) : (
							<Menu className="h-6 w-6" />
						)}
					</Button>
				</div>
			</div>

			{/* Mobile Navigation */}
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						variants={menuVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
						className="md:hidden"
					>
						<nav className="px-2 pt-2 pb-4 sm:px-3 border-t">
							{navigation.map((item) => (
								<motion.a
									key={item.name}
									href={item.href}
									variants={menuItemVariants}
									className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent"
									onClick={() => setIsMenuOpen(false)}
								>
									{item.name}
								</motion.a>
							))}
							<motion.div variants={menuItemVariants} className="mt-4 px-3">
								<Button className="w-full">Get Quote</Button>
							</motion.div>
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.header>
	);
};

export default Header;