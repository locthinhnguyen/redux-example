import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Cart from './Cart';
const ListProduct = () => {
  const product = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/detail/${id}`);
  };
  return (
    <div className=" flex flex-col items-center gap-8   ">
      <h1 className=" text-xl font-bold">List Product</h1>
      <div className="flex flex-row gap-5">
        {product?.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg"
            onClick={() => handleClick(item.id)}
          >
            <h2>{item.name}</h2>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
      <Link className="border rounded-lg" to={'/cart'}>
        My Cart
      </Link>
    </div>
  );
};

export default ListProduct;
