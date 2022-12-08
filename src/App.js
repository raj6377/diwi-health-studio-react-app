import Navbar from './Navbar/Navbar';
import Services from './Services/Services';
import About from './About/About';
import Home from './Home/Home';
import { Route, Routes } from 'react-router-dom'
import Footer from './Footer/Footer'
import Book from './Book/Book'
import Blog from './Blog/Blog'
import Login from './Login/Login'
import Appointments from './Appointments/Appointments';
import Admin from './Admin/Admin'
import Edit from './Edit/Edit';

import { useState } from 'react'

function App() {

  const [showNav, setShowNav] = useState(true)

  return (
    <>
      {showNav && <Navbar/>}
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Services' element={<Services/>}/>
          <Route path='/Blog' element={<Blog/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Book' element={<Book/>}/>
          <Route path='/Login' element={<Login setNavShow={setShowNav} statusNavShow={showNav}/>}/>
          <Route path='/Admin' element={<Admin setNavShow={setShowNav} statusNavShow={showNav}/>}/>
          <Route path='/Appointments' element={<Appointments setNavShow={setShowNav} statusNavShow={showNav}/>}/>
          <Route path='/update/:id' element={<Edit/>}/>

        </Routes>
      </div>
      {showNav && <Footer />}
    </>
  );
}

export default App;
