import {motion} from "framer-motion"
import Nav from "./Nav"
export default function Header({toggle}) {
  const headerAnimate = {
    initial: {opacity: 0, y: -50},
    animate: {opacity: 1, y: 0, transition: {duration: 1}},
  }
  return (
    <motion.div
      className="header"
      variants={headerAnimate}
      animate="animate"
      initial="initial">
      <nav>
        <div className="logo">
          <h1>
            My <span>Portfolio</span>
          </h1>
        </div>
        <Nav />
        <div className="toggle">
          <span onClick={toggle} className="material-symbols-outlined">
            menu
          </span>
        </div>
      </nav>
    </motion.div>
  )
}
