import validator from 'validator';
import bcrypt from 'bcrypt';

import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';
const createToken = (id) => {
      console.log('JWT_SECRET:', process.env.JWT_SECRET);
      return jwt.sign({ id }, process.env.JWT_SECRET);
};
const loginUser = async (req, res) => {
      try {
            const { email, password } = req.body;
            const user = await userModel.findOne({ email });
            if (!user) {
                  res.json({ success: false, message: 'Người dùng không tồn tại !' });
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
                  const token = createToken(user._id);
                  res.json({ success: true, token });
            } else {
                  res.json({ success: false, message: 'Thông tin xác thực không hợp lệ!' });
            }
      } catch (error) {
            console.log(error);
            res.json({ success: false, message: error.message });
      }
};
const registerUser = async (req, res) => {
      try {
            const { name, password, email } = req.body;
            const exists = await userModel.findOne({ email });
            if (exists) {
                  res.json({ success: false, message: 'Người dùng đã tồn tại' });
            }

            // xác thực định dạng email và mật khẩu mạnh
            if (!validator.isEmail(email)) {
                  return res.json({ success: false, message: 'Vui lòng nhập thông tin hợp lệ !' });
            }
            if (password.length < 8) {
                  return res.json({ success: false, message: 'Vui lòng nhập mật khẩu ! ' });
            }
            const salt = await bcrypt.genSalt(10);
            const handlePassword = await bcrypt.hash(password, salt);
            const newUser = new userModel({
                  name,
                  email,
                  password: handlePassword,
            });
            const user = await newUser.save();
            const token = createToken(user._id);
            res.json({ success: true, token });
      } catch (error) {
            console.log(error);
            res.json({ success: false, message: error.message });
      }
      return res.json({
            message: 'Đăng nhập thành công',
      });
};
const adminLogin = async (req, res) => {};
export { loginUser, registerUser, adminLogin };
