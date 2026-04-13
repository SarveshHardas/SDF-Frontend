"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Phone, Mail, ChevronDown, Menu, X } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
      <div className={`bg-navy text-white py-2 px-4 transition-all duration-300 ${isScrolled ? 'hidden' : 'block'}`}>
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex space-x-4 mb-2 sm:mb-0">
            <span className="flex items-center"><Phone size={14} className="mr-1" /> +91-9503279468, +91-9326851264</span>
            <span className="flex items-center"><Mail size={14} className="mr-1" /><a href="mailto:info@savingdreamzfoundation.com">info@savingdreamzfoundation.com</a></span>
          </div>
          <div className="flex space-x-3">
            <a href="https://www.facebook.com/savingdreamzfoundation/" target="_blank" className="hover:text-orange transition"><FaFacebook size={16} /></a>
            <a href="https://x.com/saving_dreamz?t=XrOJlrMxMie56TH_gSOdHw&s=09" target="_blank" className="hover:text-orange transition"><FaTwitter size={16} /></a>
            <a href="https://www.instagram.com/savingdreamzfoundation?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="hover:text-orange transition"><FaInstagram size={16} /></a>
          </div>
        </div>
      </div>

      <nav className="container mx-auto px-4 py-0.5 md:py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/sdf_logo.png" alt="Logo" width={70} height={70} className="scale-80 md:scale-120" />
          <span className="text-navy font-heading font-bold text-xl hidden sm:block">Saving Dreamz Foundation</span>
        </Link>
        <div className="hidden md:flex items-center space-x-6 text-navy font-medium">
          <Link href="/" className="hover:text-orange transition-color ease-in duration-200">Home</Link>
          <Link href="/about" className="hover:text-orange transition-color ease-in duration-200">About</Link>
          <Link href="/events" className="hover:text-orange transition-color ease-in duration-200">Events</Link>
          <Link href="/team" className="hover:text-orange transition-color ease-in duration-200">Team</Link>
          <Link href="/study-center" className="hover:text-orange transition-color ease-in duration-200">Study Centers</Link>
          <Link href="/donate" className="hover:text-orange transition-color ease-in duration-200">Donate</Link>

          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center hover:text-orange transition">
              Get Involved <ChevronDown size={16} className="ml-1" />
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden"
                >
                  <Link href="/get-involved#volunteer" className="block px-4 py-3 text-sm hover:bg-gray hover:text-teal transition">SDF Volunteer</Link>
                  <Link href="/get-involved#internship" className="block px-4 py-3 text-sm hover:bg-gray hover:text-teal transition">NGO Internship</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/contact" className="hover:text-orange transition">Contact</Link>
        </div>

                <button className="md:hidden text-navy" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

            <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t overflow-hidden"
          >
            <div className="flex flex-col px-4 py-2 space-y-4 text-navy">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
              <Link href="/events" onClick={() => setMobileMenuOpen(false)}>Events</Link>
              <Link href="/team" onClick={() => setMobileMenuOpen(false)}>Team</Link>
              <Link href="/study-center" onClick={() => setMobileMenuOpen(false)}>Study Centers</Link>
              <Link href="/donate" onClick={() => setMobileMenuOpen(false)}>Donate</Link>
              <div className="flex flex-col space-y-2 pl-4 border-l-2 border-teal border-opacity-30">
                <span className="text-sm font-semibold text-gray-500">Get Involved</span>
                <Link href="/get-involved#volunteer" onClick={() => setMobileMenuOpen(false)}>SDF Volunteer</Link>
                <Link href="/get-involved#internship" onClick={() => setMobileMenuOpen(false)}>NGO Internship</Link>
              </div>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
