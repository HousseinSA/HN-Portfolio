import {motion} from "framer-motion"
export const HeaderAnimate = ({children}) => {
  const animate = {
    hidden: {opacity: 0, y: 100},
    show: {opacity: 1, y: 0, transition: {delay: 1.2, duration: 0.5}},
  }
  return (
    <motion.div variants={animate} initial="hidden" animate="show">
      {children}
    </motion.div>
  )
}

export const ImageAnimate = ({children}) => {
  const imageAnimation = {
    hidden: {scale: 0, rotate: 0},
    show: {
      scale: 1,
      rotate: 5,
      transition: {duration: 1, delay: 0.3, type: "spring", ease: "linear"},
    },
  }
  return (
    <motion.div
      variants={imageAnimation}
      initial={"hidden"}
      whileInView={"show"}
      whileHover={{scale:1.2, rotate:0}}
      whileTap={{scale:1}}
      viewport={{once: false, amount: 0.5}}>
      {children}
    </motion.div>
  )
}
