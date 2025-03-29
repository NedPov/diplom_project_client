import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Components/pages/Home/Home';
import Menu from './Components/Menu';
import Rolls from './Components/pages/Rolls/Rolls';

function App() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <Router>
          <Menu />

          <main className='flex-grow-1'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/rolls' element={<Rolls />} />
              
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
