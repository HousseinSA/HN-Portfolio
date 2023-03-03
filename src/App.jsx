import Header from "./Components/Header"
import "../src/style.css"
import Main from "./Components/Main"
import About from "./Components/About"
import Projects from "./Components/Projects"
import Footer from "./Components/Footer"
import Contact from "./Components/Contact"
import {AnimatePresence} from "framer-motion"
export default function App() {
  function toggle() {
    const nav = document.querySelector(".navbar")
    nav.classList.toggle("show")
  }
  return (
    <div className="container">
      <Header toggle={toggle} />
      <AnimatePresence key={"animate"} mode="wait">
        <Main />
        <About />
        <Projects />
        <Contact />
      </AnimatePresence>
      <Footer />
    </div>
  )
}
