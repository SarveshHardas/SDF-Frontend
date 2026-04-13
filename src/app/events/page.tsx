"use client";

import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";

interface EventItem {
  _id: string;
  title: string;
  date: string;
  description: string;
  img: string;
}

export default function EventsPage() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const mockEvents: EventItem[] = [
      { _id: "1", title: "Sports Day Celebration", date: "19th March 2026", img: "event1.jpg", description: "Saving Dreamz Foundation in association with Hislop College - Department" },
      { _id: "2", title: "Support Our Students for Scholarship Exam 2026", date: "2nd March 2026", img: "event2.jpg", description: "Query Solved With immense happiness, we are proud to share" },
      { _id: "3", title: "Polar Bear Day Celebration - DIY Bookmark Craft Activity", date: "28th February 2026", img: "event3.jpg", description: "On the occasion of International Polar Bear Day, Saving Dreamz" },
    ];

    setTimeout(() => {
      setEvents(mockEvents);
      setLoading(false);
    }, 800);
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
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div key={event._id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
                <div className="h-56 relative overflow-hidden">
                  <img
                    src={event.img}
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
