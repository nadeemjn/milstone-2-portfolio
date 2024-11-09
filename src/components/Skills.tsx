import React from "react";

const Skills = () => {
    return (
        <div id="skills" className="container pt-32">
            <div className="grid md:grid-cols-2 gap-20 items-center">
                <div>
                    <h2 className="text-4xl md:text-5xl">Technologies I work with</h2>
                    <p className="text-gray-500 pt-2">

                           I am a front-end developer skilled in HTML, CSS, JavaScript, and Next.js, with a focus on building dynamic, responsive, and visually engaging web applications. I create user-friendly interfaces with clean, maintainable code, optimizing performance and SEO through server-side rendering and static site generation. I’m committed to delivering fast, accessible, and reliable experiences across devices by following best practices in modern web development.

                    </p>
                </div>
                <div>
                    <div className="grid grid-cols-2 text-accent text-3xl sm:text-4">
                        <div className="space-y-2">
                            <h2>React.js</h2>
                            <h2>Typescript</h2>
                            <h2>Next.js</h2>

                        </div>
                        <div className="space-y-2">
                            <h2>CSS</h2>
                            <h2>Html</h2>
                            <h2>Tailwind</h2>

                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default Skills;