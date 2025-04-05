import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-emerald-800 text-white py-1 px-6 md:px-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          <img 
            src="/images/icon.png" 
            alt="BeejSeBazaar Logo" 
            className="w-20 h-20"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNlZWRsaW5nIj48cGF0aCBkPSJNMTIgMjJ2LTUiLz48cGF0aCBkPSJNOSA2YTMgMyAwIDAgMSAzLTNtLTMgN2EzIDMgMCAwIDEtMy0zbS0zIDNjMCAyIDAuNSA1IDQgNiA0LTEgNC00IDQtNiIvPjxwYXRoIGQ9Ik0xNSA2YTMgMyAwIDAgMC0zLTNtMyA3YTMgMyAwIDAgMCAzLTNtMyAzYzAgMi0uNSA1LTQgNiIvPjwvc3ZnPg==";
            }}
          />
          <h1 className="text-2xl font-bold text-amber-400">BeejSeBazaar</h1>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-amber-300 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-amber-300 transition-colors">About</Link>
          <Link to="/services" className="hover:text-amber-300 transition-colors">Services</Link>
          <Link to="/shop" className="hover:text-amber-300 transition-colors">Shop</Link>
          <Link to="/contact" className="hover:text-amber-300 transition-colors">Contact</Link>
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-emerald-700 ml-2"
              onClick={toggleMobileMenu}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
          <Button variant="outline" className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-emerald-800">
            Login
          </Button>
          <Button className="bg-amber-400 text-emerald-800 hover:bg-amber-300">
            Sign Up
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 bg-emerald-700 rounded-md p-4 absolute left-0 right-0 mx-4 z-50">
          <div className="flex flex-col space-y-3">
            <Link to="/" className="py-2 hover:text-amber-300 transition-colors">Home</Link>
            <Link to="/about" className="py-2 hover:text-amber-300 transition-colors">About</Link>
            <Link to="/services" className="py-2 hover:text-amber-300 transition-colors">Services</Link>
            <Link to="/shop" className="py-2 hover:text-amber-300 transition-colors">Shop</Link>
            <Link to="/contact" className="py-2 hover:text-amber-300 transition-colors">Contact</Link>
            <div className="flex items-center py-2">
              <ThemeToggle showLabel={true} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;