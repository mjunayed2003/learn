"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Phone,
  Mail,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  ShoppingCart,
  GraduationCap,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Blog", href: "/news" },
    { name: "Features", href: "/features" },
  ];

  return (
    <header className="w-full bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto flex justify-between items-center text-sm text-gray-600 px-4">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={16} className="text-blue-600" />
              <span>(+88) 1990 6886</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} className="text-blue-600" />
              <span>agency@example.com</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <Link href="#" className="hover:text-blue-600">
                <Twitter size={16} />
              </Link>
              <Link href="#" className="hover:text-blue-600">
                <Facebook size={16} />
              </Link>
              <Link href="#" className="hover:text-blue-600">
                <Instagram size={16} />
              </Link>
              <Link href="#" className="hover:text-blue-600">
                <Linkedin size={16} />
              </Link>
            </div>
            <div className="border-l border-gray-300 h-5"></div>
            <Link href="/login" className="hover:text-blue-600">
              Log in
            </Link>
            <Link href="/register" className="hover:text-blue-600">
              Register
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white border-b">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCap size={40} className="text-blue-600" />
            <span className="text-3xl font-bold text-gray-800">EduMall</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`pb-1 transition-all duration-200 ${
                    pathname === link.href
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "hover:text-blue-600"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Cart + Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <ShoppingCart size={24} className="text-gray-700" />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden bg-gray-50 border-t py-3 px-4 space-y-3 text-gray-700 font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block ${
                  pathname === link.href
                    ? "text-blue-600 font-semibold"
                    : "hover:text-blue-600"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t border-gray-200 pt-3 space-y-2">
              <Link href="/login" className="block hover:text-blue-600">
                Log in
              </Link>
              <Link href="/register" className="block hover:text-blue-600">
                Register
              </Link>
              <div className="flex space-x-3 pt-2">
                <Twitter size={18} />
                <Facebook size={18} />
                <Instagram size={18} />
                <Linkedin size={18} />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
