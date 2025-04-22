import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import NavBar from "./components/navigation"
import Footer from "./components/footer"

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
      <Footer />
    </>
    
  )
}

export default App
