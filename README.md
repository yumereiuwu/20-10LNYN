<<<<<<< HEAD
# HƯỚNG DẪN SỬ DỤNG & ĐƯA LÊN GITHUB PAGES

Trang web chúc mừng 20/10 phong cách **Scrollytelling Đêm Lung Linh** dành tặng **Lê Nguyễn Yến Nhi**.

---

## 1. Cấu trúc thư mục
```
20-10EMyeu/
├── index.html       # Khung sườn HTML, nhân vật SVG mầm cây, canvas sao, hoa & pháo hoa
├── style.css        # Giao diện neon, animation cỏ đung đưa, responsive máy tính & điện thoại
├── script.js        # Kịch bản các cảnh, cấu hình cá nhân hóa, hiệu ứng typewriter & audio
├── music.mp3        # File nhạc nền (bạn copy 1 bài hát mp3 ngọt ngào vào đây và đổi tên thành music.mp3)
└── README.md        # Hướng dẫn này
```

---

## 2. Thêm nhạc nền
- Chuẩn bị một bài nhạc MP3 lãng mạn mà Yến Nhi thích (ví dụ: nhạc không lời piano, lofi, hoặc bài hát kỷ niệm của 2 bạn).
- Đặt file nhạc vào ngay cùng thư mục này và đặt tên là: `music.mp3`.
- Trình duyệt sẽ tự động phát nhạc ngay khi người nhận chạm vào màn hình ở cảnh 1 (tuân thủ chính sách Autoplay của các trình duyệt hiện đại).
- Người xem có thể bấm vào nút loa ở góc trên bên phải bất cứ lúc nào để bật/tắt âm thanh.

---

## 3. Cách tùy chỉnh nội dung
Toàn bộ nội dung đều nằm ở đầu file `script.js` trong đối tượng `CONFIG`:
- **Thông tin cá nhân**: Tên, ngày sinh, quê quán, cách xưng hô `anh` - `em`.
- **4 điều đáng yêu**: Sửa đổi icon và lời nhắn ở mảng `traits`.
- **Bức thư gửi em**: Sửa đổi nội dung tâm sự ở `finaleLetter`.
- **Lời phụ đề các cảnh**: Dễ dàng sửa đổi câu chữ trong từng phần tử của mảng `scenes`.

---

## 4. Cách đưa lên GitHub Pages miễn phí để gửi link cho bạn gái
1. Tạo một tài khoản trên [GitHub](https://github.com) (nếu chưa có).
2. Tạo một Repository mới (ví dụ đặt tên là: `2010-yen-nhi`). Hãy chọn chế độ **Public**.
3. Tải toàn bộ các file trong thư mục này (`index.html`, `style.css`, `script.js`, và file `music.mp3`) lên Repository đó.
4. Vào mục **Settings** của Repository -> Chọn **Pages** (ở menu bên trái).
5. Tại mục **Build and deployment**:
   - Source: Chọn `Deploy from a branch`
   - Branch: Chọn nhánh `main` (hoặc `master`), thư mục `/ (root)` -> bấm **Save**.
6. Đợi khoảng 1 - 2 phút, GitHub sẽ cung cấp cho bạn một đường link dạng:
   `https://<tên-tài-khoản-github>.github.io/2010-yen-nhi/`
7. Mở link trên điện thoại kiểm tra thử và gửi tặng bạn gái nhé! 💕
=======
# 20-10LNYN
>>>>>>> 270ce9c6c900485fbe33c6db5dff99060e7a43bc
