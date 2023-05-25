import React from 'react'
import {Routes, Route} from "react-router-dom"
import HomePage from '../Pages/HomePage'
import AllScenerios from '../Pages/AllScenerios'
import AddScenerio from '../Pages/AddScenerio'
import AddVehicle from '../Pages/AddVehicle'
import Update from '../Pages/Update'
import UpdateVehicle from '../Pages/UpdateVehicle'
 
const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="addscenerio" element={<AddScenerio />} />
        <Route path="allscenerios" element={<AllScenerios/> }/>
        <Route path="addvehicle" element={<AddVehicle/> }/>
        <Route path='allscenerios/update/:id' element={<Update/>}></Route>
        <Route path='updateveh/:id' element={<UpdateVehicle/>}></Route>
    </Routes>
  )
}

export default AllRoutes