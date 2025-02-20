
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-semibold">
              SkillSync
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/about" className="hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/features" className="hover:text-primary transition-colors">
                Features
              </Link>
              <Link to="/contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
              <Button variant="default" className="ml-4">
                Sign In with Google
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/about"
                className="block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                About
              </Link>
              <Link
                to="/features"
                className="block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                Features
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                Contact
              </Link>
              <Button variant="default" className="w-full mt-4">
                Sign In with Google
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
