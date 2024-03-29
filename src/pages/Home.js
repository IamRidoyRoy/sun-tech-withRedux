import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { toggleStock, toggle_Brand } from "../redux/actionCreators/filterActions";

const Home = () => {

  const filters = useSelector(state => state.filter.filters);
  const { brands, stock } = filters;
  console.log(filters)
  const dispatch = useDispatch()

  const [products, setProducts] = useState([]);
  // console.log(products);
  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  // retrieve Data FromStore
  // const retrieveDataFromStore = useSelector((state) => state)
  // console.log(retrieveDataFromStore);

  const activeClass = "text-white  bg-indigo-500 border-white";

  const handleClick = () => {
    activeClass = !activeClass;
  }
  return (
    <div className='max-w-7xl gap-14 mx-auto my-10'>
      <div className='mb-10 flex justify-end gap-5'>
        <button onClick={() => dispatch(toggleStock())}
          className={`border px-3 py-2 rounded-full font-semibold ${stock ? activeClass : null} `}
        >
          In Stock
        </button>
        <button onClick={() => dispatch(toggle_Brand('amd'))} className={`border px-3 py-2 rounded-full font-semibold ${brands.includes('amd') ? activeClass : null}`}  >
          AMD
        </button>
        <button onClick={() => dispatch(toggle_Brand('intel'))} className={`border px-3 py-2 rounded-full font-semibold ${brands.includes('intel') ? activeClass : null}`} >
          Intel
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
        {products.map((product) => (
          <ProductCard key={product.model} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
