
import {motion} from "framer-motion"
export function Animate({children}) {
  const animation = {
    initial: {opacity: 0, y: -100},
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 50,
        Bounce: 0.1,
        delay: 0.2,
      },
    },
  }
  return (
    <motion.div variants={animation} initial="initial" animate="animate">
      {children}
    </motion.div>
  )
}
