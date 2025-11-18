import React, { useEffect, useState } from 'react'
import HeroSlider from '../../components/HeroSlider'
import './Home.css'
import SlideProduct from '../../components/slideProducts/SlideProduct'
//rayha nakhdam api ta3 les categories
//1-jbt lien o les nomes mn site

const categories = [
  "smartphones",
  "mobile-accessories",
  "laptops",
  "mens-watches",
  "tablets",
  "sunglasses",
]


function Home() {
  const[products, setProducts] = useState({})
  const[loading, setLoading] = useState(true)


//2-switch api
useEffect(() => {
  async function fetchProducts() {
    try {
      const results = await Promise.all(
        categories.map(async (category) => {
          const res = await fetch(`https://dummyjson.com/products/category/${category}`);
          const data = await res.json();
          return { [category]: data.products };
        })
      );
      const productData = Object.assign({}, ...results);
      setProducts(productData);
    } catch (error) {
      console.error("Error fetching", error);
    } finally {
      setLoading(false)
    }
  }

  fetchProducts(); 
}, []);

console.log(products);
//3-nrsslou les donnes using props
  return (
    <div>
      <HeroSlider/>

      {loading ? (
         <p>Loading...</p>
      ) : (
      categories.map(category => ( //props
        <SlideProduct key={category} title={category.replace("-", " ")} data={products[category]}/>
      ))
    )}
      
      
    </div>
  )
}

export default Home
