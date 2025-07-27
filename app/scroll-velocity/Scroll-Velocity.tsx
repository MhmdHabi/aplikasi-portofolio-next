"use client";

import React from "react";
import ScrollVelocity from "../components/ScrollVelocity/ScrollVelocity";

export default function ScrollPage() {
  return (
    <div className="w-full bg-black text-gray-500 p-3">
      <ScrollVelocity texts={["Fullstack Developer", "Web Developer"]} velocity={50} className="text-5xl md:text-7xl font-bold" />
    </div>
  );
}
