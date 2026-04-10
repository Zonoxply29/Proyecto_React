import { useState } from 'react';
import Navbar from './components/Navbar'
import Events from './components/events'
import './App.css'

function App() {
  const [searchValue, setSearchValue] = useState('');
  const handleNavbarSearch = (term) =>{
    setSearchValue(term)
  };

  console.log(searchValue,10);

  return (
    <>
      <Navbar onSearch={handleNavbarSearch}></Navbar> 
      <Events searchValue={searchValue}></Events>     
    </>

  )
}

export default App
