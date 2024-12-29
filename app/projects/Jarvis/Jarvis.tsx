import React from "react";
import "./Jarvis.css";

export default function Jarvis() {
    const project = {
        title: "Jarvis - A Classified CRM",
        year: "2024 - Present",
        description:
            "Jarvis is a classified CRM (Customer Relationship Management) system used by Dubizzle Group, " +
            "which powers multiple platforms like Dubizzle, Bayut, and other associated brands within the group. " +
            "It's designed to help businesses in the classified advertising industry efficiently manage customer interactions, " +
            "track leads, and improve sales performance.",
        imgUrl: "/jarvis_logo.png",
        height: 50,
        width: 50,
        imgArray: [
            "jarvis_crm/crm_2.png",
            "jarvis_crm/crm_1.png",
            "jarvis_crm/crm_3.png",
            "jarvis_crm/crm_4.png",
            "jarvis_crm/crm_7.png",
            "jarvis_crm/crm_8.png",
        ],
    };

    return (
        <div className="jarvis-container p-4">
            {/* Title Section */}
            <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center">
                    <span className="text-black dark:text-white font-medium tracking-tight text-2xl sm:text-4xl">
                        {project.title}
                    </span>
                    <img
                        src={project?.imgUrl}
                        alt="Logo"
                        height={project?.height}
                        width={project?.width}
                        className="mt-2 sm:ml-4 sm:mt-0"
                    />
                </div>
                <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm sm:mt-0 mt-2">
                    {project.year}
                </span>
            </div>

            {/* Content Sections */}
            <div className="flex flex-wrap flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <p className="flex flex-1 text-center lg:text-left mb-4 lg:mb-0 lg:mr-5">
                    {project?.description}
                </p>
                <img
                    src={project?.imgArray?.[0]}
                    className="border-2 rounded-2xl bg-white"
                    style={{ height: 300, width: 200, objectFit: "contain", flexShrink: 0 }}
                    alt="Jarvis"
                />
            </div>

            <div className="flex flex-wrap flex-col-reverse lg:flex-row lg:items-center lg:justify-between mb-6">
                <img
                    src={project?.imgArray?.[1]}
                    className="border-2 rounded-2xl bg-white mb-4 lg:mb-0"
                    style={{ height: 300, width: 200, objectFit: "contain", flexShrink: 0 }}
                    alt="Jarvis"
                />
                <p className="flex flex-1 text-center lg:text-left lg:ml-5">
                    {project?.description}
                </p>
            </div>

            <div className="flex flex-wrap lg:flex-row lg:items-center lg:justify-between my-9">
                <img
                    src={project?.imgArray?.[2]}
                    className="border-2 rounded-2xl bg-white mb-4 lg:mb-0"
                    style={{ height: 300, width: 200, objectFit: "contain", flexShrink: 0 }}
                    alt="Jarvis"
                />
                <p className="flex flex-1 text-center lg:text-left lg:mx-5">
                    {project?.description}
                </p>
                <img
                    src={project?.imgArray?.[3]}
                    className="border-2 rounded-2xl bg-white mb-4 lg:mb-0"
                    style={{ height: 300, width: 200, objectFit: "contain", flexShrink: 0 }}
                    alt="Jarvis"
                />
            </div>

            <div className="flex flex-wrap lg:flex-row lg:items-center lg:justify-between my-9">
                <p className="flex flex-1 text-center lg:text-left lg:mx-5">
                    {project?.description}
                </p>
            </div>

            <div className="flex flex-wrap lg:flex-row lg:items-center lg:justify-between my-9">
                <img
                    src={project?.imgArray?.[4]}
                    className="border-2 rounded-2xl bg-white mb-4 lg:mb-0"
                    style={{ height: 300, width: 200, objectFit: "contain", flexShrink: 0 }}
                    alt="Jarvis"
                />
                <img
                    src={project?.imgArray?.[5]}
                    className="border-2 rounded-2xl bg-white mb-4 lg:mb-0 lg:ml-5"
                    style={{ height: 300, width: 200, objectFit: "contain", flexShrink: 0 }}
                    alt="Jarvis"
                />
                <p className="flex flex-1 text-center lg:text-left lg:mx-5">
                    {project?.description}
                </p>
            </div>
        </div>
    );
}
