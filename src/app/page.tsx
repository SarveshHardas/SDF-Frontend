"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Heart, Activity, Recycle, Leaf, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const Counter = ({ end, suffix = "", text }: { end: number, suffix?: string, text: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-4xl md:text-5xl font-bold font-heading text-navy mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-600 font-medium">{text}</div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="w-full">
            <section className="relative h-screen min-h-[600px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-navy/60 z-10" />
          <img
            src="hero_img.jpg"
            alt="Children smiling"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 z-20 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6"
          >
            Empowering Dreams. <br className="hidden md:block" />
            <span className="text-orange">Transforming Lives.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-10 text-gray-200"
          >
            Join Saving Dreamz Foundation in our mission to uplift the underprivileged through education, healthcare, and sustainable environment initiatives.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link href="/get-involved" className="bg-orange hover:bg-white hover:text-orange text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg text-lg">
              Become a Volunteer
            </Link>
            <Link href="/donate" className="bg-transparent border-2 border-white hover:bg-white hover:text-navy text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg text-lg">
              Donate Now
            </Link>
          </motion.div>
        </div>
      </section>

            <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Counter end={5000} suffix="+" text="Children Supported" />
            <Counter end={200} suffix="+" text="Active Volunteers" />
            <Counter end={150} suffix="+" text="Events Conducted" />
            <Counter end={50} suffix="+" text="Communities Impacted" />
          </div>
        </div>
      </section>

            <section className="py-20 bg-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-navy mb-4">Our Focus Areas</h2>
            <div className="w-24 h-1 bg-teal mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">We strategically channel our efforts into key domains to ensure holistic development and sustainable growth for the communities we serve.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: BookOpen, title: "Education", desc: "Providing quality education and learning materials to underprivileged children." },
              { icon: Heart, title: "Healthcare", desc: "Organizing free medical camps, blood donation drives, and health awareness sessions." },
              { icon: Activity, title: "Sports", desc: "Promoting physical fitness and competitive spirit among youth through community sports." },
              { icon: Recycle, title: "Waste Management", desc: "Implementing sustainable waste disposal and recycling initiatives." },
              { icon: Leaf, title: "Environment", desc: "Tree plantation drives and awareness programs to combat climate change." },
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="bg-teal/10 w-16 h-16 rounded-xl flex items-center justify-center text-teal mb-6 group-hover:bg-teal group-hover:text-white transition-colors duration-300">
                  <area.icon size={32} />
                </div>
                <h3 className="text-xl font-bold font-heading text-navy mb-3">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

            <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-navy mb-4">Recent Events</h2>
              <div className="w-24 h-1 bg-orange rounded-full"></div>
            </div>
            <Link href="/events" className="hidden md:flex items-center text-teal font-semibold hover:text-navy transition-colors">
              View All Events <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Sports Day Celebration", date: "19th March 2026", img: "event1.jpg", description: "Saving Dreamz Foundation in association with Hislop College - Department" },
              { title: "Support Our Students for Scholarship Exam 2026", date: "2nd March 2026", img: "event2.jpg", description: "Query Solved With immense happiness, we are proud to share" },
              { title: "Polar Bear Day Celebration - DIY Bookmark Craft Activity", date: "28th February 2026", img: "event3.jpg", description: "On the occasion of International Polar Bear Day, Saving Dreamz" },
            ].map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden shadow-lg group bg-white border border-gray-100"
              >
                <div className="relative h-60 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                  <img src={event.img} alt={event.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-navy font-bold px-4 py-2 rounded-lg z-20">
                    {event.date}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-heading text-navy mb-3 line-clamp-1">{event.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                  <Link href={`/events/${i}`} className="inline-block text-orange font-semibold hover:text-navy transition-colors">
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/events" className="inline-flex items-center text-teal font-semibold hover:text-navy transition-colors">
              View All Events <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

            <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          <div className="absolute w-96 h-96 bg-teal rounded-full blur-3xl -top-20 -left-20"></div>
          <div className="absolute w-96 h-96 bg-orange rounded-full blur-3xl -bottom-20 -right-20"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
            Be the Change You Wish to See
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Every contribution, whether it's your time or resources, makes a lasting impact on someone's life. Join hands with us today.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/get-involved" className="bg-teal hover:bg-white hover:text-teal text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg text-lg">
              Get Involved Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
