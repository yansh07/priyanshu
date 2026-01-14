"use client";
import React from "react";
import { TECH_STACK } from "@/lib/constant";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import {
  FaPython,
  FaReact,
  FaNode,
  FaDatabase,
  FaDocker,
  FaBrain,
} from "react-icons/fa";

const CATEGORIES = [
  {
    title: "Languages",
    items: TECH_STACK.languages,
    icon: FaPython,
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Frontend",
    items: TECH_STACK.frontend,
    icon: FaReact,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Backend",
    items: TECH_STACK.backend,
    icon: FaNode,
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Database",
    items: TECH_STACK.database,
    icon: FaDatabase,
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "DevOps",
    items: ["Docker", "GitHub Actions", "Vercel", "Railway"],
    icon: FaDocker,
    color: "from-orange-500 to-red-600",
  },
  {
    title: "ML/AI",
    items: TECH_STACK.ml,
    icon: FaBrain,
    color: "from-red-500 to-pink-600",
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          title="Tech Stack"
          subtitle="Tools and technologies I work with"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {CATEGORIES.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className={`group relative overflow-hidden bg-gradient-to-br ${category.color} bg-opacity-5 dark:bg-opacity-10 border-2`}
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br from-white to-transparent" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} text-white`}>
                      <Icon className="text-xl" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, idx) => (
                      <Badge key={idx} variant="accent">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}