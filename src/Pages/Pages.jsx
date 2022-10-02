import React from 'react'
import Annocument from '../components/annocument/Annocument'
import FlashDeals from '../components/FlashDeals/FlashDeals'
import Home from '../components/mainPage/Home'
import TopCate from '../components/Top/TopCate'

const Pages = ({ productItems, cartItem, addToCart }) => {
  return (
    <>


        <Home  cartItem= {cartItem} />
        <FlashDeals  productItems={ productItems} addToCart= {addToCart}/>

        <TopCate/>
        <Annocument />

    </>
  )
}

export default Pages
