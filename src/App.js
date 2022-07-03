import React from "react";
import './App.scss';
import Home from './routes/Home';
import Posts from './routes/Posts';
import Story from './routes/Story';
import Single from './routes/Single';
import Error from "./routes/Error";
import Layout from "./components/Layout";
import { Route, Routes } from 'react-router-dom';
import posts from './db.json';

import ReactGA from 'react-ga';
const TRACKING_ID = "UA-233535816-1";
ReactGA.initialize(TRACKING_ID);

function App() {
  

  return (
    <div className="App">
      <main>
          <Routes>
              <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="/story" element={<Story/>} />
              <Route path="/blog" element={<Posts posts={posts} />}/>
              <Route path="/blog/:url" element={<Single posts={posts} />}/>          
              <Route render={() => <Error />}/>
              </Route>
          </Routes>
        </main>    
    </div>
  );
}

export default App;
