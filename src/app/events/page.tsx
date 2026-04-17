"use client";

import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";

interface EventItem {
  _id: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
}

export default function EventsPage() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
        const res = await fetch(`${backendUrl}/api/events`);
        if (!res.ok) throw new Error("Failed to fetch events");
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        console.error("Error fetching events:", err);
        setError("Unable to load events. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="pt-20 bg-gray min-h-screen">
      <div className="bg-navy py-16 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">Our Events & Campaigns</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">Discover the impactful programs and initiatives we organize to build a better community.</p>
      </div>

      <div className="container mx-auto px-4 py-16">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-teal"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-500 text-lg py-16">{error}</div>
        ) : events.length === 0 ? (
          <div className="text-center text-gray-500 text-lg py-16">No events found. Check back soon!</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div key={event._id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
                <div className="h-56 relative overflow-hidden">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center text-teal font-semibold text-sm mb-3">
                    <Calendar size={16} className="mr-2" />
                    {event.date}
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-navy mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{event.description}</p>
                  <button className="w-full bg-orange hover:bg-navy text-white font-semibold py-3 rounded-lg transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
