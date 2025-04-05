import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Components/pages/Home/Home';
import Menu from './Components/Menu';
import Rolls from './Components/pages/Rolls/Rolls';
import Sauces from './Components/pages/Sauces/Sauces';
import Drinks from './Components/pages/Drinks/Drinks';
import Sushi from './Components/pages/Sushi/Sushi';
import Sets from './Components/pages/Sets/Sets';

import Basket from './Components/pages/Basket/Basket';
import Register from './Components/pages/Authenticate/Register/Register';
import Login from './Components/pages/Authenticate/Login/Login';

import AdminPanel from './Components/adminRecurses/AdminPanel';
import Orders from './Components/adminRecurses/Orders';

function App() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <Router>
          <Menu />

          <main className='flex-grow-1'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/sets' element={<Sets />} />
              <Route path='/sushi' element={<Sushi />} />
              <Route path='/rolls' element={<Rolls />} />
              <Route path='/sauces' element={<Sauces />} />
              <Route path='/drinks' element={<Drinks />} />

              {/* корзина */}
              <Route path='/basket' element={<Basket />} />

              {/* Authenticate */}
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              {/* adminPanel */}
              <Route path='/adminPanel' element={<AdminPanel />} />
              <Route path='/orders' element={<Orders />} />
            </Routes>
          </main>
        </Router>

      </div>

      <footer className='py-3 bg-dark'>
        <div className="container d-flex justify-content-center align-items-center text-light">
          2025, Tasks Corporate. &copy; All Rights Reserved.
        </div>
      </footer>
    </>
  );
}

export default App;
