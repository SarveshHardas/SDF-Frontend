"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState<{ type: "success" | "error" | null, message: string }>({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus({ type: "success", message: "Thank you! Your message has been successfully sent. We will get back to you soon." });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus({ type: "error", message: "Failed to send message. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20 bg-gray min-h-screen">
      <div className="bg-navy py-16 text-center px-4 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">Contact Us</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">Have queries or want to collaborate? Reach out to us directly, and our team will get back to you.</p>
      </div>

      <div className="container mx-auto px-4 pb-20 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-teal flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center text-teal mb-4">
                <MapPin size={32} />
              </div>
              <h3 className="text-xl font-bold font-heading text-navy mb-2">Our Office</h3>
              <p className="text-gray-600">
                Plot no. 685, Sanjay Ground, Behind Indora Metro Station, Kamptee Road, Nagpur - 440014
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-orange flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center text-orange mb-4">
                <Phone size={32} />
              </div>
              <h3 className="text-xl font-bold font-heading text-navy mb-2">Call Us</h3>
              <p className="text-gray-600">
                +91-9503279468<br />+91-9326851264
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-navy flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center text-navy mb-4">
                <Mail size={32} />
              </div>
              <h3 className="text-xl font-bold font-heading text-navy mb-2">Email Us</h3>
              <p className="text-gray-600">
                <a href="mailto:info@savingdreamzfoundation.com">info@savingdreamzfoundation.com</a>
              </p>
            </div>
          </div>

                    <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg h-full border border-gray-100">
              <h2 className="text-3xl font-bold font-heading text-navy mb-6">Send a Message</h2>

              {status.type && (
                <div className={`p-4 mb-6 rounded-lg font-semibold ${status.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Your Name *</label>
                    <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 bg-gray rounded-lg border border-gray-300 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Email Address *</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 bg-gray rounded-lg border border-gray-300 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal" placeholder="john@example.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">Subject *</label>
                  <input required type="text" name="subject" value={formData.subject} onChange={handleChange} className="w-full p-3 bg-gray rounded-lg border border-gray-300 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal" placeholder="How can we help?" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">Message *</label>
                  <textarea required name="message" value={formData.message} onChange={handleChange} className="w-full p-3 bg-gray rounded-lg border border-gray-300 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal" rows={5} placeholder="Write your message here..."></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex items-center justify-center w-full md:w-auto px-10 py-4 rounded-full font-bold text-white transition-all duration-300 shadow-md ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-teal hover:bg-navy transform hover:-translate-y-1"
                      }`}
                  >
                    {isSubmitting ? "Sending..." : (
                      <>
                        <Send size={18} className="mr-2" /> Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
