import React, {useEffect} from "react"
import {motion, useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"
export function Animate({children}) {
  const control = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView || !inView) {
      control.start("animate")
    }
  }, [control, inView])
  const animation = {
    initial: {opacity: 0, x: -100},
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 50,
        Bounce: 0.3,
        delay: 0.2,
      },
    },
  }
  return (
    <motion.div
      ref={ref}
      variants={animation}
      initial="initial"
      whileInView="animate"
      exit={{opacity: 0}}
      viewport={{once: true, amount: 0.5}}>
      {children}
    </motion.div>
  )
}
