import React from 'react';
import Navbar from '../components/Tournaments/Navbar'
import SearchBar from '../components/Tournaments/SearchBar'
import Tournaments from '../components/Tournaments/Tournaments'

function App() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <Tournaments />
    </div>
  );
}

export default App;
