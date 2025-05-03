import { BrowserRouter, Route, Routes } from "react-router-dom"
import NoPage from "./pages/NoPage"
import Home from "./pages/Home"
import Kontakt from "./pages/Kontakt"
import DetailingVozila from "./pages/detailing_vozila"
import DetailingBrodova from "./pages/Detailing_brodova"
import NavBar from "./components/navigation"
import Footer from "./components/footer"
import ScrollToTop from "./components/ScrollToTop"

function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="kontakt" element={<Kontakt />} />
          <Route path="detailing-vozila" element={<DetailingVozila />} />
          <Route path="detailing-brodova" element={<DetailingBrodova />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
