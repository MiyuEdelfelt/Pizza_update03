import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Pizza from "./components/Pizza";
//import Home from "./components/Home";
// import Login from "./components/Login";
// import Register from "./components/Register";


function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <Pizza />
        {/* <Home /> */}
        {/* <Register /> */}
        {/* <Login /> */}
        {/* <Cart /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;


