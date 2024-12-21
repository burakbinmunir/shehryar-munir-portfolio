export interface Project {
    title: string;
    year: string;
    description: string;
    imgUrl: string;
    githubUrl: string;
    height: number;
    width: number;
}

export const projects: Project[] = [
    {
        title: "Jarvis - A Classified CRM",
        year: "2024 - Present",
        description:
            "Jarvis is a classified CRM (Customer Relationship Management) system used by Dubizzle Group," +
            " which powers multiple platforms like Dubizzle, Bayut, and other associated brands within the group. " +
            "It's designed to help businesses in the classified advertising industry efficiently manage customer interactions," +
            " track leads, and improve sales performance.",
        imgUrl: "/jarvis_logo.png",
        height: 50,
        width: 50,
        githubUrl: ""
    },
    {
        title: "Epileptic Seizure Prediction using EEG – Final Year Project",
        year: "2023",
        description:
            "Epileptic seizure prediction through brain recorded Electroencephalogram" +
            "waves using deep learning, aiming to enhance early" +
            "detection of seizure, providing ample amount of time for taking precautionary measures.",
        imgUrl: "/eeg_logo.png",
        height: 40,
        width: 40,
        githubUrl: "https://github.com/burakbinmunir/Epileptic-Seizure-Prediction-Using-EEG-Recordings"
    },
    {
        title: "Invictus – Web Engineering",
        year: "2023",
        description:
            "Invictus is a knowledge sharing and discussion-oriented real-time web application designed for coding enthusiasts to connect" +
            "and involve themselves within the worldwide developer community.",
        imgUrl: "/invictus_logo.png",
        height: 150,
        width: 150,
        githubUrl: "https://github.com/dark-coder12/Invictus"
    },
    {
        title: "Multiclass Brain Tumor Classification using MRI – Artificial Intelligence",
        year: "2023",
        description:
            "A custom EfficientNet model for image classification, integrating advanced data transformations and providing real-time" +
            "predictions through a RESTful API.",
        imgUrl: "/brain_tumor.png",
        height: 40,
        width: 40,
        githubUrl: "https://github.com/dark-coder12/multiclass-brain-tumor-classification-using-mri"
    },
    {
        title: "File-Crypt – Information Security",
        year: "2022",
        description:
            "File-Encryptor is a web app that provides a user-friendly interface for securely encrypting files using Advanced Encryption" +
            "Standard (AES) and verifying their integrity using HMACs.",
        imgUrl: "/file_crypt_logo.png",
        height: 100,
        width: 100,
        githubUrl: "https://github.com/burakbinmunir/File-Encryption"
    },

];
