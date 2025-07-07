"use client";
import React, { useState, useEffect, useRef } from "react";
import { Code, Calendar, Check, Heart, Laptop } from "lucide-react";

const Stats = () => {
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    codes: 0,
    experience: 0,
  });

  const statsRef = useRef(null);

  useEffect(() => {
    const animateStats = () => {
      const targetStats = {
        projects: 10,
        clients: 12,
        codes: 12000,
        experience: 3,
      };

      Object.keys(targetStats).forEach((key) => {
        let current = 0;
        const target = targetStats[key];
        const increment = target / 50;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setStats((prev) => ({ ...prev, [key]: Math.floor(current) }));
        }, 50);
      });
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateStats();
        observer.disconnect();
      }
    });

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const funFacts = [
    {
      icon: <Code className="w-6 h-6" />,
      label: "Lines of code",
      value: stats.codes,
      color: "text-amber-500",
    },
    {
      icon: <Laptop className="w-6 h-6" />,
      label: "Projects Completed",
      value: stats.projects,
      color: "text-emerald-500",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      label: "Happy Clients",
      value: stats.clients,
      color: "text-rose-500",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      label: "Years Experience",
      value: stats.experience,
      color: "text-blue-500",
    },
  ];

  return (
    <div>
      <div
        ref={statsRef}
        className="grid grid-cols-2 md:grid-cols-4 gap-10 mx-auto my-24"
      >
        {funFacts.map((fact, index) => (
          <div
            key={index}
            className="text-center bg-white dark:bg-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className={`${fact.color} mb-2 flex justify-center`}>
              {fact.icon}
            </div>
            <div className="text-2xl font-bold text-black">{fact.value}+</div>
            <div className="text-sm text-gray-500">{fact.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
