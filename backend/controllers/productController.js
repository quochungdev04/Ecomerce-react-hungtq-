// import productModel from '../models/productModel.js';
// import { v2 as cloudinary } from 'cloudinary';
// const addProduct = async (req, res) => {
//     try {
//         const { name, description, price, category, subCategory, sizes, bestseller } = req.body;
//         // Xử lý ảnh
//         const files = [req.files.image1?.[0], req.files.image2?.[0], req.files.image3?.[0], req.files.image4?.[0]].filter(Boolean);
//         // const image1 = req.files.image1?.[0];
//         // const image2 = req.files.image2?.[0];
//         // const image3 = req.files.image3?.[0];
//         // const image4 = req.files.image4?.[0];
//         // const images = [image1, image2, image3, image4].filter((item) => item !== undefined);
//         // console.log(name, description, price, category, subCategory, sizes, bestseller);
//         // console.log(images);
//         const imageUrls = await Promise.all(
//             files.map(async (file) => {
//                 const result = await cloudinary.uploader.upload(file.path, {
//                     folder: 'products',
//                 });
//                 return result.secure_url;
//             })
//         );
//         //Tạo mới sản phẩm
//         const newProducts = await productModel.create({
//             name,
//             description,
//             price,
//             category,
//             subCategory,
//             sizes: JSON.parse(sizes),
//             bestseller: bestseller === 'true',
//             image: imageUrls,
//             date: Date.now(),
//         });
//         res.json({ success: true, data: newProducts });
//     } catch (error) {
//         res.json({ success: false, message: error.message });
//     }
// };
import productModel from '../models/productModel.js';
import { v2 as cloudinary } from 'cloudinary';

const addProduct = async (req, res) => {
      try {
            const { name, description, price, category, subCategory, sizes, bestseller } = req.body;
            const images = [req.files.image1?.[0], req.files.image2?.[0], req.files.image3?.[0], req.files.image4?.[0]].filter(Boolean);

            console.log('Files nhận được:', images);

            const imageUrls = await Promise.all(
                  images.map(async (file) => {
                        const result = await cloudinary.uploader.upload(file.path, {
                              folder: 'products',
                        });
                        return result.secure_url;
                  })
            );

            const product = new productModel({
                  name,
                  description,
                  price,
                  image: imageUrls,
                  category,
                  subCategory,
                  sizes: JSON.parse(sizes),
                  bestseller: bestseller === 'true',
                  date: Date.now(),
            });

            const saved = await product.save();
            res.json({ success: true, data: saved });
      } catch (error) {
            console.log(error);
            res.json({ success: false, message: error.message });
      }
};

const listProduct = async (req, res) => {};
const removeProduct = async (req, res) => {};
const singleProduct = async (req, res) => {};
export { addProduct, listProduct, removeProduct, singleProduct };
