window.SURVEY = {
 "id": "employee",
 "title": {
  "vi": "Khảo sát nhận thức an toàn thông tin và phishing",
  "en": "Information security and phishing awareness survey"
 },
 "lede": {
  "vi": "Câu trả lời của Anh/Chị giúp TSARSI biết chương trình đào tạo và cảnh báo hiện nay đang hiệu quả đến đâu, và cần cải thiện ở đâu.",
  "en": "Your answers help TSARSI see how well current training and alerts are working, and where they need to improve."
 },
 "meta": [
  [
   {
    "vi": "Thời gian",
    "en": "Time"
   },
   {
    "vi": "18–22 phút",
    "en": "18–22 minutes"
   }
  ],
  [
   {
    "vi": "Danh tính",
    "en": "Identity"
   },
   {
    "vi": "Ẩn danh, không thu thập tên hay email",
    "en": "Anonymous, no name or email collected"
   }
  ],
  [
   {
    "vi": "Mục đích",
    "en": "Purpose"
   },
   {
    "vi": "Luận văn Thạc sĩ QTKD, Đại học Mở TP.HCM",
    "en": "MBA thesis, Ho Chi Minh City Open University"
   }
  ]
 ],
 "consent": {
  "vi": "Kết quả chỉ được báo cáo ở dạng tổng hợp và không dùng để đánh giá bất kỳ cá nhân nào. Không có câu trả lời nào bị chấm là đúng hay sai đối với cá nhân Anh/Chị; xin trả lời theo thực tế.",
  "en": "Results are reported only in aggregate and are never used to evaluate any individual. Please answer based on what you actually do."
 },
 "sections": [
  {
   "id": "A",
   "title": {
    "vi": "Thông tin chung",
    "en": "About you"
   },
   "desc": {
    "vi": "Không định danh cá nhân.",
    "en": "No personal identification."
   },
   "items": [
    {
     "id": "A1",
     "type": "choice",
     "q": {
      "vi": "Phòng ban/Bộ phận",
      "en": "Department/team"
     },
     "options": [
      {
       "v": "US-TS",
       "vi": "US – Technical Services",
       "en": "US – Technical Services"
      },
      {
       "v": "SB-TS",
       "vi": "SB – Technical Services",
       "en": "SB – Technical Services"
      },
      {
       "v": "ACC",
       "vi": "Kế toán",
       "en": "Accounting"
      },
      {
       "v": "SRC",
       "vi": "Sourcing",
       "en": "Sourcing"
      },
      {
       "v": "OTHER",
       "vi": "Bộ phận khác",
       "en": "Other department"
      }
     ]
    },
    {
     "id": "A2",
     "type": "choice",
     "q": {
      "vi": "Thời gian công tác tại TSARSI",
      "en": "Length of service at TSARSI"
     },
     "options": [
      {
       "v": "lt1",
       "vi": "Dưới 1 năm",
       "en": "Less than 1 year"
      },
      {
       "v": "1to3",
       "vi": "1–3 năm",
       "en": "1–3 years"
      },
      {
       "v": "gt3",
       "vi": "Trên 3 năm",
       "en": "More than 3 years"
      }
     ]
    },
    {
     "id": "A3",
     "type": "choice",
     "q": {
      "vi": "Anh/Chị có sử dụng email công ty hằng ngày trong công việc không?",
      "en": "Do you use company email daily for work?"
     },
     "options": [
      {
       "v": "yes",
       "vi": "Có",
       "en": "Yes"
      },
      {
       "v": "no",
       "vi": "Không",
       "en": "No"
      }
     ]
    },
    {
     "id": "A4",
     "type": "choice",
     "q": {
      "vi": "Anh/Chị đã từng tham gia buổi đào tạo nhận thức an ninh mạng nào của công ty chưa?",
      "en": "Have you attended any company cybersecurity awareness training?"
     },
     "options": [
      {
       "v": "0",
       "vi": "Chưa từng",
       "en": "Never"
      },
      {
       "v": "1",
       "vi": "1 lần",
       "en": "Once"
      },
      {
       "v": "2plus",
       "vi": "2 lần trở lên",
       "en": "Twice or more"
      }
     ]
    },
    {
     "id": "A5",
     "type": "choice",
     "q": {
      "vi": "Anh/Chị đã hoàn thành bài kiểm tra “Nhận thức & Tuân thủ về An toàn thông tin” (ISMS, ISO/IEC 27001:2022) do Ban ATTT triển khai gần đây chưa?",
      "en": "Have you completed the recent “Information Security Awareness & Compliance” test (ISMS, ISO/IEC 27001:2022) run by the Information Security Committee?"
     },
     "options": [
      {
       "v": "done",
       "vi": "Đã hoàn thành",
       "en": "Completed"
      },
      {
       "v": "notdone",
       "vi": "Chưa hoàn thành",
       "en": "Not completed"
      },
      {
       "v": "unaware",
       "vi": "Không biết có bài kiểm tra này",
       "en": "I did not know about this test"
      }
     ]
    }
   ]
  },
  {
   "id": "B",
   "title": {
    "vi": "Kiến thức về hệ thống quản lý an toàn thông tin (ISMS)",
    "en": "Knowledge of the information security management system (ISMS)"
   },
   "desc": {
    "vi": "Chọn Đúng, Sai hoặc Không chắc cho từng phát biểu.",
    "en": "Choose True, False or Not sure for each statement."
   },
   "items": [
    {
     "id": "B1",
     "type": "tfu",
     "q": {
      "vi": "Ba yếu tố cốt lõi mà một hệ thống ISMS hướng đến bảo vệ là tính bảo mật (confidentiality), tính toàn vẹn (integrity) và tính sẵn sàng (availability) của thông tin.",
      "en": "The three core properties an ISMS aims to protect are the confidentiality, integrity and availability of information."
     },
     "options": [
      {
       "v": "T",
       "vi": "Đúng",
       "en": "True"
      },
      {
       "v": "F",
       "vi": "Sai",
       "en": "False"
      },
      {
       "v": "U",
       "vi": "Không chắc",
       "en": "Not sure"
      }
     ]
    },
    {
     "id": "B2",
     "type": "tfu",
     "q": {
      "vi": "Thông tin tại TSARSI được phân loại theo nhiều cấp độ khác nhau (từ tối mật đến công khai), và cần được xử lý, chia sẻ theo đúng cấp độ đó.",
      "en": "Information at TSARSI is classified into several levels (from strictly confidential to public) and must be handled and shared according to its level."
     },
     "options": [
      {
       "v": "T",
       "vi": "Đúng",
       "en": "True"
      },
      {
       "v": "F",
       "vi": "Sai",
       "en": "False"
      },
      {
       "v": "U",
       "vi": "Không chắc",
       "en": "Not sure"
      }
     ]
    },
    {
     "id": "B3",
     "type": "tfu",
     "q": {
      "vi": "Mục tiêu chính của ISMS là bảo vệ tài sản thông tin khỏi rủi ro và truy cập trái phép, không đơn thuần là để tăng tốc độ hệ thống mạng hay cắt giảm chi phí IT.",
      "en": "The main goal of an ISMS is to protect information assets from risk and unauthorised access, not simply to speed up the network or cut IT costs."
     },
     "options": [
      {
       "v": "T",
       "vi": "Đúng",
       "en": "True"
      },
      {
       "v": "F",
       "vi": "Sai",
       "en": "False"
      },
      {
       "v": "U",
       "vi": "Không chắc",
       "en": "Not sure"
      }
     ]
    },
    {
     "id": "B4",
     "type": "tfu",
     "q": {
      "vi": "Chính sách An toàn thông tin và cam kết của Ban lãnh đạo là nền tảng cao nhất trong mô hình ISMS của công ty; các quy trình, biểu mẫu, hướng dẫn cụ thể nằm ở các tầng bên dưới.",
      "en": "The Information Security Policy and top management’s commitment are the highest level of the company’s ISMS; specific procedures, forms and guidelines sit at the levels below."
     },
     "options": [
      {
       "v": "T",
       "vi": "Đúng",
       "en": "True"
      },
      {
       "v": "F",
       "vi": "Sai",
       "en": "False"
      },
      {
       "v": "U",
       "vi": "Không chắc",
       "en": "Not sure"
      }
     ]
    },
    {
     "id": "B5",
     "type": "tfu",
     "q": {
      "vi": "Nghĩa vụ bảo mật thông tin của nhân viên (theo cam kết/thỏa thuận bảo mật đã ký) vẫn tiếp tục có hiệu lực ngay cả sau khi nhân viên đó đã nghỉ việc tại công ty.",
      "en": "An employee’s confidentiality obligations (under the signed confidentiality agreement) remain in force even after the employee has left the company."
     },
     "options": [
      {
       "v": "T",
       "vi": "Đúng",
       "en": "True"
      },
      {
       "v": "F",
       "vi": "Sai",
       "en": "False"
      },
      {
       "v": "U",
       "vi": "Không chắc",
       "en": "Not sure"
      }
     ]
    },
    {
     "id": "B6",
     "type": "tfu",
     "q": {
      "vi": "Hệ thống ATTT của TSARSI hiện đang trong giai đoạn vận hành và cải tiến liên tục để duy trì chứng nhận ISO/IEC 27001:2022, không phải một dự án đã hoàn tất một lần và không cần cập nhật thêm.",
      "en": "TSARSI’s information security system is in continuous operation and improvement to maintain ISO/IEC 27001:2022 certification; it is not a one-off project that needs no further updates."
     },
     "options": [
      {
       "v": "T",
       "vi": "Đúng",
       "en": "True"
      },
      {
       "v": "F",
       "vi": "Sai",
       "en": "False"
      },
      {
       "v": "U",
       "vi": "Không chắc",
       "en": "Not sure"
      }
     ]
    }
   ]
  },
  {
   "id": "C",
   "title": {
    "vi": "Tuân thủ chính sách trong công việc hằng ngày",
    "en": "Policy compliance in daily work"
   },
   "desc": {
    "vi": "Chọn Đúng, Sai hoặc Không chắc cho từng phát biểu.",
    "en": "Choose True, False or Not sure for each statement."
   },
   "items": [
    {
     "id": "C1",
     "type": "tfu",
     "q": {
      "vi": "Khi rời khỏi bàn làm việc, cần khóa màn hình máy tính để tránh người khác truy cập trái phép vào tài khoản/hệ thống.",
      "en": "When leaving your desk, you should lock your computer screen to prevent unauthorised access to your accounts/systems."
     },
     "options": [
      {
       "v": "T",
       "vi": "Đúng",
       "en": "True"
      },
      {
       "v": "F",
       "vi": "Sai",
       "en": "False"
      },
      {
       "v": "U",
       "vi": "Không chắc",
       "en": "Not sure"
      }
     ]
    },
    {
     "id": "C2",
     "type": "tfu",
     "q": {
      "vi": "Mật khẩu tài khoản công ty nên có ít nhất 8 ký tự, kết hợp chữ hoa, chữ thường, số và ký tự đặc biệt; không nên dùng thông tin cá nhân dễ đoán (ngày sinh, tên).",
      "en": "Company account passwords should have at least 8 characters combining upper-case, lower-case, numbers and special characters, and should not use easily guessed personal information (birthday, name)."
     },
     "options": [
      {
       "v": "T",
       "vi": "Đúng",
       "en": "True"
      },
      {
       "v": "F",
       "vi": "Sai",
       "en": "False"
      },
      {
       "v": "U",
       "vi": "Không chắc",
       "en": "Not sure"
      }
     ]
    },
    {
     "id": "C3",
     "type": "tfu",
     "q": {
      "vi": "Ghi mật khẩu ra giấy và để tại bàn làm việc để dễ nhớ là cách làm chấp nhận được, miễn là không cho đồng nghiệp thấy.",
      "en": "Writing your password on paper and keeping it at your desk is acceptable, as long as colleagues do not see it."
     },
     "options": [
      {
       "v": "T",
       "vi": "Đúng",
       "en": "True"
      },
      {
       "v": "F",
       "vi": "Sai",
       "en": "False"
      },
      {
       "v": "U",
       "vi": "Không chắc",
       "en": "Not sure"
      }
     ]
    },
    {
     "id": "C4",
     "type": "tfu",
     "q": {
      "vi": "Trước khi cài đặt bất kỳ phần mềm nào lên máy tính công ty, kể cả phần mềm không rõ nguồn gốc hoặc không bản quyền, cần được bộ phận IT phê duyệt trước.",
      "en": "Before installing any software on a company computer, including software of unknown origin or without a licence, approval from IT is required."
     },
     "options": [
      {
       "v": "T",
       "vi": "Đúng",
       "en": "True"
      },
      {
       "v": "F",
       "vi": "Sai",
       "en": "False"
      },
      {
       "v": "U",
       "vi": "Không chắc",
       "en": "Not sure"
      }
     ]
    },
    {
     "id": "C5",
     "type": "tfu",
     "q": {
      "vi": "Dữ liệu/bản vẽ kỹ thuật của khách hàng (CAD/BIM) không được chia sẻ công khai hoặc đăng tải lên mạng xã hội, kể cả khi nhân viên có quyền truy cập hợp lệ.",
      "en": "Client technical data/drawings (CAD/BIM) must not be shared publicly or posted on social media, even when the employee has legitimate access."
     },
     "options": [
      {
       "v": "T",
       "vi": "Đúng",
       "en": "True"
      },
      {
       "v": "F",
       "vi": "Sai",
       "en": "False"
      },
      {
       "v": "U",
       "vi": "Không chắc",
       "en": "Not sure"
      }
     ]
    },
    {
     "id": "C6",
     "type": "tfu",
     "q": {
      "vi": "Việc cấp quyền truy cập hệ thống nội bộ nên theo nguyên tắc “đúng và đủ” (chỉ cấp quyền cần thiết cho vai trò công việc), không nên cấp toàn quyền cho tất cả tài khoản.",
      "en": "Access to internal systems should follow the “need-to-know / least privilege” principle (only the rights needed for the job role), rather than giving full rights to every account."
     },
     "options": [
      {
       "v": "T",
       "vi": "Đúng",
       "en": "True"
      },
      {
       "v": "F",
       "vi": "Sai",
       "en": "False"
      },
      {
       "v": "U",
       "vi": "Không chắc",
       "en": "Not sure"
      }
     ]
    },
    {
     "id": "C7",
     "type": "tfu",
     "q": {
      "vi": "Tuân thủ chính sách an toàn thông tin là trách nhiệm của mọi nhân viên, không chỉ riêng bộ phận IT/An toàn thông tin.",
      "en": "Complying with the information security policy is every employee’s responsibility, not only the IT/Information Security team’s."
     },
     "options": [
      {
       "v": "T",
       "vi": "Đúng",
       "en": "True"
      },
      {
       "v": "F",
       "vi": "Sai",
       "en": "False"
      },
      {
       "v": "U",
       "vi": "Không chắc",
       "en": "Not sure"
      }
     ]
    },
    {
     "id": "C8",
     "type": "tfu",
     "q": {
      "vi": "Các liên kết hoặc file được gửi qua ứng dụng nhắn tin/họp trực tuyến của công ty (Microsoft Teams, Zalo, Zoom...) từ một tài khoản lạ hoặc bất thường cũng cần được cẩn trọng như email, vì đây cũng là một kênh tấn công lừa đảo đang gia tăng, không chỉ giới hạn ở email.",
      "en": "Links or files sent through company messaging/meeting apps (Microsoft Teams, Zalo, Zoom...) from an unknown or unusual account require the same caution as email, because these are also a growing channel for scams, not only email."
     },
     "options": [
      {
       "v": "T",
       "vi": "Đúng",
       "en": "True"
      },
      {
       "v": "F",
       "vi": "Sai",
       "en": "False"
      },
      {
       "v": "U",
       "vi": "Không chắc",
       "en": "Not sure"
      }
     ]
    }
   ]
  },
  {
   "id": "D",
   "title": {
    "vi": "Nhận biết phishing và BEC",
    "en": "Recognising phishing and BEC"
   },
   "desc": {
    "vi": "Chọn Đúng, Sai hoặc Không chắc cho từng phát biểu.",
    "en": "Choose True, False or Not sure for each statement."
   },
   "items": [
    {
     "id": "D1",
     "type": "tfu",
     "q": {
      "vi": "Email đến từ đúng địa chỉ của đồng nghiệp/sếp thì chắc chắn an toàn, không cần kiểm tra thêm.",
      "en": "An email that comes from a colleague’s or manager’s correct address is definitely safe and needs no further checking."
     },
     "options": [
      {
       "v": "T",
       "vi": "Đúng",
       "en": "True"
      },
      {
       "v": "F",
       "vi": "Sai",
       "en": "False"
      },
      {
       "v": "U",
       "vi": "Không chắc",
       "en": "Not sure"
      }
     ]
    },
    {
     "id": "D2",
     "type": "tfu",
     "q": {
      "vi": "Một email yêu cầu chuyển tiền gấp, có dấu hiệu khẩn cấp bất thường, cần được xác minh lại qua kênh khác (điện thoại, gặp trực tiếp) trước khi thực hiện.",
      "en": "An email requesting an urgent money transfer with unusual signs of urgency should be verified through another channel (phone, in person) before acting."
     },
     "options": [
      {
       "v": "T",
       "vi": "Đúng",
       "en": "True"
      },
      {
       "v": "F",
       "vi": "Sai",
       "en": "False"
      },
      {
       "v": "U",
       "vi": "Không chắc",
       "en": "Not sure"
      }
     ]
    },
    {
     "id": "D3",
     "type": "tfu",
     "q": {
      "vi": "Các file đính kèm lạ (kể cả định dạng ít gặp như hình ảnh SVG) đều có thể chứa mã độc.",
      "en": "Unfamiliar attachments (including less common formats such as SVG images) can all contain malware."
     },
     "options": [
      {
       "v": "T",
       "vi": "Đúng",
       "en": "True"
      },
      {
       "v": "F",
       "vi": "Sai",
       "en": "False"
      },
      {
       "v": "U",
       "vi": "Không chắc",
       "en": "Not sure"
      }
     ]
    },
    {
     "id": "D4",
     "type": "tfu",
     "q": {
      "vi": "Nếu vô tình nhấp vào một đường link hoặc mở file lạ trong email, nên báo ngay cho bộ phận IT thay vì tự xử lý hoặc bỏ qua.",
      "en": "If you accidentally click a link or open an unfamiliar file in an email, you should report it to IT immediately rather than handling it yourself or ignoring it."
     },
     "options": [
      {
       "v": "T",
       "vi": "Đúng",
       "en": "True"
      },
      {
       "v": "F",
       "vi": "Sai",
       "en": "False"
      },
      {
       "v": "U",
       "vi": "Không chắc",
       "en": "Not sure"
      }
     ]
    },
    {
     "id": "D5",
     "type": "tfu",
     "q": {
      "vi": "Đa số các trường hợp lừa đảo qua email hiện nay có thể dễ dàng nhận ra qua lỗi chính tả và giao diện xấu.",
      "en": "Most email scams today can easily be recognised by spelling mistakes and poor design."
     },
     "options": [
      {
       "v": "T",
       "vi": "Đúng",
       "en": "True"
      },
      {
       "v": "F",
       "vi": "Sai",
       "en": "False"
      },
      {
       "v": "U",
       "vi": "Không chắc",
       "en": "Not sure"
      }
     ]
    },
    {
     "id": "D6",
     "type": "tfu",
     "q": {
      "vi": "Khi phát hiện hoặc nghi ngờ có sự cố bảo mật (ví dụ nghi bị tấn công phishing hoặc mã độc), cách xử lý đúng đắn nhất là báo cáo ngay cho bộ phận IT, quản lý trực tiếp hoặc Ban An toàn thông tin để được hỗ trợ kịp thời, thay vì tự xử lý một mình.",
      "en": "When you detect or suspect a security incident (e.g. a suspected phishing or malware attack), the best response is to report it immediately to IT, your line manager or the Information Security Committee, rather than handling it alone."
     },
     "options": [
      {
       "v": "T",
       "vi": "Đúng",
       "en": "True"
      },
      {
       "v": "F",
       "vi": "Sai",
       "en": "False"
      },
      {
       "v": "U",
       "vi": "Không chắc",
       "en": "Not sure"
      }
     ]
    },
    {
     "id": "D7",
     "type": "tfu",
     "q": {
      "vi": "Các email lừa đảo ngày nay có thể được tạo ra bằng công cụ AI, giúp chúng viết đúng ngữ pháp, đúng văn phong công việc và khó phân biệt với email thật hơn so với trước đây; do đó không nên chỉ dựa vào lỗi chính tả/ngữ pháp để nhận diện lừa đảo.",
      "en": "Scam emails today can be produced with AI tools, giving them correct grammar and a professional tone and making them harder to tell apart from real emails; therefore you should not rely only on spelling/grammar mistakes to spot them."
     },
     "options": [
      {
       "v": "T",
       "vi": "Đúng",
       "en": "True"
      },
      {
       "v": "F",
       "vi": "Sai",
       "en": "False"
      },
      {
       "v": "U",
       "vi": "Không chắc",
       "en": "Not sure"
      }
     ]
    },
    {
     "id": "D8",
     "type": "tfu",
     "q": {
      "vi": "Mã QR trong email hoặc tài liệu cũng có thể dẫn đến trang web giả mạo để đánh cắp thông tin đăng nhập, tương tự như một đường link thông thường, nên cần được kiểm tra cẩn trọng như link.",
      "en": "QR codes in emails or documents can also lead to fake websites that steal login details, just like an ordinary link, so they should be checked as carefully as links."
     },
     "options": [
      {
       "v": "T",
       "vi": "Đúng",
       "en": "True"
      },
      {
       "v": "F",
       "vi": "Sai",
       "en": "False"
      },
      {
       "v": "U",
       "vi": "Không chắc",
       "en": "Not sure"
      }
     ]
    },
    {
     "id": "D9",
     "type": "tfu",
     "q": {
      "vi": "Khi nhận yêu cầu thanh toán hoặc thay đổi thông tin ngân hàng từ nhà cung cấp/đối tác qua email, cần xác minh lại qua số điện thoại đã biết từ trước (không dùng số ghi trong email đó), vì tên miền email của đối tác có thể bị giả mạo gần giống hoặc tài khoản email của đối tác có thể đã bị chiếm đoạt.",
      "en": "When a supplier/partner asks by email for a payment or a change of bank details, you should verify it using a phone number you already know (not the number in that email), because the partner’s email domain may be imitated with a look-alike or their email account may have been taken over."
     },
     "options": [
      {
       "v": "T",
       "vi": "Đúng",
       "en": "True"
      },
      {
       "v": "F",
       "vi": "Sai",
       "en": "False"
      },
      {
       "v": "U",
       "vi": "Không chắc",
       "en": "Not sure"
      }
     ]
    },
    {
     "id": "D10",
     "type": "tfu",
     "q": {
      "vi": "Cuộc gọi hoặc tin nhắn thoại mạo danh cấp trên/IT yêu cầu cung cấp mật khẩu hoặc thực hiện giao dịch khẩn cấp vẫn có thể là giả mạo, kể cả khi giọng nói nghe rất giống người quen, do công nghệ giả giọng bằng AI (voice cloning) ngày càng tinh vi.",
      "en": "A call or voice message claiming to be from a manager/IT asking for a password or an urgent transaction may still be fake, even if the voice sounds very familiar, because AI voice-cloning technology is increasingly sophisticated."
     },
     "options": [
      {
       "v": "T",
       "vi": "Đúng",
       "en": "True"
      },
      {
       "v": "F",
       "vi": "Sai",
       "en": "False"
      },
      {
       "v": "U",
       "vi": "Không chắc",
       "en": "Not sure"
      }
     ]
    }
   ]
  },
  {
   "id": "E",
   "title": {
    "vi": "Thái độ đối với rủi ro lừa đảo",
    "en": "Attitudes towards scam risk"
   },
   "desc": {
    "vi": "Mức độ đồng ý: 1 = Hoàn toàn không đồng ý, 5 = Hoàn toàn đồng ý.",
    "en": "Agreement: 1 = Strongly disagree, 5 = Strongly agree."
   },
   "items": [
    {
     "id": "E1",
     "type": "likert",
     "q": {
      "vi": "Tôi cho rằng phishing/lừa đảo qua email là rủi ro thực sự đối với công việc của tôi, không chỉ là vấn đề của bộ phận IT.",
      "en": "I believe phishing/email scams are a real risk to my own work, not just an IT problem."
     }
    },
    {
     "id": "E2",
     "type": "likert",
     "q": {
      "vi": "Tôi cảm thấy tự tin có thể nhận biết một email lừa đảo khi gặp phải.",
      "en": "I feel confident that I can recognise a scam email when I see one."
     }
    },
    {
     "id": "E3",
     "type": "likert",
     "q": {
      "vi": "Tôi cho rằng trách nhiệm phòng chống phishing là của mỗi nhân viên, không chỉ riêng bộ phận IT/an ninh mạng.",
      "en": "I believe preventing phishing is every employee’s responsibility, not only the IT/cybersecurity team’s."
     }
    },
    {
     "id": "E4",
     "type": "likert",
     "q": {
      "vi": "Tôi lo ngại rằng công ty (hoặc chính tôi) có thể là mục tiêu của một cuộc tấn công lừa đảo nhắm riêng (BEC) như đã từng xảy ra.",
      "en": "I am concerned that the company (or I myself) could be the target of a tailored scam attack (BEC), as has happened before."
     }
    },
    {
     "id": "E5",
     "type": "likert",
     "q": {
      "vi": "Tôi sẵn sàng dành thêm thời gian xác minh một email đáng ngờ, dù điều đó làm chậm công việc.",
      "en": "I am willing to spend extra time verifying a suspicious email, even if it slows down my work."
     }
    },
    {
     "id": "E6",
     "type": "likert",
     "q": {
      "vi": "Tôi cho rằng các hình thức lừa đảo mới (qua AI, mã QR, ứng dụng nhắn tin/họp trực tuyến, giả giọng nói) cũng nguy hiểm không kém lừa đảo qua email truyền thống.",
      "en": "I believe new forms of scams (AI-generated, QR codes, messaging/meeting apps, voice cloning) are as dangerous as traditional email scams."
     }
    },
    {
     "id": "E7",
     "type": "likert",
     "q": {
      "vi": "Việc phải xác minh kỹ từng email/tin nhắn đáng ngờ khiến công việc của tôi mất nhiều thời gian và trở nên bất tiện.",
      "en": "Having to carefully verify every suspicious email/message makes my work time-consuming and inconvenient."
     }
    },
    {
     "id": "E8",
     "type": "likert",
     "q": {
      "vi": "Khi nghĩ đến khả năng công ty hoặc bản thân tôi trở thành nạn nhân của một cuộc tấn công lừa đảo, tôi thực sự cảm thấy lo lắng/bất an.",
      "en": "When I think about the company or myself becoming the victim of a scam attack, I genuinely feel worried/uneasy."
     }
    },
    {
     "id": "E9",
     "type": "likert",
     "q": {
      "vi": "Tôi tin hệ thống bảo mật/bộ phận IT của công ty sẽ tự động ngăn chặn hầu hết các cuộc tấn công, nên bản thân không cần quá cẩn trọng khi đọc email.",
      "en": "I trust the company’s security systems/IT team to automatically block most attacks, so I do not need to be very careful when reading email."
     }
    },
    {
     "id": "E10",
     "type": "likert",
     "q": {
      "vi": "Tôi cảm thấy quản lý trực tiếp và Ban lãnh đạo công ty thực sự quan tâm, hỗ trợ đầy đủ (thời gian, công cụ, hướng dẫn rõ ràng) để nhân viên có thể tuân thủ quy định an toàn thông tin.",
      "en": "I feel my line manager and company leadership genuinely care about and fully support (time, tools, clear guidance) employees in complying with information security rules."
     }
    }
   ]
  },
  {
   "id": "F",
   "title": {
    "vi": "Hành vi thực tế",
    "en": "What you actually do"
   },
   "desc": {
    "vi": "Trả lời theo những gì Anh/Chị thường làm, không phải điều nên làm.",
    "en": "Answer based on what you usually do, not what you should do."
   },
   "items": [
    {
     "id": "F1",
     "type": "choice",
     "q": {
      "vi": "Trong 6 tháng qua, Anh/Chị có nhận được email nào mà mình nghi ngờ là lừa đảo/phishing không?",
      "en": "In the past 6 months, have you received any email you suspected to be a scam/phishing?"
     },
     "options": [
      {
       "v": "yes",
       "vi": "Có",
       "en": "Yes"
      },
      {
       "v": "no",
       "vi": "Không",
       "en": "No"
      },
      {
       "v": "dontknow",
       "vi": "Không nhớ rõ",
       "en": "Don’t remember"
      }
     ]
    },
    {
     "id": "F2",
     "type": "choice",
     "q": {
      "vi": "Nếu có, Anh/Chị đã xử lý như thế nào?",
      "en": "If yes, how did you handle it?"
     },
     "options": [
      {
       "v": "reported",
       "vi": "Báo cho IT/quản lý ngay",
       "en": "Reported it to IT/my manager immediately"
      },
      {
       "v": "deleted",
       "vi": "Tự xóa email, không báo ai",
       "en": "Deleted it myself without telling anyone"
      },
      {
       "v": "clicked",
       "vi": "Nhấp vào link/mở file trước khi nhận ra là lừa đảo",
       "en": "Clicked the link/opened the file before realising it was a scam"
      },
      {
       "v": "nothing",
       "vi": "Không làm gì cả",
       "en": "Did nothing"
      }
     ],
     "showIf": {
      "id": "F1",
      "eq": "yes"
     }
    },
    {
     "id": "F3",
     "type": "choice",
     "q": {
      "vi": "Anh/Chị có biết quy trình báo cáo sự cố an ninh mạng của công ty (báo cho ai, bằng cách nào) không?",
      "en": "Do you know the company’s procedure for reporting a cybersecurity incident (whom to report to, and how)?"
     },
     "options": [
      {
       "v": "well",
       "vi": "Biết rõ",
       "en": "Know it well"
      },
      {
       "v": "vague",
       "vi": "Biết mơ hồ",
       "en": "Know it vaguely"
      },
      {
       "v": "no",
       "vi": "Không biết",
       "en": "Don’t know"
      }
     ]
    },
    {
     "id": "F4",
     "type": "choice",
     "q": {
      "vi": "Anh/Chị có đang sử dụng xác thực đa yếu tố (MFA/2FA) cho email công ty không?",
      "en": "Do you use multi-factor authentication (MFA/2FA) for your company email?"
     },
     "options": [
      {
       "v": "always",
       "vi": "Có, luôn bật",
       "en": "Yes, always on"
      },
      {
       "v": "sometimes",
       "vi": "Có nhưng không thường xuyên",
       "en": "Yes, but not always"
      },
      {
       "v": "no",
       "vi": "Không",
       "en": "No"
      },
      {
       "v": "unknown",
       "vi": "Không biết đó là gì",
       "en": "I don’t know what that is"
      }
     ]
    },
    {
     "id": "F5",
     "type": "choice",
     "q": {
      "vi": "Anh/Chị có thói quen kiểm tra kỹ địa chỉ email người gửi (không chỉ tên hiển thị) trước khi thực hiện yêu cầu quan trọng (thanh toán, cung cấp thông tin) không?",
      "en": "Do you routinely check the sender’s actual email address (not just the display name) before acting on an important request (payment, sharing information)?"
     },
     "options": [
      {
       "v": "always",
       "vi": "Luôn luôn",
       "en": "Always"
      },
      {
       "v": "sometimes",
       "vi": "Thỉnh thoảng",
       "en": "Sometimes"
      },
      {
       "v": "rarely",
       "vi": "Hiếm khi/Không bao giờ",
       "en": "Rarely/Never"
      }
     ]
    },
    {
     "id": "F6",
     "type": "choice",
     "q": {
      "vi": "Anh/Chị có từng nhận được liên kết hoặc file đáng ngờ qua ứng dụng nhắn tin/họp trực tuyến của công ty (Teams, Zalo, Zoom...), không chỉ qua email, không?",
      "en": "Have you ever received a suspicious link or file through company messaging/meeting apps (Teams, Zalo, Zoom...), not only by email?"
     },
     "options": [
      {
       "v": "yes",
       "vi": "Có",
       "en": "Yes"
      },
      {
       "v": "no",
       "vi": "Không",
       "en": "No"
      },
      {
       "v": "dontknow",
       "vi": "Không nhớ rõ",
       "en": "Don’t remember"
      }
     ]
    },
    {
     "id": "F7",
     "type": "choice",
     "q": {
      "vi": "Trên thực tế (không phải lý thuyết), Anh/Chị có luôn khóa màn hình máy tính mỗi khi rời khỏi bàn làm việc, kể cả chỉ trong vài phút, không?",
      "en": "In practice (not in theory), do you always lock your computer screen whenever you leave your desk, even for a few minutes?"
     },
     "options": [
      {
       "v": "always",
       "vi": "Luôn luôn",
       "en": "Always"
      },
      {
       "v": "sometimes",
       "vi": "Thỉnh thoảng quên",
       "en": "Sometimes forget"
      },
      {
       "v": "rarely",
       "vi": "Hiếm khi/Không bao giờ",
       "en": "Rarely/Never"
      }
     ]
    },
    {
     "id": "F8",
     "type": "choice",
     "q": {
      "vi": "Anh/Chị có đang sử dụng cùng một mật khẩu (hoặc mật khẩu rất giống nhau) cho nhiều tài khoản khác nhau, kể cả giữa tài khoản công ty và tài khoản cá nhân, không?",
      "en": "Do you use the same password (or very similar passwords) for several accounts, including between company and personal accounts?"
     },
     "options": [
      {
       "v": "yes",
       "vi": "Có",
       "en": "Yes"
      },
      {
       "v": "no",
       "vi": "Không",
       "en": "No"
      },
      {
       "v": "notsure",
       "vi": "Không chắc",
       "en": "Not sure"
      }
     ]
    },
    {
     "id": "F9",
     "type": "choice",
     "q": {
      "vi": "Anh/Chị có thường cập nhật phần mềm/hệ điều hành trên máy tính công ty ngay khi có thông báo cập nhật không?",
      "en": "Do you usually update software/the operating system on your company computer as soon as an update is offered?"
     },
     "options": [
      {
       "v": "always",
       "vi": "Luôn luôn/sớm nhất có thể",
       "en": "Always/as soon as possible"
      },
      {
       "v": "sometimes",
       "vi": "Thỉnh thoảng, hay trì hoãn",
       "en": "Sometimes, I often postpone"
      },
      {
       "v": "rarely",
       "vi": "Hiếm khi/Không bao giờ",
       "en": "Rarely/Never"
      }
     ]
    },
    {
     "id": "F10",
     "type": "choice",
     "q": {
      "vi": "Khi gặp một email/tin nhắn có dấu hiệu khả nghi nhưng Anh/Chị KHÔNG chắc chắn đó có phải là lừa đảo hay không, Anh/Chị thường làm gì?",
      "en": "When an email/message looks suspicious but you are NOT sure whether it is a scam, what do you usually do?"
     },
     "options": [
      {
       "v": "report",
       "vi": "Vẫn báo cho IT để kiểm tra, dù không chắc",
       "en": "Report it to IT to check, even if unsure"
      },
      {
       "v": "onlysure",
       "vi": "Chỉ báo khi gần như chắc chắn là lừa đảo",
       "en": "Report only when almost certain it is a scam"
      },
      {
       "v": "ignore",
       "vi": "Thường bỏ qua, không báo",
       "en": "Usually ignore it and do not report"
      }
     ]
    }
   ]
  },
  {
   "id": "G",
   "title": {
    "vi": "Nhu cầu đào tạo và cảnh báo",
    "en": "Training and alert needs"
   },
   "desc": null,
   "items": [
    {
     "id": "G1",
     "type": "multi",
     "q": {
      "vi": "Anh/Chị muốn được cảnh báo, nhắc nhở về phishing qua hình thức nào? (chọn nhiều)",
      "en": "How would you like to receive phishing alerts and reminders? (choose any)"
     },
     "options": [
      {
       "v": "email",
       "vi": "Email định kỳ",
       "en": "Periodic email"
      },
      {
       "v": "poster",
       "vi": "Poster, màn hình chờ",
       "en": "Posters, screen savers"
      },
      {
       "v": "training",
       "vi": "Buổi đào tạo trực tiếp",
       "en": "In-person training"
      },
      {
       "v": "simulation",
       "vi": "Bài kiểm tra mô phỏng phishing",
       "en": "Simulated phishing tests"
      },
      {
       "v": "other",
       "vi": "Khác",
       "en": "Other"
      }
     ]
    },
    {
     "id": "G2",
     "type": "choice",
     "q": {
      "vi": "Anh/Chị mong muốn tần suất đào tạo nhận thức an ninh mạng là?",
      "en": "How often would you like cybersecurity awareness training?"
     },
     "options": [
      {
       "v": "6m",
       "vi": "6 tháng/lần",
       "en": "Every 6 months"
      },
      {
       "v": "12m",
       "vi": "1 năm/lần",
       "en": "Once a year"
      },
      {
       "v": "incident",
       "vi": "Khi có sự cố mới",
       "en": "When a new incident occurs"
      },
      {
       "v": "none",
       "vi": "Không cần thiết",
       "en": "Not necessary"
      }
     ]
    },
    {
     "id": "G3",
     "type": "text",
     "required": false,
     "q": {
      "vi": "Góp ý thêm (không bắt buộc)",
      "en": "Other comments (optional)"
     }
    }
   ]
  }
 ],
 "thanks": {
  "vi": "Cảm ơn Anh/Chị. Câu trả lời đã được ghi nhận.",
  "en": "Thank you. Your answers have been recorded."
 }
};
