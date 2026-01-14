"use client";
import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaChevronDown } from "react-icons/fa";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  github: string;
  live: string;
  badge?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  highlights,
  github,
  live,
  badge,
}: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="group">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white pr-2 flex-1">
          {title}
        </h3>
        {badge && (
          <Badge variant="primary" className="whitespace-nowrap">
            {badge}
          </Badge>
        )}
      </div>

      <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {technologies.map((tech, idx) => (
          <Badge key={idx} variant="secondary">
            {tech}
          </Badge>
        ))}
      </div>

      {/* Highlights Section */}
      <div className={`overflow-hidden transition-all duration-300 ${expanded ? "max-h-96" : "max-h-0"}`}>
        <div className="mb-6 pb-6 border-t border-slate-200 dark:border-slate-700">
          <h4 className="font-semibold text-slate-900 dark:text-white mb-3 mt-4">
            Key Achievements:
          </h4>
          <ul className="space-y-2">
            {highlights.map((highlight, idx) => (
              <li
                key={idx}
                className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2"
              >
                <span className="text-orange-500 mt-1 flex-shrink-0">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
        <div className="flex gap-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300 group/link"
          >
            <FaGithub className="text-lg group-hover/link:scale-110 transition-transform" />
            <span className="text-sm font-medium">Code</span>
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300 group/link"
          >
            <FaExternalLinkAlt className="text-lg group-hover/link:scale-110 transition-transform" />
            <span className="text-sm font-medium">Live</span>
          </a>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all duration-300"
          aria-label="Toggle details"
        >
          <FaChevronDown
            className={`transition-transform duration-300 ${
              expanded ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
    </Card>
  );
}