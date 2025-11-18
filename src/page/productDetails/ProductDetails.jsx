/*import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaRegStarHalfStroke, FaStar, FaCartArrowDown, FaShare } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import './productDetails.css';
import { TiShoppingCart } from 'react-icons/ti';
import SlideProduct from '../../components/slideProducts/SlideProduct';


function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  //hady category li tatla3 ba3d product page
  const [relatedProduct, setRelatedProduct] = useState([])
  const [loadingrelatedProduct, setLoadingRelatedProduct] = useState(true)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(()=> {
    if (!product) return
    fetch(`https://dummyjson.com/products/category/${product.category}`)
    .then((res)=>res.json())
    .then((data)=>{
      setRelatedProduct(data)

    })
    .catch((error)=> console.log(error))
    .finally(()=>setLoadingRelatedProduct(false))
    //wikt yassralha mise a jour
  } , [product ?.category]
)

  if (loading) return <p>Loading....</p>;
  if (!product) return <p>Product Not Found</p>;

  return (
    <div>
      <div className="item_details">
      <div className="container">
        <div className="imgs_item">
          <div className="big_img">
            {product.images && product.images.length > 0 ? (
              <img id='big_img' src={product.images[0]} alt={product.title} />
            ) : (
              <p>No image available</p>
            )}
          </div>

          <div className="sm_img">
            {product.images?.map((img, index) => (
              <img key={index} src={img} alt={product.title} onClick={() => document.getElementById("big_img").src = img }/>
            ))}
          </div>
        </div>

        <div className="detailes_item">
          <h1 className='name'>{product.title}</h1>
          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStarHalfStroke />
          </div>
          <p className='price'>$ {product.price}</p>
          <h5>Availbality : <span>{product.availabilityStatus}</span></h5>
          <h5>Brand : <span>{product.brand}</span></h5>
          <p className='desc'>{product.description}</p>
          <h5 className='stock'><span>Hurry Up! Only</span> <span>{product.stock}</span> <span>products left in stock.</span></h5>
          <button className='btn'>Add to card <TiShoppingCart/></button>
          <div className="icons">
                <span><CiHeart /></span>
                <span><FaShare/></span>
          
          
          </div>

        </div>
      </div>
    </div>

    {loadingrelatedProduct ? (
      <p>Loading....</p>
    ):(
      <SlideProduct  key={product.category} data = {relatedProduct} title={product.category.replace("-", "  ")}/>
    )} 

    </div>

  );
}

export default ProductDetails;*/
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaRegStarHalfStroke, FaStar, FaShare } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";
import './productDetails.css';
import SlideProduct from '../../components/slideProducts/SlideProduct';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // المنتجات المتعلقة
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [loadingrelatedProduct, setLoadingRelatedProduct] = useState(true);

  // جلب المنتج حسب الـ id
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // جلب المنتجات المشابهة حسب الفئة category
  useEffect(() => {
    if (!product) return;
    fetch(`https://dummyjson.com/products/category/${product.category}`)
      .then((res) => res.json())
      .then((data) => {
        // ✅ الحل هنا — نأخذ فقط المصفوفة products
        setRelatedProduct(data.products);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoadingRelatedProduct(false));
  }, [product?.category]);

  if (loading) return <p>Loading....</p>;
  if (!product) return <p>Product Not Found</p>;

  return (
    <div>
      <div className="item_details">
        <div className="container">
          <div className="imgs_item">
            <div className="big_img">
              {product.images && product.images.length > 0 ? (
                <img id='big_img' src={product.images[0]} alt={product.title} />
              ) : (
                <p>No image available</p>
              )}
            </div>

            <div className="sm_img">
              {product.images?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={product.title}
                  onClick={() => (document.getElementById("big_img").src = img)}
                />
              ))}
            </div>
          </div>

          <div className="detailes_item">
            <h1 className='name'>{product.title}</h1>
            <div className="stars">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke />
            </div>
            <p className='price'>$ {product.price}</p>
            <h5>Availability : <span>{product.availabilityStatus}</span></h5>
            <h5>Brand : <span>{product.brand}</span></h5>
            <p className='desc'>{product.description}</p>
            <h5 className='stock'>
              <span>Hurry Up! Only</span> <span>{product.stock}</span> <span>products left in stock.</span>
            </h5>
            <button className='btn'>Add to cart <TiShoppingCart /></button>
            <div className="icons">
              <span><CiHeart /></span>
              <span><FaShare /></span>
            </div>
          </div>
        </div>
      </div>

      {loadingrelatedProduct ? (
        <p>Loading related products...</p>
      ) : (
        relatedProduct.length > 0 ? (
          <SlideProduct
            key={product.category}
            data={relatedProduct}
            title={product.category.replace("-", " ")}
          />
        ) : (
          <p>No related products found.</p>
        )
      )}
    </div>
  );
}

export default ProductDetails;



