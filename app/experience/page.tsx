import React from "react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Experience",
    description: "My Professional Experience",
};

const experiences = [
    {
        jobTitle: "Software Engineer",
        tenure: "March 2024 – Present",
        jobLocation: "Lahore, Pakistan.",
        companyLightModeLogo: "/dubizzle_group_logo.png", // Replace with the actual URL
        darkHeight: 160,
        darkWidth: 160,
        lightHeight: 80,
        lightWidth: 80,
        companyDarkModeLogo: "/Screenshot_2025-01-25_at_6.02.10_PM-removebg-preview.png",
        imgArray: [
            // "https://picsum.photos/200/300",
            // "https://picsum.photos/200/300"
        ],
        contributions: [
            "Developed the ad-posting module for Dubizzle and Bayut KSA, which resulted in a 30% increase in business growth.",
            "Implemented and maintained business-driven features within the CRM for the classified business, enhancing operational workflows and increasing client engagement.",
            "Enhanced overall app stability by optimizing and refactoring legacy code, incorporating new features, resulting in a 45% improvement in performance and user experience."
        ]
    },
    {
        jobTitle: "Software Engineering Intern",
        tenure: "June 2023 – August 2023",
        jobLocation: "Lahore, Pakistan.",
        companyLightModeLogo: "/arrivy_logo.png",
        companyDarkModeLogo: "/Screenshot_2025-01-25_at_5.25.37_PM-removebg-preview.png", // Replace with the actual URL
        imgArray: [
            // "https://picsum.photos/200/300",
            // "https://picsum.photos/200/300"
        ],
        darkHeight: 140,
        darkWidth: 140,
        lightHeight: 100,
        lightWidth: 100,
        contributions: [
            "Developed Slack-HR-Connect, an in-house solution that streamlined attendance and leave management, resulting in a 3% reduction in related costs.",
            "Built and deployed API solutions, enabling scalable, efficient operations and reducing overall infrastructure costs.",
            "Implemented database solutions that improved data handling and analysis, enhancing decision-making and operational efficiency."
        ]
    }
];

export default function Experience() {
    return (
        <section>
            <div className="space-y-6 p-2 sm:p-4 md:p-6 lg:p-8">
                {experiences.map((experience, index) => (
                    <div
                        key={index}
                        className="p-6 rounded-lg
                         transition-shadow duration-300 group-hover:translate-y-[-10px]
                        group-hover:cursor-pointer group-active:scale-95 group-active:transition-transform group-active:duration-150"
                    >
                        <div className="flex flex-col sm:flex-row sm:justify-between items-center">
                            <div className="flex flex-col sm:flex-row sm:items-center items-center">
                                <span className="text-black dark:text-white font-medium tracking-tight">
                                    {experience.jobTitle}
                                </span>
                                <div className="mt-2 sm:ml-4 sm:mt-0 p-2">
                                    {/* Light Mode Logo */}
                                    <Image
                                        src={experience.companyLightModeLogo}
                                        alt={`${experience.jobTitle} logo`}
                                        height={experience?.lightHeight}
                                        width={experience?.lightWidth}
                                        className="block dark:hidden"
                                    />
                                    {/* Dark Mode Logo */}
                                    <Image
                                        src={experience.companyDarkModeLogo}
                                        alt={`${experience.jobTitle} logo`}
                                        height={experience?.darkHeight}
                                        width={experience?.darkWidth}
                                        className="hidden dark:block"
                                        style={{marginLeft: -10, marginBottom: 10}}
                                    />
                                </div>

                            </div>
                            <span
                                className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm sm:mt-0 mt-2">
                                {experience.tenure}
                            </span>
                        </div>

                        <p className="prose prose-neutral dark:prose-invert pt-3">
                            {experience.jobLocation}
                        </p>

                        <ul className="list-disc pl-6 prose prose-neutral dark:prose-invert pt-3">
                            {experience.contributions.map((contribution, i) => (
                                <li key={i}>{contribution}</li>
                            ))}
                        </ul>

                        {experience.imgArray.length > 0 && (
                            <div className="flex space-x-2 pt-4">
                                {experience.imgArray.map((img, i) => (
                                    <Image
                                        key={i}
                                        src={img}
                                        alt={`Experience image ${i + 1}`}
                                        height={100}
                                        width={100}
                                        className="rounded-md"
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
