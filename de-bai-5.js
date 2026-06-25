// Bộ câu hỏi 5 (Độ khó: Dễ - Trung bình) - Tác giả: MAX WEBER
const QUIZ_QUESTIONS = [
    {
        question: "Max Weber sinh năm nào và mất năm nào?",
        answers: { A: "1798 – 1857", B: "1818 – 1883", C: "1858 – 1917", D: "1864 – 1920" },
        correct: "D",
        explain: "Max Weber sinh ngày 21 tháng 4 năm 1864 tại Erfurt (Đức) và qua đời ngày 14 tháng 6 năm 1920 tại Munich (Đức)."
    },
    {
        question: "Max Weber là nhà tư tưởng, nhà xã hội học lỗi lạc thuộc quốc gia nào?",
        answers: { A: "Pháp", B: "Anh", C: "Đức", D: "Mỹ" },
        correct: "C",
        explain: "Max Weber cùng với Karl Marx là những học giả người Đức có đóng góp khổng lồ định hình nên nền xã hội học cổ điển thế giới."
    },
    {
        question: "Tác phẩm nổi tiếng nhất của Max Weber xuất bản năm 1905, nghiên cứu về mối quan hệ giữa tôn giáo và sự phát triển của chủ nghĩa tư bản là gì?",
        answers: { A: "Giáo trình triết học thực chứng", B: "Đạo đức Tin lành và tinh thần của chủ nghĩa tư bản (The Protestant Ethic and the Spirit of Capitalism)", C: "Kinh tế và Xã hội (Economy and Society)", D: "Tuyên ngôn của Đảng Cộng sản" },
        correct: "B",
        explain: "\"Đạo đức Tin lành và tinh thần của chủ nghĩa tư bản\" (1905) là tác phẩm kinh điển nhất của Weber, phân tích vai trò quyết định của hệ thống giá trị tinh thần tôn giáo đối với sự trỗi dậy của kinh tế tư bản chủ nghĩa."
    },
    {
        question: "Khác với Émile Durkheim (nghiên cứu sự kiện xã hội vĩ mô), Max Weber xác định đối tượng nghiên cứu cốt lõi của Xã hội học là gì?",
        answers: { A: "Sự tiến hóa của các sinh vật sống", B: "Cơ sở hạ tầng kinh tế vật chất", C: "Hành động xã hội (Social action) của con người", D: "Các biến đổi khí hậu tự nhiên" },
        correct: "C",
        explain: "Weber định nghĩa xã hội học là khoa học nhằm thông hiểu diễn giải hành động xã hội, lấy hành vi mang ý nghĩa chủ quan của cá nhân làm trung tâm phân tích."
    },
    {
        question: "Theo định nghĩa của Max Weber, một hành vi của con người được coi là \"Hành động xã hội\" khi nó thỏa mãn hai điều kiện nào?",
        answers: { A: "Phải được thực hiện ngoài đường phố và có nhiều người cùng tham gia", B: "Người hành động gán cho nó một ý nghĩa chủ quan (subjective meaning) và hành động đó có sự định hướng vào hành vi của người khác", C: "Phải tuân theo các sắc lệnh pháp luật bắt buộc của chính quyền nhà nước", D: "Là các phản xạ tự nhiên của cơ thể như hắt hơi hay ăn uống khi đói" },
        correct: "B",
        explain: "Hành động xã hội bắt buộc phải có nghĩa chủ quan do chủ thể gán cho nó, đồng thời hướng tới người khác trong quá trình thực hiện hành động."
    },
    {
        question: "Hành vi nào sau đây KHÔNG phải là một \"hành động xã hội\" theo định nghĩa của Max Weber?",
        answers: { A: "Hai người đi xe đạp đâm sầm vào nhau một cách vô ý do đường trơn", B: "Hai người đi xe đạp dừng lại xin lỗi và thương lượng đền bù thiệt hại sau va chạm", C: "Một người công nhân đang viết đơn khiếu nại gửi ban giám đốc công ty", D: "Một tín đồ đang dâng lễ vật tại đền thờ trước sự chứng kiến của giáo dân" },
        correct: "A",
        explain: "Việc hai xe đâm vào nhau một cách vô ý chỉ là hiện tượng vật lý tự nhiên ngẫu nhiên, không chứa đựng ý định chủ quan hướng tới đối phương từ trước của người hành động."
    },
    {
        question: "Max Weber phân chia hành động xã hội thành mấy loại hình lý tưởng cơ bản?",
        answers: { A: "2 loại", B: "3 loại", C: "4 loại", D: "5 loại" },
        correct: "C",
        explain: "Weber phân loại hành động xã hội thành 4 loại: Hành động duy lý công cụ, Hành động duy lý giá trị, Hành động cảm xúc và Hành động truyền thống."
    },
    {
        question: "Loại hành động xã hội nào được thực hiện khi cá nhân lựa chọn phương tiện tối ưu nhất để đạt được một mục tiêu thực tế đã được cân nhắc kỹ lưỡng?",
        answers: { A: "Hành động truyền thống (Traditional action)", B: "Hành động cảm xúc (Affective action)", C: "Hành động duy lý công cụ (Zweckrational / Instrumentally rational action)", D: "Hành động duy lý giá trị (Wertrational / Value-rational action)" },
        correct: "C",
        explain: "Hành động duy lý công cụ đặc trưng bởi sự tính toán chi phí, hiệu quả, lựa chọn phương tiện phù hợp nhất để đạt mục đích thực tế (ví dụ: doanh nghiệp đầu tư để tối đa hóa lợi nhuận)."
    },
    {
        question: "Loại hành động xã hội nào được thực hiện vì niềm tin tuyệt đối vào các giá trị tự thân (đạo đức, tôn giáo, thẩm mỹ) bất chấp hậu quả của hành động đó ra sao?",
        answers: { A: "Hành động duy lý công cụ", B: "Hành động duy lý giá trị (Wertrational / Value-rational action)", C: "Hành động truyền thống", D: "Hành động cảm xúc" },
        correct: "B",
        explain: "Người hành động duy lý giá trị coi trọng nghĩa vụ, danh dự hoặc đức tin tôn giáo là trên hết; họ hành động để trung thành với giá trị đó chứ không quan tâm đến lợi ích vật chất thu lại (ví dụ: thuyền trưởng chìm theo tàu)."
    },
    {
        question: "Loại hành động xã hội nào được thúc đẩy trực tiếp bởi trạng thái tình cảm bộc phát (yêu, ghét, giận dữ, sợ hãi) của người hành động tại thời điểm đó?",
        answers: { A: "Hành động cảm xúc (Affective action)", B: "Hành động truyền thống", C: "Hành động duy lý công cụ", D: "Hành động duy lý giá trị" },
        correct: "A",
        explain: "Hành động cảm xúc không có sự tính toán duy lý hay cân nhắc giá trị lâu dài, mà hoàn toàn do cảm xúc nhất thời chi phối (ví dụ: mẹ ôm hôn con, giận dữ đánh người khi bị lăng mạ)."
    },
    {
        question: "Loại hành động xã hội nào được thực hiện một cách tự động theo thói quen lâu đời, phong tục tập quán lưu truyền từ thế hệ này sang thế hệ khác?",
        answers: { A: "Hành động duy lý công cụ", B: "Hành động duy lý giá trị", C: "Hành động truyền thống (Traditional action)", D: "Hành động cảm xúc" },
        correct: "C",
        explain: "Hành động truyền thống diễn ra như một phản xạ tự nhiên dựa trên nếp sống cũ, người hành động không cần lập kế hoạch hay đặt câu hỏi tại sao phải làm như vậy (ví dụ: ăn giỗ tổ tiên, chào hỏi người lớn tuổi)."
    },
    {
        question: "Phương pháp nghiên cứu đặc trưng của xã hội học Max Weber, hướng tới việc thấu hiểu ý nghĩa bên trong và động cơ hành động của chủ thể được gọi là gì?",
        answers: { A: "Phương pháp quan sát thực nghiệm gián tiếp", B: "Phương pháp thông hiểu (Verstehen / Interpretive understanding)", C: "Phương pháp toán học thống kê định lượng", D: "Phương pháp duy vật biện chứng lịch sử" },
        correct: "B",
        explain: "\"Verstehen\" (thông hiểu) là việc nhà nghiên cứu đặt mình vào vị trí của chủ thể hành động để diễn giải, thấu hiểu ý nghĩa chủ quan và hoàn cảnh văn hóa sinh ra hành động đó."
    },
    {
        question: "Khái niệm \"Loại hình lý tưởng\" (Ideal type) của Max Weber được hiểu là gì?",
        answers: { A: "Một xã hội hoàn hảo, đạo đức nhất mà con người cần xây dựng trong tương lai", B: "Một công cụ tư duy, mô hình lý thuyết thuần túy lược bỏ các chi tiết phụ để làm nổi bật các đặc trưng cơ bản phục vụ cho việc so sánh, phân tích thực tại", C: "Một hành vi ứng xử lịch sự nhất của công dân ngoài đời thực", D: "Một phương pháp thí nghiệm sinh học trong phòng kín" },
        correct: "B",
        explain: "Loại hình lý tưởng không mang tính chất đánh giá đạo đức \"tốt đẹp\", mà là một cấu trúc khái niệm được nhà xã hội học xây dựng để làm thước đo so sánh mức độ sai lệch của thực tại xã hội."
    },
    {
        question: "Theo lý thuyết của Max Weber, sự trỗi dậy của chủ nghĩa tư bản hiện đại ở Tây Âu gắn liền với đạo đức của giáo phái nào trong đạo Tin lành?",
        answers: { A: "Giáo phái Calvin (Calvinism)", B: "Giáo phái Luther", C: "Đạo Công giáo La Mã", D: "Đạo Chính thống giáo Đông phương" },
        correct: "A",
        explain: "Thuyết tiền định của giáo phái Calvin tạo ra một áp lực tâm lý vô cùng lớn thúc đẩy các tín đồ phải lao động cật lực và tích lũy của cải để tìm kiếm dấu hiệu được cứu rỗi của Thượng đế."
    },
    {
        question: "Khái niệm \"Thiên chức / Nghề nghiệp\" (Beruf / Calling) trong thần học Tin lành được Max Weber giải thích có tác động thế nào đến hành vi kinh tế?",
        answers: { A: "Coi việc lao động sản xuất chuyên cần ở trần thế là nghĩa vụ tôn giáo cao cả nhất để tôn vinh Chúa", B: "Kêu gọi tín đồ từ bỏ mọi hoạt động kinh doanh để đi tu hành", C: "Cho rằng việc kiếm tiền là tội lỗi bẩn thỉu cần tránh xa", D: "Khuyên con người nên chi tiêu hoang phí để tận hưởng cuộc sống" },
        correct: "A",
        explain: "Đạo Tin lành xóa bỏ khoảng cách giữa tu sĩ và thế tục, khẳng định bất kỳ công việc lương thiện nào cũng là thiên chức do Chúa giao phó và phải được thực hiện với tinh thần kỷ luật cao nhất."
    },
    {
        question: "Thuyết \"Tiền định\" (Predestination) của giáo phái Calvin chủ trưởng điều gì?",
        answers: { A: "Số phận được cứu rỗi hay bị đày ải của mỗi người đã được Thượng đế định đoạt từ trước và con người không thể thay đổi được bằng lời cầu nguyện hay việc thiện", B: "Ai quyên góp nhiều tiền cho giáo hội thì chắc chắn sẽ được lên thiên đàng", C: "Mọi con người đều tự quyết định số phận tâm linh của mình sau khi chết", D: "Chỉ những người nghèo khổ nhất mới được Thượng đế cứu giúp" },
        correct: "A",
        explain: "Sự không chắc chắn về số phận tâm linh khiến tín đồ Calvin tìm kiếm các dấu hiệu thành công trong công việc kinh doanh (sự giàu có hợp pháp) như một minh chứng cho thấy mình là người được Chúa chọn lựa."
    },
    {
        question: "Lối sống \"Khổ hạnh thế tục\" (Asceticism) của tín đồ Tin lành được Max Weber mô tả như thế nào?",
        answers: { A: "Lao động hết mình để kiếm tiền nhưng chi tiêu cực kỳ tiết kiệm, không hoang phí xa xỉ, dùng tiền lãi để tiếp tục tái đầu tư vào sản xuất", B: "Nhịn ăn nhịn uống đến mức suy kiệt cơ thể ngoài sa mạc", C: "Đem toàn bộ tiền bạc kiếm được phân phát hết cho người nghèo khổ", D: "Sống hưởng thụ, mua sắm xa xỉ phẩm để thể hiện đẳng cấp xã hội" },
        correct: "A",
        explain: "Khổ hạnh thế tục kết hợp giữa nghĩa vụ kiếm tiền (lao động chuyên cần) và sự cấm đoán tiêu dùng hoang phí, tạo ra cơ chế tích lũy tư bản hoàn hảo cho chủ nghĩa tư bản phát triển."
    },
    {
        question: "Tiến trình phát triển lịch sử lâu dài của xã hội phương Tây hiện đại được Max Weber khái quát bằng thuật ngữ nào?",
        answers: { A: "Tiến trình xã hội chủ nghĩa hóa", B: "Tiến trình duy lý hóa (Rationalization) và sự \"giải ma thuật\" của thế giới (Disenchantment of the world)", C: "Tiến trình thần học hóa nhận thức", D: "Tiến trình quân sự hóa thể chế xã hội" },
        correct: "B",
        explain: "Duy lý hóa là quá trình các lực lượng tính toán, khoa học, hiệu quả dần thay thế cho các niềm tin ma thuật, tâm lý tâm linh thần bí trong việc tổ chức và vận hành đời sống xã hội."
    },
    {
        question: "Thuật ngữ \"Sự giải ma thuật của thế giới\" (Disenchantment of the world) của Max Weber có nghĩa là gì?",
        answers: { A: "Việc các nhà ảo thuật bị cấm biểu diễn công cộng", B: "Việc thế giới quan của con người không còn tin vào các thế lực thần bí, ma thuật để giải thích tự nhiên, mà chuyển sang sử dụng tri thức khoa học và tính toán lý tính", C: "Sự gia tăng của các hoạt động mê tín dị đoan trong đô thị", D: "Sự sụp đổ hoàn toàn của hệ thống nhà máy công nghiệp" },
        correct: "B",
        explain: "Con người hiện đại tin rằng mọi hiện tượng đều có thể hiểu và kiểm soát được bằng các phương tiện kỹ thuật và khoa học chứ không cần cầu xin các lực lượng ma thuật ẩn giấu."
    },
    {
        question: "Max Weber lo ngại rằng quá trình duy lý hóa cực đoan trong xã hội hiện đại sẽ đẩy con người vào trạng thái ngột ngạt nào?",
        answers: { A: "Sự nghèo đói tuyệt đối về vật chất", B: "\"Chiếc lồng sắt\" (Iron cage) của sự quan liêu, cơ giới hóa đời sống và đánh mất tự do cá nhân", C: "Các cuộc chiến tranh bộ lạc liên miên tàn khốc", D: "Sự thống trị trở lại của chế độ chiếm hữu nô lệ" },
        correct: "B",
        explain: "Chiếc lồng sắt mô tả một xã hội bị thống trị bởi các quy tắc thủ tục hành chính cứng nhắc, hiệu quả kinh tế lạnh lùng, biến con người thành những mắt xích nhỏ bé trong guồng quay quan liêu khổng lồ."
    },
    {
        question: "Thiết chế tổ chức xã hội điển hình, đại diện cho đỉnh cao của quá trình duy lý hóa hành chính trong xã hội hiện đại theo Weber là gì?",
        answers: { A: "Các nghiệp đoàn thủ công truyền thống", B: "Bộ máy quan liêu (Bureaucracy)", C: "Các hội nhóm tôn giáo tự phát", D: "Hệ thống gia đình phụ hệ gia trưởng" },
        correct: "B",
        explain: "Bộ máy quan liêu là hình thức tổ chức hành chính duy lý, vận hành theo các quy tắc luật lệ viết sẵn, phân công trách nhiệm rõ ràng và đạt hiệu quả công việc tối ưu."
    },
    {
        question: "Đặc trưng nào sau đây KHÔNG phải là một đặc điểm của bộ máy quan liêu lý tưởng theo Max Weber?",
        answers: { A: "Có sự phân công lao động và phân định trách nhiệm rõ ràng", B: "Vận hành theo hệ thống thứ bậc quyền lực từ trên xuống dưới", C: "Các quyết định hành chính được đưa ra dựa trên cảm xúc cá nhân của người lãnh đạo", D: "Nhân sự được tuyển dụng và thăng tiến dựa trên năng lực chuyên môn, bằng cấp" },
        correct: "C",
        explain: "Bộ máy quan liêu đòi hỏi tính phi cá nhân (impersonality), mọi thủ tục phải được giải quyết khách quan theo quy định chung chứ không phụ thuộc vào tình cảm hay quan hệ cá nhân của công chức."
    },
    {
        question: "Để nghiên cứu về cấu trúc quyền lực trong xã hội, Max Weber đã phân biệt hai khái niệm nào sau đây?",
        answers: { A: "Lực lượng sản xuất và Quan hệ sản xuất", B: "Tĩnh học xã hội và Động học xã hội", C: "Thế lực (Power / Quyền lực) và Uy quyền (Authority / Sự thống trị hợp thức)", D: "Ý thức tập thể và Ý thức cá nhân" },
        correct: "C",
        explain: "\"Thế lực\" là khả năng áp đặt ý chí của mình lên người khác bất chấp sự kháng cự; còn \"Uy quyền\" là quyền lực được thừa nhận là hợp pháp, người phục tùng tự nguyện tuân theo mệnh lệnh."
    },
    {
        question: "Max Weber đã phân loại Uy quyền hợp pháp thành mấy loại hình lý tưởng cơ bản?",
        answers: { A: "2 loại", B: "3 loại", C: "4 loại", D: "5 loại" },
        correct: "B",
        explain: "Weber chia uy quyền hợp pháp thành 3 loại: Uy quyền truyền thống, Uy quyền lôi cuốn (thiên phú) và Uy quyền hợp pháp - lý tính."
    },
    {
        question: "Ly quyền nào dựa trên niềm tin vào tính thiêng liêng của các phong tục tập quán lâu đời và tính hợp thức của vị thế những người được chỉ định lãnh đạo theo truyền thống?",
        answers: { A: "Uy quyền truyền thống (Traditional authority)", B: "Uy quyền lôi cuốn (Charismatic authority)", C: "Uy quyền hợp pháp - lý tính (Rational-legal authority)", D: "Uy quyền quân sự độc tài" },
        correct: "A",
        explain: "Uy quyền truyền thống được duy trì nhờ thói quen kế thừa lịch sử, ví dụ như quyền lực của vua chúa thời phong kiến (cha truyền con nối) hay quyền lực của người gia trưởng trong gia đình cổ xưa."
    },
    {
        question: "Loại uy quyền nào dựa trên sự sùng bái phi thường, lòng trung thành tuyệt đối của những người phục tùng đối với phẩm chất cá nhân xuất chúng, anh hùng hoặc thánh thiện của một thủ lĩnh?",
        answers: { A: "Uy quyền hợp pháp - lý tính", B: "Uy quyền truyền thống", C: "Uy quyền lôi cuốn / uy quyền thiên phú (Charismatic authority)", D: "Uy quyền hành chính quan liêu" },
        correct: "C",
        explain: "Uy quyền lôi cuốn xuất phát từ sức hấp dẫn cá nhân kỳ diệu của người lãnh đạo (chất Charisma), khiến đám đông tự nguyện đi theo phục tùng (ví dụ: các nhà tiên tri tôn giáo, các lãnh tụ cách mạng vĩ đại)."
    },
    {
        question: "Loại uy quyền nào dựa trên niềm tin vào tính hợp pháp của các quy tắc pháp luật thành văn và quyền ra lệnh của những người được giao nắm giữ chức vụ hành chính theo luật định?",
        answers: { A: "Uy quyền truyền thống", B: "Uy quyền hợp pháp - lý tính / uy quyền pháp trị (Rational-legal authority)", C: "Uy quyền lôi cuốn", D: "Uy quyền tôn giáo thần quyền" },
        correct: "B",
        explain: "Đây là kiểu uy quyền thống trị trong xã hội hiện đại, nơi người ta phục tùng pháp luật và chức vụ hành chính chứ không phục tùng cá nhân con người cụ thể (ví dụ: người dân tuân thủ cảnh sát giao thông)."
    },
    {
        question: "Khác với Karl Marx (chỉ nhấn mạnh yếu tố kinh tế), Max Weber đề xuất mô hình phân tầng xã hội đa chiều dựa trên ba khía cạnh độc lập nào?",
        answers: { A: "Học vấn, Sức khỏe, Địa lý", B: "Giai cấp (Class), Vị thế / Đẳng cấp (Status), Đảng phái (Party / Quyền lực chính trị)", C: "Tuổi tác, Giới tính, Tôn giáo", D: "Nghề nghiệp, Ngoại hình, Quốc tịch" },
        correct: "B",
        explain: "Sự phân cực xã hội theo Weber không chỉ có tiền bạc (giai cấp), mà còn bao gồm danh dự xã hội, phong cách sống (vị thế) và khả năng chi phối quyền lực chính trị (đàng phái)."
    },
    {
        question: "Khái niệm \"Giai cấp\" (Class) trong lý thuyết phân tầng xã hội của Max Weber được xác định dựa trên yếu tố nào?",
        answers: { A: "Sự kính trọng và danh dự của cộng đồng dành cho cá nhân", B: "Cơ hội sống trên thị trường kinh tế dựa trên sở hữu tài sản và kỹ năng nghề nghiệp", C: "Sự tham gia vào ban lãnh đạo của các đảng phái chính trị", D: "Nguồn gốc dòng dõi quý tộc của gia đình" },
        correct: "B",
        explain: "Giai cấp theo Weber là một nhóm người có cùng chung một hoàn cảnh thị trường (market situation), quyết định cơ hội tiếp cận của cải vật chất của họ."
    },
    {
        question: "Khái niệm \"Nhóm vị thế\" (Status group) của Max Weber được định hình bởi yếu tố cốt lõi nào?",
        answers: { A: "Mức thu nhập hàng tháng của cá nhân", B: "Sự phân phối danh dự xã hội, uy tín và phong cách sống đặc trưng (lifestyle) của nhóm", C: "Quyền kiểm soát bộ máy bạo lực của nhà nước", D: "Số lượng cổ phần sở hữu trong doanh nghiệp" },
        correct: "B",
        explain: "Nhóm vị thế gắn liền với sự đánh giá của xã hội về uy tín đạo đức hoặc đẳng cấp văn hóa; những người cùng nhóm vị thế thường chia sẻ chung phong cách tiêu dùng, ứng xử (ví dụ: giới trí thức, quý tộc)."
    },
    {
        question: "Trong mô hình phân tầng xã hội của Weber, thiết chế \"Đạng phái\" (Party) hướng tới mục tiêu giành lấy thứ gì?",
        answers: { A: "Danh dự tôn giáo cao cả", B: "Quyền lực xã hội nhằm gây ảnh hưởng lên các quyết định chính sách hoặc chiếm lĩnh bộ máy nhà nước", C: "Sự cứu rỗi linh hồn sau khi chết", D: "Sự đồng thuận hoàn toàn về phong cách sống" },
        correct: "B",
        explain: "Đảng phái là các tổ chức tự nguyện được thành lập để đấu tranh giành quyền lực chính trị cho các thành viên của mình trong xã hội có tổ chức hành chính."
    },
    {
        question: "Phương pháp luận xã hội học của Max Weber phản đối trường phái nào sau đây?",
        answers: { A: "Triết học duy lý phương Tây", B: "Chủ nghĩa duy khách quan cực đoan muốn đồng nhất hoàn toàn phương pháp nghiên cứu xã hội học với phương pháp của vật lý học tự nhiên", C: "Việc sử dụng các tư liệu lịch sử trong nghiên cứu", D: "Việc phân tích hành vi có mục đích của cá nhân" },
        correct: "B",
        explain: "Weber khẳng định hiện tượng xã hội chứa đựng các yếu tố văn hóa, tinh thần và ý nghĩa chủ quan của con người, do đó không thể nghiên cứu máy móc như các vật thể vô tri của khoa học tự nhiên."
    },
    {
        question: "Khi nghiên cứu về tôn giáo, Max Weber nhận xét thế nào về các tôn giáo phương Đông (như Nho giáo, Ấn Độ giáo) trong mối quan hệ với sự phát triển chủ nghĩa tư bản?",
        answers: { A: "Chúng thúc đẩy mạnh mẽ tinh thần duy lý công cụ kinh tế", B: "Chúng chứa đựng các giá trị tinh thần hướng nội, hòa hợp với tự nhiên hoặc thoát tục, không tạo ra động lực tâm lý \"khổ hạnh thế tục\" để tích lũy tư bản công nghiệp phát triển như đạo Tin lành", C: "Chúng hoàn toàn giống đạo Tin lành về mọi mặt đạo đức kinh tế", D: "Chúng là nguyên nhân duy nhất gây ra nghèo đói tuyệt đối" },
        correct: "B",
        explain: "Các tôn giáo này hướng con người đến việc thích nghi với thế giới (Nho giáo) hoặc thoát ly thế giới (Ấn Độ giáo, Phật giáo) chứ không cải tạo thế giới thông qua lao động duy lý khổ hạnh như Calvin giáo."
    },
    {
        question: "Max Weber gọi xu hướng tổ chức đời sống xã hội dựa trên sự tính toán chi li, hiệu quả công việc và các quy tắc thủ tục viết sẵn là gì?",
        answers: { A: "Sự thiêng liêng hóa xã hội", B: "Sự duy lý hóa hành chính (Bureaucratic rationalization)", C: "Sự bần cùng hóa tuyệt đối", D: "Sự truyền thống hóa quan hệ" },
        correct: "B",
        explain: "Sự phát triển của bộ máy quan liêu chính là biểu hiện rõ nét nhất của quá trình duy lý hóa cấu trúc xã hội hiện đại."
    },
    {
        question: "Để một người có thể hiểu được ý nghĩa chủ quan của hành động xã hội của người khác, Weber đề xuất nhà nghiên cứu phải có năng lực gì?",
        answers: { A: "Năng lực thấu cảm trực giác và sự thông hiểu diễn giải (Interpretive understanding)", B: "Năng lực đo đạc trọng lượng thể xác của chủ thể", C: "Khả năng dự đoán tương lai bằng bói toán", D: "Sự đồng nhất hoàn toàn về mặt sinh học với chủ thể" },
        correct: "A",
        explain: "Nhà nghiên cứu sử dụng phương pháp thông hiểu bằng cách tái dựng lại hoàn cảnh tư duy và động cơ của người hành động để thấu hiểu lý do họ ứng xử như vậy."
    },
    {
        question: "Theo Max Weber, rủi ro lớn nhất của uy quyền lôi cuốn (thiên phú) là gì?",
        answers: { A: "Nó quá ổn định và không bao giờ thay đổi", B: "Nó mang tính chất nhất thời, dễ bị lung lay khi người thủ lĩnh qua đời hoặc không còn chứng minh được sức mạnh phi thường của mình (quá trình thường nhật hóa uy quyền lôi cuốn)", C: "Nó luôn bị chi phối bởi các quy tắc thủ tục quan liêu viết sẵn ngay từ đầu", D: "Nó hoàn toàn giống với uy quyền hợp pháp lý tính" },
        correct: "B",
        explain: "Uy quyền lôi cuốn dựa trên niềm tin cá nhân; nếu người lãnh đạo thất bại liên tiếp hoặc qua đời mà không có cơ chế chuyển giao quyền lực hợp pháp, hệ thống sẽ rơi vào khủng hoảng kế vị nghiêm trọng."
    },
    {
        question: "Quá trình biến đổi một uy quyền lôi cuốn nhất thời thành một cơ cấu quyền lực ổn định, có tổ chức thường xuyên (như truyền thống hoặc quan liêu pháp trị) được Weber gọi là gì?",
        answers: { A: "Sự thiêng liêng hóa tuyệt đối", B: "Thường nhật hóa uy quyền lôi cuốn (Routinization of charisma)", C: "Sự biến mất hoàn toàn của chính quyền", D: "Sự giải ma thuật của bộ máy" },
        correct: "B",
        explain: "Để tồn tại lâu dài, phong trào lôi cuốn ban đầu bắt buộc phải chuyển hóa thành một tổ chức có quy tắc, chức vụ hành chính hoặc thừa kế truyền thống."
    },
    {
        question: "Điểm khác biệt lớn giữa khái niệm \"Giai cấp\" của Karl Marx và Max Weber là gì?",
        answers: { A: "Marx coi giai cấp dựa trên quan hệ sở hữu tư liệu sản xuất, còn Weber coi giai cấp dựa trên hoàn cảnh thị trường và cơ hội sống trong nền kinh tế trao đổi", B: "Weber phủ nhận hoàn toàn sự tồn tại của giai cấp trong xã hội", C: "Marx cho rằng giai cấp không quan trọng bằng nhóm vị thế đẳng cấp", D: "Weber tin rằng đấu tranh giai cấp là động lực duy nhất của lịch sử" },
        correct: "A",
        explain: "Định nghĩa của Weber về giai cấp rộng hơn và linh hoạt hơn, gắn liền với thị trường tiêu dùng và lao động chứ không chỉ giới hạn ở việc sở hữu tư liệu sản xuất như Marx."
    },
    {
        question: "Weber định nghĩa thế nào về \"Hành động duy lý\" nói chung?",
        answers: { A: "Là hành động được thực hiện trong trạng thái say xỉn", B: "Là hành động có sự can thiệp của tư duy lý tính, có sự cân nhắc mối quan hệ giữa phương tiện và mục đích", C: "Là hành động hoàn toàn tuân theo bản năng sinh học bẩm sinh", D: "Là hành động bắt chước đám đông một cách vô ý thức" },
        correct: "B",
        explain: "Hành động duy lý đòi hỏi sự thức tỉnh nhận thức, tính toán để tối ưu hóa hiệu quả hành động chứ không hành động theo cảm tính hay bản năng vô thức."
    },
    {
        question: "Theo Max Weber, xu hướng phát triển của bộ máy quan liêu hiện đại có tính chất gì đối với xã hội?",
        answers: { A: "Có tính chất đảo ngược, dễ dàng bị xóa bỏ bất cứ lúc nào", B: "Là không thể đảo ngược, ngày càng mở rộng và trở thành một cấu trúc hành chính không thể thiếu của mọi xã hội hiện đại", C: "Chỉ tồn tại tạm thời trong giai đoạn đầu của chủ nghĩa tư bản", D: "Sẽ tự động tan rã khi trình độ học vấn của người dân tăng lên" },
        correct: "B",
        explain: "Nhờ tính hiệu quả, chính xác và chuyên nghiệp vượt trội so với các hình thức quản lý cũ, bộ máy quan liêu là sự lựa chọn tất yếu của mọi tổ chức quy mô lớn (nhà nước, tập đoàn)."
    },
    {
        question: "Khi phân tích về nhà nước hiện đại, Max Weber đã đưa ra định nghĩa nổi tiếng nào về bản chất quyền lực của nó?",
        answers: { A: "Nhà nước là công cụ xoa dịu nỗi đau tinh thần của giáo dân", B: "Nhà nước là thiết chế nắm giữ độc quyền sử dụng bạo lực vật lý hợp pháp (monopoly of the legitimate use of physical force) trên một lãnh thổ nhất định", C: "Nhà nước là một tổ chức thiện nguyện tự nguyện của người dân", D: "Nhà nước là sự kéo dài tự nhiên của gia đình phụ hệ cổ xưa" },
        correct: "B",
        explain: "Đây là định nghĩa kinh điển của Weber về chính trị và nhà nước; chỉ có nhà nước mới có quyền lực tối cao cho phép sử dụng vũ lực cưỡng chế một cách hợp pháp thông qua luật pháp."
    },
    {
        question: "Weber gọi các giá trị văn hóa, tôn giáo đóng vai trò định hướng và mở đường cho các hoạt động kinh tế phát triển là gì?",
        answers: { A: "Cơ sở hạ tầng quyết định ý thức", B: "Động lực tinh thần / Tác nhân định hình hành vi kinh tế", C: "Sự tha hóa của tư bản vật chất", D: "Quy luật ba giai đoạn của tư duy" },
        correct: "B",
        explain: "Khác với quan điểm duy vật biện chứng coi kinh tế quyết định tinh thần, Weber chứng minh thế giới quan tinh thần (như đạo đức Tin lành) có thể tác động ngược trở lại làm thay đổi cơ sở kinh tế (chủ nghĩa tư bản)."
    },
    {
        question: "Trong các loại hành động xã hội của Weber, loại hành động nào đang ngày càng chiếm ưu thế và lấn át các loại hành động khác trong đời sống hiện đại?",
        answers: { A: "Hành động truyền thống", B: "Hành động cảm xúc", C: "Hành động duy lý công cụ (Instrumental rationality)", D: "Hành động duy lý giá trị đạo đức" },
        correct: "C",
        explain: "Xã hội hiện đại đề cao hiệu quả, năng suất, lợi nhuận và tính toán kỹ thuật, do đó hành động duy lý công cụ trở thành hành vi phổ biến nhất chi phối mọi mặt đời sống."
    },
    {
        question: "Thuật ngữ \"Thiên chức\" (Beruf) có nguồn gốc ban đầu từ ngôn ngữ của quốc gia nào, được dịch nghĩa trong bản dịch Kinh Thánh của Martin Luther?",
        answers: { A: "Tiếng Anh", B: "Tiếng Pháp", C: "Tiếng Đức", D: "Tiếng Ý" },
        correct: "C",
        explain: "Từ \"Beruf\" trong tiếng Đức mang nghĩa kép vừa là nghề nghiệp chuyên môn kiếm sống trần thế, vừa là tiếng gọi thiêng liêng (thiên chức) của Thiên Chúa giao phó cho con người."
    },
    {
        question: "Đối với Max Weber, nhiệm vụ tối thượng của nhà xã hội học khi giảng dạy và nghiên cứu khoa học là gì?",
        answers: { A: "Tuyên truyền cho một học thuyết chính trị giai cấp cụ thể", B: "Giữ thái độ trung lập về giá trị (Value freedom / Value neutrality) và mô tả thực tế một cách khách quan khoa học", C: "Cổ vũ cho các cuộc cách mạng lật đổ chính quyền nhà nước", D: "Áp đặt các giá trị đạo đức cá nhân của mình lên sinh viên" },
        correct: "B",
        explain: "Weber yêu cầu nhà nghiên cứu phải tách biệt giữa phán xét giá trị chủ quan (tốt/xấu) với phán xét sự kiện khách quan (đang diễn ra như thế nào) để bảo đảm tính khoa học của xã hội học."
    },
    {
        question: "Tại sao Max Weber lại coi \"Hành động truyền thống\" nằm ở ranh giới dưới của hành động xã hội thực thụ?",
        answers: { A: "Vì nó thường được thực hiện một cách vô thức, lặp đi lặp lại theo thói quen mà không có sự phản tỉnh hay gán ý nghĩa chủ quan rõ rệt của người hành động", B: "Vì nó chỉ xuất hiện ở thế giới động vật hoang dã", C: "Vì nó luôn bị cấm đoán bởi luật pháp hiện đại của nhà nước", D: "Vì nó đòi hỏi sự tính toán chi phí tài chính vô cùng phức tạp" },
        correct: "A",
        explain: "Hành động truyền thống sát sườn với hành vi phản xạ quen thuộc; chủ thể hành động thực hiện nó chỉ vì \"từ trước đến nay mọi người vẫn làm thế\" chứ không chủ động suy nghĩ về ý nghĩa của nó."
    },
    {
        question: "Trong bộ máy quan liêu của Max Weber, mối quan hệ giữa các công chức được điều chỉnh bởi nguyên tắc nào?",
        answers: { A: "Tình cảm gia đình và lòng trung thành cá nhân tuyệt đối", B: "Các văn bản quy phạm pháp luật, quy chế công vụ phi cá nhân và nhiệm vụ chuyên môn", C: "Sự cạnh tranh bạo lực vật lý tự do giữa các cá nhân", D: "Sự sùng bái năng lực lôi cuốn kỳ diệu của thủ trưởng" },
        correct: "B",
        explain: "Bộ máy quan liêu vận hành dựa trên hệ thống các quy tắc luật lệ chặt chẽ, bảo đảm mọi công việc được giải quyết nhất quán, công bằng và không bị chi phối bởi tình cảm cá nhân."
    },
    {
        question: "Điểm tương đồng giữa ba nhà xã hội học Marx, Durkheim và Weber khi nghiên cứu về xã hội hiện đại là gì?",
        answers: { A: "Cả ba ông đều ủng hộ cuộc cách mạng vô sản lật đổ tư bản", B: "Cả ba ông đều đồng ý rằng tôn giáo là thuốc phiện của nhân dân", C: "Cả ba ông đều nhận diện xã hội hiện đại đang đối mặt với những cuộc khủng hoảng sâu sắc (Marx: tha hóa bóc lột, Durkheim: phi chuẩn mực, Weber: chiếc lồng sắt quan liêu)", D: "Cả ba ông đều là nhà xã hội học thực chứng người Pháp" },
        correct: "C",
        explain: "Mặc dù đi theo các hướng lý thuyết khác nhau, cả ba vĩ nhân của xã hội học cổ điển đều trăn trở trước những mặt trái, hệ lụy to lớn mà quá trình hiện đại hóa và công nghiệp hóa mang lại cho con người."
    },
    {
        question: "Khái niệm \"Tâm thế tư bản chủ nghĩa\" được Weber mô tả trong tác phẩm của mình là gì?",
        answers: { A: "Sự thèm khát tiền bạc vô hạn độ và bất chấp mọi thủ đoạn đạo đức để làm giàu", B: "Sự kết hợp duy lý giữa việc tìm kiếm lợi nhuận một cách liên tục, có hệ thống bằng các phương tiện hòa bình, hợp pháp với tinh thần kỷ luật lao động khổ hạnh", C: "Lối sống lười biếng, chỉ muốn thừa kế tài sản của gia đình", D: "Việc tích trữ vàng bạc trong kho không bao giờ đưa vào lưu thông kinh tế" },
        correct: "B",
        explain: "Weber nhấn mạnh chủ nghĩa tư bản hiện đại không phải là sự tham lam mù quáng (sự tham lam tồn tại ở mọi thời đại), mà là sự kiềm chế sự tham lam đó để tổ chức sản xuất duy lý, hiệu quả nhằm sinh lời bền vững."
    },
    {
        question: "Đóng góp lớn nhất của Max Weber đối với lý thuyết xã hội học hiện đại là gì?",
        answers: { A: "Việc đặt nền móng vững chắc cho trường phái xã hội học giải thích (Interpretive sociology), lý thuyết hành động xã hội và các phân tích sâu sắc về sự phát triển của tính duy lý phương Tây", B: "Việc chứng minh rằng lực lượng sản xuất hoàn toàn quyết định ý thức xã hội", C: "Việc xây dựng lý thuyết về sự sùng bái vật tổ của thổ dân Úc", D: "Việc đề xuất khẩu hiệu \"Trật tự và Tiến bộ\" cho quốc kỳ Brazil" },
        correct: "A",
        explain: "Weber là người khai sinh ra xã hội học giải thích, đề cao vai trò của ý nghĩa chủ quan và hành động cá nhân, tạo thế đối trọng cân bằng hoàn hảo với các trường phái tiếp cận cấu trúc vĩ mô của Marx và Durkheim."
    }
];
