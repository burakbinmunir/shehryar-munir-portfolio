import React from 'react';
import "../jarvis/jarvis.css";

export default function PneumoniaClassification() {
    const project = {
        title: "Pneumonia Chest Xray Classification – Artificial Intelligence",
        year: "2023",
        descriptions: [
            "This project focuses on developing deep learning models to classify chest X-ray images into normal and pneumonia categories. The goal is to assist healthcare professionals in early pneumonia detection, improving diagnosis and patient outcomes.",
            "The InceptionResNetV2 model achieved 91.35% accuracy, 88.36% precision, and correctly predicted 570 cases while making 54 incorrect predictions."
        ],
        process: [
            {
                "step": "Preprocessing",
                "stepDescription": "Applied Gaussian filters to reduce noise and enhance image clarity."
            },
            {
                "step": "Class Imbalance",
                "stepDescription": "Used data augmentation (rotation, shifting, flipping) to balance the dataset."
            },
            {
                "step": "Model Training",
                "stepDescription": "Fine-tuned the InceptionResNetV2 model, adding custom Dense layers and Dropout for improved classification of normal vs. pneumonia images."
            }
        ],
        imgUrl: "/brain_tumor.png",
        height: 40,
        width: 40,
        githubUrl: "https://github.com/dark-coder12/multiclass-brain-tumor-classification-using-mri",
        imgArray: [
            "../chest_xray_classification/chest_4.png",
            "../chest_xray_classification/chest_3.png",
            "../chest_xray_classification/chest_2.png",
            "../chest_xray_classification/chest_1.png"
        ]
    };

    return (
        <div className="jarvis-container p-4 sm:px-6 md:px-8 lg:px-10 ">
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
                <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm sm:mt-0 mt-2 year">
                    {project.year}
                </span>
            </div>

            {/* Content Sections */}
            <div className="flex flex-wrap flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <p className="flex flex-1 text-center lg:text-left mb-4 lg:mb-0 lg:mr-5">
                    {project?.descriptions?.[0]}
                </p>
                <img
                    src={project?.imgArray?.[0]}
                    className="border-2 rounded-2xl p-4 bg-white"
                    style={{height: 250, width: 300, objectFit: "contain", flexShrink: 0}}
                    alt="Chest X-ray"
                />
            </div>

            <div className="flex flex-wrap flex-col-reverse lg:flex-row lg:items-center lg:justify-between mb-6">
                <ul className="flex flex-1 text-center items-center justify-center lg:text-left list-disc pl-5">
                    {project?.process.map((item, index) => (
                        <div key={index} className="m-5">
                            <div className="font-bold">{item.step}</div>
                            <span className="text-sm">{item.stepDescription}</span>
                        </div>
                    ))}
                </ul>
            </div>

            <div
                className="flex flex-wrap flex-col sm:flex-col md:flex-col lg:flex-row lg:items-center lg:justify-between my-9">
                <img
                    src={project?.imgArray?.[1]}
                    className="border-2 rounded-2xl p-4 bg-white mb-4 sm:mb-6 lg:mb-0"
                    style={{height: 300, width: 300, objectFit: "contain", flexShrink: 0}}
                    alt="Chest X-ray"
                />
                <p className="flex flex-1 text-center m-5 lg:text-left lg:mx-5 mb-4 sm:mb-6 lg:mb-0">
                    {project?.descriptions?.[1]}
                </p>
                <img
                    src={project?.imgArray?.[3]}
                    className="border-2 rounded-2xl p-4 bg-white mb-4 sm:mb-6 lg:mb-0"
                    style={{height: 300, width: 300, objectFit: "contain", flexShrink: 0}}
                    alt="Chest X-ray"
                />
            </div>
        </div>
    );
}
