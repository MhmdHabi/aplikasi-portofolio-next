"use client";

import Image from "next/image";
import { useState } from "react";

export default function Certificate() {
  const images = ["/certificate/serti1.png", "/certificate/serti2.png", "/certificate/serti3.jpg", "/certificate/serti4.jpg"];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/10 via-gray-950/80 to-black"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent mb-6 animate-pulse"
            style={{
              backgroundSize: "300%",
              backgroundPosition: "0% 50%",
              animation: "shimmer 3s ease-in-out infinite, pulse 2s ease-in-out infinite",
            }}
          >
            My Certificates
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-6 rounded-full shadow-lg shadow-blue-500/50"></div>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            <span className="text-slate-400">A collection of achievements and professional certifications that showcase my expertise and continuous learning journey.</span>
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/60 backdrop-blur-sm border border-gray-800/80 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

              <div className="relative z-10">
                {/* Certificate Image */}
                <div className="relative overflow-hidden rounded-xl bg-gray-800/50 aspect-[4/3] group-hover:shadow-xl group-hover:shadow-blue-500/20 transition-all duration-500">
                  <Image src={image} alt={`Certificate ${index + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* View button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      className="bg-blue-600/90 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg backdrop-blur-sm border border-blue-400/30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                      style={{
                        boxShadow: "0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)",
                      }}
                    >
                      View Certificate
                    </button>
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-gray-100 mb-2 group-hover:text-blue-300 transition-colors duration-300">Certificate {index + 1}</h3>
                  <p className="text-gray-500 text-sm">Professional certification demonstrating expertise and skills in the field.</p>

                  {/* Stats */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-800/80">
                    <span className="text-xs text-gray-600 uppercase tracking-wider">Verified</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-400">Authenticated</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for full-size image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div
            className="relative max-w-4xl max-h-[90vh] bg-gray-900 rounded-2xl overflow-hidden border border-blue-500/30 shadow-2xl"
            style={{
              boxShadow: "0 0 50px rgba(59, 130, 246, 0.3), 0 0 100px rgba(59, 130, 246, 0.1)",
            }}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gray-800/90 hover:bg-gray-700 text-white flex items-center justify-center backdrop-blur-sm border border-gray-700 transition-colors duration-200 hover:border-blue-400/50"
              style={{
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
              }}
            >
              ✕
            </button>
            <Image src={selectedImage} alt="Certificate" width={1200} height={900} className="w-full h-full object-contain" />
          </div>
        </div>
      )}
    </div>
  );
}
