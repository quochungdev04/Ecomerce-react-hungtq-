import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from './RelatedProducts';

const Product = () => {
    const { productId } = useParams();
    const { products, currency, addToCart } = useContext(ShopContext);
    const [productData, setProductData] = useState(false);
    const [image, setImage] = useState('');
    const [sizes, setSize] = useState('');

    const fetchProductData = async () => {
        products.map((item) => {
            if (item._id === productId) {
                //           console.log(item);
                setProductData(item);
                setImage(item.image[0]);
                return null;
            }
        });
    };
    useEffect(() => {
        fetchProductData();
    }, [productId, products]);

    return productData ? (
        <div className='pt-10 transition-opacity duration-500 ease-in border-t-2 opacity-100'>
            <div className='flex flex-col gap-12 sm:gap-12 sm:flex-row'>
                {/**image products */}
                <div className='flex flex-col-reverse flex-1 gap-4 sm:flex-row'>
                    {/* Thumbnails */}
                    <div className='flex sm:flex-col w-full sm:w-[18%] sm:h-[500px] gap-3 pr-2 sm:pr-0 no-scrollbar'>
                        {productData.image.slice(0, 4).map((item, index) => (
                            <img key={index} src={item} alt='' onClick={() => setImage(item)} className='w-[24%] sm:w-full sm:h-[25%] flex-shrink-0 cursor-pointer object-cover border hover:border-black transition' />
                        ))}
                    </div>

                    {/* Main image */}
                    <div className='w-full sm:w-[82%]'>
                        <img src={image} alt='' className='object-contain w-full h-[500px]' />
                    </div>
                </div>

                {/**Product infor */}
                <div className='flex-1'>
                    <h1 className='mt-2 text-2xl font-medium'>{productData.name}</h1>
                    <div className='flex items-center gap-1 mt-2'>
                        <img src={assets.star_icon} alt='' className='w-3 5' />
                        <img src={assets.star_icon} alt='' className='w-3 5' />
                        <img src={assets.star_icon} alt='' className='w-3 5' />
                        <img src={assets.star_icon} alt='' className='w-3 5' />
                        <img src={assets.star_dull_icon} alt='' className='w-3 5' />
                        <p className='pl-2'>(122)</p>
                    </div>
                    <p className='mt-5 text-3xl font-medium'>
                        {currency}
                        {productData.price}
                    </p>
                    <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
                    <div className='flex flex-col gap-4 my-8'>
                        <p>Select Size</p>
                        <div className='flex gap-2'>
                            {productData.sizes.map((item, index) => (
                                <button onClick={() => setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === sizes ? 'border-orange-500' : ''}`} key={index}>
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                    <button onClick={() => addToCart(productData._id, sizes)} className='px-8 py-3 text-sm text-white bg-black active:bg-gray-700'>
                        ADD TO CART
                    </button>
                    <hr className='my-8 sm:w4/5' />
                    <div className='flex flex-col gap-1 mt-5 text-sm text-gray-500'>
                        <p>100% Original product.</p>
                        <p>Cash on delivery is available on this product.</p>
                        <p>Easy return and exchange policy within 7 days.</p>
                    </div>
                </div>
            </div>
            {/**Mô tả và đánh giá */}
            <div className='mt-20'>
                <div className='flex'>
                    <b className='px-5 py-3 text-sm border'>Description</b>
                    <p className='px-5 py-3 text-sm border'> Reviews (122)</p>
                </div>
                <div className='flex flex-col gap-4 px-6 py-6 text-sm text-gray-500 border'>
                    <p>
                        An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions
                        without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.
                    </p>
                    <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
                </div>
            </div>
            {/** Hiển thị products liên quan */}
            <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
        </div>
    ) : (
        <div className='opacity-0'></div>
    );
};

export default Product;
