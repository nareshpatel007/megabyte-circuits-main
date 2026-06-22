import React from "react";
import { Link } from "wouter";
import { CircuitBoard, MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-white/10 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <CircuitBoard className="w-8 h-8 text-primary" />
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                MegaByte's <span className="text-primary">Circuits</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              India's trusted PCB manufacturing partner. Precision engineering meets enterprise credibility. From Imagination To Innovation.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full bg-white/5 hover:bg-primary hover:text-white text-white/70">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-white/5 hover:bg-primary hover:text-white text-white/70">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-white/5 hover:bg-primary hover:text-white text-white/70">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-white/5 hover:bg-primary hover:text-white text-white/70">
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">PCB Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/manufacturing" className="hover:text-primary transition-colors">PCB Fabrication</Link></li>
              <li><Link href="/assembly" className="hover:text-primary transition-colors">PCB Assembly</Link></li>
              <li><Link href="/manufacturing" className="hover:text-primary transition-colors">Multilayer PCBs</Link></li>
              <li><Link href="/manufacturing" className="hover:text-primary transition-colors">HDI PCBs</Link></li>
              <li><Link href="/manufacturing" className="hover:text-primary transition-colors">Flexible PCBs</Link></li>
              <li><Link href="/assembly" className="hover:text-primary transition-colors">Component Sourcing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/manufacturing" className="hover:text-primary transition-colors">Capabilities</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Get a Quote</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Support</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Contact Details</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-3 shrink-0" />
                <span>GIDC Electronics Estate, Sector 25, Gandhinagar, Ahmedabad, Gujarat 382024, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-3 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-3 shrink-0" />
                <span>info@megabytecircuits.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>Copyright © 2026 MegaByte's Circuit Systems. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">ISO 9001:2015 & ISO 14001:2015 Certified</p>
        </div>
      </div>
    </footer>
  );
}
