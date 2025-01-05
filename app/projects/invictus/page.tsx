import React from "react";
import "../jarvis/jarvis.css";

export default function Invictus() {
    const project = {
        title: "Invictus – Web Engineering",
        year: "2023",
        descriptions: [
            "Invictus is a knowledge sharing and discussion-oriented real-time web application designed for coding enthusiasts to connect and involve themselves within the worldwide developer community.",
            "Users can enhance their rankings and earn certifications in various programming languages or concepts by taking standardized MCQ-based tests.",
            "Invictus offers an AI-powered chatbot for development and learning assistance, background music tailored to user preferences, and robust post management features for creating, updating, and deleting posts within communities or Q&A sections.",
            "Invictus allows users to explore upcoming technology conferences, seminars, and webinars in their locality, while also enabling them to write and share blogs on various tech topics."
        ],
        imgUrl: "/invictus_logo.png",
        height: 150,
        width: 150,
        githubUrl: "https://github.com/dark-coder12/Invictus",
        imgArray: [
            "../invictus/invictus_1.png",
            "../invictus/invictus_2.png",
            "../invictus/invictus_3.png",
            "../invictus/invictus_4.png",
            "../invictus/invictus_5.png",
            "../invictus/invictus_6.png"
        ]
    };

    return (
        <div className="jarvis-container p-4">
            {/* Title Section */}
            <div className="flex flex-wrap items-center justify-between mb-8">
                <div className="flex items-center">
                    <span className="text-black dark:text-white font-medium tracking-tight text-2xl sm:text-4xl">
                        {project.title}
                    </span>
                    <img
                        src={project?.imgUrl}
                        alt="Logo"
                        height={project?.height}
                        width={project?.width}
                        className="ml-4"
                    />
                </div>
                <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm year">
                    {project.year}
                </span>
            </div>

            {/* Content Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <p className="text-center my-9 lg:text-left">{project?.descriptions?.[0]}</p>
                <img
                    src={project?.imgArray?.[0]}
                    className="border-2 rounded-xl p-4 bg-white mx-auto"
                    style={{height: "auto", maxWidth: "100%", objectFit: "contain"}}
                    alt="Invictus"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <img
                    src={project?.imgArray?.[1]}
                    className="border-2 rounded-xl p-4 bg-white mx-auto"
                    style={{height: "auto", maxWidth: "100%", objectFit: "contain"}}
                    alt="Invictus"
                />
                <p className="text-center my-9 lg:text-left">{project?.descriptions?.[1]}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <img
                    src={project?.imgArray?.[2]}
                    className="border-2 rounded-xl p-4 bg-white mx-auto"
                    style={{height: "auto", maxWidth: "100%", objectFit: "contain"}}
                    alt="Invictus"
                />
                <img
                    src={project?.imgArray?.[3]}
                    className="border-2 rounded-xl p-4 bg-white mx-auto"
                    style={{height: "auto", maxWidth: "100%", objectFit: "contain"}}
                    alt="Invictus"
                />
            </div>

            <div className="grid grid-cols-1 gap-6 mb-8">
                <p className="text-center lg:text-left">{project?.descriptions?.[2]}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <img
                    src={project?.imgArray?.[4]}
                    className="border-2 rounded-xl p-4 bg-white mx-auto"
                    style={{height: "auto", maxWidth: "100%", objectFit: "contain"}}
                    alt="Invictus"
                />
                <img
                    src={project?.imgArray?.[5]}
                    className="border-2 rounded-xl p-4 bg-white mx-auto"
                    style={{height: "auto", maxWidth: "100%", objectFit: "contain"}}
                    alt="Invictus"
                />
            </div>

            <div className="grid grid-cols-1 gap-6 mt-8">
                <p className="text-center lg:text-left">{project?.descriptions?.[3]}</p>
            </div>
        </div>
    );
}
