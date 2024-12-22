import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        {/* <Register /> */}
        <Login />
        {/* <Home /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;


