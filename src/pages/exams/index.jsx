const topics = [
  'Thì trong tiếng anh (Tenses)',
  'Các dạng thức của động từ (Gerund and Infinitive)',
  'Động từ khiếm khuyết (Modal verbs)',
  'Các loại từ (Types of Words)',
  'Mạo từ (Articles)',
  'Giới từ (Prepositions)',
  'Liên từ (Conjunctions)',
  'So sánh trong tiếng Anh (Comparison)',
  'Câu Bị động (Passive Voice)',
  'Câu gián tiếp (Reported speech)',
  'Câu điều kiện (Conditional sentences)',
  'Câu điều ước ( Wish / If only)',
  'Các cấu trúc giả định khác',
  'Sự hòa hợp giữa chủ ngữ và động từ (Subject and Verb Agreement)',
  'Mệnh đề quan hệ (Relative clause)',
  'Mệnh đề trạng ngữ (Adverbial clauses)',
  'Đảo ngữ (Inversions)',
  'Từ diễn tả số lượng (Quantifiers)',
  'Ngữ âm',
  'Sự kết hợp từ (Collocations)',
  'Cụm động từ (Phrasal verb)',
]
export default function ExamsPage() {
  return (
    <div className="px-4 mx-auto max-w-8xl sm:px-6 md:px-8">
      <div className="py-4">Exams page</div>
      <div>
        <div>
          <input type="text border rounded px-4 py-2" placeholder="Search quiz" />
        </div>

        <div className="grid grid-cols-1 gap-6 py-4">
          {topics.map(topic =>{
            return  <div className="space-y-2" key={topic}>
            <h3 className="text-lg">{topic}</h3>
          </div>
          })}
        </div>
      </div>
    </div>
  )
}
