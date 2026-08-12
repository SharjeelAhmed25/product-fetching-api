import React from 'react'

const Detailcard = ({
  title,
  price,
  category,
  description,
  productimg,
  rating
}) => {
  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* Product Image */}
          <div className="bg-gray-100 flex items-center justify-center p-8 min-h-[500px]">
            <img
              src={productimg}
              alt={title}
              className="w-full max-w-lg h-[450px] object-contain"
            />
          </div>

          {/* Product Details */}
          <div className="p-8 md:p-12 flex flex-col justify-center">

            <p className="text-green-600 uppercase tracking-wider font-semibold mb-3">
              {category}
            </p>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-5">
              {title}
            </h1>

            <p className="text-gray-600 text-lg leading-8 mb-6">
              {description}
            </p>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-yellow-500 text-xl">
                ⭐
              </span>

              <span className="text-gray-700 font-semibold">
                {rating}
              </span>
            </div>

            <h2 className="text-3xl font-bold text-green-600 mb-8">
              ${price}
            </h2>

            <button className="bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-700 transition duration-300 cursor-pointer">
              Add to Cart
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Detailcard

