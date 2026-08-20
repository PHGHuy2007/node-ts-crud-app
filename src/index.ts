import express, { Application } from 'express'; // Import Express Framework
import cors from 'cors'; // Import Middleware CORS
import dotenv from 'dotenv'; // Import dotenv
import studentRouter from './routes/student.route'; // Import Router của Student

// Nạp biến môi trường từ .env
dotenv.config();

// Khởi tạo Express Application
const app: Application = express();
const PORT = process.env.PORT || 3000;

// Sử dụng các Middlewares toàn cục
app.use(cors()); // Cho phép gọi API Cross-Origin
app.use(express.json()); // Middleware parse dữ liệu JSON từ req.body
app.use(express.urlencoded({ extended: true })); // Middleware parse dữ liệu URL-encoded

// Đăng ký Router chính với tiền tố API
app.use('/api/v1/students', studentRouter);

// Khởi chạy Server Node.js
app.listen(PORT, () => {
  console.log(`🚀 Server đang vận hành tại: http://localhost:${PORT}`);
  console.log(`🔗 API Endpoint Sinh viên: http://localhost:${PORT}/api/v1/students`);
});
