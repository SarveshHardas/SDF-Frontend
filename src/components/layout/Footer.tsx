import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="footer" className="bg-navy text-white pt-16 pb-8 border-t-4 border-orange">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                <div>
          <div className="flex items-center space-x-2 mb-4">
            <Image src="/sdf_logo.png" alt="Logo" width={70} height={70} className="scale-80 md:scale-120" />
            <span className="font-heading font-bold text-xl">Saving Dreamz</span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Established in 2021, we are dedicated to transforming lives and empowering communities through education, healthcare, and sustainable environment initiatives in Nagpur.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/savingdreamzfoundation/" target="_blank" className="bg-teal p-2 rounded-full hover:bg-orange transition"><FaFacebook size={16} /></a>
            <a href="https://x.com/saving_dreamz?t=XrOJlrMxMie56TH_gSOdHw&s=09" target="_blank" className="bg-teal p-2 rounded-full hover:bg-orange transition"><FaTwitter size={16} /></a>
            <a href="https://www.instagram.com/savingdreamzfoundation?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="bg-teal p-2 rounded-full hover:bg-orange transition"><FaInstagram size={16} /></a>
          </div>
        </div>

                <div>
          <h3 className="font-heading font-semibold text-lg mb-4 text-orange">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="/events" className="hover:text-white transition">Events & Campaigns</Link></li>
            <li><Link href="/team" className="hover:text-white transition">Our Team</Link></li>
            <li><Link href="/study-center" className="hover:text-white transition">Study Centers</Link></li>
            <li><Link href="/get-involved" className="hover:text-white transition">Volunteer With Us</Link></li>
          </ul>
        </div>

                <div>
          <h3 className="font-heading font-semibold text-lg mb-4 text-orange">Our Focus Areas</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Education Support</li>
            <li>Healthcare Camps</li>
            <li>Sports Development</li>
            <li>Waste Management</li>
            <li>Environment Drives</li>
          </ul>
        </div>

                <div>
          <h3 className="font-heading font-semibold text-lg mb-4 text-orange">Contact Us</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-start">
              <MapPin size={18} className="mr-3 text-teal shrink-0 mt-0.5" />
              <span>Plot no. 685, Sanjay Ground, Behind Indora Metro Station, Kamptee Road, Nagpur - 440014</span>
            </li>
            <li className="flex items-center">
              <Phone size={18} className="mr-3 text-teal shrink-0" />
              <span>+91-9503279468, +91-9326851264</span>
            </li>
            <li className="flex items-center">
              <Mail size={18} className="mr-3 text-teal shrink-0" />
              <span><a href="mailto:info@savingdreamzfoundation.com">info@savingdreamzfoundation.com</a></span>
            </li>
          </ul>
        </div>
      </div>

            <div className="container mx-auto px-4 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Saving Dreamz Foundation (SDF). All Rights Reserved.</p>
      </div>
    </footer>
  );
}
