"use client";

import { useEffect, useRef, useState } from "react";
import { Award, ExternalLink, Calendar, CheckCircle } from "lucide-react";

export default function Certifications() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCert, setActiveCert] = useState<typeof certifications[0] | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const certifications = [
    {
      title: "Project Management Professional (PMP)",
      issuer: "Simplilearn",
      date: "January 2025",
      credentialId: "7784903",
      verifyUrl: "https://certificates.simplicdn.net/share/7784903_80462621737131475169.pdf",
      icon: "📊",
      status: "Active",
    },
    {
      title: "Advanced Python Programming",
      issuer: "TechLink Academy, Africatek Academy, and TACT",
      date: "July 2023",
      credentialId: "TACT-PY-2023",
      verifyUrl: "https://drive.google.com/file/d/1zt9yf1vRy6b9NEwv6sjjxgqbg3BMJTqC/view?usp=sharing",
      icon: "🐍",
      status: "Active",
    },
    {
      title: "JavaScript Essentials 1 (JSE)",
      issuer: "Cisco Networking Academy",
      date: "May 2023",
      credentialId: "1047724691",
      verifyUrl: "https://drive.google.com/file/d/1ajFGp3xqodV657qPC4nccc78GAUeOu7o/view?usp=sharing",
      icon: "📜",
      status: "Expired",
    },
    {
      title: "Web Development Fundamentals",
      issuer: "Sololearn",
      date: "December 2022",
      credentialId: "CT-DUM0S8EU",
      verifyUrl: "https://www.sololearn.com/en/certificates/CT-DUM0S8EU",
      icon: "🌐",
      status: "Active",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      data-macaly="certifications-section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-text-primary dark:text-text-primary text-text-primary-light">
              Professional{" "}
            </span>
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Certifications
            </span>
            <div className="flex items-center justify-center gap-2 mt-2">
              <Award className="text-purple-500 animate-pulse" size={24} />
            </div>
          </h2>
          <p className="text-text-secondary dark:text-text-secondary text-text-secondary-light text-lg max-w-3xl mx-auto leading-relaxed">
            Validated expertise in cutting-edge technologies and industry best practices
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4"></div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`glass p-6 rounded-xl relative overflow-hidden group hover:scale-105 transition-all duration-500 transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {/* Icon clickable */}
                    <div
                      className="text-3xl cursor-pointer"
                      onClick={() => setActiveCert(cert)}
                    >
                      {cert.icon}
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle
                        className={cert.status === "Expired" ? "text-red-500" : "text-green-500"}
                        size={16}
                      />
                      <span
                        className={`text-xs font-semibold ${
                          cert.status === "Expired" ? "text-red-500" : "text-green-500"
                        }`}
                      >
                        {cert.status}
                      </span>
                    </div>
                  </div>
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-purple-500/20 rounded-lg hover:bg-purple-500/30 transition-colors duration-300"
                    aria-label="Verify Certificate"
                  >
                    <ExternalLink size={16} className="text-purple-500" />
                  </a>
                </div>

                <h3 className="text-xl font-bold text-text-primary dark:text-text-primary text-text-primary-light mb-2">
                  {cert.title}
                </h3>

                <p className="text-purple-500 font-semibold mb-3">{cert.issuer}</p>

                <div className="space-y-2 text-sm text-text-secondary dark:text-text-secondary text-text-secondary-light">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>Issued: {cert.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={14} />
                    <span>ID: {cert.credentialId}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal pour certification */}
      {activeCert && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-md w-full relative">
            <button
              onClick={() => setActiveCert(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>
            <h3 className="text-xl font-bold mb-2">{activeCert.title}</h3>
            <p className="mb-1 text-purple-500">{activeCert.issuer}</p>
            <p className="mb-1">Issued: {activeCert.date}</p>
            <p>ID: {activeCert.credentialId}</p>
            <a
              href={activeCert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-purple-500 underline"
            >
              Verify Certificate
            </a>
          </div>
        </div>
      )}

      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-indigo-500/10 rounded-full blur-2xl animate-blob animation-delay-2000"></div>
    </section>
  );
}
