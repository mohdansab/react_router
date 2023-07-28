import React from 'react'
import { Route, Routes, Link} from 'react-router-dom'
import ContactNo from './ContactNo'
import Menu from './Menu'
import Special from './Special'
import Error from './Error'
import Vegitable from './Vegitable'
import Fruite from './Fruite'
import Registerpage from './Registerpage'
import Login from './Login'
const LazyLocation=React.lazy(()=>import('./Location'))



function Hotelkk() {
  return (
    <div>
           <ul>
        <li>
          <Link to="/Menu">Menu</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/ContactNo">ContactNo</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/Special">Special</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/Location">Location</Link>
        </li>
      </ul>
 
        <Routes>
            <Route path='Menu'element={<Menu/>}>
              <Route path='Vegitable'element={<Vegitable/>}/>
              <Route path='Fruite'element={<Fruite/>}/>
            </Route>

            <Route path='ContactNo'element={<ContactNo/>}/>
            <Route path='Special'element={<Special/>}/>
            <Route path='Location'element={<React.Suspense fallback='Loading...'>
              <LazyLocation/>
            </React.Suspense>}
            />
            <Route path='*'element={<Error/>}/>
            <Route path='/' element={<Registerpage/>}/>
            <Route path='nextpage2' element={<Login/>}/>
            



        </Routes>
    </div>
  )
}

export default Hotelkk
