import React from 'react';
import './App.css';
import Navbar from '../src/Components/Navbar/Navbar'
import Routes from '../src/Components/Routes/Routes'
import Footer from '../src/Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
