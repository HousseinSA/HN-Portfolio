import {useState} from "react"
import img from "../assests/hs-low-resolution-logo-color-on-transparent-background.png"
import {motion} from "framer-motion"

export const OpeningAnimation = () => {
  const [onAnimationEnds, setOneAnimationEnds] = useState(false)

  const animation = {
    hidden: {y: 0, scale:1},
    show: {
      zIndex:20,
      y: 2000,
      scale:1.4,
      transition: {duration: 0.5, delay: 1, ease: "linear"},
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
              initial={{y: 10}}
              animate={{y: 0, transition: {type: "spring"}}}
              alt="Logo"
              className="max-w-xs w-1/2"
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
