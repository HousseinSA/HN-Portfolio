import {Animate} from "./Animate"
import {motion} from "framer-motion"
export default function Main() {
  const imageAnimate = {
    initial: {opacity: 0, x: -100},
    animate: {opacity: 1, x: 0, transition: {duration: 1, type: "spring"}},
  }
  return (
    <Animate>
      <div className="main">
        <div className="main-info">
          <h1>
            <span>Hi</span>, My name is<br></br> Hussein Sedoum
          </h1>
          <span className="skill">Web Developer</span>
          <div className="social">
            <ion-icon name="logo-facebook" className="tag"></ion-icon>
            <ion-icon name="logo-twitter" className="tag"></ion-icon>
            <i className="devicon-github-original-wordmark colored tag"></i>
            <ion-icon name="logo-linkedin" className="tag"></ion-icon>
          </div>
        </div>
        <motion.div
          className="image"
          variants={imageAnimate}
          animate="animate" 
      
          initial="initial"></motion.div>
      </div>
    </Animate>
  )
}
