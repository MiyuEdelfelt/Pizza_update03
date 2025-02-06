import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";
import { UserProvider, useUser } from "./UserContext";

// Ruta protegida para usuarios autenticados
const ProtectedRoute = ({ element }) => {
  const { token } = useUser();
  return token ? element : <Navigate to="/login" />;
};

// Ruta pública para redirigir si el usuario ya está autenticado
const PublicRoute = ({ element }) => {
  const { token } = useUser();
  return token ? <Navigate to="/" /> : element;
};

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <Navbar />
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<PublicRoute element={<Register />} />} />
              <Route path="/login" element={<PublicRoute element={<Login />} />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/pizza/:id" element={<Pizza />} />
              <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
