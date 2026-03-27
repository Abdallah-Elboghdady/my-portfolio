import { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";

const Main = () => {
  const arr = myProjects;
  const [desc, setDesc] = useState(false);

  return (
    <main id="projects">
      <h1 className="title">My Projects</h1>
      <section className=" flex right-section">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item.imgPath}
                className="  card">
                <img src={item.imgPath} alt="" />

                <div style={{ width: "100%" }} className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="sub-title">
                    {desc ? (
                      <>
                        {item.description}
                        <span onClick={() => setDesc(false)}>...less</span>
                      </>
                    ) : (
                      <>
                        {item.description.split(" ", 20).join(" ")}
                        <span onClick={() => setDesc(true)}>...more</span>
                      </>
                    )}
                  </p>
                  <div className="tec">
                    {item.tec.map((teck) => {
                      return (
                        <span className="teck" key={teck}>
                          {teck}
                        </span>
                      );
                    })}
                  </div>

                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <a
                        href={item.demo}
                        target="_blanck"
                        className="icon-link">
                        Live demo
                      </a>
                      <a
                        href={item.git}
                        target="_blanck"
                        className="icon-github">
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
