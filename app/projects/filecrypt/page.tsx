import React from 'react';
import "../jarvis/jarvis.css";

export default function FileCrypt() {
    const project = {
        title: "File-Crypt – Information Security",
        year: "2022",
        descriptions: [
            "FileCrypt is a web app that provides a user-friendly interface for securely encrypting files using Advanced Encryption" +
            "Standard (AES) and verifying their integrity using HMACs.",
            "The app allows users to securely encrypt files by using a secret key with the Advanced Encryption Standard (AES) algorithm.",
            "The app also enables secure decryption of files using the secret key, while ensuring file integrity through integration with HMACs (Hash-based Message Authentication Codes)."
        ],
        imgUrl: "/file_crypt_logo.png",
        height: 100,
        width: 100,
        githubUrl: "https://github.com/burakbinmunir/File-Encryption",
        imgArray: [
            "../file_crypt/file_1.png",
            "../file_crypt/file_2.png",
            "../file_crypt/file_3.png",
            "../file_crypt/file_4.png"
        ],
    }

    return (
        <div className="jarvis-container p-4">
            {/* Title Section */}
            <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                    <span className="text-black dark:text-white font-medium tracking-tight text-2xl sm:text-4xl">
                        {project.title}
                    </span>
                    <img
                        src={project?.imgUrl}
                        alt="Logo"
                        height={project?.height}
                        width={project?.width}
                        className="mt-2 sm:mt-0"
                    />
                </div>
                <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm sm:mt-0 mt-2 year">
                    {project.year}
                </span>
            </div>

            {/* Content Sections */}
            <div className="flex flex-wrap flex-col sm:flex-row lg:items-center lg:justify-between mb-6">
                <p className="flex flex-1 text-center sm:text-left mb-4 sm:mb-0 sm:mr-5">
                    {project?.descriptions?.[0]}
                </p>
                <img
                    src={project?.imgArray?.[0]}
                    className="border-2 rounded-2xl p-4 bg-white"
                    style={{height: 250, width: "100%", objectFit: "contain", maxWidth: 400, flexShrink: 0}}
                    alt="File Crypt"
                />
            </div>

            <div className="flex flex-wrap flex-col sm:flex-row lg:items-center lg:justify-between mb-6">
                <img
                    src={project?.imgArray?.[1]}
                    className="border-2 rounded-2xl p-4 bg-white mb-4 sm:mb-0"
                    style={{height: 250, width: "100%", objectFit: "contain", maxWidth: 400, flexShrink: 0}}
                    alt="File Crypt"
                />
                <p className="flex flex-1 mt-3 text-center sm:text-left sm:ml-5">
                    {project?.descriptions?.[1]}
                </p>
            </div>

            <div className="flex flex-wrap flex-col sm:flex-row lg:items-center lg:justify-between my-9">
                <p className="flex flex-1 mb-3 text-center sm:text-left sm:mx-5">
                    {project?.descriptions?.[2]}
                </p>
                <img
                    src={project?.imgArray?.[2]}
                    className="border-2 rounded-2xl p-4 bg-white mb-4 sm:mb-0"
                    style={{height: 250, width: "100%", objectFit: "contain", maxWidth: 400, flexShrink: 0}}
                    alt="File Crypt"
                />
            </div>
        </div>
    );
}
