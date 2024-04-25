
import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import{Login} from  './Router/Login'
import {Details} from'./Router/Details'
export const Routing=()=>{

    return(
        <div>
           <BrowserRouter>
              <Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/D" element={<Details/>}></Route>
              </Routes>
           </BrowserRouter> 



           
        </div>
    )
}