import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Signup from './Pages/Signup';
import Forget from './Pages/Forget';
import { ToastContainer } from "react-toastify";
import Imformation from "./Pages/Imformation";
import Thankyou from "./Pages/Thankyou";
import OrderTimeline from "./Pages/OrderTimeline";
import History from './Components/History/History';


import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/assets/banner_mens.png'
import women_banner from './Components/assets/banner_women.png'
import kid_banner from './Components/assets/banner_kids.png'
import ShippingMethod from './Pages/ShippingMethod';
import PaymentMethod from './Pages/PaymentMethod';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <ToastContainer />
      
    
    


      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        {/* <Route path="/Other" element={<ShopCategory category="Other"/>}/> */}
        <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
        
      </Route>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/forgotpassword' element={<Forget/>}/>
      <Route path='/ShippingMethod' element={<ShippingMethod/>}/>
      <Route path='/paymentmethod' element={<PaymentMethod/>}/>
      <Route path='/imformation'  element={<Imformation/>}/>
      <Route path='/Thanyou' element={<Thankyou/>}/>
      <Route path='/OrderTimeline' element={<OrderTimeline/>}/>
      <Route path='/history' element={<History/>}/>
     
      
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
