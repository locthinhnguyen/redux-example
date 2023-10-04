import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetail = () => {
  const [productDetail, setProductDetail] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector((state) => state.cart);
  const { id } = useParams();

  useEffect(() => {
    const description = product.find((item) => item.id === Number(id));
    setProductDetail(description);
  }, [id]);

  const handleBuy = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(productDetail);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    const updatedCart = product.filter((item) => item.id !== productDetail.id);
    // console.log('updatedCart: ', updatedCart);
    dispatch({ type: 'UPDATE_CART', payload: updatedCart });

    navigate('/');
  };

  return (
    <div className="flex justify-center flex-col gap-5 items-center">
      <h2 className=" text-xl font-bold">Product Detail</h2>
      <div className="border p-2 gap-3 cursor-pointer">
        <h1>{productDetail?.name}</h1>
        <p>{productDetail?.description}</p>
        <p>{productDetail?.price}</p>
      </div>
      <button className="bg-red-500 border rounded" onClick={handleBuy}>
        Buy
      </button>
    </div>
  );
};

export default ProductDetail;
