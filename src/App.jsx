import './App.css'
import { Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Pages/Home'
import Auth from './Pages/Auth'
import Dashboard from './Pages/Dashboard'
import Projects from './Pages/Projects'
import PageNotFound from './Pages/PageNotFound'

function App() {


  return (
    <>
      <Header />
      <Routes>
        {/* landing page path  */}
        <Route path='/' element={<Home />} />
        {/* Login page  */}
        <Route path='/login' element={<Auth />} />
        {/* register page  */}
        <Route path='/register' element={<Auth register/>} />
        {/* dashboard */}
        <Route path='/dashboard' element={<Dashboard/>} />
        {/* Projects  */}
        <Route path='/projects' element={<Projects/>} />
        {/* pagenotfound  */}
        <Route path='*' element={<PageNotFound/>} />

      </Routes>
      <Footer />

    </>
  )
}

export default App
