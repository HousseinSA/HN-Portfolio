import {Header, Footer, OpeningAnimation, SideNav} from "./Components"
import {AllRoutes} from "./routes/AllRoutes"
import {motion} from "framer-motion"
import {useLocation} from "react-router-dom"
export default function App() {
  const animation = {
    hidden: {opacity: 0, y: -100},
    show: {
      opacity: 1,
      y: 0,
      transition: {duration: 1, delay: 1.2, type: "spring", ease: "linear"},
    },
  }
  const {pathname} = useLocation()
  return (
    <div className="APP">
      <OpeningAnimation />
      <Header />
      <motion.div
        className="relative"
        variants={animation}
        initial={"hidden"}
        animate={"show"}>
        {pathname === "/" ? <SideNav /> : <SideNav path={true} />}
        <AllRoutes />
      </motion.div>
      <Footer />
    </div>
  )
}
