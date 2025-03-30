import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Faq from "./pages/Faq"
import Profile from "./pages/Profile"
import Messages from "./pages/Messages"
import Search from "./pages/Search"
import ProductorInicio from "./components/Productor/ProductorInicio"
import ProductorPerfil from "./components/Productor/ProductorPerfil"
import ProductorLotes from "./components/Productor/ProductorLotes"
import CrearLote from "./components/Productor/CrearLote"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/search" element={<Search />} />
        <Route path="/productor-inicio" element={<ProductorInicio />} />
        <Route path="/productor-perfil" element={<ProductorPerfil />} />
        <Route path="/productor-lotes" element={<ProductorLotes />} />
        <Route path="/crear-lotes" element={<CrearLote />} />
      </Routes>
    </Router>
  )
}

export default App

