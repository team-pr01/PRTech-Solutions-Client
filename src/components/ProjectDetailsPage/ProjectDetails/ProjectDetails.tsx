"use client";
import Container from "@/components/Reusable/Container/Container";
import React, { useState } from "react";
import ProjectOverview from "./ProjectOverview/ProjectOverview";
import ProjectTimeline from "./ProjectTimeline/ProjectTimeline";
import ChallengesAndSolutions from "./ChallengesAndSolutions/ChallengesAndSolutions";
import ProjectPhotoGallary from "./ProjectPhotoGallary/ProjectPhotoGallary";

const ProjectDetails = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const tabButtons = ["Overview", "Challenges & Solutions", "Gallery"];
  return (
    <div className="bg-secondary-50 py-20">
      <Container>
        <div className="flex flex-col xl:flex-row gap-10">
          {/* Left Side */}
          <div className="w-full xl:w-[70%]">
            {/* Tabs */}
            <div className="flex items-center gap-6">
              {tabButtons.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(item)}
                  className={`relative z-20 px-3 sm:px-6 py-2 transition duration-300 border rounded-full cursor-pointer text-[10px] sm:text-base font-medium text-center text-nowrap hover:text-white ${
                    activeTab === item
                      ? "text-white bg-primary-20 border-primary-20"
                      : "text-white/60 bg-none border-white/20 hover:bg-neutral-70/30"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Project Overview */}
            {activeTab === "Overview" && <ProjectOverview />}
            {activeTab === "Challenges & Solutions" && <ChallengesAndSolutions />}
            {activeTab === "Gallery" && <ProjectPhotoGallary />}
          </div>
          <ProjectTimeline />
        </div>
      </Container>
    </div>
  );
};

export default ProjectDetails;
