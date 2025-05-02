import { Route, Routes } from "react-router-dom"
import NoPage from "./pages/NoPage"
import Home from "./pages/Home"
import Kontakt from "./pages/Kontakt"
import DetailingVozila from "./pages/detailing_vozila"
import NavBar from "./components/navigation"
import Footer from "./components/footer"

function App() {

  return (
    <>
      <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="kontakt" element={<Kontakt />} />
          <Route path="detailing-vozila" element={<DetailingVozila />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      <Footer />
    </>
    
  )
}

export default App
