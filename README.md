
## 🔧 **BƯỚC 1: CÀI ĐẶT THƯ VIỆN**

### **Cài đặt dependencies**

```bash
# Cài đặt tất cả thư viện cần thiết
npm install

# Quá trình này sẽ:
# - Tạo thư mục node_modules/
# - Tải về tất cả thư viện trong package.json
# - Có thể mất 2-5 phút tùy tốc độ mạng
```

## ⚙️ **BƯỚC 2: CẤU HÌNH BIẾN MÔI TRƯỜNG**

### **Nội dung file .env**

```env
# Cấu hình cơ bản
NODE_ENV=development
PORT=3000

# Cơ sở dữ liệu
MONGODB_URI=mongodb://localhost:27017/bat_dong_san

# Bảo mật
SESSION_SECRET=your-super-secret-key-here-change-this-in-production

# Tùy chọn (có thể để trống)
MONGODB_TEST_URI=mongodb://localhost:27017/bat_dong_san_test
```

### **Lưu ý quan trọng**

- **Thay đổi SESSION_SECRET**: Sử dụng chuỗi ngẫu nhiên dài
- **Không commit file .env**: File này chứa thông tin nhạy cảm
- **Kiểm tra .gitignore**: Đảm bảo .env đã được ignore

## 🌱 **BƯỚC 3: TẠO DỮ LIỆU MẪU**

### **Chạy seeder**

```bash
# Tạo dữ liệu mẫu cho database
npm run seed

# Lệnh này sẽ:
# - Tạo các collection cần thiết
# - Thêm dữ liệu mẫu cho categories
# - Tạo một số user và post mẫu
```

 **BƯỚC 6: CHẠY ỨNG DỤNG**

### **Chế độ phát triển**

```bash
# Chạy với nodemon (tự động restart khi có thay đổi)
npm run dev

# Hoặc chạy trực tiếp
npm start
```

**Các tính năng chính:**

- ✅ Đăng ký/Đăng nhập người dùng
- ✅ Tạo và quản lý tin đăng
- ✅ Upload hình ảnh
- ✅ Tìm kiếm và lọc tin đăng
- ✅ Admin panel quản trị
- ✅ Responsive design

