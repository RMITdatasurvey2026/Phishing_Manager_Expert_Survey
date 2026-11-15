# Khảo sát TSARSI (GitHub Pages + Google Sheet)

Hai biểu mẫu song ngữ Việt–Anh cho luận văn:

| Trang | Đối tượng | Nội dung |
|---|---|---|
| `nhan-vien.html` | Nhân viên TSARSI | 52 câu, phần A–G, ẩn danh, đặt trên GitHub Pages |
| `index.html` | Trang chào | |
| `chuyen-gia_gui-rieng.html` (file riêng, KHÔNG đưa lên GitHub) | Chuyên gia | 17 yếu tố EFE/IFE và 6 câu mở; gửi trực tiếp cho từng chuyên gia |

**Vì sao phiếu chuyên gia không đặt trên GitHub Pages:** phiếu này mô tả các điểm yếu cụ thể của TSARSI (bộ lọc email, DMARC, MFA, độ phủ EDR). Trang GitHub Pages ai có link cũng mở được, kể cả khi repo để Private (trừ gói GitHub Enterprise), nên đưa phiếu này lên đó là công khai thông tin mà kẻ tấn công có thể dùng. Hãy gửi file `chuyen-gia_gui-rieng.html` qua email hoặc Teams; chuyên gia mở bằng trình duyệt là dùng được và vẫn gửi dữ liệu về cùng Google Sheet.

Nội dung câu hỏi giống hệt bản Word và bản MS Forms (sinh từ cùng một danh sách).

## Cài đặt (khoảng 15 phút, làm một lần)

### 1. Tạo Google Sheet nhận dữ liệu
1. Tạo một Google Sheet mới, đặt tên ví dụ `TSARSI survey responses`.
2. Vào **Extensions → Apps Script**, xóa nội dung mặc định, dán toàn bộ file `apps-script/Code.gs`.
3. Đổi dòng `const TOKEN = 'tsarsi-2026-change-me';` thành một chuỗi bất kỳ của anh.
4. **Deploy → New deployment → Select type: Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Cấp quyền khi được hỏi, rồi sao chép **Web app URL** (kết thúc bằng `/exec`).
6. Kiểm tra: mở URL đó trên trình duyệt, phải thấy `{"ok":true,...}`.

Mỗi phiếu ghi vào một tab riêng (`Employee`, `Expert`). Cột được tạo tự động theo mã câu hỏi (A1…G3, O1_keep, O1_imp, O1_rate, O1_note…).

### 2. Kết nối biểu mẫu
Mở `assets/config.js`, dán URL vào `ENDPOINT`, và đặt `TOKEN` giống hệt bước 1.3.

### 3. Logo
- TSARSI: lưu `https://www.tsarsi.com/wp-content/uploads/TSARSI-LOGO-n.png` thành `assets/tsarsi-logo.png`.
- Đại học Mở TP.HCM: lưu `https://sdh.ou.edu.vn/asset/img/sdh/logo.png` thành `assets/ou-logo.png`. Logo này chữ trắng nền trong suốt, nên trang đặt nó trên nền đỏ #B8232A giống website Khoa Sau đại học.
- Nếu thiếu file, trang tự lấy logo trực tiếp từ website gốc (TSARSI không tải được thì hiện chữ TSARSI; logo trường không tải được thì ẩn).
- Phần giới thiệu đề tài và người thực hiện nằm trong `assets/study.js`; sửa câu chữ ở đó. Thêm email liên hệ vào trường `contact` nếu muốn hiển thị.
- Nên hỏi Khoa Sau đại học xem việc dùng logo trường trên phiếu khảo sát có cần xin phép hay theo quy định nhận diện nào không.

### 4. Đưa lên GitHub Pages
1. Tạo repository mới. Lưu ý: trang GitHub Pages luôn xem được công khai qua link (trừ GitHub Enterprise), nên repo chỉ chứa phiếu nhân viên; mã nguồn không chứa dữ liệu trả lời.
2. Tải toàn bộ thư mục này lên (giữ nguyên cấu trúc `assets/`).
3. **Settings → Pages → Source: Deploy from a branch → main / root → Save.**
4. Sau 1–2 phút, link có dạng `https://<tên-tài-khoản>.github.io/<tên-repo>/nhan-vien.html`.

### 5. Thử trước khi gửi
Điền một phiếu thử ở trang nhân viên và một phiếu thử bằng file chuyên gia, kiểm tra dòng mới trong Google Sheet, rồi xóa các dòng thử.

## Mã hóa dữ liệu trong Sheet
- Phần B, C, D: `T` = Đúng, `F` = Sai, `U` = Không chắc (chấm `U` = 0 điểm theo mục 3.5 luận văn).
- Phần E: số 1–5. Nhớ đảo điểm E7, E9 (6 − x) khi phân tích.
- Phần F, G: mã ngắn tiếng Anh (ví dụ F10: `report`, `onlysure`, `ignore`); G1 nhiều lựa chọn được nối bằng dấu `;`.
- F2 chỉ hiện và chỉ bắt buộc khi F1 = `yes`.
- Phiếu chuyên gia: `Xn_keep` = keep/revise/remove; `Xn_imp` = 1–10; `Xn_rate` = 1–4. Yếu tố chọn `remove` để trống điểm.
- Cột hệ thống: `submitted_at`, `response_id`, `lang`, `duration_sec`, `form_version`.

## Riêng tư và giới hạn cần biết
- Phiếu nhân viên **không** thu tên, email, IP hay thông tin trình duyệt. Thời điểm gửi và thời lượng làm bài vẫn được ghi; nếu nhóm rất nhỏ, kết hợp phòng ban và thời điểm có thể giúp đoán ra người trả lời, nên chỉ báo cáo kết quả theo nhóm từ 5 người trở lên.
- Bản nháp được lưu trong trình duyệt của người trả lời và tự xóa sau khi gửi.
- `TOKEN` nằm trong mã trang nên **không phải mật khẩu**; nó chỉ chặn bot ngẫu nhiên. Ai có link Web app vẫn có thể gửi dữ liệu giả. Vì vậy: chỉ gửi link qua kênh nội bộ, theo dõi cột `submitted_at` và `duration_sec` (phiếu nhân viên hoàn thành dưới khoảng 4 phút nên được xem xét loại).
- Thiết bị đã gửi sẽ thấy thông báo “đã gửi”; người trả lời vẫn có thể bấm “Trả lời lại” hoặc dùng thiết bị khác, nên đây chỉ là chặn mềm việc gửi trùng.
- Khi sửa nội dung câu hỏi, đổi `VERSION` trong `config.js` để phân biệt các đợt.
