import { Button } from "@/components/ui/button";
import { Smartphone, Github, Twitter, Linkedin, Mail, ArrowRight } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Documentation", href: "#" },
        { name: "API Reference", href: "#" },
        { name: "Changelog", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press Kit", href: "#" },
        { name: "Contact", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Community", href: "#" },
        { name: "Help Center", href: "#" },
        { name: "Templates", href: "#" },
        { name: "Tutorials", href: "#" },
        { name: "Status", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "GDPR", href: "#" },
        { name: "Security", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-secondary/20 border-t border-border/50">
      {/* Newsletter section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Stay Updated with Mobility
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get the latest updates, features, and mobile development tips delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:border-purple-primary focus:outline-none focus:ring-2 focus:ring-purple-primary/20"
            />
            <Button variant="gradient" className="px-6">
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Footer links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-foreground font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-purple-primary transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50">
          {/* Logo and brand */}
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-foreground">Mobility</span>
              <p className="text-sm text-muted-foreground">AI-Powered Mobile Development</p>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-muted hover:bg-purple-primary transition-colors duration-200 flex items-center justify-center"
            >
              <Github className="w-5 h-5 text-foreground hover:text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-muted hover:bg-purple-primary transition-colors duration-200 flex items-center justify-center"
            >
              <Twitter className="w-5 h-5 text-foreground hover:text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-muted hover:bg-purple-primary transition-colors duration-200 flex items-center justify-center"
            >
              <Linkedin className="w-5 h-5 text-foreground hover:text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-muted hover:bg-purple-primary transition-colors duration-200 flex items-center justify-center"
            >
              <Mail className="w-5 h-5 text-foreground hover:text-white" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-8 border-t border-border/50">
          <p className="text-muted-foreground">
            © 2024 Mobility. All rights reserved. Built with ❤️ for mobile developers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;