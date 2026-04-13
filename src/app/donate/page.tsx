"use client";

import { Heart, ShieldCheck, TrendingUp, HandHeart } from "lucide-react";
import { useState } from "react";

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | "custom">(1000);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [showQR, setShowQR] = useState(false);

  return (
    <div className="pt-20 bg-white min-h-screen">
            <div className="bg-navy py-16 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute w-96 h-96 bg-orange rounded-full blur-3xl -top-20 -left-20"></div>
          <div className="absolute w-96 h-96 bg-teal rounded-full blur-3xl -bottom-20 -right-20"></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">Support Our Cause</h1>
          <p className="text-xl text-gray-300">Your generosity empowers us to bring education, healthcare, and sustainable living to those who need it most.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div>
            <h2 className="text-3xl font-bold font-heading text-navy mb-6">Why Donate to SDF?</h2>
            <div className="w-20 h-1 bg-orange rounded-full mb-8"></div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Every single rupee contributed goes directly into our fieldwork programs. 
              With full transparency and regular impact reports, we ensure your kindness creates maximum impact in the communities of Nagpur.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-teal/10 p-3 rounded-xl text-teal mr-4">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-lg text-heading">100% Transparency</h4>
                  <p className="text-gray-600 text-sm">We provide annual audits and direct reporting on where funds are utilized.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange/10 p-3 rounded-xl text-orange mr-4">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-lg text-heading">Sustainable Impact</h4>
                  <p className="text-gray-600 text-sm">We invest in long-term infrastructure like rural libraries and medical equipment.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-teal/10 p-3 rounded-xl text-teal mr-4">
                  <HandHeart size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-lg text-heading">Tax Exemptions</h4>
                  <p className="text-gray-600 text-sm">All donations are eligible for an 80G tax receipt under the IT Act.</p>
                </div>
              </div>
            </div>
                        <div className="bg-navy text-white p-6 rounded-2xl mt-8 shadow-lg">
              <h3 className="text-xl font-bold font-heading mb-4 text-orange">Direct Bank Transfer</h3>
              <div className="space-y-2 text-sm text-gray-200">
                <p><span className="font-semibold text-teal">Account Name:</span> Saving Dreamz Foundation</p>
                <p><span className="font-semibold text-teal">Account Number:</span> 922010010907229</p>
                <p><span className="font-semibold text-teal">Account Type:</span> Savings</p>
                <p><span className="font-semibold text-teal">IFSC Code:</span> UTIB0003168</p>
                <p><span className="font-semibold text-teal">Bank Name:</span> Axis Bank</p>
                <p><span className="font-semibold text-teal">Bank Branch:</span> Indora, Nagpur</p>
              </div>
            </div>
          </div>

                    <div className="bg-gray p-8 rounded-3xl shadow-lg border border-gray-200 relative min-h-[500px]">
            <div className="absolute -top-6 -right-6 bg-orange text-white p-4 rounded-full shadow-lg">
              <Heart size={32} />
            </div>

            {!showQR ? (
              <>
                <h3 className="text-2xl font-bold font-heading text-navy mb-6">Make a Contribution</h3>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-navy mb-3">Choose Amount (₹)</label>
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    {[500, 1000, 2000, 5000].map((amount) => (
                      <button
                        key={amount}
                        onClick={() => setSelectedAmount(amount)}
                        className={`py-3 rounded-lg font-bold border-2 transition-all duration-300 ${
                          selectedAmount === amount 
                            ? "bg-teal border-teal text-white shadow-md" 
                            : "bg-white border-gray-300 text-navy hover:border-teal"
                        }`}
                      >
                        ₹{amount}
                      </button>
                    ))}
                    <button
                      onClick={() => setSelectedAmount("custom")}
                      className={`col-span-2 py-3 rounded-lg font-bold border-2 transition-all duration-300 ${
                        selectedAmount === "custom" 
                          ? "bg-teal border-teal text-white shadow-md" 
                          : "bg-white border-gray-300 text-navy hover:border-teal"
                      }`}
                    >
                      Custom Amount
                    </button>
                  </div>

                  {selectedAmount === "custom" && (
                    <div className="mt-3 relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">₹</span>
                      <input 
                        type="number" 
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        placeholder="Enter amount"
                        className="w-full p-3 pl-8 rounded-lg border border-gray-300 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal"
                      />
                    </div>
                  )}
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-semibold text-navy mb-3">Personal Details</label>
                  <div className="space-y-4">
                    <input type="text" placeholder="Full Name" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-teal" />
                    <input type="email" placeholder="Email Address" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-teal" />
                    <input type="tel" placeholder="Phone Number" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-teal" />
                    <div className="flex items-center mt-2">
                      <input type="checkbox" id="tax" className="mr-2" />
                      <label htmlFor="tax" className="text-sm text-gray-600">I want a tax exemption receipt (80G)</label>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => setShowQR(true)}
                  className="w-full bg-navy hover:bg-orange text-white font-bold py-4 rounded-xl shadow-lg transition-colors duration-300 flex items-center justify-center"
                >
                   Proceed to Pay <span className="ml-2">₹{selectedAmount === "custom" ? (customAmount || 0) : selectedAmount}</span>
                </button>
                <p className="text-center text-xs text-gray-500 mt-4 flex items-center justify-center">
                  <ShieldCheck size={14} className="mr-1" /> Secure 256-bit encrypted gateway
                </p>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-full pt-4 fadeIn">
                <h3 className="text-2xl font-bold font-heading text-navy mb-4">Scan QR to Pay</h3>
                <p className="text-gray-600 mb-6 text-center">Amount: <span className="font-bold text-lg text-teal">₹{selectedAmount === "custom" ? (customAmount || 0) : selectedAmount}</span></p>
                <div className="bg-white p-4 rounded-xl shadow-md mb-8 border border-gray-200">
                  <img src="/qr-code.png" alt="Payment QR Code" className="max-w-full h-auto" />
                </div>
                <button 
                  onClick={() => setShowQR(false)}
                  className="bg-gray-200 hover:bg-gray-400 text-navy font-semibold py-2 px-6 rounded-lg transition-colors duration-300"
                >
                  ← Go Back
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
