import React from 'react'

const Numbers = () => {
  return (
    <div className="w-full py-16 bg-cover bg-center" style={{ backgroundImage: "url('/whitewood.png')" }}>
      {/* Title */}
      <h2 className="text-center text-4xl md:text-5xl font-serif text-gray-800 mb-8">
        Silver Gate Publishing by the Numbers
      </h2>
      {/* Underline */}
      <div className="w-16 h-1 bg-yellow-600 mx-auto mb-12"></div>
      {/* Stats Grid */}
      <div className="max-w-7xl mx-auto  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-10">
        {/* Stat 1 */}
        <div className="text-center">
          <p className="text-5xl md:text-6xl font-bold green-text">3,500+</p>
          <p className="text-lg md:text-xl text-black mt-2">Happy Authors</p>
        </div>
        {/* Stat 2 */}
        <div className="text-center">
          <p className="text-5xl md:text-6xl font-bold green-text">1 million+</p>
          <p className="text-lg md:text-xl text-black mt-2">Books Printed & Sold</p>
        </div>
        {/* Stat 3 */}
        <div className="text-center">
          <p className="text-5xl md:text-6xl font-bold green-text">3</p>
          <p className="text-lg md:text-xl text-black mt-2">Generations In The Book Business</p>
        </div>
        {/* Stat 4 */}
        <div className="text-center">
          <p className="text-5xl md:text-6xl font-bold green-text">150+</p>
          <p className="text-lg md:text-xl text-black mt-2">Years Of Collective Publishing Experience</p>
        </div>
      </div>
    </div>
  )
}

export default Numbers