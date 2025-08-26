import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Destinations from "@/components/Destinations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Upcomig from "@/components/upcomeing";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Upcomig />
        <Features />
        <Destinations />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
