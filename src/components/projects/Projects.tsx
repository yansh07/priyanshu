"use client";
import React from "react";
import { PROJECTS } from "@/lib/constant";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          title="Featured Projects"
          subtitle="Some of my recent work"
        />

        <div className="grid grid-cols-1 gap-8 mt-12">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              highlights={project.highlights}
              github={project.github}
              live={project.live}
              badge={project.badge}
            />
          ))}
        </div>
      </div>
    </section>
  );
}