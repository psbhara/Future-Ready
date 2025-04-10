
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { title: "Home", href: "/" },
    { title: "How It Works", href: "/how-it-works" },
    { title: "Jobs", href: "/jobs" },
    { title: "Universities", href: "/universities" },
    { title: "About", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-xl font-bold text-career-purple">
            Future-Ready <span className="text-career-blue">Pathways</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className="text-sm font-medium transition-colors hover:text-career-purple"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/login">
            <Button variant="outline">Log In</Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-career-purple hover:bg-career-lightPurple">Sign Up</Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="pr-0">
            <div className="flex flex-col gap-4 px-6">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className="text-sm font-medium transition-colors hover:text-career-purple"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-4">
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full">Log In</Button>
                </Link>
                <Link to="/signup" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-career-purple hover:bg-career-lightPurple">Sign Up</Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
