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
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute allowedUserTypes={["merchant"]}>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/productorview" element={<ProductorInicio />} />
          <Route path="/productorprofile" element={<ProductorPerfil />} />
          <Route
            path="/producer-coming-soon"
            element={
              <ProtectedRoute allowedUserTypes={["producer"]}>
                <ProducerComingSoon />
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
            path="/buscar"
            element={
              <ProtectedRoute allowedUserTypes={["merchant"]}>
                <Buscar />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
