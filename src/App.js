import Navbar from './Navbar/Navbar';
import Services from './Services/Services';
import About from './About/About';
import Home from './Home/Home';
import { Route, Routes } from 'react-router-dom'
import Footer from './Footer/Footer'
import Book from './Book/Book'
import Blog from './Blog/Blog'
// import Login from './Login/Login'
import Admin from './Admin/Admin';

function App() {
  // let Component
  // switch (window.location.pathname) {
  //   case ("/"):
  //     Component = <Home/>
  //     break;
  //   case ("/Services"):
  //     Component = <Services/>
  //     break
  //   case ("/About"):
  //     Component = <About/>
  //     break
  //   default:
  //     Component = <Home/>
  //     break;
  // }


  return (
    <>
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Services' element={<Services/>}/>
          <Route path='/Blog' element={<Blog/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Book' element={<Book/>}/>
          {/* <Route path='/Login' element={<Login/>}/> */}
          <Route path='/Admin' element={<Admin/>}/>
        </Routes>
      </div>
    <Footer />
    </>
  );
}

export default App;
