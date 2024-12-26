import React from 'react';
import { Menu, X, ChevronRight, Monitor, Cloud, Shield, Code, Users, ArrowRight } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Solutions from './components/Solutions';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Solutions />
      <Footer />
    </div>
  );
}

export default App;