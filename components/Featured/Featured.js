import React from 'react'
import MySlider from './MySlider'

const Featured = () => {
  return (
    <div className='px-[7%] py-5' id='featured'>
        <h1 className='font-bold lg:text-3xl  mb-10'>Featured Products</h1>
        <MySlider />
    </div>
  )
}

export default Featured