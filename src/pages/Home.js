import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Home = () => {

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

  return (
    <div>
      <h1 className="flex justify-center text-2xl">This is the home page</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
        {
          products.map((product) => <ProductCard key={product._id} product={product}></ProductCard>)
        }
      </div>

    </div>
  );
};

export default Home;
