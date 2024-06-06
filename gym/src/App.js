import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './compo/Home'

import Whyus from './compo/Whyus'
import Trainers from './compo/Trainers'
import Contact from './compo/Contact '
import Header from './compo/Header'
import Adminregister from './compo/Admin/Adminregister'
import Adminlogin from './compo/Admin/Adminlogin'
import Private from './compo/Admin/Private'
import Fetch from './compo/Fetch'
import Register from './compo/Register'


function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route element={<Private/>}>
        
      </Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/whyus' element={<Whyus/>}></Route>
      <Route path='/trainer' element={<Trainers/>}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/admin-register' element={<Adminregister/>}></Route>
      <Route path='/admin-login' element={<Adminlogin/>}></Route>
      
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App

