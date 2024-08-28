import React from 'react';
import Navbar from '../components/Tournaments/Navbar'
import SearchBar from '../components/Tournaments/SearchBar'
import Tournaments from '../components/Tournaments/Tournaments'
import { HeaderMegaMenu } from '@/components/MaidaanLogo/HeaderMegaMenu';

function App() {
  return (
    <div>
      <HeaderMegaMenu/>

      {/* <Navbar /> */}
      <SearchBar />
      <Tournaments />
    </div>
  );
}

export default App;
