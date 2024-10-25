import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Home from './pages/Home.jsx';
import CartPage from './pages/CartPage.jsx';
import Signin from './pages/signin.jsx';
import Footer from './sections/Footer';
import Contact from './pages/contact'
import Signup from './pages/signup.jsx';
import About from './pages/About.jsx';
import Banner from './components/Banner.jsx';
import ItemDetails from "./pages/ItemDetails";
import Loved from './components/Loved.jsx';
import Product from './components/Product.jsx';




const App = () => {
   return (

      <>

         <Router>

            <main className='relative'>
               <Banner />
               <Nav />
               <div>
                  <Routes>
                     <Route path="/" element={<Home />} />
                     <Route path="/cart" element={<CartPage />} />
                     <Route path="/Signin" element={<Signin />} />
                     <Route path="/contact" element={<Contact />} />
                     <Route path="/signup" element={<Signup />} />
                     <Route path="/About" element={<About />} />
                     <Route path="/item-details" element={<ItemDetails />} />
                     <Route path="/Loved" element={<Loved />} />
                     <Route path="/Product" element={<Product />} />
                  </Routes>
               </div>
            </main>

         </Router>

         <section className='bg-black padding-x padding-t pb-8'>
            <Footer />
         </section>
      </>
   );
};

export default App;
