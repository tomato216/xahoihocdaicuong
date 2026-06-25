// data.js
const QUIZ_DATA = {
    // Cấu hình các bộ đề. true = đã có dữ liệu, false = đang phát triển
    bode: {
        1: { active: true, name: "Bộ đề số 1" },
        2: { active: false, name: "Bộ đề số 2" },
        3: { active: false, name: "Bộ đề số 3" },
        4: { active: false, name: "Bộ đề số 4" },
        5: { active: false, name: "Bộ đề số 5" },
        6: { active: false, name: "Bộ đề số 6" }
    },
    // Cấu hình 10 chương. true = có dữ liệu, false = đang phát triển
    chuong: {
        1: { active: false, name: "Chương 1" },
        2: { active: true, name: "Chương 2: Auguste Comte" },
        3: { active: false, name: "Chương 3" },
        4: { active: false, name: "Chương 4" },
        5: { active: false, name: "Chương 5" },
        6: { active: false, name: "Chương 6" },
        7: { active: false, name: "Chương 7" },
        8: { active: false, name: "Chương 8" },
        9: { active: false, name: "Chương 9" },
        10: { active: false, name: "Chương 10" }
    },
    // Chi tiết câu hỏi nằm trong Bộ đề 1, Chương 2
    questions: {
        "bode1_chuong2": {
            difficulty: "DỄ",
            list: [
                {
                    id: 1,
                    question: "Nhà tư tưởng nào sau đây được thừa nhận rộng rãi là 'Cha đẻ của Xã hội học'?",
                    answers: { A: "Karl Marx", B: "Max Weber", C: "Émile Durkheim", D: "Auguste Comte" },
                    correct: "D",
                    explain: "Auguste Comte là người đầu tiên khai sinh ra thuật ngữ 'Xã hội học' và đặt nền móng cho việc xây dựng môn khoa học này, do đó ông được tôn vinh là cha đẻ của xã hội học."
                },
                {
                    id: 2,
                    question: "Auguste Comte là nhà triết học, nhà xã hội học thuộc quốc gia nào?",
                    answers: { A: "Đức", B: "Anh", C: "Pháp", D: "Mỹ" },
                    correct: "C",
                    explain: "Auguste Comte sinh năm 1798 và mất năm 1857 tại Pháp, dành phần lớn cuộc đời hoạt động khoa học và giảng dạy tại Paris."
                },
                {
                    id: 3,
                    question: "Auguste Comte sống và hoạt động khoa học chủ yếu trong khoảng thời gian nào?",
                    answers: { A: "Thế kỷ XVII", B: "Thế kỷ XVIII", C: "Thế kỷ XIX", D: "Thế kỷ XX" },
                    correct: "C",
                    explain: "Auguste Comte sinh năm 1798 và mất năm 1857, toàn bộ sự nghiệp học thuật đỉnh cao của ông diễn ra trong thế kỷ XIX."
                },
                {
                    id: 4,
                    question: "Trước khi chính thức dùng thuật ngữ 'Xã hội học' (Sociology), Auguste Comte đã sử dụng thuật ngữ nào để chỉ ngành khoa học nghiên cứu về xã hội?",
                    answers: { A: "Sinh học xã hội", B: "Vật lý học xã hội", C: "Tâm lý học xã hội", D: "Thể chế học xã hội" },
                    correct: "B",
                    explain: "Ban đầu, Comte gọi ngành khoa học mới này là 'Vật lý học xã hội' (Social Physics) với mong muốn nghiên cứu xã hội một cách khách quan giống như các khoa học tự nhiên."
                },
                {
                    id: 5,
                    question: "Thuật ngữ 'Xã hội học' (Sociology) được Auguste Comte đưa ra lần đầu tiên vào năm nào?",
                    answers: { A: "1830", B: "1838", C: "1848", D: "1850" },
                    correct: "B",
                    explain: "Thuật ngữ 'Xã hội học' được Comte chính thức công bố và sử dụng trong tập IV của bộ sách 'Giáo trình triết học thực chứng' xuất bản năm 1838."
                },
                {
                    id: 6,
                    question: "Tác phẩm kinh điển nào sau đây là của Auguste Comte, đóng vai trò nền tảng cho sự ra đời của xã hội học thực chứng?",
                    answers: { A: "Giáo trình triết học thực chứng", B: "Phân công lao động xã hội", C: "Tư bản luận", D: "Đạo đức Tin lành và tinh thần của chủ nghĩa tư bản" },
                    correct: "A",
                    explain: "'Giáo trình triết học thực chứng' (Cours de Philosophie Positive) gồm 6 tập xuất bản từ năm 1830 đến 1842 là tác phẩm đồ sộ và quan trọng nhất của Auguste Comte."
                },
                {
                    id: 7,
                    question: "Theo Auguste Comte, xã hội học được chia làm hai bộ phận cấu thành cốt lõi nào?",
                    answers: { A: "Xã hội học vĩ mô và Xã hội học vi mô", B: "Tĩnh học xã hội và Động học xã hội", C: "Cơ cấu xã hội và Biến đổi xã hội", D: "Thể chế xã hội và Hành vi xã hội" },
                    correct: "B",
                    explain: "Cơ cấu lý thuyết xã hội học của Comte bao gồm hai mảng lớn gắn kết chặt chẽ với nhau là: Tĩnh học xã hội (Social Statics) và Động học xã hội (Social Dynamics)."
                },
                {
                    id: 8,
                    question: "Bộ phận nào trong xã hội học của Auguste Comte chuyên nghiên cứu về trật tự xã hội, các trạng thái cân bằng và các mối liên hệ giữa các bộ phận cấu thành xã hội?",
                    answers: { A: "Tĩnh học xã hội", B: "Động học xã hội", C: "Triết học thực chứng", D: "Vật lý học xã hội" },
                    correct: "A",
                    explain: "Tĩnh học xã hội là bộ phận nghiên cứu về quy luật tồn tại, cấu trúc, trật tự xã hội và các mối quan hệ đồng thuận giữa các bộ phận của hệ thống xã hội."
                },
                {
                    id: 9,
                    question: "Bộ phận nào trong xã hội học của Auguste Comte chuyên nghiên cứu về sự tiến bộ, sự tiến hóa và các quy luật biến đổi của xã hội theo thời gian?",
                    answers: { A: "Tĩnh học xã hội", B: "Động học xã hội", C: "Cơ cấu xã hội học", D: "Phương pháp luận thực chứng" },
                    correct: "B",
                    explain: "Động học xã hội nghiên cứu các quy luật biến đổi, sự phát triển và tiến bộ của xã hội loài người qua các giai đoạn lịch sử khác nhau."
                },
                {
                    id: 10,
                    question: "Học thuyết nổi tiếng nào của Auguste Comte giải thích sự phát triển của nhận thức con người và lịch sử xã hội qua ba giai đoạn tiến hóa tư duy?",
                    answers: { A: "Thuyết tiến hóa xã hội", B: "Quy luật ba giai đoạn", C: "Thuyết phân công lao động", D: "Thuyết hành động xã hội" },
                    correct: "B",
                    explain: "Quy luật ba giai đoạn là đóng góp lý thuyết nổi tiếng nhất của Comte, cho rằng nhận thức của con người và lịch sử xã hội bắt buộc phải trải qua ba giai đoạn phát triển tư duy kế tiếp nhau."
                },
                {
                    id: 11,
                    question: "Theo 'Quy luật ba giai đoạn' của Auguste Comte, ba giai đoạn phát triển tuần tự của tư duy con người là gì?",
                    answers: { A: "Thần thoại - Tôn giáo - Khoa học", B: "Thần học - Siêu hình - Triết học", C: "Thần học - Siêu hình - Thực chứng", D: "Nguyên thủy - Chiếm hữu - Phong kiến" },
                    correct: "C",
                    explain: "Tiến trình lịch sử tư duy nhân loại đi từ giai đoạn Thần học (Theological), qua giai đoạn Siêu hình (Metaphysical), và cuối cùng đạt tới giai đoạn Thực chứng (Positive)."
                },
                {
                    id: 12,
                    question: "Trong giai đoạn nào của Quy luật ba giai đoạn, tư duy con người có xu hướng giải thích các hiện tượng tự nhiên và xã hội bằng các lực lượng siêu nhiên, thần linh?",
                    answers: { A: "Giai đoạn thần học", B: "Giai đoạn siêu hình", C: "Giai đoạn thực chứng", D: "Giai đoạn khoa học" },
                    correct: "A",
                    explain: "Ở giai đoạn thần học, trí tuệ con người hướng tới việc tìm kiếm bản chất tối hậu của sự vật và giải thích mọi hiện tượng bằng sự tác động trực tiếp, liên tục của các lực lượng siêu nhiên (thần linh, thượng đế)."
                },
                {
                    id: 13,
                    question: "Giai đoạn thần học trong lý thuyết của Auguste Comte được chia nhỏ thành các nấc thang phát triển nào sau đây?",
                    answers: { A: "Đa thần giáo - Nhất thần giáo - Vô thần giáo", B: "Vật linh giáo (Sùng bái vật) - Đa thần giáo - Nhất thần giáo", C: "Tô-tem giáo - Ma thuật giáo - Tôn giáo hiện đại", D: "Nhất thần giáo - Siêu hình giáo - Thực chứng giáo" },
                    correct: "B",
                    explain: "Giai đoạn thần học tiến triển tuần tự qua ba nấc thang nhỏ hơn: đầu tiên là Vật linh giáo (sùng bái tự nhiên), tiếp theo là Đa thần giáo (tin vào nhiều vị thần), và cuối cùng là Nhất thần giáo (quy về một vị thần tối cao)."
                },
                {
                    id: 14,
                    question: "Trong giai đoạn siêu hình (metaphysical stage), con người giải thích thế giới xung quanh bằng công cụ nào?",
                    answers: { A: "Các sự kiện thực tế và thực nghiệm khoa học", B: "Ý muốn của các lực lượng siêu nhiên, thần thánh", C: "Các khái niệm trừu tượng, các thực thể tinh thần tự nhiên", D: "Các mô hình toán học và thống kê phức tạp" },
                    correct: "C",
                    explain: "Giai đoạn siêu hình thực chất là sự sửa đổi của giai đoạn thần học, trong đó các lực lượng siêu nhiên được thay thế bằng các lực lượng trừu tượng, các thực thể thực chất hay các khái niệm triết học trừu tượng (như 'tự nhiên', 'bản thể')."
                },
                {
                    id: 15,
                    question: "Đặc trưng cơ bản của 'Giai đoạn thực chứng' trong tư duy con người theo Auguste Comte là gì?",
                    answers: { A: "Đi tìm nguyên nhân đầu tiên và cứu cánh cuối cùng của vũ trụ", B: "Đồng nhất mọi quy luật xã hội với ý muốn của các đấng tối cao", C: "Sử dụng suy luận triết học mang tính tư biện, trừu tượng", D: "Từ bỏ việc tìm kiếm các nguyên nhân tuyệt đối để tập trung khám phá các quy luật vận hành của hiện tượng thông qua quan sát và thực nghiệm" },
                    correct: "D",
                    explain: "Ở giai đoạn thực chứng, con người từ bỏ việc tìm kiếm những khái niệm tuyệt đối, nguồn gốc và đích đến của vũ trụ để hướng trí tuệ vào việc khám phá các quy luật thực tế chi phối hiện tượng bằng cách kết hợp lý thuyết với quan sát."
                },
                {
                    id: 16,
                    question: "Auguste Comte đề xướng phương pháp luận nào cho xã hội học nhằm tách biệt nó khỏi triết học tư biện truyền thống?",
                    answers: { A: "Phương pháp luận mác-xít", B: "Phương pháp luận thực chứng", C: "Phương pháp luận hiện tượng học", D: "Phương pháp luận thông hiểu" },
                    correct: "B",
                    explain: "Auguste Comte là người sáng lập ra chủ nghĩa thực chứng (Positivism), khẳng định xã hội học phải dựa trên các sự kiện thực tế quan sát được và kiểm chứng được chứ không dựa vào các suy đoán triết học trừu tượng."
                },
                {
                    id: 17,
                    question: "Theo Auguste Comte, các khoa học được sắp xếp theo một trật tự tôn ti (hệ thống phân loại các khoa học) dựa trên nguyên tắc nào?",
                    answers: { A: "Tính phức tạp tăng dần và tính khái quát giảm dần", B: "Tính phức tạp giảm dần và tính khái quát tăng dần", C: "Trình tự thời gian xuất hiện trong lịch sử cổ đại", D: "Mức độ phổ biến của khoa học đó trong đời sống hàng ngày" },
                    correct: "A",
                    explain: "Comte phân loại các khoa học theo nguyên tắc đi từ đơn giản nhất, khái quát nhất đến phức tạp nhất, cụ thể nhất và phụ thuộc nhiều nhất."
                },
                {
                    id: 18,
                    question: "Trong hệ thống phân loại các khoa học của Auguste Comte, ngành khoa học nào được coi là cơ sở nền tảng, đơn giản nhất và xuất hiện đầu tiên?",
                    answers: { A: "Vật lý học", B: "Hóa học", C: "Sinh học", D: "Toán học" },
                    correct: "D",
                    explain: "Toán học là ngành khoa học có tính khái quát cao nhất, ít phức tạp nhất và đóng vai trò làm công cụ, nền tảng cho tất cả các ngành khoa học khác phát triển."
                },
                {
                    id: 19,
                    question: "Trong hệ thống phân loại các khoa học của Auguste Comte, xã hội học đứng ở vị trí nào?",
                    answers: { A: "Vị trí đầu tiên, làm nền tảng cho toán học", B: "Vị trí trung gian giữa vật lý học và hóa học", C: "Vị trí đỉnh cao, là ngành khoa học phức tạp nhất và xuất hiện muộn nhất", D: "Không nằm trong hệ thống phân loại khoa học thực chứng" },
                    correct: "C",
                    explain: "Xã hội học nằm ở đỉnh cao của tháp phân loại khoa học của Comte. Đây là khoa học phức tạp nhất, cụ thể nhất và phụ thuộc vào tất cả các ngành khoa học tự nhiên đi trước."
                },
                {
                    id: 20,
                    question: "Trật tự sắp xếp đúng từ thấp đến cao (từ đơn giản đến phức tạp) của 6 ngành khoa học cơ bản theo Auguste Comte là gì?",
                    answers: { A: "Toán học -> Vật lý học -> Thiên văn học -> Hóa học -> Sinh học -> Xã hội học", B: "Toán học -> Thiên văn học -> Vật lý học -> Hóa học -> Sinh học -> Xã hội học", C: "Xã hội học -> Sinh học -> Hóa học -> Vật lý học -> Thiên văn học -> Toán học", D: "Toán học -> Sinh học -> Vật lý học -> Hóa học -> Thiên văn học -> Xã hội học" },
                    correct: "B",
                    explain: "Hệ thống phân loại khoa học của Comte đi theo trình tự: Toán học, Thiên văn học, Vật lý học, Hóa học, Sinh học và cuối cùng là Xã hội học."
                },
                {
                    id: 21,
                    question: "Phương pháp nghiên cứu nào sau đây KHÔNG thuộc bốn phương pháp nghiên cứu thực chứng cơ bản mà Auguste Comte đề xuất cho xã hội học?",
                    answers: { A: "Quan sát (Observation)", B: "Thực nghiệm (Experiment)", C: "So sánh (Comparison)", D: "Phỏng vấn sâu chất lượng (In-depth interview)" },
                    correct: "D",
                    explain: "Bốn phương pháp nghiên cứu cốt lõi của xã hội học thực chứng theo Comte gồm: Quan sát, Thực nghiệm, So sánh và Lịch sử. Phỏng vấn sâu chất lượng là phương pháp phát triển sau này trong xã hội học hiện đại."
                },
                {
                    id: 22,
                    question: "Trong các phương pháp xã hội học của Auguste Comte, phương pháp nào liên quan đến việc đối chiếu xã hội loài người với xã hội động vật hoặc đối chiếu các xã hội khác nhau ở các khu vực khác nhau?",
                    answers: { A: "Phương pháp quan sát", B: "Phương pháp thực nghiệm", C: "Phương pháp so sánh", D: "Phương pháp lịch sử" },
                    correct: "C",
                    explain: "Phương pháp so sánh bao gồm việc so sánh xã hội loài người với xã hội động vật cấp cao, so sánh các trạng thái xã hội cùng tồn tại ở các khu vực địa lý khác nhau để tìm ra quy luật phát triển chung."
                },
                {
                    id: 23,
                    question: "Theo Auguste Comte, phương pháp khoa học đặc thù và quan trọng nhất của xã hội học để tìm ra các quy luật biến đổi xã hội lâu dài là phương pháp nào?",
                    answers: { A: "Phương pháp quan sát trực tiếp", B: "Phương pháp lịch sử (phương pháp so sánh lịch sử)", C: "Phương pháp thực nghiệm gián tiếp", D: "Phương pháp toán học thống kê" },
                    correct: "B",
                    explain: "Phương pháp lịch sử (so sánh lịch sử) nghiên cứu chuỗi các trạng thái liên tục của nhân loại là phương pháp đặc thù nhất của xã hội học để phát hiện ra quy luật phát triển tiến hóa của xã hội."
                },
                {
                    id: 24,
                    question: "Theo quan điểm của Auguste Comte, thiết chế xã hội nào được coi là 'tế bào xã hội' sơ đẳng và quan trọng nhất, làm nền móng cho trật tự xã hội?",
                    answers: { A: "Cá nhân đơn lẻ", B: "Gia đình", C: "Nhà nước", D: "Hệ thống giáo dục" },
                    correct: "B",
                    explain: "Comte cho rằng xã hội không được cấu thành từ các cá nhân riêng rẽ mà từ các nhóm xã hội, trong đó gia đình là nhóm xã hội cơ bản nhất, là tế bào của toàn bộ cơ thể xã hội."
                },
                {
                    id: 25,
                    question: "Auguste Comte nhìn nhận vai trò của 'Cá nhân' trong xã hội như thế nào?",
                    answers: { A: "Cá nhân là chủ thể độc lập tuyệt đối cấu thành nên xã hội", B: "Cá nhân chỉ là một sự trừu tượng, không thể tồn tại độc lập ngoài các mối liên kết xã hội", C: "Cá nhân quan trọng hơn gia đình và xã hội", D: "Cá nhân luôn mâu thuẫn và đối kháng không thể dung hòa với nhà nước" },
                    correct: "B",
                    explain: "Trong quan điểm xã hội học của Comte, cá nhân đơn lẻ chỉ là một sự trừu tượng hóa mang tính khoa học, hệ thống xã hội thực sự được xây dựng trên nền tảng các liên kết nhóm, bắt đầu từ gia đình."
                },
                {
                    id: 26,
                    question: "Theo lý thuyết của Auguste Comte, động lực chính thúc đẩy sự tiến bộ xã hội và lịch sử loài người là gì?",
                    answers: { A: "Sự đấu tranh giai cấp về mặt kinh tế", B: "Sự phát triển vượt bậc của công nghệ máy móc", C: "Sự tiến hóa về mặt trí tuệ và nhận thức tư duy của con người", D: "Các cuộc chiến tranh giành lãnh thổ và tài nguyên tự nhiên" },
                    correct: "C",
                    explain: "Comte tin rằng tư duy, nhận thức trí tuệ của con người quyết định hành động và sự phát triển của thiết chế xã hội, do đó tiến hóa nhận thức là động lực sâu xa của tiến bộ xã hội."
                },
                {
                    id: 27,
                    question: "Thuật ngữ 'Trật tự và Tiến bộ' (Order and Progress) gắn liền với tư tưởng của nhà xã hội học nào?",
                    answers: { A: "Herbert Spencer", B: "Émile Durkheim", C: "Karl Marx", D: "Auguste Comte" },
                    correct: "D",
                    explain: "'Trật tự và Tiến bộ' là khẩu hiệu hành động cốt lõi của chủ nghĩa thực chứng do Comte đề xướng, biểu hiện cho sự kết hợp hài hòa giữa Tĩnh học xã hội (Trật tự) và Động học xã hội (Tiến bộ)."
                },
                {
                    id: 28,
                    question: "Khẩu hiệu nổi tiếng nào của Auguste Comte sau này đã được chọn để khắc lên quốc kỳ của nước Cộng hòa Brazil?",
                    answers: { A: "Tự do - Bình đẳng - Bác ái", B: "Trật tự và Tiến bộ (Ordem e Progresso)", C: "Vô sản tất cả các nước đoàn kết lại", D: "Tri thức là sức mạnh" },
                    correct: "B",
                    explain: "Khẩu hiệu 'Trật tự và Tiến bộ' (tiếng Bồ Đào Nha: 'Ordem e Progresso') trên quốc kỳ Brazil xuất phát từ nguyên lý triết học thực chứng của Auguste Comte."
                },
                {
                    id: 29,
                    question: "Theo tĩnh học xã hội của Auguste Comte, cơ chế chính nào giúp duy trì sự gắn kết, đồng thuận xã hội và ngăn chặn sự phân rã do phân công lao động gây ra?",
                    answers: { A: "Sự áp chế bằng bạo lực của quân đội", B: "Sự đồng thuận chung về mặt đạo đức, niềm tin và sự điều phối của Nhà nước", C: "Cuộc cạnh tranh tự do trên thị trường kinh tế", D: "Việc bãi bỏ hoàn toàn các tôn giáo truyền thống" },
                    correct: "B",
                    explain: "Sự đồng thuận chung về giá trị tinh thần kết hợp với vai trò điều hành, liên kết của chính quyền nhà nước là điều kiện tiên quyết để giữ gìn trật tự và đoàn kết xã hội."
                },
                {
                    id: 30,
                    question: "Giai đoạn thực chứng trong sự phát triển tư duy của Comte tương ứng với sự thống trị của lực lượng xã hội nào trong thực tế đời sống?",
                    answers: { A: "Các linh mục và quý tộc quân sự", B: "Các luật gia và nhà triết học tư biện", C: "Các nhà khoa học thực chứng và các nhà công nghiệp", D: "Các nhà hoạt động cách mạng vô sản" },
                    correct: "C",
                    explain: "Trong thời đại thực chứng, các nhà khoa học thực chứng sẽ chịu trách nhiệm định hướng tinh thần, đạo đức, còn các nhà công nghiệp sẽ điều hành hoạt động kinh tế và xã hội thực tế."
                },
                {
                    id: 31,
                    question: "Khi giải thích về sự phân công lao động xã hội, Auguste Comte lo ngại điều gì nhất có thể xảy ra nếu thiếu đi sự điều phối của nhà nước?",
                    answers: { A: "Năng suất lao động xã hội bị suy giảm nghiêm trọng", B: "Sự gia tăng khoảng cách giàu nghèo quá mức", C: "Sự phân rã xã hội, ích kỷ cá nhân và suy yếu đoàn kết xã hội", D: "Sự sụp đổ của nền kinh tế nông nghiệp truyền thống" },
                    correct: "C",
                    explain: "Phân công lao động giúp phát triển năng lực chuyên môn nhưng đồng thời dễ dẫn đến sự cô lập cá nhân và ích kỷ nhóm, nếu không có nhà nước điều phối sẽ phá vỡ sự đoàn kết xã hội."
                },
                {
                    id: 32,
                    question: "Trong những năm cuối đời, Auguste Comte đã đề xuất thành lập một tổ chức tinh thần mới nhằm thay thế các tôn giáo cũ, đó là gì?",
                    answers: { A: "Hội triết học siêu hình", B: "Tôn giáo của nhân loại (Religion of Humanity)", C: "Giáo hội thực chứng vũ trụ", D: "Tông phái khoa học tự nhiên" },
                    correct: "B",
                    explain: "Nhận thấy vai trò quan trọng của tôn giáo trong việc duy trì đạo đức và trật tự, Comte đã xây dựng 'Tôn giáo của nhân loại' dựa trên nền tảng yêu thương và tôn thờ nhân loại thay vì các vị thần linh siêu nhiên."
                },
                {
                    id: 33,
                    question: "Theo Auguste Comte, nguyên nhân chính dẫn đến các cuộc khủng hoảng chính trị và xã hội ở nước Pháp thời kỳ ông sống là gì?",
                    answers: { A: "Sự thiếu hụt trầm trọng về mặt tài nguyên thiên nhiên", B: "Sự bóc lột của giai cấp tư sản đối với giai cấp vô sản", C: "Sự hỗn loạn về mặt tư tưởng do sự chung sống và xung đột giữa các hệ thống nhận thức (Thần học, Siêu hình, Thực chứng)", D: "Sự can thiệp quân sự từ các quốc gia láng giềng châu Âu" },
                    correct: "C",
                    explain: "Khủng hoảng xã hội xuất phát từ sự khủng hoảng nhận thức; khi tư duy thần học và siêu hình đã suy yếu nhưng tư duy thực chứng chưa hoàn toàn thiết lập được thế độc tôn để định hướng xã hội."
                },
                {
                    id: 34,
                    question: "Comte cho rằng nhiệm vụ chính yếu nhất của xã hội học thực chứng là gì?",
                    answers: { A: "Thực hiện các cuộc cách mạng lật đổ chính quyền đương thời", B: "Tìm ra các quy luật khách quan của xã hội để cải tạo xã hội một cách hòa bình, đem lại trật tự và tiến bộ", C: "Nghiên cứu đời sống tâm lý sâu kín của từng cá nhân đơn lẻ", D: "Cổ vũ cho lối sống tự do tự tại, thoát ly khỏi các ràng buộc tập thể" },
                    correct: "B",
                    explain: "Xã hội học thực chứng hướng đến việc tìm ra các quy luật xã hội bất biến nhằm dự báo và cải biến xã hội một cách khoa học, tránh các xung đột bạo lực cách mạng tàn phá trật tự."
                },
                {
                    id: 35,
                    question: "Khái niệm 'Vật lý học xã hội' phản ánh mong muốn nào của Auguste Comte đối với ngành khoa học mới này?",
                    answers: { A: "Áp dụng máy móc vật lý vào quy trình sản xuất công nghiệp", B: "Áp dụng các phương pháp nghiên cứu khách quan của khoa học tự nhiên vào việc nghiên cứu xã hội", C: "Chứng minh xã hội loài người vận hành giống hệt như các hạt nguyên tử", D: "Biến xã hội học thành một nhánh trực thuộc vật lý học hiện đại" },
                    correct: "B",
                    explain: "Comte muốn dùng các tiêu chuẩn, phương pháp khách quan như quan sát, thực nghiệm của vật lý học và các khoa học tự nhiên khácthể đưa xã hội học trở thành một khoa học thực chứng thực thụ."
                },
                {
                    id: 36,
                    question: "Tại sao Auguste Comte lại quyết định đổi tên từ 'Vật lý học xã hội' sang 'Xã hội học'?",
                    answers: { A: "Vì ông nhận thấy thuật ngữ cũ không mang tính triết học cao", B: "Vì nhà thống kê học người Bỉ Adolphe Quetelet đã sử dụng thuật ngữ 'Vật lý học xã hội' để chỉ nghiên cứu thống kê đơn thuần", C: "Vì chính quyền Pháp cấm sử dụng thuật ngữ 'Vật lý học xã hội'", D: "Vì các đồng nghiệp tại trường Đại học Bách khoa Paris yêu cầu ông đổi tên" },
                    correct: "B",
                    explain: "Nhằm tránh sự đồng nhất ngành khoa học mới của mình với các nghiên cứu thống kê mô tả thuần túy của Adolphe Quetelet, Comte đã sáng tạo ra thuật ngữ ghép 'Xã hội học' (Sociology)."
                },
                {
                    id: 37,
                    question: "Theo cách phân loại khoa học của Auguste Comte, khoa học nào đứng liền kề trước xã hội học và là tiền đề trực tiếp cho xã hội học phát triển?",
                    answers: { A: "Hóa học", B: "Toán học", C: "Sinh học", D: "Thiên văn học" },
                    correct: "C",
                    explain: "Sinh học nghiên cứu đời sống hữu cơ của cá thể, là tiền đề trực tiếp để xã hội học nghiên cứu đời sống hữu cơ mang tính tập thể của nhân loại."
                },
                {
                    id: 38,
                    question: "Phát biểu nào sau đây phản ánh đúng quan điểm của Auguste Comte về mối quan hệ giữa 'Trật tự' và 'Tiến bộ'?",
                    answers: { A: "Trật tự và Tiến bộ loại trừ lẫn nhau, không thể cùng tồn tại", B: "Tiến bộ là sự phát triển của Trật tự; không thể có Tiến bộ nếu không có Trật tự", C: "Trật tự là mục tiêu duy nhất, còn Tiến bộ là không cần thiết", D: "Tiến bộ luôn phá hủy mọi nền tảng của Trật tự xã hội" },
                    correct: "B",
                    explain: "Đối với Comte, trật tự và tiến bộ là hai mặt không thể tách rời của đời sống xã hội; trật tự là điều kiện nền tảng cho sự tiến bộ, và tiến bộ chính là sự hiển lộ sinh động của trật tự."
                },
                {
                    id: 39,
                    question: "Khi bàn về thiết chế Gia đình, Auguste Comte nhấn mạnh chức năng đạo đức - xã hội nào quan trọng nhất của nó?",
                    answers: { A: "Tăng trưởng kinh tế và tích lũy của cải vật chất cho thế hệ sau", B: "Giáo dục xã hội hóa bước đầu, dạy cá nhân biết kiểm soát sự ích kỷ và sống vì người khác", C: "Quyết định các hoạt động chính trị của các thành viên trong gia đình", D: "Cung cấp lao động giá rẻ cho các nhà máy công nghiệp thời kỳ đó" },
                    correct: "B",
                    explain: "Gia đình là trường học đạo đức đầu tiên, nơi rèn luyện cho cá nhân biết yêu thương, chia sẻ, giúp khắc phục xu hướng ích kỷ tự nhiên để hòa nhập vào đời sống cộng đồng rộng lớn hơn."
                },
                {
                    id: 40,
                    question: "Trong thời kỳ thần học của lịch sử loài người, lực lượng nào nắm giữ quyền lực tinh xã hội tối cao?",
                    answers: { A: "Các nhà khoa học và triết gia thực chứng", B: "Các linh mục, thầy tế và quý tộc quân sự", C: "Các nhà công nghiệp và thương nhân giàu có", D: "Các đại biểu quốc hội do nhân dân bầu ra" },
                    correct: "B",
                    explain: "Giai đoạn thần học gắn liền với niềm tin vào thần linh, do đó các giáo sĩ, thầy tế nắm giữ quyền kiểm soát tư tưởng, trong khi giới quân sự kiểm soát quyền lực thế tục."
                },
                {
                    id: 41,
                    question: "Phương pháp 'Thực nghiệm' trong xã hội học theo định nghĩa của Auguste Comte được hiểu chủ yếu là gì?",
                    answers: { A: "Tạo ra các phòng thí nghiệm xã hội nhân tạo để thử nghiệm hành vi con người", B: "Phân tích các trường hợp xã hội có sự rối loạn, bệnh lý hoặc biến cố lịch sử để tìm ra các trạng thái bình thường", C: "Tiến hành các cuộc khảo sát thăm dò ý kiến công chúng bằng bảng hỏi diện rộng", D: "Thử nghiệm áp dụng các đạo luật mới tại một địa phương trước khi ban hành cả nước" },
                    correct: "B",
                    explain: "Vì không thể tạo ra các điều kiện thực nghiệm nhân tạo đối với xã hội như trong vật lý hay hóa học, thực nghiệm trong xã hội học chủ yếu là thực nghiệm gián tiếp - nghiên cứu các biến đổi bất thường, bệnh lý xã hội để đối chiếu với trạng thái bình thường."
                },
                {
                    id: 42,
                    question: "Auguste Comte cho rằng sự phát triển của nhận thức con người qua Quy luật ba giai đoạn là một quá trình mang tính chất gì?",
                    answers: { A: "Ngẫu nhiên, không theo quy luật cụ thể nào", B: "Thụt lùi dần theo thời gian do sự suy đồi đạo đức", C: "Tiến hóa tất yếu, tuần tư và mang tính tiến bộ", D: "Luẩn quẩn, tuần hoàn theo các chu kỳ khép kín" },
                    correct: "C",
                    explain: "Tiến trình ba giai đoạn là một quy luật tất yếu mang tính chất tiến hóa đi lên, phản ánh sự phát triển ngày càng hoàn thiện của trí tuệ loài người."
                },
                {
                    id: 43,
                    question: "Bản chất của triết học thực chứng (Positivism) do Auguste Comte khởi xướng có nghĩa là gì?",
                    answers: { A: "Chấp nhận mọi giáo điều tôn giáo một cách mù quáng", B: "Tin tưởng vào tri thức khoa học dựa trên bằng chứng thực tế khách quan", C: "Tập trung vào các suy luận trừu tượng về sự sống sau cái chết", D: "Nghi ngờ tất cả và phủ nhận khả năng nhận thức thế giới của con người" },
                    correct: "B",
                    explain: "Thực chứng nghĩa là có thực, hữu ích, chắc chắn, chính xác và có thể kiểm chứng được bằng kinh nghiệm thực tế khách quan thông qua các giác quan."
                },
                {
                    id: 44,
                    question: "Nhận định nào dưới đây mô tả ĐÚNG vai trò của Nhà nước theo quan điểm Tĩnh học xã hội của Auguste Comte?",
                    answers: { A: "Nhắn nước là công cụ áp bức giai cấp cần phải bị xóa bỏ càng sớm càng tốt", B: "Nhà nước chỉ nên đóng vai trò 'kẻ gác đêm' không can thiệp vào xã hội", C: "Nhà nước là cơ quan điều phối, liên kết và duy trì trật tự chung giữa các bộ phận của xã hội", D: "Nhà nước là thiết chế duy nhất quyết định mọi tư duy khoa học của người dân" },
                    correct: "C",
                    explain: "Nhà nước đóng vai trò trung tâm trong việc điều hợp, duy trì sự hài hòa, gắn kết giữa các thành phần xã hội, ngăn ngừa xu hướng ly tâm và phân rã xã hội."
                },
                {
                    id: 45,
                    question: "Theo hệ thống phân loại khoa học của Auguste Comte, tại sao ngành Sinh học lại phức tạp hơn ngành Hóa học?",
                    answers: { A: "Vì sinh học sử dụng nhiều phép tính toán phức tạp hơn hóa học", B: "Vì sinh học nghiên cứu các thực thể sống có tổ chức, tích hợp cả các quy luật hóa học nhưng có thêm các quy luật sự sống mới", C: "Vì sinh học xuất hiện trước hóa học trong tiến trình lịch sử nhân loại", D: "Vì sinh học hoàn toàn độc lập và không cần đến các kiến thức hóa học" },
                    correct: "B",
                    explain: "Sinh học nghiên cứu cơ thể sống, một cấp độ tổ chức vật chất cao hơn vật chất vô cơ, do đó nó vừa chịu chi phối bởi các quy luật hóa học, vật lý vừa có thêm những quy luật sinh học đặc thù, phức tạp hơn."
                },
                {
                    id: 46,
                    question: "Auguste Comte chịu ảnh hưởng sâu sắc bởi những biến động lịch sử của sự kiện vĩ đại nào ở nước Pháp?",
                    answers: { A: "Cuộc Cách mạng Công nghiệp Anh", B: "Cuộc Cách mạng Pháp năm 1789 và thời kỳ hậu cách mạng", C: "Cuộc Cách mạng Tháng Mười Nga", D: "Cuộc Chiến tranh giành độc lập của nước Mỹ" },
                    correct: "B",
                    explain: "Auguste Comte sinh ra ngay sau cuộc Đại cách mạng Pháp (1789). Sự bất ổn định chính trị, xã hội kéo dài của thời kỳ hậu cách mạng Pháp chính là động lực thôi thúc ông tìm kiếm một khoa học về trật tự và tiến bộ xã hội."
                },
                {
                    id: 47,
                    question: "Theo lý thuyết của Auguste Comte, xã hội loài người ở giai đoạn 'Thực chứng' sẽ đạt tới sự thống nhất nhờ vào yếu tố nào?",
                    answers: { A: "Sự sợ hãi hình phạt của thần linh", B: "Sự sùng bái các lý thuyết triết học trừu tượng", C: "Sự đồng thuận dựa trên tri thức khoa học thực chứng và tình đoàn kết nhân loại", D: "Sự thống trị tuyệt đối của một quốc gia bá quyền" },
                    correct: "C",
                    explain: "Khi đạt tới giai đoạn thực chứng, con người chia sẻ chung một thế giới quan khoa học thực chứng, từ bỏ các tranh cãi siêu hình, từ đó thiết lập sự đồng thuận và đoàn kết bền vững dựa trên tình yêu thương nhân loại."
                },
                {
                    id: 48,
                    question: "Auguste Comte đã sử dụng phương pháp nào để chứng minh cho 'Quy luật ba giai đoạn' của mình?",
                    answers: { A: "Khảo sát thực địa bằng bảng hỏi đối với người dân Pháp thời đó", B: "Phân tích lịch sử tư duy tiến hóa của nhân loại qua các thời kỳ", C: "Thực hiện các cuộc phỏng vấn sâu với các nhà khoa học hàng đầu đương thời", D: "Đối chiếu cấu trúc não bộ của con người qua các thế hệ" },
                    correct: "B",
                    explain: "Comte đã áp dụng phương pháp so sánh lịch sử để chỉ ra sự tiến hóa tuần tự của tri thức nhân loại từ thần học qua siêu hình đến thực chứng qua các giai đoạn lịch sử lớn."
                },
                {
                    id: 49,
                    question: "Nhận định nào sau đây KHÔNG đúng khi nói về những đóng góp của Auguste Comte cho ngành Xã hội học?",
                    answers: { A: "Ông là người đặt tên cho ngành học và đặt nền móng cho chủ nghĩa thực chứng", B: "Ông đề xuất cơ cấu lý thuyết gồm Tĩnh học xã hội và Động học xã hội", C: "Ông là người đầu tiên thực hiện các cuộc sơ bộ định lượng bằng bảng hỏi quy mô lớn tại châu Âu", D: "Ông nhấn mạnh việc sử dụng các phương pháp nghiên cứu khách quan để tìm ra quy luật xã hội" },
                    correct: "C",
                    explain: "Mặc dù đề xuất các phương pháp quan sát, thực nghiệm, so sánh, lịch sử mang tính lý thuyết, Comte chưa bao giờ tiến hành các cuộc khảo sát thực nghiệm xã hội học quy mô lớn bằng bảng hỏi định lượng trong thực tế đời sống."
                },
                {
                    id: 50,
                    question: "Câu nói nổi tiếng thể hiện tư tưởng cốt lõi của chủ nghĩa thực chứng Auguste Comte về vai trò của khoa học xã hội là gì?",
                    answers: { A: "'Vấn đề không phải là giải thích thế giới, mà là cải tạo thế giới'", B: "'Biết để dự báo, dự báo để kiểm soát' (Savoir pour prévoir, afin de pouvoir)", C: "'Tôi tư duy, nên tôi tồn tại'", D: "'Hãy cho tôi một điểm tựa, tôi sẽ nhấc bổng cả Trái Đất'" },
                    correct: "B",
                    explain: "Đây là châm ngôn nổi tiếng của Comte, khẳng định mục đích của khoa học thực chứng là tìm ra quy luật của các hiện tượng để từ đó dự báo chính xác xu hướng phát triển và chủ động kiểm soát, tổ chức lại xã hội một cách hiệu quả."
                }
            ]
        }
    }
};
