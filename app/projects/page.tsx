import React from "react";
import type {Metadata} from "next";
import {projects} from "./project-data";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Projects",
    description: "My Projects",
};

export default function Projects() {
    return (
        <section>
            <div className="space-y-6 p-2 sm:p-4 md:p-6 lg:p-8">

                {projects.map((project, index) => (
                    <Link
                        key={index}
                        href={project?.detailPagePath}
                        className="block group hover:opacity-80 transition-opacity duration-200"
                    >
                        <div
                            className={`bg-gradient-to-bl from-gray-800 to-gray p-6 rounded-lg shadow-xl 
                            hover:shadow-2xl transition-shadow duration-300 
                            group-hover:translate-y-[-10px] group-hover:cursor-pointer
                            group-active:scale-95 group-active:transition-transform group-active:duration-150`}
                        >
                            <div className="flex flex-col sm:flex-row sm:justify-between">
                                <div className="flex flex-col sm:flex-row sm:items-center">
                                    <span className="text-black dark:text-white font-medium tracking-tight">
                                        {project.title}
                                    </span>
                                    <Image
                                        src={project?.imgUrl}
                                        alt="Logo"
                                        height={project?.height}
                                        width={project?.width}
                                        className="mt-2 sm:ml-4 sm:mt-0"
                                    />
                                </div>
                                <span
                                    className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm sm:mt-0 mt-2">
                                    {project.year}
                                </span>
                            </div>

                            <p className="prose prose-neutral dark:prose-invert pt-3">
                                {project.description}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
