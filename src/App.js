import React from "react";
import './App.scss';
import Home from './routes/Home';
import Products from './routes/Products';
import Story from './routes/Story';
import Single from './routes/Single';
import Error from "./routes/Error";
import Layout from "./components/Layout";
import { Route, Routes } from 'react-router-dom';
import posts from './db.json';

function App() {

  return (
    <div className="App">
      <main>
          <Routes>
              <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="/story" element={<Story/>} />
              <Route path="/products" element={<Products posts={posts} />}/>
              <Route path="/product/:id" element={<Single posts={posts} />}/>          
              <Route render={() => <Error />}/>
              </Route>
          </Routes>
        </main>    
    </div>
  );
}

export default App;
