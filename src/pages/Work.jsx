import {Animate} from "../Animate/Animate"
import {HeaderAnimate, ImageAnimate} from "../Components"
import {motion} from "framer-motion"
import Logo from "../assests/hs-low-resolution-logo-color-on-transparent-background.png"
export const Work = () => {
  const animation = {
    hidden: {opacity: 0, x: -100},
    show: {
      opacity: 1,
      x: 0,
      transition: {duration: 1, ease: "linear", type: "spring", bounce: 0.2},
    },
  }

  return (
    <Animate>
      <main>
        <div className="flex flex-col mx-4 justify-center main-section items-around">
          <div className="text-md max-w-md md:max-w-xl p-3">
            <HeaderAnimate>
              <h1 className="nav_link text-6xl md:text-7xl lg:text-8xl">
                Work
              </h1>
            </HeaderAnimate>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Explicabo, amet quia. Nemo consectetur deleniti accusamus totam
              quas magnam veniam! Odit, rem ipsa eum obcaecati adipisci aliquid
              aspernatur quas vitae nesciunt alias est ipsam quae laborum. Quis
              velit magni voluptatum nulla corrupti dolor iusto ea quia,
              recusandae nisi. Fugiat animi tempore quod voluptatibus porro eos
              consequatur molestias quas repellat vitae illum amet iusto
              repellendus maxime temporibus odio sed veritatis, aliquid dolorem
              adipisci quis tempora rerum? Nobis quia ab omnis. Laudantium omnis
              quibusdam quisquam eligendi, voluptatem sunt itaque nisi enim
              atque alias ipsam delectus, repellendus numquam? Vero obcaecati
              beatae hic qui ea.
            </span>
          </div>
          <div className="flex gap-24 flex-col">
            <motion.div
              variants={animation}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.5}}
              className="flex justify-center md:justify-between flex-wrap md:flex-nowrap lg:gap-0 gap-14 items-center">
              <div>
                <h2 className="text-2xl lg:text-3xl font-semibold">
                  Budget Register
                </h2>
                <p className="my-3 max-w-md">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Beatae ipsum a odio, quae corrupti in! Hic, fuga. Non, soluta
                  exercitationem.
                </p>
              </div>
              <ImageAnimate>
                <div className="max-w-xs lg:max-w-sm ">
                  <img src={Logo} alt="logo" />
                </div>
              </ImageAnimate>
            </motion.div>
            <motion.div
              variants={animation}
              initial="hidden"
              viewport={{once: false, amount: 0.5}}
              whileInView={"show"}
              className="flex justify-center  flex-wrap md:flex-nowrap md:justify-between gap-14 lg:gap-0 items-center">
              <div className="">
                <h2 className="text-2xl lg:text-3xl font-semibold">
                  Budget Register
                </h2>
                <p className="my-3 max-w-md">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Beatae ipsum a odio, quae corrupti in! Hic, fuga. Non, solut
                  exercitationem.
                </p>
              </div>
              <ImageAnimate>
                <div className="max-w-xs lg:max-w-sm ">
                  <img src={Logo} alt="logo" />
                </div>
              </ImageAnimate>
            </motion.div>
          </div>
        </div>
      </main>
    </Animate>
  )
}
