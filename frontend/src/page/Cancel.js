import React from 'react'
import paymentFailureImage from '../assest/cancel'

const Cancel = () => {
  return (
    <div className='bg-red-200 gap-6 w-full max-w-md m-auto h-56 flex  flex-col justify-center items-center font-semibold text-lg'>
        <img src={paymentFailureImage} className="w-1/2 max-w-sm" />
        <p className="text-slate-600 text-3xl font-bold">Your Payment is Cancelled</p>
    </div>
  )
}

export default Cancel