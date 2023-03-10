import {Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Signup from './pages/Auth/Signup';
import Signin from './pages/Auth/Signin';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Profile from './pages/Profile';
import ProtectedRoute from './pages/ProtectedRoute'
import Basket from './pages/Basket';
import Error404 from './pages/Error404';


function App() {
  return (
   
      <div>
        <Navbar />
        <div id='content'>
         <Routes>
            <Route path='/' element={<Products/>} />
            <Route path='/product/:product_id' element={<ProductDetail/>}/>
            <Route path='/signin' element={<Signin/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/basket' element={<Basket/>} />
            <Route path='*' element={<Error404/>} />
            <Route element={<ProtectedRoute />}>
						  <Route path="/profile" element={<Profile />} />
					  </Route>
          </Routes>
        </div>
      </div>

  );
}

export default App;
