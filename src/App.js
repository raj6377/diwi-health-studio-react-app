import Navbar from './Navbar/Navbar';
import Services from './Services/Services';
import About from './About/About';
import Home from './Home/Home';
import { Route, Routes } from 'react-router-dom'
import Footer from './Footer/Footer'
import Book from './Book/Book'
import Blog from './Blog/Blog'
import Login from './Admin/Login/Login'
import Appointments from './Admin/Appointments/Appointments';
import Admin from './Admin/Dashboard/Dashboard'
import Edit from './Admin/Reschedule/Reschedule';
import WriteBlog from './Admin/WriteBlog/WriteBlog';
import AccAppointments from './Admin/AccAppointments/AccAppointments';
import PastAppointments from './Admin/PastAppointments/PastAppointments';
import SingleBlog from './Blog/SingleBlog'

import { useState } from 'react'
import Payment from './Payment/Payment';
import Success from './Success/Success';
import PrivateRoute from './Admin/PrivateRoute/PrivateRoute'
import { AuthProvider } from './Admin/AuthContext/AuthContext'

function App() {

  const [showNav, setShowNav] = useState(true)

  return (
    <>
      {showNav && <Navbar/>}
      <div className='container'>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Services' element={<Services/>}/>
            <Route path='/Blog' element={<Blog/>}/>
            <Route path='/SingleBlog/:id' element={<SingleBlog setNavShow={setShowNav} statusNavShow={showNav}/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Book' element={<Book/>}/>
            <Route path='/Login' element={<Login setNavShow={setShowNav} statusNavShow={showNav}/>}/>
            <Route path='/Dashboard' element={<PrivateRoute><Admin setNavShow={setShowNav} statusNavShow={showNav}/></PrivateRoute>}/>
            <Route path='/Appointments' element={<PrivateRoute><Appointments setNavShow={setShowNav} statusNavShow={showNav}/></PrivateRoute>}/>
            <Route path='/AccAppointments' element={<PrivateRoute><AccAppointments setNavShow={setShowNav} statusNavShow={showNav}/></PrivateRoute>}/>
            <Route path='/PastAppointments' element={<PrivateRoute><PastAppointments setNavShow={setShowNav} statusNavShow={showNav}/></PrivateRoute>}/>
            <Route path='/update/:id' element={<PrivateRoute><Edit setNavShow={setShowNav} statusNavShow={showNav}/></PrivateRoute>}/>
            <Route path='/WriteBlog' element={<PrivateRoute><WriteBlog setNavShow={setShowNav} statusNavShow={showNav}/></PrivateRoute>}/>
            <Route path='/Payment' element={<PrivateRoute><Payment setNavShow={setShowNav} statusNavShow={showNav}/></PrivateRoute>}/>
            <Route path='/Success' element={<PrivateRoute><Success setNavShow={setShowNav} statusNavShow={showNav}/></PrivateRoute>}/>
          </Routes>
        </AuthProvider>
      </div>
      {showNav && <Footer />}
    </>
  );
}

export default App;
