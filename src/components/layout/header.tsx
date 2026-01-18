import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  className?: string;
}

export function Header({ className = "" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`w-full border-b border-[var(--border-color)] bg-white sticky top-0 z-50 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-[var(--primary-green)] flex items-center justify-center text-white font-bold">
                LF
              </div>
              <span className="text-xl font-semibold text-[var(--text-primary)]">
                LawnFlow.ai
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              to="/how-it-works"
              className="text-[var(--text-primary)] hover:text-[var(--primary-green)] transition-colors"
            >
              How It Works
            </Link>
            <Link
              to="/for-owners"
              className="text-[var(--text-primary)] hover:text-[var(--primary-green)] transition-colors"
            >
              For Owners
            </Link>
            <Link
              to="/for-crews"
              className="text-[var(--text-primary)] hover:text-[var(--primary-green)] transition-colors"
            >
              For Crews
            </Link>
            <Link
              to="/for-customers"
              className="text-[var(--text-primary)] hover:text-[var(--primary-green)] transition-colors"
            >
              For Customers
            </Link>
            <Link
              to="/compare"
              className="text-[var(--text-primary)] hover:text-[var(--primary-green)] transition-colors"
            >
              Compare
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" className="text-[var(--text-primary)]">
              Sign In
            </Button>
            <Link to="/waitlist">
              <Button className="bg-[var(--primary-green)] hover:bg-[var(--dark-green)] text-white">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[var(--text-primary)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[var(--border-color)] py-4">
            <nav className="flex flex-col gap-4">
              <Link
                to="/how-it-works"
                className="text-[var(--text-primary)] hover:text-[var(--primary-green)] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                to="/for-owners"
                className="text-[var(--text-primary)] hover:text-[var(--primary-green)] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                For Owners
              </Link>
              <Link
                to="/for-crews"
                className="text-[var(--text-primary)] hover:text-[var(--primary-green)] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                For Crews
              </Link>
              <Link
                to="/for-customers"
                className="text-[var(--text-primary)] hover:text-[var(--primary-green)] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                For Customers
              </Link>
              <Link
                to="/compare"
                className="text-[var(--text-primary)] hover:text-[var(--primary-green)] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Compare
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-[var(--border-color)]">
                <Button variant="ghost" className="w-full justify-start">
                  Sign In
                </Button>
                <Link to="/waitlist" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-[var(--primary-green)] hover:bg-[var(--dark-green)] text-white">
                    Get Started
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}