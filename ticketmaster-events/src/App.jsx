import { useRef, useState } from 'react';
import Navbar from './components/Navbar'
import Events from './components/events'

import './App.css'

function App() {
  const [searchValue, setSearchValue] = useState('');
  const containerRef = useRef();
  const handleNavbarSearch = (term) =>{
    console.log(containerRef.current)
    setSearchValue(term)
  };

  console.log(searchValue);

  return (
    <>
      <Navbar onSearch={handleNavbarSearch} ref={containerRef}></Navbar> 
      <Events searchValue={searchValue}></Events>    
    </>

  )
}

export default App
