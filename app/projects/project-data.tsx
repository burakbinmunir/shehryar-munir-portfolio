export interface Project {
    title: string;
    year: string;
    description: string;
    imgUrl: string;
    githubUrl: string;
    height: number;
    width: number;
    imgArray: Array<string>;
    detailPagePath: string;
}

export const projects: Project[] = [
    {
        title: "Jarvis - A Classified CRM",
        year: "2024 - Present",
        description:
            "Jarvis is a classified CRM (Customer Relationship Management) system used by Dubizzle Group," +
            " which powers multiple platforms like Dubizzle, Bayut, and other associated brands within the group. " ,
        imgUrl: "/jarvis_logo.png",
        height: 50,
        width: 50,
        githubUrl: "",
        imgArray: [  "jarvis_crm/crm_2.png", "jarvis_crm/crm_1.png","jarvis_crm/crm_3.png", "jarvis_crm/crm_4.png", "jarvis_crm/crm_7.png", "jarvis_crm/crm_8.png" ],
        detailPagePath: "projects/jarvis"
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
        githubUrl: "https://github.com/burakbinmunir/Epileptic-Seizure-Prediction-Using-EEG-Recordings",
        imgArray: ["eeg_prediction/eeg_1.jpg", "eeg_prediction/eeg_2.png", "eeg_prediction/eeg_3.png", "eeg_prediction/eeg_4.png", "eeg_prediction/eeg_5.png" ],
        detailPagePath: "projects/eeg"

    },
    {
        title: "Invictus – Web Engineering",
        year: "2023",
        description:
            "Invictus is a knowledge sharing and discussion-oriented real-time web application designed for coding enthusiasts to connect" +
            " and involve themselves within the worldwide developer community.",
        imgUrl: "/invictus_logo.png",
        height: 150,
        width: 150,
        githubUrl: "https://github.com/dark-coder12/Invictus",
        imgArray: [ "invictus/invictus_1.png", "invictus/invictus_2.png", "invictus/invictus_3.png", "invictus/invictus_4.png", "invictus/invictus_5.png", "invictus/invictus_6.png" ],
        detailPagePath: "projects/invictus"

    },
    {
        title: "Pneumonia Chest Xray Classification – Artificial Intelligence",
        year: "2023",
        description:
        "A fine-tuned InceptionResNetV2 model classifies chest X-ray images into normal and pneumonia categories, assisting healthcare professionals in early detection for improved diagnosis and patient outcomes.",
        imgUrl: "/chest.jpeg",
        height:20,
        width: 20,
        githubUrl: "https://github.com/dark-coder12/multiclass-brain-tumor-classification-using-mri",
        imgArray: ["chest_xray_classification/chest_1.png","chest_xray_classification/chest_2.png", "chest_xray_classification/chest_3.png", "chest_xray_classification/chest_4.png"],
        detailPagePath: "projects/pneumoniaclassification"

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
        githubUrl: "https://github.com/burakbinmunir/File-Encryption",
        imgArray: ["file_crypt/file_1.png", "file_crypt/file_2.png", "file_crypt/file_3.png","file_crypt/file_4.png"],
        detailPagePath: "projects/filecrypt"

    },

];
