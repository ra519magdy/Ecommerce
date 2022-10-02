import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [MobileMenu , setMobileMenu] = useState(false)

  return (
    <>
          <header className='header'>
            <div className='container d_flex'>
              <div className='catgories d_flex'>
                <span className='fa-solid fa-border-all'></span>
                <h4>categories <i className='fa fa-chevron-down'></i></h4>
              </div>


              <div className='navlink'>
                <ul className={MobileMenu ? "nav-links-MobileMenu" : "links f_flex capitalize"} onClick={() => setMobileMenu(false)}>
                 
                  <li>
                    <Link to='/'>home</Link>
                  </li>
                  <li>
                    <Link to='/Pages'>pages</Link>
                  </li>
                  
                 
                  <li>
                    <Link to='/contact'>contact</Link>
                  </li>
                </ul>

                <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
                  

                    {MobileMenu ? <i className='fas fa-times close home-btn'></i> :

                    <i className="fa-solid fa-bars open   btn_bar"></i>
                    
                    }
                
                </button>

              </div>

            </div>

          </header>
    
    </>
  )
}

export default Navbar