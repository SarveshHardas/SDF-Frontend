"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";

const locations = [
  {
    id: "indora",
    name: "Indora Center (Main)",
    address: "Plot no. 685, Sanjay Ground, Behind Indora Metro Station, Kamptee Road, Nagpur - 440014",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14878.892015383568!2d79.0768565!3d21.1932314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c1143890bb85%3A0xe54d9c7921a221f5!2sIndora%2C%20Nagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },
  {
    id: "sitabuldi",
    name: "Sitabuldi Center",
    address: "Near Sitabuldi Fort, Main Road, Nagpur - 440012",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14881.332303254924!2d79.074384!3d21.1391266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c08c9035fcc5%3A0x6bba847bfdc17e14!2sSitabuldi%2C%20Nagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },
  {
    id: "dharampeth",
    name: "Dharampeth Camp",
    address: "West High Court Road, Dharampeth, Nagpur - 440010",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14882.355152599723!2d79.0558113!3d21.1309325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c063f25c2763%3A0xd14dfcbf9b05aa79!2sDharampeth%2C%20Nagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  }
];

export default function StudyCenterPage() {
  const [activeLocation, setActiveLocation] = useState(locations[0]);

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">Nearby Study Centers</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find our study centers near you in Nagpur city. Select a location below to view its exact pin on the map.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 p-4 md:p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3 space-y-4">
              <h2 className="text-2xl font-bold text-navy border-b pb-4 border-orange/30 mb-6">Nagpur Locations</h2>
              
              {locations.map((loc) => {
                const isActive = activeLocation.id === loc.id;
                return (
                  <div 
                    key={loc.id}
                    onClick={() => setActiveLocation(loc)}
                    className={`p-5 rounded-xl flex items-start space-x-4 border transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? "bg-orange/10 border-orange/50 shadow-md transform -translate-y-1" 
                        : "bg-navy/5 border-navy/10 hover:-translate-y-1 hover:shadow-sm opacity-70 hover:opacity-100"
                    }`}
                  >
                    <MapPin className={`${isActive ? "text-orange" : "text-teal"} shrink-0 mt-1`} size={28} />
                    <div>
                      <h3 className={`font-bold text-lg ${isActive ? "text-orange" : "text-navy"}`}>{loc.name}</h3>
                      <p className="text-gray-600 mt-2 text-sm">{loc.address}</p>
                    </div>
                  </div>
                );
              })}
              
              <p className="text-sm text-gray-500 italic mt-8 bg-gray-50 p-4 rounded-lg">
                * Please note that some locations might be temporary or operational only during weekends. Please contact us for exact timings before visiting.
              </p>
            </div>
            
            <div className="w-full md:w-2/3 h-[500px] md:h-[700px] rounded-xl overflow-hidden shadow-inner border border-gray-200 bg-gray-100 flex items-center justify-center">
              <iframe
                key={activeLocation.id}
                src={activeLocation.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full fade-in"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
