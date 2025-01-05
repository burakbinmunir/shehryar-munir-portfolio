import React from 'react';
import "./eeg.css";
import "../jarvis/jarvis.css";

export default function EEG() {
    const project = {
        title: "Epileptic Seizure Prediction using EEG – Final Year Project",
        year: "2023",
        descriptions: [
            "The project focuses on predicting epileptic seizures by analyzing brain-recorded Electroencephalogram (EEG) waves using deep learning techniques. The goal is to enhance the early detection of seizures, providing individuals with valuable time to take precautionary measures.",
            "The model achieved an accuracy range of 94% to 96%, demonstrating its effectiveness in predicting epileptic seizures. It was trained on a dataset from the American Epilepsy Society and Boston Children's Hospital, and tested on local data from General Hospital Lahore."
        ],
        process: [
            {
                step: "Feature Extraction",
                stepDescription: "Automated features are extracted from the EEG data using spectrograms, which visually represent the frequency content of the signal over time."
            },
            {
                step: "CNN Processing",
                stepDescription: "The spectrograms are fed into a Convolutional Neural Network (CNN), which generates a feature vector capturing essential patterns from the data."
            },
            {
                step: "Combining Features",
                stepDescription: "The CNN-generated feature vector is combined with handcrafted features, such as mean, median, kurtosis, and skewness, to provide additional context."
            },
            {
                step: "Prediction with LSTM",
                stepDescription: "The combined feature data is passed through a custom Long Short-Term Memory (LSTM) model, which analyzes temporal patterns to accurately predict potential seizures."
            }
        ],
        imgUrl: "/eeg_logo.png",
        height: 40,
        width: 40,
        githubUrl: "https://github.com/burakbinmunir/Epileptic-Seizure-Prediction-Using-EEG-Recordings",
        imgArray: [
            "../eeg_prediction/eeg_1.jpg",
            "../eeg_prediction/eeg_2.png",
            "../eeg_prediction/eeg_3.png",
            "../eeg_prediction/eeg_4.png",
            "../eeg_prediction/eeg_5.png"
        ],
        detailPagePath: "projects/eeg"
    };

    return (
        <div className="eeg-container p-4">
            {/* Title Section */}
            <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-8">
                <div className="flex flex-row items-center space-x-4">
                    <span className="text-black dark:text-white font-medium tracking-tight text-2xl sm:text-4xl">
                        {project?.title}
                    </span>
                    <img
                        src={project?.imgUrl}
                        alt="Logo"
                        height={project?.height}
                        width={project?.width}
                        className="icon"
                    />
                </div>

                <span className="year text-neutral-600 dark:text-neutral-400 tabular-nums text-sm sm:mt-0 mt-2">
                    {project?.year}
                </span>

            </div>

            {/* Content Section */}
            <div className="grid gap-8 lg:grid-cols-2">
                {/* First Section */}
                <div>
                    <p className="mb-4">{project?.descriptions?.[0]}</p>
                    <ul className="list-disc pl-5">
                        {project?.process.slice(0, 2).map((item, index) => (
                            <li key={index} className="my-4">
                                <span className="font-bold">{item.step}:</span>{" "}
                                {item.stepDescription}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <img
                        src={project?.imgArray?.[0]}
                        alt="EEG Process"
                        className="rounded-lg border border-gray-300 w-full h-auto"
                    />
                </div>

                {/* Second Section */}
                <div>
                    <img
                        src={project?.imgArray?.[1]}
                        alt="EEG Data"
                        className="rounded-lg border border-gray-300 w-full h-auto"
                    />
                </div>
                <div>
                    <ul className="list-disc pl-5">
                        {project?.process.slice(2, 4).map((item, index) => (
                            <li key={index} className="my-4">
                                <span className="font-bold">{item.step}:</span>{" "}
                                {item.stepDescription}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Final Section */}
                <div>
                    <p className="m-6">{project?.descriptions?.[1]}</p>
                </div>
                <div>
                    <img
                        src={project?.imgArray?.[4]}
                        alt="EEG Results"
                        className="rounded-lg border border-gray-300 w-full h-auto"
                    />
                </div>
            </div>
        </div>
    );
}
