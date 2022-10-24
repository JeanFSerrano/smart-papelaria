import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Products from "./pages/Products"

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="#produtos" element={<Products />} />
        <Route path="#sobre" element={<About />} />
        <Route path="#contato" element={<Contact />} />
      </Routes>

    </>
  )
}

export default App
