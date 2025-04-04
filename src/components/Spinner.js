import React from 'react'
import "./Spinner.css"

export const Spinner = () => {
  return (
    <div className="flex flex-col items-center space-y-2">
        <div className='spinner'></div>
        <p className="text-black text-lg font-semibold">Loading...</p>
    </div>
  )
}
