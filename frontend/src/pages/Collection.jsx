import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
    const { products, search, showSearch } = useContext(ShopContext);
    const [showFillter, setShowFillter] = useState(false);
    const [filterProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [sortType, setSortType] = useState('relavent');
    const toggleCategory = (e) => {
        if (category.includes(e.target.value)) {
            setCategory((pre) => pre.filter((item) => item !== e.target.value));
        } else {
            setCategory((pre) => [...pre, e.target.value]);
        }
    };

    const toggleSubcateory = (e) => {
        if (subCategory.includes(e.target.value)) {
            setSubCategory((pre) => pre.filter((item) => item !== e.target.value));
        } else {
            setSubCategory((pre) => [...pre, e.target.value]);
        }
    };
    const applyFilter = () => {
        let productsCoppy = products.slice();
        if (showSearch && search) {
            productsCoppy = productsCoppy.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
        }
        if (category.length > 0) {
            productsCoppy = productsCoppy.filter((item) => category.includes(item.category));
        }
        if (subCategory.length > 0) {
            productsCoppy = productsCoppy.filter((item) => subCategory.includes(item.subCategory));
        }
        setFilterProducts(productsCoppy);
    };
    const sortProducts = () => {
        let fpCoppy = filterProducts.slice();
        switch (sortType) {
            case 'low-high':
                setFilterProducts(fpCoppy.sort((a, b) => a.price - b.price));
                break;
            case 'high-low':
                setFilterProducts(fpCoppy.sort((a, b) => b.price - a.price));
                break;
            default:
                applyFilter();
                break;
        }
    };

    useEffect(() => {
        // console.log(search);
        applyFilter();
    }, [category, subCategory, search, showSearch]);
    useEffect(() => {
        sortProducts();
    }, [sortType]);

    return (
        <div className='flex flex-col gap-1 pt-10 border-t sm:flex-row sm:gap-10'>
            {/*
             * Lọc sản phẩm
             */}
            <div className='min-w-60'>
                <p onClick={() => setShowFillter(!showFillter)} className='flex gap-2 items-center my-2 text-xl cursor-pointer'>
                    FILTERS
                    <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFillter ? 'rotate-90' : ''}`} alt='' />
                </p>
                {/*Lọc danh mục sản phẩm*/}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFillter ? '':'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>CATEGORIES</p>

                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' name='' id='' value={'Men'} onChange={toggleCategory} />
                            Men
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' name='' id='' value={'Women'} onChange={toggleCategory} />
                            Women
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' name='' id='' value={'Kids'} onChange={toggleCategory} />
                            Kids
                        </p>
                    </div>
                </div>
                {/*top danh mục */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 my-5 ${showFillter ? '':'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>TYPE</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' name='' id='' value={'Topwear'} onChange={toggleSubcateory} />
                            Topwear
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' name='' id='' value={'Bottomwear'} onChange={toggleSubcateory} />
                            Bottomwear
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' name='' id='' value={'Winterwear'} onChange={toggleSubcateory} />
                            Winterwear
                        </p>
                    </div>
                </div>
            </div>
            {/**Side Righr Products */}
            <div className='flex-1'>
                <div className='flex justify-between mb-4 text-base sm:text-2xl'>
                    <Title text1={'ALL'} text2={'COLLECTION'} />
                    {/**Sắp xếp sản phẩm */}
                    <select onChange={(e) => setSortType(e.target.value)} className='px-2 text-sm border-2 border-gray-300'>
                        <option value='relavent'>Sort by: Sort default</option>
                        <option value='low-high'>Sort by:Low to High</option>
                        <option value='high-low'>Sort by:High to Low</option>
                    </select>
                </div>
                {/**danh sách sản phẩm  */}
                <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
                    {filterProducts.map((item, index) => (
                        <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Collection;
