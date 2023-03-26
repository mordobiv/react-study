import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Custom from './pages/custom/Custom';
import NotFound from './pages/notFound/NotFound';
import Layout from './components/layout/Layout';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="custom" element={<Custom />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
