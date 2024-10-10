import React from 'react'
import paymentSuccessfulImage from "../assest/success";

const Success = () => {
  return (
    <div className='bg-green-200 w-full max-w-md m-auto h-56 flex  flex-col justify-center items-center font-semibold text-lg'>
        <img src={paymentSuccessfulImage} className="w-1/3 max-w-sm" />
        <p className="text-slate-600 text-3xl font-bold">Your Payment is Successful</p>
    </div>
  )
}

export default Success