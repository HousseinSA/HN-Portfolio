import {Animate} from "../Animate/Animate"
import {Twitter, Github, Linkedin, Instagram} from "react-bootstrap-icons"
import {Nav} from "../Components"
import {motion} from "framer-motion"
import Logo from "../assests/hs-low-resolution-logo-color-on-transparent-background.png"
import {Link} from "react-router-dom"
export const Home = () => {
  const hi = {
    hidden: {opacity: 0, y: 100},
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.4,
        duration: 1,
        bounce: 0.4,
        type: "spring",
        ease: "linear",
      },
    },
  }
  return (
    <Animate>
      <main>
        <div className="flex relative justify-center items-center gap-2 main-section md:justify-around ">
          <div className=" lg:place-self-end">
            <div className="main-info ">
              <h1 className="text-5xl lg:text-6xl">
                <motion.span
                  variants={hi}
                  animate="show"
                  initial="hidden"
                  className="inline-block text-mainColor">
                  Hi
                </motion.span>
                , My Name is <br></br> Hussein
              </h1>
              <span className="my-2">Web Developer</span>
              <p>Passionate creater and problem solver.</p>
            </div>
            <div className="flex justify-center md:justify-start gap-2 my-4 items-center">
              <Link>
                <Github size={20} className="cursor-pointer" />
              </Link>
              <Link>
                <Twitter size={20} className="cursor-pointer " />
              </Link>
              <Link>
                <Linkedin size={20} className=" cursor-pointer " />
              </Link>
              <Link>
                <Instagram size={20} className=" cursor-pointer " />
              </Link>
            </div>
          </div>
          <div
            animate={"show"}
            initial="hidden"
            className="absolute md:hidden w-34 rotate-45 visible -z-10">
            <img src={Logo} alt="logo" />
          </div>
          <Nav />
        </div>
      </main>
    </Animate>
  )
}