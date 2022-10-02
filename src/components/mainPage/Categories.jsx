import React from 'react'

const Categories = () => {

    const data = [
        {
            cateImg: "./images/category/cat1.png",
            cateName: "ring",
          },
          {
            cateImg: "./images/category/cat2.png",
            cateName: " silver Pins",
          },
          {
            cateImg: "./images/category/cat3.png",
            cateName: "necklace",
          },
          {
            cateImg: "./images/category/cat4.png",
            cateName: "earring",
          },
          {
            cateImg: "./images/category/cat5.png",
            cateName: "wristwatch",
          },
          {
            cateImg: "./images/category/cat6.png",
            cateName: "earring",
          },
          {
            cateImg: "./images/category/cat7.png",
            cateName: "necklace",
          },
          {
            cateImg: "./images/category/cat8.png",
            cateName: "Silver Crowns",
          },
          {
            cateImg: "./images/category/cat9.png",
            cateName: "necklace",
          },
          {
            cateImg: "./images/category/cat10.png",
            cateName: "Dimond",
          },
          {
            cateImg: "./images/category/cat11.png",
            cateName: " earring",
          },
    ]
  return (
    <>

        <div className='category'>
            {data.map((value, index) => {

                return (

                    <div className='box f_flex' key={index}>
                        <img src={value.cateImg} alt='' />
                        <span> {value.cateName}</span>
                        
                    </div>
                )
            }
            
            
            
            )}

        </div>

        

      
    </>
  )
}

export default Categories
