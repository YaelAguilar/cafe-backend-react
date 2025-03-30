import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Faq from "./pages/Faq";
import Perfil from "./pages/Perfil";
import Mensajes from "./pages/Mensajes";
import Buscar from "./pages/Buscar";
import ProducerComingSoon from "./pages/ProducerComingSoon";
import ProductorInicio from "./pages/Producer";
import ProductorPerfil from "./pages/ProducerPerfil";
import ProviderProfileView from "./pages/ProviderProfileView";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile"
import Messages from "./pages/Messages"
import Search from "./pages/Search"
import MessagesP from "./pages/MessagesProductor"
//import ProductorInicio from "./components/Productor/ProductorInicio"
//import ProductorPerfil from "./components/Productor/ProductorPerfil"
import ProductorLotes from "./components/Productor/ProductorLotes"
import CrearLote from "./components/Productor/CrearLote"

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Rutas para comerciantes */}
          <Route
            path="/"
            element={
              <ProtectedRoute allowedUserTypes={["merchant"]}>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/buscar"
            element={
              <ProtectedRoute allowedUserTypes={["merchant"]}>
                <Buscar />
              </ProtectedRoute>
            }
          />
          <Route
            path="/perfil"
            element={
              <ProtectedRoute allowedUserTypes={["merchant"]}>
                <Perfil />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mensajes"
            element={
              <ProtectedRoute allowedUserTypes={["merchant"]}>
                <Mensajes />
              </ProtectedRoute>
            }
          />
          <Route
            path="/faq"
            element={
              <ProtectedRoute allowedUserTypes={["merchant"]}>
                <Faq />
              </ProtectedRoute>
            }
          />
          {/* Nueva ruta para ver el perfil de proveedor */}
          <Route
            path="/provider/:id"
            element={
              <ProtectedRoute allowedUserTypes={["merchant"]}>
                <ProviderProfileView />
              </ProtectedRoute>
            }
          />

          {/* Rutas para productores */}
          <Route
            path="/productorview"
            element={
              <ProtectedRoute allowedUserTypes={["producer"]}>
                <ProductorInicio />
              </ProtectedRoute>
            }
          />
          <Route
            path="/productorprofile"
            element={
              <ProtectedRoute allowedUserTypes={["producer"]}>
                <ProductorPerfil />
              </ProtectedRoute>
            }
          />
          <Route
            path="/producer-coming-soon"
            element={
              <ProtectedRoute allowedUserTypes={["producer"]}>
                <ProducerComingSoon />
              </ProtectedRoute>
            }
          />

          {/* Rutas públicas */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Página 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/search" element={<Search />} />
        <Route path="/messagesProductor" element={<MessagesP/>} />
        <Route path="/productor-inicio" element={<ProductorInicio />} />
        <Route path="/productor-perfil" element={<ProductorPerfil />} />
        <Route path="/productor-lotes" element={<ProductorLotes />} />
        <Route path="/crear-lotes" element={<CrearLote />} />
      </Routes>
    </Router>
  );
}

export default App;
