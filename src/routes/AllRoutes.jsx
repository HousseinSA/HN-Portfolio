import {Routes, Route} from "react-router-dom"
import {Contact, Home, About, NotFound} from "../pages"
import {Work} from "../pages/Work"
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="work" element={<Work />} />
      <Route path="About" element={<About />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
