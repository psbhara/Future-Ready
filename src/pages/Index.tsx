
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <Features />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Index;
