"use client";

import { useState, useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";

interface TeamMember {
  _id: string;
  name: string;
  role: string;
  imageUrl: string;
  url: string;
}

export default function TeamPage() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
        const res = await fetch(`${backendUrl}/api/teams`, { cache: 'no-store' });
        if (!res.ok) throw new Error("Failed to fetch team members");
        const data = await res.json();
        
        
        const roleOrder: { [key: string]: number } = {
          "President": 1,
          "Vice-President": 2,
          "Vice President": 2,
          "Secretary": 3,
          "Vice-Secretary": 4,
          "Vice Secretary": 4
        };

        const sortedData = data.sort((a: TeamMember, b: TeamMember) => {
          const priorityA = roleOrder[a.role] || 100;
          const priorityB = roleOrder[b.role] || 100;
          return priorityA - priorityB;
        });

        setTeam(sortedData);
      } catch (err) {
        console.error("Error fetching team:", err);
        setError("Unable to load team members. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  return (
    <div className="pt-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-navy mb-4">Meet Our Team</h1>
          <div className="w-24 h-1 bg-teal mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The dedicated individuals driving the mission of Saving Dreamz Foundation forward with unwavering commitment.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-teal"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-500 text-lg py-16">{error}</div>
        ) : team.length === 0 ? (
          <div className="text-center text-gray-500 text-lg py-16">No team members found.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member._id} className="group text-center">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg border-4 border-gray group-hover:border-teal transition-colors duration-300">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold font-heading text-navy mb-1">{member.name}</h3>
                <p className="text-orange font-semibold mb-3">{member.role}</p>
                
                <div className="flex justify-center space-x-3 text-gray-400">
                  <a href={member.url} target="_blank" className="hover:text-teal transition-colors"><FaLinkedin size={20} /></a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
