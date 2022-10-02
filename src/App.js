import React,{useEffect } from "react"
import "./App.css"
import BounceLoader from "react-spinners/BounceLoader";


import Header from "./common/header/Header"
import Data from "./components/FlashDeals/Data"
import Pages from "./Pages/Pages"
import {useState} from "react"
import Cart from "./common/cart/Cart"
import { Route, Routes } from "react-router-dom"
import Footer from "./common/footer/Footer"
import Contact from "./components/Contact/Contact"
import Login from "./common/Login/Login"


function App()  {
  
 
  const [loading, setLoading] = useState(false);

    useEffect(() =>{
      setLoading(true)
      setTimeout(() => {
      setLoading(false)


      }, 1000)


    }, [])


  const { productItems } = Data
  const [ cartItem, setCardItem ] = useState ([])


  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)
   
    if (productExit) {
      setCardItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
     
      setCardItem([...cartItem, { ...product, qty: 1 }])
    }
  }


  const decreaseQty = (product) => {

    const productExit = cartItem.find((item) => item.id === product.id)
    if (productExit.qty === 1) {
      setCardItem(cartItem.filter((item) => item.id !== product.id))
    } else {
      
      setCardItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }



  

  return (
    <div className="Aapp">
      {/*  */}

      {

         loading ?
         

         <BounceLoader
         size={180}
         
         color={"#f37A26"}

         loading={loading}
         />

         :
        <>

         <Header  cartItem ={ cartItem } />
         
         <Routes>
         <Route path="/"  element={  <Pages  productItems ={ productItems } addToCart={addToCart} />}/>
         
  
         <Route path="/Pages"  element={  <pages  productItems ={ productItems } addToCart={addToCart} />}/>
  
          <Route path="/cart" element={<Cart cartItem ={cartItem } addToCart={addToCart} decreaseQty={ decreaseQty} />} /> 
  
  
         <Route path="/contact" element={<Contact />} />
         <Route path="/Login" element={<Login />}/>
         </Routes>
         <Footer />
  








</>






      }

      
      
     

      
    </div>
  );
}

export default App