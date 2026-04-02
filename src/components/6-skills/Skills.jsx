import "./Skills.css";

function Skills() {
  const skills = [
    {
      img: "./images/html.png",
      name: "HTML",
    },
    {
      img: "./images/css.png",
      name: "CSS",
    },
    {
      img: "./images/js.png",
      name: "Javascript",
    },
    {
      img: "./images/ts1.svg",
      name: "Typescript",
    },
    {
      img: "./images/react.png",
      name: "React",
    },
    {
      img: "./images/tailwind.png",
      name: "Tailwind CSS",
    },
    {
      img: "./images/redux.png",
      name: "Redux",
    },
    {
      img: "./images/reactQuery.webp",
      name: "React Query",
    },
    {
      img: "./images/git.png",
      name: "Git",
    },
    {
      img: "./images/github.png",
      name: "Github",
    },
  ];
  return (
    <div id="skills" className="skills">
      <h1>My Skills</h1>
      <div className="flex skills-container">
        {skills.map((skill) => {
          return (
            <div className="skill skill-card" key={skill.name}>
              <img src={skill.img} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
