import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Contact from './pages/contact'
import About from './pages/About'
import SignUp from './pages/SignUp'
import Login from './pages/Login'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<Layout />}>
        <Route index element={<Home />}  />
        <Route path='contact' element={<Contact />} />
        <Route path='about' element={<About />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}