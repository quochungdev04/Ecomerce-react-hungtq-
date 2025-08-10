import express from 'express';
import { Router } from 'express';
import { addProduct, listProduct, removeProduct, singleProduct } from '../controllers/productController.js';
import upload from '../middleware/multer.js';
const productRouter = Router();
productRouter.post(
      '/add',
      (req, res, next) => {
            console.log('🟢 Multer middleware chạy');
            next();
      },
      upload.fields([
            { name: 'image1', maxCount: 1 },
            { name: 'image2', maxCount: 1 },
            { name: 'image3', maxCount: 1 },
            { name: 'image4', maxCount: 1 },
      ]),
      addProduct
);

productRouter.get('/list', listProduct);
productRouter.put('/remove', removeProduct);
productRouter.post('/single', singleProduct);
export default productRouter;
