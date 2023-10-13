import Link from 'next/link'
import React from 'react'

const MainPage = () => {
  return (
    <section className="container mx-auto ms-ctn p-5 flex justify-between items-center jumbo">
      <div className="left flex flex-col justify-between items-start ps-20">
         <h2 className='font-bold text-6xl mp-h2'>
            Share Your Photography With The World
          </h2>
          <h4 className='text-xl'>
            <em>
              "Show yourself, your story, your loner's diary"
            </em>
          </h4>
          <div className="mp-btns">
            <Link href="/photos" className='btn btn-primary mr-1'>Our Gallery</Link>
            <Link href="https://localhost:7085/Identity/Account/Register" className='btn btn-info ms-1'>Sign Up</Link>
          </div>
      </div>
      <div className="right flex justify-center">
        <div className="imgCtn">
          <img src="/homepageNoBg.png" alt="homepage image" className='mp-mainImg' />
          <img src="/blob1.svg" alt="blob shape" className='blob1'/>
          <img src="/blob2.svg" alt="blob shape" className='blob2'/>
          <img src="/blob3.svg" alt="blob shape" className='blob3'/>
        </div>
      </div>
    </section>
  )
}

export default MainPage
