"use client";

import { useState } from "react";
import axios from "axios";

export default function GetInvolvedPage() {
  const [activeTab, setActiveTab] = useState<"volunteer" | "intern">("volunteer");

  const [formData, setFormData] = useState({
    firstName: "", lastName: "", address: "", city: "", phone: "", email: "",
    dob: "", aadhaar: "", education: "", occupation: "", bloodGroup: "", hobbies: "",
    college: "", startDate: ""
  });
  const [status, setStatus] = useState<{ type: "success" | "error" | null, message: string }>({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
      const endpoint = activeTab === "volunteer" ? `${backendUrl}/api/volunteer` : `${backendUrl}/api/internship`;

      const { firstName, lastName, address, city, phone, email, dob, aadhaar, education, bloodGroup, hobbies } = formData;
      const payload = activeTab === "volunteer"
        ? { firstName, lastName, address, city, phone, email, dob, aadhaar, education, occupation: formData.occupation, bloodGroup, hobbies }
        : { firstName, lastName, address, city, phone, email, dob, aadhaar, education, college: formData.college, startDate: formData.startDate, bloodGroup, hobbies };

      await axios.post(endpoint, payload);

      setStatus({ type: "success", message: `Your ${activeTab} application has been submitted successfully!` });
      setFormData({
        firstName: "", lastName: "", address: "", city: "", phone: "", email: "",
        dob: "", aadhaar: "", education: "", occupation: "", bloodGroup: "", hobbies: "",
        college: "", startDate: ""
      });
    } catch (error) {
      setStatus({ type: "error", message: "Something went wrong. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20 bg-gray min-h-screen pb-20">
      <div className="bg-navy py-16 text-center px-4 mb-10 text-white">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Get Involved</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">Be the change maker. Join our community of dedicated individuals transforming lives in Nagpur.</p>
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
                <div className="flex flex-col sm:flex-row justify-center mb-10 gap-4">
          <button 
            id="volunteer"
            onClick={() => setActiveTab("volunteer")}
            className={`py-3 px-8 rounded-full font-bold text-lg transition-all duration-300 ${
              activeTab === "volunteer" ? "bg-orange text-white shadow-lg" : "bg-white text-navy hover:bg-gray-100"
            }`}
          >
            SDF Volunteer
          </button>
          <button 
            id="internship"
            onClick={() => setActiveTab("intern")}
            className={`py-3 px-8 rounded-full font-bold text-lg transition-all duration-300 ${
              activeTab === "intern" ? "bg-teal text-white shadow-lg" : "bg-white text-navy hover:bg-gray-100"
            }`}
          >
            NGO Internship
          </button>
        </div>

                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border-t-8 border-navy">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold font-heading text-navy mb-3">
              {activeTab === "volunteer" ? "Volunteer Application Form" : "Internship Application Form"}
            </h2>
            <p className="text-gray-600">
              {activeTab === "volunteer" 
                ? "Join our on-ground events and help us organize campaigns to support the underprivileged."
                : "Gain valuable experience working with an NGO while contributing to meaningful social causes."}
            </p>
          </div>

          {status.type && (
            <div className={`p-4 mb-8 rounded-lg text-center font-semibold ${status.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">First Name *</label>
                <input required type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full p-3 bg-gray rounded-lg border border-gray-300 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal" placeholder="John" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Last Name *</label>
                <input required type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full p-3 bg-gray rounded-lg border border-gray-300 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal" placeholder="Doe" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Email Address *</label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 bg-gray rounded-lg border border-gray-300 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Phone Number *</label>
                <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-3 bg-gray rounded-lg border border-gray-300 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal" placeholder="9876543210" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Date of Birth *</label>
                <input required type="date" name="dob" value={formData.dob} onChange={handleChange} className="w-full p-3 bg-gray rounded-lg border border-gray-300 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Aadhaar Number *</label>
                <input required type="text" name="aadhaar" value={formData.aadhaar} onChange={handleChange} className="w-full p-3 bg-gray rounded-lg border border-gray-300 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal" placeholder="1234 5678 9012" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-navy mb-2">Residential Address *</label>
              <textarea required name="address" value={formData.address} onChange={handleChange} className="w-full p-3 bg-gray rounded-lg border border-gray-300 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal" rows={2} placeholder="Street address"></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">City *</label>
                <input required type="text" name="city" value={formData.city} onChange={handleChange} className="w-full p-3 bg-gray rounded-lg border border-gray-300 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal" placeholder="Nagpur" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Blood Group *</label>
                <select required name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} className="w-full p-3 bg-gray rounded-lg border border-gray-300 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal">
                  <option value="">Select Blood Group</option>
                  <option value="A+">A+</option><option value="A-">A-</option>
                  <option value="B+">B+</option><option value="B-">B-</option>
                  <option value="O+">O+</option><option value="O-">O-</option>
                  <option value="AB+">AB+</option><option value="AB-">AB-</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Highest Education *</label>
                <input required type="text" name="education" value={formData.education} onChange={handleChange} className="w-full p-3 bg-gray rounded-lg border border-gray-300 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal" placeholder="E.g. B.Tech / B.Com" />
              </div>

              {activeTab === "volunteer" ? (
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">Occupation *</label>
                  <input required type="text" name="occupation" value={formData.occupation} onChange={handleChange} className="w-full p-3 bg-gray rounded-lg border border-gray-300 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal" placeholder="Student / Engineer..." />
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">Current College Name *</label>
                  <input required type="text" name="college" value={formData.college} onChange={handleChange} className="w-full p-3 bg-gray rounded-lg border border-gray-300 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal" placeholder="University of Nagpur" />
                </div>
              )}
            </div>

            {activeTab === "intern" && (
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Internship Start Date *</label>
                <input required type="date" name="startDate" value={formData.startDate} onChange={handleChange} className="w-full p-3 bg-gray rounded-lg border border-gray-300 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal" />
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-navy mb-2">Hobbies & Interests</label>
              <textarea name="hobbies" value={formData.hobbies} onChange={handleChange} className="w-full p-3 bg-gray rounded-lg border border-gray-300 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal" rows={2} placeholder="E.g. Photography, Teaching, Sports..."></textarea>
            </div>

            <div className="pt-4 text-center">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full md:w-auto px-12 py-4 rounded-full font-bold text-white transition-all duration-300 shadow-md transform hover:-translate-y-1 ${
                  isSubmitting ? "bg-gray-400 cursor-not-allowed" : activeTab === "volunteer" ? "bg-orange hover:bg-navy" : "bg-teal hover:bg-navy"
                }`}
              >
                {isSubmitting ? "Submitting..." : `Submit ${activeTab === "volunteer" ? "Volunteer" : "Internship"} Form`}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
