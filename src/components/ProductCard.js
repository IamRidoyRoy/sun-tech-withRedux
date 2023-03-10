import React from "react";
import { BiListPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { addTocart, removeCart } from "../redux/actionCreators/productActions";
import { RiDeleteBack2Line } from "react-icons/ri"
import { useLocation } from "react-router-dom";
const ProductCard = ({ product }) => {

  const dispatch = useDispatch();

  // Use conditional rendering 
  const { pathname } = useLocation()
  return (
    <div
      className='shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900 relative'
      key={product._id}
    >
      {
        pathname.includes('cart') &&
        <p className="bg-indigo-500 rounded-xl px-2 absolute top-0 right-0 text-white">Quantity: {product.quantity}</p>

      }

      <div className='h-52 w-52 mx-auto'>
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className='font-bold text-center'>{product.model}</h1>
      <p className='text-center font-semibold mb-3'>Rating: {product.rating}</p>
      <div className=' flex-1'>
        <ul className='space-y-2'>
          {product.keyFeature.map((feature) => {
            return <li className='text-sm ' key={feature}>{feature}</li>;
          })}
        </ul>
      </div>
      <div className='flex gap-2 mt-5'>
        {!pathname.includes('cart') && <button className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'
          onClick={() => dispatch(addTocart(product))}
        >
          Add to cart
        </button>}


        {pathname.includes('cart') && < button className=' flex-1 flex justify-between items-center bg-red-500 rounded-full py-1 px-2  text-white text-bold'
          onClick={() => dispatch(removeCart(product))}
        >
          <p className="text-xl">Remove</p>
          <RiDeleteBack2Line size={20} />
        </button>}
        {!pathname.includes('cart') && <button
          title='Add to wishlist'
          className='bg-indigo-500  py-1 px-2 rounded-full'
        >
          <BiListPlus className='text-white' />
        </button>}
      </div>
    </div >
  );
};

export default ProductCard;
