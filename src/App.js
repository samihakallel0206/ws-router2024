
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Errors from './pages/Errors';
import BareNav from './components/BareNav';
import Footer from './components/Footer';
import { useState } from 'react';
import Login from './pages/Login';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <div className="App">
      <BareNav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin' element={< PrivateRoute isAdmin={isAdmin} />}>
          <Route path='/admin' element={<Admin/>}/>
        </Route>
        <Route path='/*' element={<Errors/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
