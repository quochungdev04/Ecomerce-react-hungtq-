import multer from 'multer';
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // folder phải tồn tại hoặc bạn tạo nó
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // tránh trùng tên
    },
});
const upload = multer({ storage });
export default upload;
