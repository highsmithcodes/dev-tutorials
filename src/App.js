import './App.scss';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './routes/Home';
import Products from './routes/Products';
import Story from './routes/Story';
import Single from './routes/Single';
import { Route, Routes } from 'react-router-dom';

function App(props) {
  console.log("props",props)
  return (
    <div className="App">
    {/* E-Commerce Story for free pdfs on your personal coding brand */}
      <main>
          <NavBar />
          <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/story" element={<Story/>} />
              <Route path="/products" element={<Products />} />
              <Route component={Error} />
          </Routes>
          <Footer/>
        </main>    
    </div>
  );
}

export default App;
