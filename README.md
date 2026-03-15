# IE213 – KỸ THUẬT PHÁT TRIỂN HỆ THỐNG WEB

---

# 1. Thông tin sinh viên

* Họ tên: Nguyễn Phước Thịnh
* MSSV: 23521505
* Môn học: IE213.Q21 – Kỹ thuật phát triển hệ thống Web
* Lớp: IE213.Q21.1

---

# 2. Giới thiệu 

Repository này lưu trữ toàn bộ các bài thực hành của môn **IE213 – Kỹ thuật phát triển hệ thống Web**.

Mỗi bài lab được lưu trong một thư mục riêng để giảng viên có thể theo dõi tiến trình phát triển bài làm thực hành trong suốt học kỳ.

---

# 3. Cấu trúc 

```id="3rj1mj"
23521505-NguyenPhuocThinh-IE213.Q21
│
├── README.md
├── lab01
├── lab02
├── lab03
├── lab04
├── lab05
└── lab06
```

---

# 4. Danh sách các Lab

## Lab01 – MongoDB CRUD Operation

Nội dung chính:

* Thiết lập MongoDB Atlas
* Kết nối MongoDB Compass
* Tạo database và collection
* Thực hiện CRUD bằng mongosh
* Thực hiện truy vấn dữ liệu và aggregation

Thư mục:

```id="h9mn6n"
lab01/
```

## Lab02 – Thiết lập Backend với NodeJS và ExpressJS

Nội dung chính:

* Thiết lập môi trường NodeJS
* Xây dựng server với ExpressJS
* Kết nối MongoDB Atlas
* Tổ chức project theo mô hình DAO – Controller – Route
* Xây dựng API `/api/v1/movies`

Thư mục:

```
lab02/
```

## Lab03 

## Lab04 

## Lab05 

## Lab06 

---

# 5. Cách chạy chương trình

Đối với Lab01:

1. Đăng nhập MongoDB Atlas
2. Kết nối MongoDB Compass với cluster
3. Mở Mongo Shell (mongosh)
4. Chạy các lệnh MongoDB được ghi trong file Lab01

Ví dụ:

```javascript id="k9eeyv"
use MSSV-ie213
```
Sau đó thực hiện các lệnh CRUD theo yêu cầu của bài thực hành.

Đối với Lab02:

1. Di chuyển vào thư mục backend  cd lab02/movie-reviews/backend
2. Cài đặt dependency npm install
3. Chạy server npm start
4. Truy cập API http://localhost:3000/api/v1/movies

---

# 6. Kết quả thực hiện

Đã thực hiện thành công các yêu cầu của Lab01:

* Tạo database MongoDB
* Thêm document vào collection
* Tạo unique index
* Thực hiện các truy vấn find()
* Thực hiện updateMany()
* Thực hiện aggregation

Kết quả được minh họa bằng hình ảnh trong thư mục:

```id="hweay3"
lab01/screenshots
```

Đã thực hiện thành công các yêu cầu của Lab02:

* Thiết lập môi trường NodeJS
* Cài đặt ExpressJS và MongoDB
* Xây dựng server backend
* Thiết lập API `/api/v1/movies`
* Kết nối MongoDB Atlas

Kết quả được minh họa bằng hình ảnh trong thư mục:

```
lab02/screenshots
```

---

# 7. Hình ảnh minh họa

Các hình ảnh minh chứng kết quả thực hiện được lưu trong thư mục screenshots tương ứng với từng bài thực hành.

Cấu trúc thư mục:
```id="hweay3"
lab01/screenshots
lab02/screenshots
lab03/screenshots
lab04/screenshots
lab05/screenshots
lab06/screenshots
```
---

# 8. Nội dung đã hoàn thành

Lab01: Hoàn thành
* Thiết lập MongoDB Atlas ✔
* Thực hiện CRUD Operation ✔
* Viết tài liệu và README cho Lab01 ✔

Lab02: Hoàn thành
* Thiết lập môi trường NodeJS ✔
* Xây dựng backend với ExpressJS ✔
* Kết nối MongoDB Atlas ✔
* Xây dựng API `/api/v1/movies` ✔

---

# 9. Nội dung chưa hoàn thành

Lab03<br>
Lab04<br>
Lab05<br>
Lab06<br>

Các nội dung này sẽ được cập nhật trong quá trình thực hiện các bài thực hành tiếp theo.

---

# 10. Các công cụ sử dụng 

## Công cụ thực hành sử dụng chính
* Visual Studio Code
* MongoDB Atlas
* MongoDB Compass
* NodeJS
* ExpressJS

## Công cụ hỗ trợ (AI)
* ChatGPT
* Claude Code
### Mục đích sử dụng AI 
* Nhờ AI giải thích một số lệnh MongoDB
* Gợi ý cách tổ chức README
* Hỗ trợ tìm hiểu lỗi trong quá trình thực hành
### Phần được AI hỗ trợ
Lab01: 
  * Hướng dẫn cấu trúc README
  * Giải thích các lệnh MongoDB

Lab02: 
  * Hỗ trợ quá trình thực hiện và debug các file code 
  * Giải thích 1 số đoạn code và chỉ ra flow hoạt động

---


Nguyễn Phước Thịnh<br>
Trường Đại học Công nghệ Thông tin (UIT)
