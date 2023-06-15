import {useState} from "react"
import img from "../assests/hs-low-resolution-logo-color-on-transparent-background.png"
import {motion} from "framer-motion"

export const OpeningAnimation = () => {
  const [onAnimationEnds, setOneAnimationEnds] = useState(false)
  const animation = {
    hidden: {scaleY: 1},
    show: {
      zIndex: 1000,
      y: 0,
      scaleY: 0,
      transition: {
        duration: 0.5,
        delay: 1,
        ease: "easeInOut",
      },
    },
  }

  const handleAnimationEnds = () => {
    setOneAnimationEnds(!onAnimationEnds)
  }
  return (
    <>
      {!onAnimationEnds && (
        <motion.div
          onAnimationComplete={handleAnimationEnds}
          variants={animation}
          animate="show"
          initial="hidden"
          className=" fixed top-0 left-0 w-full h-screen bg-slate-800 flex items-center justify-center">
          <div className="flex flex-col gap-4 justify-center items-center">
            <motion.img
              src={img}
              initial={{y: 100, opacity: 0}}
              animate={{
                rotate: 5,
                y: 0,
                opacity: 1,
                transition: {type: "spring", duration: 0.5, bounce: 0.2},
              }}
              alt="Logo"
              className="max-w-xs  w-60"
            />
            <div>
              <h1 className="text-4xl title text-center text-white font-semibold">
                Keep It Simple.
              </h1>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}
