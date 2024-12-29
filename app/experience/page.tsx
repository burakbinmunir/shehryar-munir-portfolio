import React from "react";
import {experienceData} from "./experience-data";
import Image from "next/image";


export default function Projects() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-medium tracking-tight">Projects</h1>
            <div className="space-y-6">
                {experienceData.map((project, index) => (
                    <a
                        key={index}
                        href={project?.jobDescription}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group hover:opacity-80 transition-opacity duration-200"
                    >
                        <div className="flex flex-col sm:flex-row sm:justify-between">
                            <div className="flex flex-col sm:flex-row sm:items-center">
                                <span className="text-black dark:text-white font-medium tracking-tight">
                                    {project.jobTitle}
                                </span>
                                <Image
                                    src={project?.imgUrl}
                                    alt="Logo"
                                    height={50}
                                    width={50}
                                    className="mt-2 sm:ml-4 sm:mt-0"
                                />
                            </div>
                            <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm sm:mt-0 mt-2">
                                {project.tenure}
                            </span>
                        </div>
                        <p className="prose prose-neutral dark:prose-invert pt-3">
                            {project.jobDescription}
                        </p>
                    </a>
                ))}
            </div>
        </section>
    );
}
