import {Animate} from "../Animate/Animate"
import {HeaderAnimate, ImageAnimate} from "../Components"
import {motion} from "framer-motion"
import {Link} from "react-router-dom"
import budgetRegister from "../assests/budget-register.png"
import cinaInfo from "../assests/cina-info.png"
import ebbokStore from "../assests/ebook-sotre.png"
import googleDocs from "../assests/google-docs-clone.png"
import postCreater from "../assests/postCreater.png"
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
            <span className="text-sm md:text-base ">
              As i frontend developer experienced in building captivating user
              interfaces using React and other cutting-edge technologies. With a
              strong track record, I have delivered diverse projects, showcasing
              my expertise in movies platforms, social media dashboards, and
              many more. I am known for my attention to detail, commitment to
              optimal performance, and excellent teamwork skills, making me a
              valuable asset in any development team.
            </span>
          </div>
          <div className="flex gap-24 my-10 flex-col">
            <motion.div
              variants={animation}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.5}}
              className="flex justify-center md:justify-between flex-wrap md:flex-nowrap lg:gap-0 gap-14 items-center">
              <div>
                <h2 className="text-2xl lg:text-3xl font-semibold">
                  Cina-info
                </h2>
                <p className="my-3 max-w-md text-sm md:text-base">
                  Cine-Info is a React project that combines the power of
                  Tailwind CSS for styling and an API to fetch comprehensive
                  movie information. It offers a seamless movie browsing
                  experience, including search functionality, all within a
                  visually appealing and responsive user interface.
                </p>
              </div>
              <ImageAnimate>
                <Link to={"https://cina-info.netlify.app"} target="_blank">
                  <div className=" max-w-xs lg:max-w-md">
                    <img src={cinaInfo} alt="cina-info" />
                  </div>
                </Link>
              </ImageAnimate>
            </motion.div>
            <motion.div
              variants={animation}
              initial="hidden"
              viewport={{once: false, amount: 0.5}}
              whileInView={"show"}
              className="flex justify-center flex-wrap md:flex-nowrap md:justify-between gap-14 lg:gap-0 items-center">
              <div>
                <h2 className="text-2xl lg:text-3xl font-semibold">
                  Ebook-Store
                </h2>
                <p className="my-3 max-w-md text-sm md:text-base">
                  The React eBook Store is a complex web application utilizing
                  React, Tailwind CSS, and JSON-Server as the API. It
                  incorporates backend practices such as authentication and
                  offers a user-friendly interface for browsing and purchasing
                  eBooks.
                </p>
              </div>
              <ImageAnimate>
                <Link to={"https://ebook-shop.netlify.app"} target="_blank">
                  <div className="max-w-xs lg:max-w-md">
                    <img src={ebbokStore} alt="ebookStore" />
                  </div>
                </Link>
              </ImageAnimate>
            </motion.div>
            <motion.div
              variants={animation}
              initial="hidden"
              viewport={{once: false, amount: 0.5}}
              whileInView={"show"}
              className="flex justify-center flex-wrap md:flex-nowrap md:justify-between gap-14 lg:gap-0 items-center">
              <div>
                <h2 className="text-2xl lg:text-3xl font-semibold">
                  Docs-editor
                </h2>
                <p className="my-3 max-w-md text-sm md:text-base">
                  The Google Docs Clone is a collaborative document editing
                  application built with React on the frontend, Socket.io for
                  real-time communication, and MongoDB as the backend database.
                  Users can create, edit, and collaborate on documents
                  simultaneously, with changes instantly synchronized across
                  multiple devices
                </p>
              </div>
              <ImageAnimate>
                <Link to={"https://docs-editor.netlify.app"} target="_blank">
                  <div className="max-w-xs lg:max-w-md">
                    <img src={googleDocs} alt="docs" />
                  </div>
                </Link>
              </ImageAnimate>
            </motion.div>
            <motion.div
              variants={animation}
              initial="hidden"
              viewport={{once: false, amount: 0.5}}
              whileInView={"show"}
              className="flex justify-center flex-wrap md:flex-nowrap md:justify-between gap-14 lg:gap-0 items-center">
              <div>
                <h2 className="text-2xl lg:text-3xl font-semibold">
                  Budget Manager
                </h2>
                <p className="my-3 max-w-md text-sm md:text-base">
                  Budget Editor is a React-based expense management application
                  designed to help users track and manage their budget. With a
                  visually appealing user interface built using Bootstrap
                  components, it provides a seamless experience for inputting
                  expenses and calculating the total amount. The app also
                  features beautiful indicators to give users a clear
                  understanding of their budget status.
                </p>
              </div>
              <ImageAnimate>
                <Link
                  to={"https://budget-register.netlify.app"}
                  target="_blank">
                  <div className="max-w-xs lg:max-w-md">
                    <img src={budgetRegister} alt="budget register" />
                  </div>
                </Link>
              </ImageAnimate>
            </motion.div>
            <motion.div
              variants={animation}
              initial="hidden"
              viewport={{once: false, amount: 0.5}}
              whileInView={"show"}
              className="flex justify-center flex-wrap md:flex-nowrap md:justify-between gap-14 lg:gap-0 items-center">
              <div>
                <h2 className="text-2xl lg:text-3xl font-semibold">
                  Post-creater
                </h2>
                <p className="my-3 max-w-md text-sm md:text-base">
                  Post Creator is a React app utilizing Firebase as the database
                  and Google account authentication for creating and managing
                  posts.
                </p>
              </div>
              <ImageAnimate>
                <Link to={"https://postcreater.netlify.app"} target="_blank">
                  <div className="max-w-xs lg:max-w-md">
                    <img src={postCreater} alt="post creater" />
                  </div>
                </Link>
              </ImageAnimate>
            </motion.div>
          </div>
        </div>
      </main>
    </Animate>
  )
}
