import React from 'react'
import { Link } from 'react-router-dom'

const Search = ({cartItem}) => {

    window.addEventListener("scroll", function () {
      const search = document.querySelector('.search')
      search.classList.toggle("active", window.screenY > 100)

    })
  return (
    <>
        <section className='search'>
          <div className='container '>
            <div className='REspon'>
            <div className='logo_immg '>
            <img src="./images/logo.jpg" alt="" />
            </div>
            <div className='search-box f_flex'>
              <i className='fa fa-search'></i>
              <input type="text"  placeholder=" Search and hit enter......"/>
              <span>All category</span>
            </div>
            <div className='icon f_flex '>
                <Link to='/Login'>
                <i className='fa fa-user icon-circle fa-xll'> </i>
                </Link>
              <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle fa-xll'></i>
                <span>{cartItem.length === 0 ? "" :cartItem.length}</span>
                </Link>

              </div>

            </div>
            </div>


          </div>

        </section>
    
    </>
  )
}

export default Search