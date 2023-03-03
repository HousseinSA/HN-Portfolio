import React from "react"
import {motion} from "framer-motion"
export default function Nav() {
  const listAnimate = {
    initial: {opacity: 0, y: -3},
    animate: {
      opacity: 1,
      y: 0,
      transition: {duration: 0.5, staggerChildren: 0.4},
    },
  }
  const texAnimate = {
    initial: {x: -10, opacity: 0},
    animate: {x: 0, opacity: 1, transition: {type: "spring", bounce: 0.4}},
  }
  const links = ["home", "about", "projects", "contact"]
  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={{staggerChildren: 0.2}}
      className="navbar">
      <motion.ul className="navbar-list" >
        {links.map((link) => {
          return (
            <motion.li key={link} variants={listAnimate} whileHover={{y:1}}>
              <motion.a
                variants={texAnimate}
                href={link !== "home" ? "#" + link : ""}>
                {link}
              </motion.a>
            </motion.li>
          )
        })}
      </motion.ul>
    </motion.div>
  )
}
