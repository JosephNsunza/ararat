import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DownloadPage from './DownloadPage'
import LandPage from './LandPage'


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path='/' element={<LandPage />}>
          <Route exact path='/download' element={<DownloadPage />} />
        </Route>
      </Routes>
    </BrowserRouter> 
  )
}

export default App