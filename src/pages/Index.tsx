// src/pages/Index.tsx
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { TestimonialsSection as ReviewsMarquee } from "@/components/blocks/testimonials-with-marquee";

const reviewTestimonials = [
  {
    author: {
      name: "Ramesh Singh",
      handle: "@rameshfarmer",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    text: "BeejSeBazaar has transformed how I sell my organic produce. My profits have increased by 40% since joining their platform!",
  },
  {
    author: {
      name: "Lakshmi Devi",
      handle: "@lakshmiorganics",
      avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=face"
    },
    text: "The direct market access has eliminated middlemen, ensuring I get fair prices for my crops while consumers get fresh produce.",
  },
  {
    author: {
      name: "Arjun Mehta",
      handle: "@arjunrestaurant",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "As a restaurant owner, I can source the freshest ingredients directly from farms. The quality and traceability are unmatched.",
  },
  {
    author: {
      name: "Priya Sharma",
      handle: "@priyafarmer",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    text: "The sustainable farming practices promoted by BeejSeBazaar have helped restore my soil health and increased biodiversity on my farm.",
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <ReviewsMarquee 
        title="What Our Community Says"
        description="Hear directly from farmers and consumers who are part of our growing agricultural ecosystem"
        testimonials={reviewTestimonials}
      />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;