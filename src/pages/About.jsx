import {Animate} from "../Animate/Animate"
import {HeaderAnimate} from "../Components"
import {motion} from "framer-motion"
import userImage from "../assests/IMG_20230225_231859.jpg"
export const About = () => {
  const iconHover = {
    scale: 1.3,
    transition: {
      ease: "linear",
    },
  }
  const iconsAnimation = {
    hidden: {opacity: 0},
    show: {
      opacity: 1,
      transition: {
        repeatDelay: 9,
        type: "spring",
        repeat: Infinity,
      },
    },
  }
  const userImageAnimate = {
    hidden: {scale: 0},
    show: {
      scale: 1,
      transition: {
        delay: 1.3,
        duration: 0.4,
        type: "spring",
        ease: "linear",
        bounce: 0.3,
      },
    },
  }
  const containerIcon = {
    hidden: {opacity: 0},
    show: {
      opacity: 1,
      transition: {
        ease: "linear",
        repeat: Infinity,
        repeatDelay: 10,
        duration: 9,
        staggerChildren: 1,
      },
    },
  }
  return (
    <Animate>
      <main>
        <div className="flex gap-2 justify-center flex-wrap lg:flex-nowrap main-section items-center ">
          <div className="text-md max-w-md md:max-w-xl p-3 ">
            <HeaderAnimate>
              <h1 className="nav_link text-6xl md:text-7xl lg:text-8xl">
                About Me
              </h1>
            </HeaderAnimate>
            <span className="about-text">
              I have been working in web development for about three years,
              primarily as a freelance. Through my freelance work, I have gained
              extensive knowledge and experience. However, I am now seeking to
              broaden my horizons by transitioning into a full-time role as a
              Frontend Developer. I possess strong skills in JavaScript, React,
              and CSS, and I am well-versed in git/version control.
              Additionally, I have a decent understanding of backend frameworks
              such as Express and MongoDB.
            </span>
          </div>
          <motion.div
            variants={userImageAnimate}
            initial="hidden"
            whileInView={"show"}
            className="relative lg:block hidden right-0 md:-right-5 lg:-right-40 rounded max-w-xs md:max-w-sm my-2">
            <img
              src={userImage}
              className="rounded shadow-xl"
              alt="developer"
            />
          </motion.div>
        </div>
        <motion.div
          variants={containerIcon}
          animate="show"
          initial="hidden"
          className="flex justify-center f flex-wrap gap-2 items-center">
          <div
            variants={iconsAnimation}
            whileHover={iconHover}
            className=" w-14 h-14 flex items-center  justify-center rounded-full bg-yellow-200">
            <i className="devicon-javascript-plain colored text-white text-2xl"></i>
          </div>
          <motion.div
            variants={iconsAnimation}
            whileHover={iconHover}
            className=" w-14 h-14 flex items-center  justify-center rounded-full bg-red-300">
            <i className="devicon-html5-plain colored text-white text-2xl"></i>
          </motion.div>
          <motion.div
            variants={iconsAnimation}
            whileHover={iconHover}
            className="  w-14 h-14 flex items-center  justify-center rounded-full bg-blue-300">
            <i className="devicon-css3-plain colored text-white text-2xl"></i>
          </motion.div>
          <motion.div
            variants={iconsAnimation}
            whileHover={iconHover}
            className="  w-14 h-14 flex items-center  justify-center rounded-full bg-green-200">
            <i className="devicon-react-plain colored text-white text-2xl"></i>
          </motion.div>
          <motion.div
            variants={iconsAnimation}
            whileHover={iconHover}
            className=" w-14 h-14 flex items-center  justify-center rounded-full bg-purple-300">
            <i className="devicon-sass-plain colored text-white text-2xl"></i>
          </motion.div>
          <motion.div
            variants={iconsAnimation}
            whileHover={iconHover}
            className=" w-14 h-14 flex items-center   justify-center rounded-full bg-indigo-300">
            <i className="devicon-redux-plain colored text-white text-2xl"></i>
          </motion.div>
          <motion.div
            variants={iconsAnimation}
            whileHover={iconHover}
            className="  w-14 h-14 flex items-center  justify-center rounded-full bg-pink-300">
            <i className="devicon-mongodb-plain colored text-white text-2xl"></i>
          </motion.div>
          <motion.div
            variants={iconsAnimation}
            whileHover={iconHover}
            className="  w-14 h-14 flex items-center  justify-center rounded-full bg-yellow-300">
            <i className="devicon-express-original-wordmark text-white text-2xl"></i>
          </motion.div>
          <motion.div
            variants={iconsAnimation}
            whileHover={iconHover}
            className=" w-14 h-14 flex items-center  justify-center rounded-full bg-blue-300">
            <i className="devicon-python-plain colored text-white text-2xl"></i>
          </motion.div>
        </motion.div>
      </main>
    </Animate>
  )
}
