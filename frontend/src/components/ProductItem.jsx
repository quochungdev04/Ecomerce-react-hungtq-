import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
      const { currency } = useContext(ShopContext);
      return (
            <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
                  <div>
                        {/* Chỉ bọc ảnh bằng overflow-hidden */}
                        <div className='overflow-hidden'>
                              <img src={image[0]} alt={name} className='w-full transition duration-300 ease-in-out hover:scale-110' />
                        </div>
                        <p className='pt-3 pb-1 text-sm'>{name}</p>
                        <p className='text-sm font-medium'>
                              {currency}
                              {price}
                        </p>
                  </div>
            </Link>
      );
};

export default ProductItem;
