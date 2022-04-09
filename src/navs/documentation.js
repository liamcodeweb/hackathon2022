import { createPageList } from '@/utils/createPageList'

const pages = createPageList(
  require.context(`../pages/docs/?meta=title,shortTitle,published`, false, /\.mdx$/),
  'docs'
)

export const documentationNav = {
  'Thì trong tiếng anh (Tenses)': [
    pages['hien-tai-don'],
    pages['hien-tai-tiep-dien'],
    pages['hien-tai-hoan-thanh'],
    pages['hien-tai-hoan-thanh-tiep-dien'],
    pages['qua-khu-don'],
    pages['qua-khu-tiep-dien'],
    pages['qua-khu-hoan-thanh'],
    pages['qua-khu-hoan-thanh-tiep-dien'],
    pages['tuong-lai-gan'],
    pages['tuong-lai-don'],
    pages['tuong-lai-tiep-dien'],
    pages['tuong-lai-hoan-thanh'],
    pages['tuong-lai-hoan-thanh-tiep-dien'],
  ],
  'Các dạng thức của động từ (Gerund and Infinitive)': [
    pages['danh-dong-tu'],
    pages['dong-tu-nguyen-mau'],
  ],
  'Động từ khiếm khuyết (Modal verbs)': [
    pages['can-could'],
    pages['may-might'],
    pages['shall-should-ought-to'],
    pages['must-have-to-need'],
    pages['dong-tu-khiem-khuyet-hoan-thanh'],
    pages['dong-tu-ban-khiem-khuyet'],
  ],
  'Các loại từ (Types of Words)': [
    pages['danh-tu'],
    pages['dai-tu'],
    pages['dong-tu'],
    pages['tinh-tu'],
    pages['trang-tu'],
    pages['than-tu'],
  ],
  'Mạo từ (Articles)': [
    pages['mao-tu-khong-xac-dinh'],
    pages['mao-tu-xac-dinh'],
    pages['khong-dung-mao-tu'],
  ],
  'Giới từ (Prepositions)': [
    pages['gioi-tu-chi-thoi-gian'],
    pages['gioi-tu-chi-noi-chon'],
    pages['gioi-tu-chi-nguyen-nhan'],
    pages['gioi-tu-chi-muc-dich'],
  ],
  'Liên từ (Conjunctions)': [
    pages['lien-tu-ket-hop'],
    pages['lien-tu-tuong-quan'],
    pages['lien-tu-phu-thuoc'],
  ],
  'So sánh trong tiếng Anh (Comparison)': [
    pages['so-sanh-bang'],
    pages['so-sanh-hon'],
    pages['so-sanh-nhat'],
    pages['so-sanh-kep'],
  ],
  'Câu Bị động (Passive Voice)': [
    pages['bi-dong-voi-cac-thi-khong-tiep-dien'],
    pages['bi-dong-voi-cac-thi-tuong-lai-va-dong-tu-khiem-khuyet'],
    pages['bi-dong-voi-cac-thi-tiep-dien'],
    pages['bi-dong-voi-cac-thi-hoan-thanh'],
    pages['cac-thi-khong-dung-bi-dong'],
    pages['cau-bi-dong-khach-quan'],
    pages['cau-cau-khien-bi-dong'],
    pages['tan-ngu-truc-tiep-va-gian-tiep'],
  ],
  'Câu gián tiếp (Reported speech)': [
    pages['phan-biet-cau-truc-tiep-va-gian-tiep'],
    pages['cach-chuyen-doi-cau-gian-tiep'],
    pages['cac-loai-cau-gian-tiep'],
    pages['dong-tu-tuong-thuat'],
  ],
  'Câu điều kiện (Conditional sentences)': [
    pages['cau-dieu-kien-loai-0'],
    pages['cau-dieu-kien-loai-1'],
    pages['cau-dieu-kien-loai-2'],
    pages['cau-dieu-kien-loai-3'],
    pages['cau-dieu-kien-hon-hop'],
    pages['dao-ngu-cau-dieu-kien'],
    pages['mot-so-truong-hop-khac'],
  ],
  'Câu điều ước ( Wish / If only)': [
    pages['cau-dieu-uoc-o-tuong-lai'],
    pages['cau-dieu-uoc-o-hien-tai'],
    pages['cau-dieu-uoc-o-qua-khu'],
    pages['truong-hop-khac-cua-cau-dieu-uoc'],
  ],
  'Các cấu trúc giả định khác': [
    pages['suppose-supposing-image-what-if'],
    pages['as-if-as-though'],
    pages['would-rather-sooner'],
    pages['it-is-hight-about-time'],
    pages['cau-hoi'],
  ],
  'Sự hòa hợp giữa chủ ngữ và động từ (Subject and Verb Agreement)': [
    pages['chia-dong-tu-so-it'],
    pages['chia-dong-tu-so-nhieu'],
  ],
  'Mệnh đề quan hệ (Relative clause)': [
    pages['dai-tu-va-pho-tu-quan-he'],
    pages['menh-de-quan-he-xac-dinh'],
    pages['menh-de-quan-he-khong-xac-dinh'],
    pages['rut-gon-menh-de-quan-he'],
  ],
  'Mệnh đề trạng ngữ (Adverbial clauses)': [
    pages['menh-de-chi-su-nhuong-bo'],
    pages['menh-de-chi-nguyen-nhan'],
    pages['menh-de-chi-ket-qua'],
    pages['menh-de-chi-muc-dich'],
  ],
  'Đảo ngữ (Inversions)': [
    pages['dao-ngu-voi-cac-trang-tu-phu-dinh'],
    pages['dao-ngu-sau-cac-trang-tu-chi-phuong-huong-hoac-vi-tri'],
    pages['dao-ngu-voi-cac-cau-tra-loi-ngan'],
    pages['dao-ngu-sau-so-such-as-than'],
  ],
  'Từ diễn tả số lượng (Quantifiers)': [
    pages['some-any'],
    pages['much-many-great-deal-of-large-number-of-lot-of-lots-of'],
    pages['few-a-few-little-a-little'],
    pages['all-most-some-all-of-most-of-some-of-none-of'],
    pages['every-each'],
  ],
  'Ngữ âm': [pages['phat-am'], pages['trong-am']],
  'Sự kết hợp từ (Collocations)': [
    pages['ket-hop-tinh-tu-danh-tu'],
    pages['ket-hop-danh-tu-dong-tu'],
    pages['ket-hop-giua-cac-danh-tu'],
    pages['ket-hop-dong-tu-gioi-tu'],
    pages['ket-hop-dong-tu-pho-tu'],
    pages['ket-hop-pho-tu-tinh-tu'],
  ],
  'Cụm động từ (Phrasal verb)': [
    pages['noi-cum-dong-tu'],
    pages['ngoai-cum-dong-tu'],
    pages['tinh-huong-giao-tiep'],
  ],

  'Getting Started': [pages['browser-support'], pages['upgrade-guide']],
}
