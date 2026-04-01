import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section id="hero" className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(1)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./profile.jpeg"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title">
          I’m Abdallah Elboghdady, Frontend Developer
        </motion.h1>

        <p className="sub-title">
          Frontend Developer with experience in creating interactive web
          applications using HTML, CSS, JavaScript, and React. Proficient in
          designing modern UI, improving user experience, and utilizing Tailwind
          CSS and Framer Motion for animations and smooth interactions.
        </p>

        <div className="all-icons flex">
          <a
            href="https://github.com/Abdallah-Elboghdady"
            target="_blanck"
            className="icon icon-github"></a>

          <a
            href="https://www.linkedin.com/in/abdallah-elboghdady-762a40267/?skipRedirect=true"
            target="_blanck"
            className="icon icon-linkedin"></a>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
