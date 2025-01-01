import React from "react";
import type {Metadata} from "next";
import {projects} from "./project-data";
import Image from "next/image";
import Jarvis from "./Jarvis/Jarvis";
import EEG from "./EEG/EEG";
import PneumoniaClassification from "./PneumoniaClassification/PneumoniaClassification";
import Invictus from "./Invictus/Invictus";
import FileCrypt from "./FileCrpyt/FileCrypt";

export const metadata: Metadata = {
    title: "Projects",
    description: "My Projects",
};
export default function Projects() {
    console.log("(projects?.[0]: ",projects?.[0]);
    return (
        <section>
            {/*<h1 className="mb-8 text-2xl font-medium tracking-tight">Projects</h1>*/}
            <div className="space-y-6">
                <Jarvis />
                <EEG />
                <Invictus />
                <PneumoniaClassification />
                <FileCrypt />
                {/*{projects.map((project, index) => (*/}
                {/*    <a*/}
                {/*        key={index}*/}
                {/*        href={project?.githubUrl}*/}
                {/*        target="_blank"*/}
                {/*        rel="noopener noreferrer"*/}
                {/*        className="block group hover:opacity-80 transition-opacity duration-200"*/}
                {/*    >*/}
                {/*        <div className="flex flex-col sm:flex-row sm:justify-between">*/}
                {/*            <div className="flex flex-col sm:flex-row sm:items-center">*/}
                {/*                <span className="text-black dark:text-white font-medium tracking-tight">*/}
                {/*                    {project.title}*/}
                {/*                </span>*/}
                {/*                <Image*/}
                {/*                    src={project?.imgUrl}*/}
                {/*                    alt="Logo"*/}
                {/*                    height={project?.height}*/}
                {/*                    width={project?.width}*/}
                {/*                    className="mt-2 sm:ml-4 sm:mt-0"*/}
                {/*                />*/}
                {/*            </div>*/}
                {/*            <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm sm:mt-0 mt-2">*/}
                {/*                {project.year}*/}
                {/*            </span>*/}
                {/*        </div>*/}
                {/*        {!!project?.imgArray && project?.imgArray.length > 0 &&*/}
                {/*            <div className="flex flex-col sm:flex-row sm:justify-between flex-wrap border-2">*/}
                {/*                {project?.imgArray.map((img, index) => {*/}
                {/*                    return <img key={index} src={img} className={"h-2/5 w-2/5 m-3 border-2"}  alt="Logo"/>*/}
                {/*                })*/}
                {/*                }*/}
                {/*            </div>*/}
                {/*        }*/}


                {/*        <p className="prose prose-neutral dark:prose-invert pt-3">*/}
                {/*            {project.description}*/}
                {/*        </p>*/}
                {/*    </a>*/}
                {/*))}*/}
            </div>
        </section>
    );
}
