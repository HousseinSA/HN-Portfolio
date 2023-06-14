import {Link} from "react-router-dom"
import {motion} from "framer-motion"
export const Nav = () => {
  const hoverAnimate = {
    fontStyle: "italic",
    x: 5,
    transition: {type: "spring", ease: "linear"},
  }
  return (
    <nav className="md:block  hidden">
      <div className="nav_link color text-7xl lg:text-9xl flex items-center justify-center  flex-col">
        <motion.div whileHover={hoverAnimate}>
          <Link to={"/work"}>Work</Link>
        </motion.div>
        <motion.div whileHover={hoverAnimate}>
          <Link to={"/about"}>About</Link>
        </motion.div>
        <motion.div whileHover={hoverAnimate}>
          <Link to={"/Contact"}>Connect</Link>
        </motion.div>
      </div>
    </nav>
  )
}
