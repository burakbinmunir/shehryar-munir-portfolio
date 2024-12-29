export interface ExperienceData {
    companyName: string;
    tenure: string;
    jobDescription: string;
    skillSet: Array<string>;
    imgUrl: string;
    jobTitle: string;
}

export const experienceData: ExperienceData[] = [
    {
        jobTitle: "Software Engineer",
        companyName: "Dubizzle Group",
        tenure: "March 2024 - Present",
        jobDescription: "Handling complex UI, State management, and performance optimization.",
        skillSet: ["React Native", "Cross Platform Development", "Mobile Application Development", "Frontend Development"],
        imgUrl: "/dubizzle.png",
    },
    {
        jobTitle: "Software Engineer Intern",
        companyName: "Arrivy, Inc.",
        tenure: "June 2023 - August 2023",
        skillSet: ["Backend Development", "Google Cloud Platform", "Cloud Deployment", "Flask", "Big Query", "Cloud Functions"],
        imgUrl: "",
        jobDescription: "Developed backend API endpoints for attendance management, deploying them via Google Cloud Platform.",
    },
    {
        jobTitle: "Teaching Assistant",
        companyName: "FAST-National University of Computer and Emerging Sciences",
        tenure: "September 2022 - March 2024",
        skillSet: ["Lesson Planning", "Evaluations", "Grading", "Mentorship", "OOP", "Software Engineering", "Web Engineering"],
        imgUrl: "",
        jobDescription: "Preparing course materials, delivering tutorials, assisting students with their learning and graded assignments.",
    }
]
