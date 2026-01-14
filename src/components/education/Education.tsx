"use client";
import React from "react";
import { EDUCATION } from "@/lib/constant";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { FaGraduationCap, FaCalendar, FaMapMarkerAlt } from "react-icons/fa";

export default function Education() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          title="Education"
          subtitle="Academic background & coursework"
        />

        <Card className="mt-12 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-600 text-white">
              <FaGraduationCap className="text-2xl" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                {EDUCATION.degree}
              </h3>
              <div className="flex flex-col gap-2 mt-2">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <FaMapMarkerAlt className="text-orange-500" />
                  <span className="text-lg">{EDUCATION.institution}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <FaCalendar className="text-orange-500" />
                  <span className="text-lg">Expected Graduation: {EDUCATION.expectedGrad}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-300 dark:border-slate-700">
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Relevant Coursework
            </h4>
            <div className="flex flex-wrap gap-3">
              {EDUCATION.coursework.map((course, idx) => (
                <Badge key={idx} variant="primary">
                  {course}
                </Badge>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}