
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, LogOut, UserCircle } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signInWithGoogle, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

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
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/features" className="hover:text-primary transition-colors">
              Features
            </Link>
            <Link to="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.user_metadata.avatar_url} alt={user.user_metadata.full_name} />
                      <AvatarFallback>{user.user_metadata.full_name?.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => navigate('/dashboard')}>
                    Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/profile')}>
                    <UserCircle className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="default" onClick={() => signInWithGoogle()}>
                Sign In with Google
              </Button>
            )}
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
              {user ? (
                <>
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={() => navigate('/dashboard')}
                  >
                    Dashboard
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={() => navigate('/profile')}
                  >
                    <UserCircle className="mr-2 h-4 w-4" />
                    Profile
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={handleSignOut}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </Button>
                </>
              ) : (
                <Button
                  variant="default"
                  className="w-full mt-4"
                  onClick={() => signInWithGoogle()}
                >
                  Sign In with Google
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
