const Productcard = ({pid , title , price , category , productimg , description , rating }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden
      hover:shadow-xl hover:-translate-y-2 transition duration-300">

      {/* Image */}
      <div className="bg-gray-100 h-52 flex items-center justify-center">
        <img
          src={productimg}
          alt={title}
          className="w-full h-full object-contain p-5
          hover:scale-110 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5">

        <h2 className="text-lg font-bold">
          {title}
        </h2>

        <p className="text-gray-500 text-sm mt-2">
          {description}
        </p>

        <div className="flex justify-between items-center mt-4">
          <p className="text-2xl font-bold">
            ${price}
          </p>

          <span className="text-yellow-500">
            ⭐ {rating}
          </span>
        </div>

        <button className="w-full bg-black text-white py-3
          rounded-xl mt-5 cursor-pointer
          hover:bg-gray-800 transition">
          View Product
        </button>

      </div>
    </div>
  );
};

export default Productcard;