import React from 'react';
import "./EEG.css";

export default function EEG() {
    const project = {
        title: "Epileptic Seizure Prediction using EEG – Final Year Project",
        year: "2023",
        description:
            "Epileptic seizure prediction through brain recorded Electroencephalogram " +
            "waves using deep learning, aiming to enhance early detection of seizure, " +
            "providing ample amount of time for taking precautionary measures.",
        imgUrl: "/eeg_logo.png",
        height: 40,
        width: 40,
        githubUrl: "https://github.com/burakbinmunir/Epileptic-Seizure-Prediction-Using-EEG-Recordings",
        imgArray: [
            "eeg_prediction/temp.png",
            "eeg_prediction/eeg_2.png",
            "eeg_prediction/eeg_3.png",
            "eeg_prediction/eeg_4.png",
            "eeg_prediction/eeg_5.png",
        ],
    };

    return (
        <div className="eeg-container p-4">
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

            {/* Description Section */}
            <div className="flex flex-col sm:flex-row lg:items-center lg:justify-between mb-6">
                <p className="flex flex-1 text-center lg:text-left mb-4 lg:mb-0 lg:mr-5">
                    {project?.description}
                </p>
            </div>

            {/* Image Sections */}
            <div className="flex flex-col items-center justify-between">
                {/* First Row of Images */}
                <div className="flex flex-row my-9 sm:flex-row sm:items-center justify-between w-full ">
                    <img
                        src={project?.imgArray?.[0]}
                        alt="Logo"
                        height={250}
                        width={250}
                        className="mt-2 sm:ml-4 sm:mt-0 bg-white border-2 rounded-2xl"
                    />
                    <img
                        src={project?.imgArray?.[1]}
                        alt="Logo"
                        height={400}
                        width={400}
                        className="mt-2 sm:ml-4 sm:mt-0 bg-white border-2 rounded-2xl"
                        // style={{ height: 300, width: 200, objectFit: "contain", flexShrink: 0 }}
                    />
                </div>

                {/* Description Section (Optional, if you want it placed below the images) */}
                <div className="flex flex-col sm:flex-row lg:items-center lg:justify-between mb-6 w-full">
                    <p className="flex flex-1 text-center lg:text-left mb-4 lg:mb-0 lg:mr-5">
                        {project?.description}
                    </p>
                </div>

                {/* Second Row of Images */}
                <div className="flex flex-col my-9 sm:items-center justify-between w-full ">
                    <img
                        src={project?.imgArray?.[2]}
                        alt="Logo"
                        height={500}
                        width={500}
                        className="mt-2 sm:ml-4 sm:mt-0 bg-white border-2 rounded-2xl"
                    />
                    <img
                        src={project?.imgArray?.[3]}
                        alt="Logo"
                        style={{ objectFit: "cover" }}
                        height={500}
                        width={500}
                        className="mt-2 sm:ml-4 sm:mt-9 bg-white border-2 rounded-2xl"
                    />
                </div>

                {/* Third Row of Images (with description again, if desired) */}
                <div className="flex flex-row my-9 sm:flex-row sm:items-center justify-between w-full">
                    <img
                        src={project?.imgArray?.[4]}
                        alt="Logo"
                        style={{ objectFit: "cover" }}
                        height={500}
                        width={500}
                        className="mt-2 sm:ml-4 sm:mt-0 bg-white border-2 rounded-2xl"
                    />
                    <p className="flex flex-1 text-center lg:text-left mb-4 lg:mb-0 lg:mr-5 mx-4">
                        {project?.description}
                    </p>
                </div>
            </div>


        </div>
    );
}
