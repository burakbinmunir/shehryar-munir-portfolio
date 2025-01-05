import React from "react";
import "./jarvis.css";

export default function Jarvis() {
    const project = {
        title: "Jarvis - A Classified CRM",
        year: "2024 - Present",
        descriptions: [
            "Jarvis is a classified CRM (Customer Relationship Management) system used by Dubizzle Group, " +
            "which powers multiple platforms like Dubizzle, Bayut, Zameen, and Olx. " +
            "It's designed to help businesses in the classified advertising industry efficiently manage customer interactions, " +
            "track leads, and improve sales performance.",
            "The dashboard in Jarvis displays key insights like sales trends and performance summaries, enabling businesses to track progress and make informed decisions effortlessly.",
            "Jarvis features robust listings with advanced filters, allowing users to easily find, manage, and analyze relevant data for better decision-making.",
            "TruCheck is a feature that authenticates property listings by allowing users to capture photos, which are then verified for accuracy. It also ensures the person is at the correct location through live location tracking, providing trusted and verified property information."
        ],
        imgUrl: "/jarvis_logo.png",
        height: 50,
        width: 50,
        imgArray: [
            "../jarvis_crm/crm_2.png",
            "../jarvis_crm/crm_1.png",
            "../jarvis_crm/crm_3.png",
            "../jarvis_crm/crm_4.png",
            "../jarvis_crm/crm_7.png",
            "../jarvis_crm/crm_8.png",
        ],
    };

    return (
        <div className="jarvis-container p-4 space-y-6 sm:space-y-8 lg:space-y-12">
            {/* Title Section */}
            <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center">
                    <span className="text-black dark:text-white font-medium tracking-tight text-xl sm:text-2xl lg:text-4xl">
                        {project.title}
                    </span>
                    <img
                        src={project?.imgUrl}
                        alt="Logo"
                        className="m-2 sm:ml-4 sm:mt-0 "
                        height={project?.height}
                        width={project?.width}
                    />
                </div>
                <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm sm:text-base sm:mt-0 mt-2 year">
                    {project.year}
                </span>
            </div>

            {/* Content Sections */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <p className="text-sm sm:text-base text-center lg:text-left mb-4 lg:mb-0 lg:mr-5 flex-1">
                    {project?.descriptions?.[0]}
                </p>
                <img
                    src={project?.imgArray?.[0]}
                    className="border-2 rounded-2xl bg-white w-full max-w-[200px] h-auto"
                    alt="Jarvis"
                />
            </div>

            <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between mb-6">
                <img
                    src={project?.imgArray?.[1]}
                    className="border-2 rounded-2xl bg-white w-full max-w-[200px] h-auto mb-4 lg:mb-0"
                    alt="Jarvis"
                />
                <p className="text-sm sm:text-base mb-4 text-center lg:text-left lg:ml-5 flex-1">
                    {project?.descriptions?.[1]}
                </p>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between my-9 space-y-4 lg:space-y-0">
                <img
                    src={project?.imgArray?.[2]}
                    className="border-2 rounded-2xl bg-white w-full max-w-[200px] h-auto"
                    alt="Jarvis"
                />
                <p className="text-sm sm:text-base text-center lg:text-left lg:mx-5 flex-1">
                    {project?.descriptions?.[2]}
                </p>
                <img
                    src={project?.imgArray?.[4]}
                    className="border-2 rounded-2xl bg-white w-full max-w-[200px] h-auto"
                    alt="Jarvis"
                />
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between my-9 space-y-4 lg:space-y-0">
                <img
                    src={project?.imgArray?.[3]}
                    className="border-2 rounded-2xl bg-white w-full max-w-[200px] h-auto"
                    alt="Jarvis"
                />
                <img
                    src={project?.imgArray?.[5]}
                    className="border-2 rounded-2xl bg-white w-full max-w-[200px] h-auto lg:ml-5"
                    alt="Jarvis"
                />
                <p className="text-sm sm:text-base text-center lg:text-left lg:mx-5 flex-1">
                    {project?.descriptions?.[3]}
                </p>
            </div>
        </div>
    );
}
