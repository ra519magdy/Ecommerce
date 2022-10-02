import React from 'react'

const Head = () => {
  return (
    <>
        <section className ="head">
            <div className ="container d_flex">
                <div className ="left row">
                    <i className ="fa fa-phone"></i>
                    <label>+888010092</label>
                    <i className='fa fa-envelope'></i>
                    <label>suchas@gmail.com</label>
                </div>
                <div className='right row RText'>
                    <span>_</span>
                    <label htmlFor=''>EN</label>
                    <span> _</span>
                    <label htmlFor=''>USD</label>
                </div>
            </div>

        </section>
    </>
  )
}

export default Head
