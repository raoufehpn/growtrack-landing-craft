
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">GT</span>
              </div>
              <span className="text-xl font-bold">GrowTrack</span>
            </div>
            <p className="text-foreground/70 mb-6 max-w-md">
              Transform your business with smart analytics. Track, analyze, and optimize your performance with our powerful platform.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors">
                <Facebook className="w-5 h-5 text-accent" />
              </a>
              <a href="#" className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors">
                <Twitter className="w-5 h-5 text-accent" />
              </a>
              <a href="#" className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors">
                <Linkedin className="w-5 h-5 text-accent" />
              </a>
              <a href="#" className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors">
                <Instagram className="w-5 h-5 text-accent" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors">API</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Documentation</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-foreground/70">
            © 2024 GrowTrack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
