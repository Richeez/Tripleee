import React from 'react'
import HomePage from './Pages/HomePage'

import {Route, Routes} from 'react-router-dom'

import Community from './Pages/Communities/Community'
import Crypto from './Pages/Communities/Crypto'


const Maincontent = () => {
  return (
    <main className='main-cont'>

      <Routes>
        <Route path='/' element={<HomePage/>} />

        <Route path='/Community'>

        <Route index element={<Community/> } />

        <Route path='Crypto' element={<Crypto/> } />

        </Route>

      </Routes>

    </main>
  )
}

export default Maincontent