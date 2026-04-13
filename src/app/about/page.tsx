"use client";

import { Target, Lightbulb, CheckCircle2, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-20">
            <section className="bg-navy py-24 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1593113563332-e14b01109f17?q=80&w=2000&auto=format&fit=crop"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6">About Saving Dreamz</h1>
          <p className="text-xl text-gray-300">Dedicated to uplifting marginalized communities in Nagpur through sustainable and impactful interventions since 2021.</p>
        </div>
      </section>

            <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-navy mb-6">Who We Are</h2>
            <div className="w-24 h-1 bg-teal mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded in 2021 in Nagpur, Maharashtra, the Saving Dreamz Foundation (SDF) was born out of a collective desire to make a tangible difference in the lives of the underprivileged. What started as a small group of passionate volunteers has now grown into a registered NGO that systematically addresses critical areas like Education, Healthcare, Sports, Waste Management, and Environmental Conservation. We believe that every individual deserves a fair chance at life, equipped with the resources and opportunities to achieve their dreams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray p-10 rounded-2xl border-t-4 border-orange">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-md mb-6 text-orange">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold font-heading text-navy mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower marginalized communities by providing access to quality education, essential healthcare, and environmental sustainability programs. We strive to create self-reliant ecosystems where individuals can thrive and contribute positively to society.
              </p>
            </div>
            <div className="bg-gray p-10 rounded-2xl border-t-4 border-teal">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-md mb-6 text-teal">
                <Lightbulb size={32} />
              </div>
              <h3 className="text-2xl font-bold font-heading text-navy mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                A world where socioeconomic backgrounds do not dictate an individual’s potential. We envision a greener, healthier, and educated society where every dream is nurtured, and every life is valued.
              </p>
            </div>
          </div>
        </div>
      </section>

            <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-center text-orange">Our Core Focus Areas</h2>
          <ul className="space-y-6">
            {["Education Campaigns & Scholarship Programs", "Free Medical & Healthcare Checkup Camps", "Community Sports Tournaments for Youth Development", "Innovative Waste Management Strategies", "Extensive Tree Plantation & Environment Drives"].map((item, index) => (
              <li key={index} className="flex items-center bg-white/10 p-4 rounded-xl border border-white/5 hover:bg-white/20 transition-colors">
                <CheckCircle2 className="text-teal mr-4 shrink-0" size={28} />
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

            <section className="py-20 bg-gray">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-navy mb-6">Our Accreditations</h2>
          <div className="w-24 h-1 bg-orange mx-auto rounded-full mb-12"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[1, 2].map((cert) => (
              <div key={cert} className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col items-center">
                <Award size={48} className="text-teal mb-4" />
                <img src={`/accr/accr${cert}.jpg`} alt="Certificate of Registration" className="max-w-full h-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
