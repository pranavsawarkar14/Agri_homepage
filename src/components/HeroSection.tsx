import { Link } from "react-router-dom";
import { GetStartedButton } from "./ui/get-started-button";

const HeroSection = () => {
  return (
    <div 
      className="hero-section min-h-[80vh] flex items-center justify-center text-white bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/background.png')",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "multiply"
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins mb-6">
          A farmer's true partner from soil to sale.
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Built for farmers, by those who care — BeejSeBazaar blends trust, technology, and tradition to grow smarter futures
        </p>
        <Link to="/get-started">
          <GetStartedButton />
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;