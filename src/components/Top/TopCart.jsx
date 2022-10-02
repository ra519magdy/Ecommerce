import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Tdata from "./Tdata"

const TopCart = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed:400,
    autoplay: true,
    responsive: [
      {
        breakpoint: 320,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 2, infinite: true }
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true}
      }
    ]



  }
  return (
    <>
      <Slider {...settings}>
        {Tdata.map((value, index) => {
          return (
            <>
              <div className='box product' key={index}>
                <div className='nametop d-flex'>
                  <span className='tleft'>{value.para}</span>
                  <span className='tright'>{value.desc}</span>
                </div>
                <div className='img'>
                  <img src={value.cover} alt='' />
                </div>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default TopCart