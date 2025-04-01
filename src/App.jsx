import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import NotificationProvider from "./components/common/ui/NotificationProvider";
import ProtectedRoute from "./components/common/layout/ProtectedRoute";

// Páginas de autenticación
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// Páginas de comerciante
import Home from "./pages/merchant/Home";
import Buscar from "./pages/merchant/Buscar";
import Perfil from "./pages/merchant/Perfil";
import Mensajes from "./pages/merchant/Mensajes";
import Faq from "./pages/merchant/Faq";
import ProviderProfileView from "./pages/merchant/ProviderProfileView";

// Páginas de productor
import Producer from "./pages/producer/Producer";
import ProducerPerfil from "./pages/producer/ProducerPerfil";
import ProducerComingSoon from "./pages/producer/ProducerComingSoon";
import MerchantInterested from "./pages/producer/MerchantInterested";
import MerchantProfileView from "./pages/producer/MerchantProfileView";

// Página 404
import NotFound from "./pages/common/NotFound";

function App() {
  return (
    <Router>
      <AuthProvider>
        <NotificationProvider>
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
                  <Producer />
                </ProtectedRoute>
              }
            />
            <Route
              path="/productorprofile"
              element={
                <ProtectedRoute allowedUserTypes={["producer"]}>
                  <ProducerPerfil />
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
            {/* Rutas para que productores vean comerciantes */}
            <Route
              path="/merchant-interested"
              element={
                <ProtectedRoute allowedUserTypes={["producer"]}>
                  <MerchantInterested />
                </ProtectedRoute>
              }
            />
            <Route
              path="/merchant/:id"
              element={
                <ProtectedRoute allowedUserTypes={["producer"]}>
                  <MerchantProfileView />
                </ProtectedRoute>
              }
            />

            {/* Rutas públicas */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Página 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </NotificationProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;