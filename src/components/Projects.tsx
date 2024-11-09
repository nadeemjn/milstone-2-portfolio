import React from "react";
import Heading from "./Heading";
import Card from "./Card";

const data = [
  {
    id: 0,
    title: "Todo List",
    desc: "A simple todo list app built with React, Typescript, and Tailwind CSS.",
    img: "/todolist.png",
    tags: ["React", "Typescript", "Tailwind"],
  },
  {
    id: 1,
    title: "Todo list",
    desc: "A Next.js and typescript tailwind css make a powerful todo app",
    img: "/todo-app.png",
    tags: ["Next.js", "Typescript", "Tailwind"],
  },
  {
    id: 2,
    title: "Portfolio",
    desc: "My portfolio website built with Next.js, TypeScript and tailwind css",
    img: "/portfolio.webp",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 3,
    title: "Simple website",
    desc: "A simple website built with Next.js and Figma design",
    img: "/project1.jpeg",
    tags: ["Next.js", "Figma"],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="container pt-32">
      <Heading title="My Projects" />
      <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
