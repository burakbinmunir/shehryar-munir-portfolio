import Image from "next/image";
import {socialLinks} from "./config";

export default function Page() {
    return (
        <section>
            <a href={socialLinks.twitter} target="_blank">
                <Image
                    src="/img.png"
                    alt="Profile photo"
                    className="rounded-3xl bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
                    unoptimized
                    width={160}
                    height={160}
                    priority
                />
            </a>

            <h1 className="mb-8 text-2xl font-medium tracking-tight">
                Crafting impactful solutions!
            </h1>

            <div className="prose prose-neutral dark:prose-invert">
                <p>
                    I am a dedicated software engineer specializing in React Native, focused on building dynamic,
                    user-friendly mobile applications.
                </p>
                <p>
                    My experience spans both backend and frontend technologies, with notable contributions to projects
                    like
                    the Classified Business CRM at
                    {" "}
                    <a
                        target="_blank"
                        href="https://www.dubizzlegroup.com/"
                    >
                        <div style={{display: "flex", alignItems: "center"}}>
                            <Image
                                src="/dubizzle.png"
                                alt="Profile photo"
                                // className="rounded-3xl bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
                                unoptimized
                                width={30}
                                height={30}
                                priority
                            />
                            {" "}
                            Dubizzle Group,
                        </div>
                    </a>
                    where I enhanced user engagement and optimized performance.
                </p>
                <p>
                    I am driven by a passion for creating seamless and impactful digital experiences.
                </p>
                <p>
                    I excel at collaborating with cross-functional teams to deliver innovative,
                    high-quality solutions and continuously strive to expand my skills in this ever-evolving industry.
                </p>
                <p>
                    Let’s connect and explore how we can create impactful technology together!
                </p>
            </div>
        </section>
    );
}
