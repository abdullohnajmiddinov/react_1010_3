import React from 'react'

const NAvbar = () => {
  return (
    <div className="w-full h-16 bg-white text-white flex justify-between items-center px-6">
      <h1 className="text-xl font-bold"><img className='w-[150px]' src="Mars.png" alt="" /></h1>
      <div className="flex items-center gap-3">
        <span className="mr-4 text-black">Mirzaaliyev Bekzod </span>  
        <button className="bg-gray-200 text-gray-800 px-3 py-1 rounded">Uz</button>
        <img className='w-5 h-5' src="icon.png" alt="" />
      </div>
    </div>
  )
}

export default NAvbar
