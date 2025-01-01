import React from 'react'

export default function Invictus() {
    const project = {
        title: "Invictus – Web Engineering",
        year: "2023",
        description:
            "Invictus is a knowledge sharing and discussion-oriented real-time web application designed for coding enthusiasts to connect" +
            "and involve themselves within the worldwide developer community.",
        imgUrl: "/invictus_logo.png",
        height: 150,
        width: 150,
        githubUrl: "https://github.com/dark-coder12/Invictus",
        imgArray: ["invictus/invictus_1.png", "invictus/invictus_2.png", "invictus/invictus_3.png", "invictus/invictus_4.png", "invictus/invictus_5.png", "invictus/invictus_6.png"],
    }

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
                    className="border-2 rounded-2xl px-4 bg-white"
                    style={{ height: 250, width: 400, objectFit: "contain", flexShrink: 0 }}
                    alt="Jarvis"
                />
            </div>

            <div className="flex flex-wrap flex-col-reverse lg:flex-row lg:items-center lg:justify-between mb-6">
                <img
                    src={project?.imgArray?.[1]}
                    className="border-2 rounded-2xl px-4 bg-white mb-4 lg:mb-0"
                    style={{ height: 250, width: 400, objectFit: "contain", flexShrink: 0 }}
                    alt="Jarvis"
                />
                <p className="flex flex-1 text-center lg:text-left lg:ml-5">
                    {project?.description}
                </p>
            </div>

            <div className="flex flex-wrap lg:flex-row lg:items-center lg:justify-between my-9">
                <img
                    src={project?.imgArray?.[2]}
                    className="border-2 rounded-2xl px-4  bg-white mb-4 lg:mb-0"
                    style={{ height: 250, width: 400, objectFit: "contain", flexShrink: 0 }}
                    alt="Jarvis"
                />

                <img
                    src={project?.imgArray?.[3]}
                    className="border-2 rounded-2xl px-4  bg-white mb-4 lg:mb-0"
                    style={{ height: 250, width: 400, objectFit: "contain", flexShrink: 0 }}
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
                    className="border-2 rounded-2xl px-4 bg-white mb-4 lg:mb-0"
                    style={{ height: 250, width: 400, objectFit: "contain", flexShrink: 0 }}
                    alt="Jarvis"
                />
                <img
                    src={project?.imgArray?.[5]}
                    className="border-2 rounded-2xl px-4  bg-white mb-4 lg:mb-0 lg:ml-5"
                    style={{ height: 250, width: 400, objectFit: "contain", flexShrink: 0 }}
                    alt="Jarvis"
                />
                <p className="flex flex-1 text-center mt-4 lg:text-left lg:mx-5">
                    {project?.description}
                </p>
            </div>
        </div>
    );
}
