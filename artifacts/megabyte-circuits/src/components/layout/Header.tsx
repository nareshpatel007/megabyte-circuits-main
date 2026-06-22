import React from "react";
import { Link, useLocation } from "wouter";
import { 
  Menu, Phone, Mail, MapPin, CircuitBoard, ChevronDown, 
  Upload, Calculator, Globe, X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [location] = useLocation();

  const isHome = location === "/";
  const isTransparent = isHome && !isScrolled;

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${!isTransparent ? 'bg-background/95 backdrop-blur shadow-sm border-b' : 'bg-transparent text-white'}`}>
      <div className={`hidden md:block w-full text-xs py-1.5 transition-colors ${isTransparent ? 'bg-secondary/80 text-white backdrop-blur' : 'bg-secondary text-secondary-foreground'}`}>
        <div className="container flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" /> Ahmedabad, Gujarat, India</span>
            <span className="flex items-center"><Mail className="w-3 h-3 mr-1" /> info@megabytecircuits.com</span>
            <span className="flex items-center"><Phone className="w-3 h-3 mr-1" /> +91 98765 43210</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>ISO 9001:2015 Certified</span>
            <span>|</span>
            <span className="flex items-center"><Globe className="w-3 h-3 mr-1" /> Global Shipping</span>
          </div>
        </div>
      </div>

      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="bg-primary p-1.5 rounded-md text-white group-hover:bg-primary/90 transition-colors">
            <CircuitBoard className="w-6 h-6" />
          </div>
          <span className={`font-display font-bold text-xl tracking-tight transition-colors ${isTransparent ? 'text-white' : 'text-foreground'}`}>
            MegaByte's <span className="text-primary font-bold">Circuits</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center space-x-6">
          <Link href="/" className={`text-sm font-medium hover:text-primary transition-colors ${isTransparent ? 'text-white/90 hover:text-white' : 'text-foreground'}`}>Home</Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className={`flex items-center text-sm font-medium hover:text-primary outline-none transition-colors ${isTransparent ? 'text-white/90 hover:text-white' : 'text-foreground'}`}>
              Manufacturing <ChevronDown className="w-4 h-4 ml-1 opacity-50" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-48">
              <Link href="/manufacturing"><DropdownMenuItem className="cursor-pointer">Overview</DropdownMenuItem></Link>
              <DropdownMenuItem>Single Layer PCB</DropdownMenuItem>
              <DropdownMenuItem>Double Layer PCB</DropdownMenuItem>
              <DropdownMenuItem>Multilayer PCB</DropdownMenuItem>
              <DropdownMenuItem>HDI PCB</DropdownMenuItem>
              <DropdownMenuItem>Flexible PCB</DropdownMenuItem>
              <DropdownMenuItem>Rigid-Flex PCB</DropdownMenuItem>
              <DropdownMenuItem>Metal Core PCB</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className={`flex items-center text-sm font-medium hover:text-primary outline-none transition-colors ${isTransparent ? 'text-white/90 hover:text-white' : 'text-foreground'}`}>
              Assembly <ChevronDown className="w-4 h-4 ml-1 opacity-50" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
              <Link href="/assembly"><DropdownMenuItem className="cursor-pointer">Overview</DropdownMenuItem></Link>
              <DropdownMenuItem>SMT Assembly</DropdownMenuItem>
              <DropdownMenuItem>Through Hole Assembly</DropdownMenuItem>
              <DropdownMenuItem>Prototype Assembly</DropdownMenuItem>
              <DropdownMenuItem>Turnkey Assembly</DropdownMenuItem>
              <DropdownMenuItem>Box Build Assembly</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/about" className={`text-sm font-medium hover:text-primary transition-colors ${isTransparent ? 'text-white/90 hover:text-white' : 'text-foreground'}`}>About Us</Link>
          <Link href="/contact" className={`text-sm font-medium hover:text-primary transition-colors ${isTransparent ? 'text-white/90 hover:text-white' : 'text-foreground'}`}>Contact Us</Link>
        </nav>

        <div className="hidden md:flex items-center space-x-3">
          <Button variant="outline" className={`transition-colors ${isTransparent ? 'border-white text-white hover:bg-white/20' : 'border-primary text-primary hover:bg-primary/10'}`}>
            <Upload className="w-4 h-4 mr-2" /> Upload Gerber
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-white shadow-md">
            <Calculator className="w-4 h-4 mr-2" /> Get Instant Quote
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className={`lg:hidden ${isTransparent ? 'text-white hover:bg-white/20' : ''}`}>
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-80">
            <div className="flex flex-col space-y-6 mt-6">
              <Link href="/" className="text-lg font-medium">Home</Link>
              <Link href="/manufacturing" className="text-lg font-medium">PCB Manufacturing</Link>
              <Link href="/assembly" className="text-lg font-medium">PCB Assembly</Link>
              <Link href="/about" className="text-lg font-medium">About Us</Link>
              <Link href="/contact" className="text-lg font-medium">Contact Us</Link>
              
              <div className="pt-6 border-t flex flex-col gap-3">
                <Button variant="outline" className="w-full justify-start border-primary text-primary">
                  <Upload className="w-4 h-4 mr-2" /> Upload Gerber
                </Button>
                <Button className="w-full justify-start bg-primary text-white">
                  <Calculator className="w-4 h-4 mr-2" /> Get Instant Quote
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
