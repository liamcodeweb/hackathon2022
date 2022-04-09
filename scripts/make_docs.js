const fs = require('fs')
const DOCS = [
  {
    url: 'thi-trong-tieng-anh',
    title: 'Thì trong tiếng anh (Tenses)',
    children: [
      { url: 'hien-tai-don', title: 'Thì hiện tại đơn' },
      {
        url: 'hien-tai-tiep-dien',
        title: 'Thì hiện tại tiếp diễn',
      },
      {
        url: 'hien-tai-hoan-thanh',
        title: 'Thì hiện tại hoàn thành',
      },
      {
        url: 'hien-tai-hoan-thanh-tiep-dien',
        title: 'Thì hiện tại hoàn thành tiếp diễn',
      },
      { url: 'qua-khu-don', title: 'Thì quá khứ đơn' },
      {
        url: 'qua-khu-tiep-dien',
        title: 'Thì quá khứ tiếp diễn',
      },
      {
        url: 'qua-khu-hoan-thanh',
        title: 'Thì quá khứ hoàn thành',
      },
      {
        url: 'qua-khu-hoan-thanh-tiep-dien',
        title: 'Thì quá khứ hoàn thành tiếp diễn',
      },
      { url: 'tuong-lai-gan', title: 'Thì tương lai gần' },
      { url: 'tuong-lai-don', title: 'Thì tương lai đơn' },
      {
        url: 'tuong-lai-tiep-dien',
        title: 'Thì tương lai tiếp diễn',
      },
      {
        url: 'tuong-lai-hoan-thanh',
        title: 'Thì tương lai hoàn thành',
      },
      {
        url: 'tuong-lai-hoan-thanh-tiep-dien',
        title: 'Thì tương lai hoàn thành tiếp diễn',
      },
    ],
  },

  {
    url: 'cac-dang-dong-tu',
    title: 'Các dạng thức của động từ (Gerund and Infinitive)',
    children: [
      {
        url: 'danh-dong-tu',
        title: 'Danh động từ (Gerund V-ing)',
      },
      {
        url: 'dong-tu-nguyen-mau',
        title: 'Động từ nguyên mẫu (To-Infinitive)',
      },
    ],
  },

  {
    url: 'dong-tu-khiem-khuyet',
    title: 'Động từ khiếm khuyết (Modal verbs)',
    children: [
      { url: 'can-could', title: 'Can / Could' },
      { url: 'may-might', title: 'May / Might' },
      {
        url: 'shall-should-ought-to',
        title: 'Shall / Should / Ought to',
      },
      {
        url: 'must-have-to-need',
        title: 'Must / Have to / Need',
      },
      {
        url: 'dong-tu-khiem-khuyet-hoan-thanh',
        title: 'Động từ khiếm khuyết hoàn thành (The modal perfect)',
      },
      {
        url: 'dong-tu-ban-khiem-khuyet',
        title: 'Động từ bán khiếm khuyết (Semi-modals)',
      },
    ],
  },

  {
    url: 'tu-loai',
    title: 'Các loại từ (Types of Words)',
    children: [
      { url: 'danh-tu', title: 'Danh từ (Nouns)' },
      { url: 'dai-tu', title: 'Đại từ (Pronouns)' },
      { url: 'dong-tu', title: 'Động từ (Verbs)' },
      {
        url: 'tinh-tu',
        title: 'Tính từ (Adjective)',
      },
      { url: 'trang-tu', title: 'Trạng từ (Adverb)' },
      {
        url: 'than-tu',
        title: 'Thán từ (Interjections)',
      },
    ],
  },

  {
    url: 'mao-tu',
    title: 'Mạo từ (Articles)',
    children: [
      {
        url: 'mao-tu-khong-xac-dinh',
        title: 'Mạo từ không xác định (a/an)',
      },
      {
        url: 'mao-tu-xac-dinh',
        title: 'Mạo từ xác định (the)',
      },
      {
        url: 'khong-dung-mao-tu',
        title: 'Trường hợp không dùng mạo từ',
      },
    ],
  },

  {
    url: 'gioi-tu',
    title: 'Giới từ (Prepositions)',
    children: [
      {
        url: 'gioi-tu-chi-thoi-gian',
        title: 'Giới từ chỉ thời gian (Time)',
      },
      {
        url: 'gioi-tu-chi-noi-chon',
        title: 'Giới từ chỉ nơi chốn (Place)',
      },
      {
        url: 'gioi-tu-chi-nguyen-nhan',
        title: 'Giới từ chỉ nguyên nhân (Reason)',
      },
      {
        url: 'gioi-tu-chi-muc-dich',
        title: 'Giới từ chỉ mục đích (Intention)',
      },
    ],
  },

  {
    url: 'lien-tu',
    title: 'Liên từ (Conjunctions)',
    children: [
      {
        url: 'lien-tu-ket-hop',
        title: 'Liên từ kết hợp (Coordinating conjunctions)',
      },
      {
        url: 'lien-tu-tuong-quan',
        title: 'Liên từ tương quan (Correlative conjunctions)',
      },
      {
        url: 'lien-tu-phu-thuoc',
        title: 'Liên từ phụ thuộc (Subordinating conjunctions)',
      },
    ],
  },

  {
    url: 'so-sanh',
    title: 'So sánh trong tiếng Anh (Comparison)',
    children: [
      {
        url: 'so-sanh-bang',
        title: 'So sánh bằng (Equal Comparison)',
      },
      {
        url: 'so-sanh-hon',
        title: 'So sánh hơn (Comparative)',
      },
      {
        url: 'so-sanh-nhat',
        title: 'So sánh nhất (Superlative)',
      },
      {
        url: 'so-sanh-kep',
        title: 'So sánh kép (Douple Comparative)',
      },
    ],
  },

  {
    url: 'cau-bi-dong',
    title: 'Câu Bị động (Passive Voice)',
    children: [
      {
        url: 'bi-dong-voi-cac-thi-khong-tiep-dien',
        title: 'Bị động với các thì không tiếp diễn (HTĐ, QKĐ)',
      },
      {
        url: 'bi-dong-voi-cac-thi-tuong-lai-va-dong-tu-khiem-khuyet',
        title: 'Bị động với các thì tương lai và động từ khiếm khuyết (Modal verbs)',
      },
      {
        url: 'bi-dong-voi-cac-thi-tiep-dien',
        title: 'Bị động với các thì tiếp diễn và Gerund (V_ing)',
      },
      {
        url: 'bi-dong-voi-cac-thi-hoan-thanh',
        title: 'Bị động với các thì hoàn thành',
      },
      {
        url: 'cac-thi-khong-dung-bi-dong',
        title: 'Các thì KHÔNG dùng bị động',
      },
      {
        url: 'cau-bi-dong-khach-quan',
        title: 'Câu bị động khách quan (Impersonal passive)',
      },
      {
        url: 'cau-cau-khien-bi-dong',
        title: 'Câu cầu khiến bị động (Causative)',
      },
      {
        url: 'tan-ngu-truc-tiep-va-gian-tiep',
        title: 'Tân ngữ trực tiếp và gián tiếp (Direct and indirect object)',
      },
    ],
  },

  {
    url: 'cau-gian-tiep',
    title: 'Câu gián tiếp (Reported speech)',
    children: [
      {
        url: 'phan-biet-cau-truc-tiep-va-gian-tiep',
        title: 'Phân biệt câu trực tiếp và câu gián tiếp (Direct Speech and Reported Speech)',
      },
      {
        url: 'cach-chuyen-doi-cau-gian-tiep',
        title: 'Cách chuyển đổi câu gián tiếp',
      },
      {
        url: 'cac-loai-cau-gian-tiep',
        title: 'Các loại câu gián tiếp',
      },
      {
        url: 'dong-tu-tuong-thuat',
        title: 'Động từ tường thuật (Reported verbs)',
      },
    ],
  },

  {
    url: 'cau-dieu-kien',
    title: 'Câu điều kiện (Conditional sentences)',
    children: [
      {
        url: 'cau-dieu-kien-loai-0',
        title: 'Câu điều kiện loại 0',
      },
      {
        url: 'cau-dieu-kien-loai-1',
        title: 'Câu điều kiện loại 1',
      },
      {
        url: 'cau-dieu-kien-loai-2',
        title: 'Câu điều kiện loại 2',
      },
      {
        url: 'cau-dieu-kien-loai-3',
        title: 'Câu điều kiện loại 3',
      },
      {
        url: 'cau-dieu-kien-hon-hop',
        title: 'Câu điều kiện hỗn hợp (Mixed Conditional)',
      },
      {
        url: 'dao-ngu-cau-dieu-kien',
        title: 'Đảo ngữ câu điều kiện',
      },
      {
        url: 'mot-so-truong-hop-khac',
        title: 'Một số trường hợp khác',
      },
    ],
  },

  {
    url: 'cau-dieu-uoc',
    title: 'Câu điều ước ( Wish / If only)',
    children: [
      {
        url: 'cau-dieu-uoc-o-tuong-lai',
        title: 'Câu điều ước ở tương lai',
      },
      {
        url: 'cau-dieu-uoc-o-hien-tai',
        title: 'Câu điều ước ở hiện tại',
      },
      {
        url: 'cau-dieu-uoc-o-qua-khu',
        title: 'Câu điều ước ở quá khứ',
      },
      {
        url: 'truong-hop-khac-cua-cau-dieu-uoc',
        title: 'Trường hợp khác của câu điều ước',
      },
    ],
  },

  {
    url: 'cac-cau-truc-gia-dinh-khac',
    title: 'Các cấu trúc giả định khác',
    children: [
      {
        url: 'suppose-supposing-image-what-if',
        title: 'Suppose / Supposing / Imagine / What if',
      },
      { url: 'as-if-as-though', title: 'As if / As though' },
      {
        url: 'would-rather-sooner',
        title: 'Would rather / Sooner',
      },
      {
        url: 'it-is-hight-about-time',
        title: "It's (high/about) time",
      },
      {
        url: 'cau-hoi',
        title: 'Câu hỏi (Polite questions)',
      },
    ],
  },

  {
    url: 'su-hoa-hop-giua-chu-ngu-va-dong-tu',
    title: 'Sự hòa hợp giữa chủ ngữ và động từ (Subject and Verb Agreement)',
    children: [
      {
        url: 'chia-dong-tu-so-it',
        title: 'Trường hợp chia động từ số ít',
      },
      {
        url: 'chia-dong-tu-so-nhieu',
        title: 'Trường hợp chia động từ số nhiều',
      },
    ],
  },

  {
    url: 'menh-de-quan-he',
    title: 'Mệnh đề quan hệ (Relative clause)',
    children: [
      {
        url: 'dai-tu-va-pho-tu-quan-he',
        title: 'Đại từ và Phó từ quan hệ (Relative Pronouns and Adverbs)',
      },
      {
        url: 'menh-de-quan-he-xac-dinh',
        title: 'Mệnh đề quan hệ xác định (Defining Relative Clauses)',
      },
      {
        url: 'menh-de-quan-he-khong-xac-dinh',
        title: 'Mệnh đề quan hệ không xác định (Non-Defining Relative Clauses)',
      },
      {
        url: 'rut-gon-menh-de-quan-he',
        title: 'Rút gọn mệnh đề quan hệ (Reduced Relative Clauses )',
      },
    ],
  },

  {
    url: 'menh-de-trang-ngu',
    title: 'Mệnh đề trạng ngữ (Adverbial clauses)',
    children: [
      {
        url: 'menh-de-chi-su-nhuong-bo',
        title: 'Mệnh đề chỉ sự nhượng bộ',
      },
      {
        url: 'menh-de-chi-nguyen-nhan',
        title: 'Mệnh đề chỉ nguyên nhân',
      },
      {
        url: 'menh-de-chi-ket-qua',
        title: 'Mệnh đề chỉ kết quả',
      },
      {
        url: 'menh-de-chi-muc-dich',
        title: 'Mệnh đề chỉ mục đích',
      },
    ],
  },

  {
    url: 'dao-ngu',
    title: 'Đảo ngữ (Inversions)',
    children: [
      {
        url: 'dao-ngu-voi-cac-trang-tu-phu-dinh',
        title: 'Đảo ngữ với các trạng từ phủ định',
      },
      {
        url: 'dao-ngu-sau-cac-trang-tu-chi-phuong-huong-hoac-vi-tri',
        title: 'Đảo ngữ sau các trạng từ chỉ phương hướng hoặc vị trí',
      },
      {
        url: 'dao-ngu-voi-cac-cau-tra-loi-ngan',
        title: 'Đảo ngữ với các câu trả lời ngắn dùng So / Neither / Nor',
      },
      {
        url: 'dao-ngu-sau-so-such-as-than',
        title: 'Đảo ngữ sau So/Such, As, Than',
      },
    ],
  },

  {
    url: 'tu-dien-ta-so-luong',
    title: 'Từ diễn tả số lượng (Quantifiers)',
    children: [
      { url: 'some-any', title: 'Some / Any' },
      {
        url: 'much-many-great-deal-of-large-number-of-lot-of-lots-of',
        title: 'Much / Many / Great deal of / Large number of / Lot of / Lots of',
      },
      {
        url: 'few-a-few-little-a-little',
        title: 'Few / A few / Little / A little',
      },
      {
        url: 'all-most-some-all-of-most-of-some-of-none-of',
        title: 'All / Most / Some / All of / Most of / Some of / None of',
      },
      { url: 'every-each', title: 'Every / Each' },
    ],
  },

  {
    url: 'ngu-am',
    title: 'Ngữ âm',
    children: [
      { url: 'phat-am', title: 'Phát âm' },
      { url: 'trong-am', title: 'Trọng âm' },
    ],
  },

  {
    url: 'su-ket-hop-tu',
    title: 'Sự kết hợp từ (Collocations)',
    children: [
      {
        url: 'ket-hop-tinh-tu-danh-tu',
        title: 'Kết hợp Tính từ - Danh Từ (Adjectives and Nouns)',
      },
      {
        url: 'ket-hop-danh-tu-dong-tu',
        title: 'Kết hợp Danh từ - Động Từ (Nouns and Verbs)',
      },
      {
        url: 'ket-hop-giua-cac-danh-tu',
        title: 'Kết hợp giữa các danh từ (a + Noun + of + Noun)',
      },
      {
        url: 'ket-hop-dong-tu-gioi-tu',
        title: 'Kết hợp Động từ - Giới từ (Verbs and Prepositions)',
      },
      {
        url: 'ket-hop-dong-tu-pho-tu',
        title: 'Kết hợp Động từ - Phó từ (Verbs and Adverbs)',
      },
      {
        url: 'ket-hop-pho-tu-tinh-tu',
        title: 'Kết hợp Phó từ - Tĩnh từ (Adverbs and Adjectives)',
      },
    ],
  },

  {
    url: 'cum-dong-tu',
    title: 'Cụm động từ (Phrasal verb)',
    children: [
      {
        url: 'noi-cum-dong-tu',
        title: 'Nội cụm động từ (Intransitive phrasal verbs)',
      },
      {
        url: 'ngoai-cum-dong-tu',
        title: 'Ngoại cụm động từ (Transitive phrasal verbs)',
      },
      {
        url: 'tinh-huong-giao-tiep',
        title: 'Tình huống giao tiếp',
      },
    ],
  },
]

for (let category of DOCS) {
  for (let doc of category.children) {
    fs.writeFileSync(
      `./src/pages/docs/${doc.url}.mdx`,
      `---
title: "${doc.title}"
description: ""
---`
    )
  }
}

let temp = ''
for (let category of DOCS) {
  temp += `"${category.title}":[${category.children
    .map((item) => `pages['${item.url}']`)
    .join(',')}]`
}
fs.writeFileSync(`./src/navs/nav.json`, temp)
