import React from "react";
import './App.scss';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './routes/Home';
import Products from './routes/Products';
import Story from './routes/Story';
import Single from './routes/Single';
import { Route, Routes } from 'react-router-dom';
import posts from './db.json';

function App() {


  return (
    <div className="App">
    {/* E-Commerce Story for free pdfs on your personal coding brand */}
    {/* DevJuice / DevWeight */}
    {/* 1. Close Mobile Nav when clicked outside */}
    {/* 2. Make Posts a single page */}
    {/* 3. Add in Categories */}
    {/* 4. Add Category Landing Pages */}
    {/* 5. Add Download Option */}
    {/* 6. Buy a Domain */}
    {/* 7. Set Up Analytics */}
      <main>
          <NavBar />
          <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/story" element={<Story/>} />
              <Route path="/products" element={<Products />} />
              <Route exact path="/products/:id" element={<Single />} />
              <Route component={Error} />
          </Routes>
          <Footer/>
        </main>    
    </div>
  );
}

export default App;
