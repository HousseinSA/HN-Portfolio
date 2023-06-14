import { useState} from "react"
import img from "../assests/hs-low-resolution-logo-color-on-transparent-background.png"
import {motion} from "framer-motion"
export const OpeningAnimation = () => {
  const [onAnimationEnds, setOneAnimationEnds] = useState(false)
  const animation = {
    hidden: {opacity: 1},
    show: {
      zIndex: -2,
      opacity: 0,
      y: 500,
      transition: {duration: 0.5, delay: 1},
    },
  }
  const handelAnimationEnds = () => {
    setOneAnimationEnds(!onAnimationEnds)
  }
  return (
    <>
      {!onAnimationEnds && (
        <motion.div
          onAnimationComplete={handelAnimationEnds}
          variants={animation}
          animate={"show"}
          initial="hidden"
          className="absolute z-30 w-full min-h-screen bg-slate-800 top-0 left-0 ">
          <div className=" flex flex-col gap-4 justify-center h-screen  last-of-type:items-center">
            <motion.img
              src={img}
              initial={{y: 10}}
              animate={{y: 0, transition: {type: "spring"}}}
              alt="Logo"
              exit={{display: "none"}}
              className="max-w-xs w-1/2"
            />
            <div>
              <h1 className="text-4xl title text-center text-white font-semibold ">
                Keep It Simple.
              </h1>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}
