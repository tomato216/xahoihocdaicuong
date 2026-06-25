// Bộ câu hỏi 4 (Độ khó: Dễ - Trung bình) - Tác giả: ÉMILE DURKHEIM
const QUIZ_QUESTIONS = [
    {
        question: "Émile Durkheim sinh năm nào và mất năm nào?",
        answers: { A: "1798 – 1857", B: "1818 – 1883", C: "1820 – 1903", D: "1858 – 1917" },
        correct: "D",
        explain: "Émile Durkheim sinh ngày 15 tháng 4 năm 1858 tại Épinal (Pháp) và qua đời ngày 15 tháng 11 năm 1917 tại Paris (Pháp)."
    },
    {
        question: "Émile Durkheim là nhà xã hội học lỗi lạc thuộc quốc gia nào?",
        answers: { A: "Đức", B: "Pháp", C: "Anh", D: "Mỹ" },
        correct: "B",
        explain: "Émile Durkheim là nhà xã hội học người Pháp, người có công lao to lớn trong việc thể chế hóa xã hội học thành một ngành khoa học độc lập trong hệ thống đại học tại Pháp."
    },
    {
        question: "Tác phẩm nào dưới đây của Émile Durkheim xuất bản năm 1893, phân tích sự chuyển biến của các hình thức đoàn kết xã hội?",
        answers: { A: "Các quy tắc của phương pháp xã hội học", B: "Tự tử", C: "Phân công lao động trong xã hội (The Division of Labor in Society)", D: "Những hình thức sơ đẳng của đời sống tôn giáo" },
        correct: "C",
        explain: "\"Phân công lao động trong xã hội\" (1893) là luận án tiến sĩ và là tác phẩm lớn đầu tiên của Durkheim, đặt nền móng cho các nghiên cứu về cơ cấu và đoàn kết xã hội."
    },
    {
        question: "Trong cuốn sách \"Các quy tắc của phương pháp xã hội học\" (1895), Émile Durkheim xác định đối tượng nghiên cứu độc lập, đặc thù của xã hội học là gì?",
        answers: { A: "Hành động xã hội mang ý nghĩa chủ quan", B: "Sự kiện xã hội (Social facts / Sự vật xã hội)", C: "Sự tiến hóa cơ thể sinh học", D: "Sự phát triển của các công cụ lao động vật chất" },
        correct: "B",
        explain: "Durkheim khẳng định đối tượng nghiên cứu riêng biệt của xã hội học là các \"sự kiện xã hội\", giúp phân biệt xã hội học với triết học và tâm lý học."
    },
    {
        question: "Tác phẩm nào của Émile Durkheim xuất bản năm 1897 được coi là hình mẫu kinh điển về việc sử dụng các số liệu thống kê thực nghiệm để chứng minh cho lý thuyết xã hội học?",
        answers: { A: "Hệ tư tưởng Đức", B: "Tự tử (Suicide)", C: "Tĩnh học xã hội", D: "Đạo đức Tin lành và tinh thần của chủ nghĩa tư bản" },
        correct: "B",
        explain: "Cuốn \"Tự tử\" (1897) của Durkheim là công trình nghiên cứu xã hội học thực nghiệm đầu tiên sử dụng các số liệu thống kê chính thức để giải thích một hiện tượng hành vi con người."
    },
    {
        question: "Cuốn sách cuối cùng trong cuộc đời của Émile Durkheim, xuất bản năm 1912 nghiên cứu về nguồn gốc và bản chất của thiết chế tôn giáo là gì?",
        answers: { A: "Những hình thức sơ đẳng của đời sống tôn giáo (The Elementary Forms of Religious Life)", B: "Giáo trình triết học thực chứng", C: "Đạo đức học tôn giáo", D: "Nghiên cứu xã hội học tôn giáo cổ đại" },
        correct: "A",
        explain: "\"Những hình thức sơ đẳng của đời sống tôn giáo\" (1912) là tác phẩm phân tích nguồn gốc xã hội của các khái niệm tôn giáo và nhận thức của con người thông qua hệ thống vật tổ của các bộ tộc nguyên thủy."
    },
    {
        question: "Theo định nghĩa của Émile Durkheim, \"sự kiện xã hội\" (social fact) là gì?",
        answers: { A: "Nhưng hiện tượng tâm lý sâu kín diễn ra hoàn toàn trong nội tâm cá nhân", B: "Những cách hành động, suy nghĩ và cảm nhận nằm bên ngoài cá nhân, nhưng có sức mạnh cưỡng bách đối với cá nhân đó", C: "Những sự kiện lịch sử vĩ đại được ghi lại trong biên niên sử của các triều đại", D: "Các phản xạ sinh học tự nhiên của cơ thể con người trước môi trường tự nhiên" },
        correct: "B",
        explain: "Sự kiện xã hội tồn tại khách quan bên ngoài ý thức cá nhân và tác động ép buộc, định hình hành vi, tư duy của cá nhân đó (ví dụ như ngôn ngữ, luật pháp, tiền tệ)."
    },
    {
        question: "Một trong những quy tắc phương pháp luận quan trọng nhất được Durkheim đề cập trong \"Các quy tắc của phương pháp xã hội học\" là gì?",
        answers: { A: "Hãy coi các sự kiện xã hội như là những sự vật (Treat social facts as things)", B: "Hãy giải thích mọi hiện tượng xã hội bằng các quy luật sinh học cấu tạo não bộ", C: "Hãy dùng phương pháp suy luận triết học tư biện để chứng minh giả thuyết", D: "Hãy phủ nhận sự tồn tại khách quan của các thiết chế xã hội ngoài ý thức cá nhân" },
        correct: "A",
        explain: "Xem xét sự kiện xã hội như là \"sự vật\" nghĩa là nghiên cứu chúng một cách khách quan từ bên ngoài, có thể quan sát, đo lường và kiểm chứng thực nghiệm được, tránh các định kiến chủ quan."
    },
    {
        question: "Theo Émile Durkheim, khi giải thích một sự kiện xã hội, nhà xã hội học phải tìm kiếm điều gì?",
        answers: { A: "Ý đồ chủ quan hoặc tâm trạng cá nhân của người hành động", B: "Nguyên nhân xã hội sinh ra nó và chức năng xã hội mà nó thực hiện đối với hệ thống", C: "Ý muốn của các lực lượng siêu nhiên thần linh", D: "Các biến đổi hóa học trong cơ thể con người" },
        correct: "B",
        explain: "Một sự kiện xã hội chỉ có thể được giải thích bằng một sự kiện xã hội khác đi trước nó và bằng việc xác định chức năng của nó trong việc duy trì trật tự chung."
    },
    {
        question: "Hai đặc trưng cơ bản nhất của sự kiện xã hội theo Émile Durkheim là gì?",
        answers: { A: "Tính chủ quan và tính ngẫu nhiên", B: "Tính bên ngoài (khách quan) và tính cưỡng bách (áp đặt)", C: "Tính sinh học và tính vật lý", D: "Tính cá nhân và tính nhất thời" },
        correct: "B",
        explain: "Sự kiện xã hội mang tính khách quan (tồn tại ngoài cá nhân) và tính cưỡng bách (buộc cá nhân phải tuân theo, nếu vi phạm sẽ chịu các hình thức chế tài, trừng phạt của xã hội)."
    },
    {
        question: "Ví dụ nào sau đây đại diện cho một \"sự kiện xã hội vật chất\" (material social fact) trong lý thuyết của Durkheim?",
        answers: { A: "Hệ thống pháp luật và các chuẩn mực đạo đức xã hội", B: "Ý thức tập thể của một bộ lạc", C: "Cơ sở hạ tầng kiến trúc, mật độ dân số và các tổ chức hành chính", D: "Các giáo lý tôn giáo truyền thống" },
        correct: "C",
        explain: "Sự kiện xã hội vật chất là những thực thể xã hội có hình dáng vật lý hiển hiện, như phân bố dân cư, hệ thống giao thông, mạng lưới đô thị và các cơ quan nhà nước."
    },
    {
        question: "Ý thức tập thể, chuẩn mực đạo đức, phong tục và dư luận xã hội thuộc loại sự kiện xã hội nào của Émile Durkheim?",
        answers: { A: "Sự kiện xã hội phi vật chất (Non-material social facts)", B: "Sự kiện vật lý học tự nhiên", C: "Hiện tượng tâm lý cá nhân thuần túy", D: "Quy luật sinh học bẩm sinh" },
        correct: "A",
        explain: "Sự kiện xã hội phi vật chất tuy không có hình thái vật lý rõ rệt nhưng vẫn tồn tại khách quan bên ngoài cá nhân dưới dạng các giá trị, niềm tin chung và có sức mạnh định hướng hành vi rất mạnh."
    },
    {
        question: "Khái niệm nào được Émile Durkheim dùng để chỉ \"toàn bộ những niềm tin và tình cảm chung của các thành viên trung bình trong cùng một xã hội, hợp thành một hệ thống xác định có đời sống riêng\"?",
        answers: { A: "Ý thức cá nhân", B: "Ý thức tập thể (Collective consciousness / Collective conscience)", C: "Tinh thần giai cấp", D: "Sự đồng thuận thực chứng" },
        correct: "B",
        explain: "Ý thức tập thể là sợi dây liên kết tinh thần vô hình gắn kết các cá nhân lại với nhau, tạo ra sự đồng thuận đạo đức và các chuẩn mực ứng xử chung của cộng đồng."
    },
    {
        question: "Émile Durkheim phân chia đoàn kết xã hội (Social solidarity) thành hai hình thức lớn nào trong lịch sử?",
        answers: { A: "Đoàn kết giai cấp và Đoàn kết quốc gia", B: "Đoàn kết tự nguyện và Đoàn kết cưỡng bức", C: "Đoàn kết cơ học (Mechanical solidarity) và Đoàn kết hữu cơ (Organic solidarity)", D: "Đoàn kết tôn giáo và Đoàn kết thế tục" },
        correct: "C",
        explain: "Sự chuyển biến từ đoàn kết cơ học sang đoàn kết hữu cơ phản ánh quá trình hiện đại hóa, chuyển dịch từ xã hội truyền thống đơn giản sang xã hội công nghiệp phức tạp."
    },
    {
        question: "Kiểu xã hội nào dưới đây đặc trưng cho hình thức \"Đoàn kết cơ học\" theo lý thuyết của Durkheim?",
        answers: { A: "Các xã hội truyền thống, cổ xưa, quy mô nhỏ, ít phân công lao động", B: "Các xã hội công nghiệp phát triển, phân công lao động sâu sắc", C: "Các đô thị hiện đại với nhiều ngành nghề dịch vụ đa dạng", D: "Các tập đoàn kinh tế đa quốc gia ngày nay" },
        correct: "A",
        explain: "Đoàn kết cơ học dựa trên sự tương đồng, đồng nhất lối sống, nghề nghiệp và suy nghĩ của các cá nhân; mọi người gắn kết với nhau vì họ giống hệt nhau về thế giới quan."
    },
    {
        question: "In xã hội có sự thống trị của \"Đoàn kết cơ học\", ý thức tập thể và ý thức cá nhân có mối quan hệ như thế nào?",
        answers: { A: "Ý thức cá nhân phát triển vượt trội và lấn át ý thức tập thể", B: "Ý thức tập thể cực kỳ mạnh mẽ, bao trùm và chi phối gần như hoàn toàn ý thức cá nhân", C: "Hai loại ý thức này hoàn toàn độc lập và không ảnh hưởng đến nhau", D: "Ý thức tập thể không tồn tại trong xã hội này" },
        correct: "B",
        explain: "Ở xã hội truyền thống, tự do cá nhân hầu như không tồn tại; hành vi và tư duy của mỗi người bị kiểm soát chặt chẽ bởi các chuẩn mực, niềm tin chung của cộng đồng."
    },
    {
        question: "Loại hình pháp luật đặc trưng trong các xã hội có \"Đoàn kết cơ học\" là gì?",
        answers: { A: "Luật bồi hoàn / phục hồi (Restitutive law)", B: "Luật chế tài / hình phạt tàn khốc (Repressive law)", C: "Luật hợp đồng thương mại tự do", D: "Luật sở hữu trí tuệ công nghệ" },
        correct: "B",
        explain: "Vì hành vi vi phạm chuẩn mực chung bị coi là sự xúc phạm trực tiếp đến ý thức tập thể thiêng liêng, xã hội truyền thống áp dụng các hình phạt cực kỳ tàn bạo để trừng trị kẻ phạm tội và răn đe cộng đồng."
    },
    {
        question: "Kiểu xã hội nào đặc trưng cho hình thức \"Đoàn kết hữu cơ\" theo Émile Durkheim?",
        answers: { A: "Các bộ lạc săn bắn hái lượm sơ khai", B: "Các xã hội hiện đại, quy mô lớn, đô thị hóa và có sự phân công lao động xã hội sâu sắc", C: "Các cộng đồng làng xã tự cấp tự túc thời trung cổ", D: "Các bang nhóm gia đình gia trưởng cổ xưa" },
        correct: "B",
        explain: "Đoàn kết hữu cơ dựa trên sự dị biệt và phụ thuộc lẫn nhau giữa các cá nhân chuyên môn hóa; mọi người gắn kết vì họ cần đến các sản phẩm, dịch vụ của người khác để sinh tồn (giống các cơ quan trong cơ thể sống)."
    },
    {
        question: "Trong xã hội có sự thống trị của \"Đoàn kết hữu cơ\", yếu tố nào đóng vai trò là nguồn gốc và động lực chính duy trì sự liên kết xã hội?",
        answers: { A: "Sự đồng nhất hoàn toàn về niềm tin tôn giáo", B: "Sự phân công lao động xã hội (Division of labor)", C: "Sự áp đặt bằng bạo lực của quân đội nhà nước", D: "Sự sợ hãi trước các thế lực siêu tự nhiên" },
        correct: "B",
        explain: "Phân công lao động tạo ra sự chuyên môn hóa nghề nghiệp, buộc các cá nhân khác biệt phải trao đổi sản phẩm và hợp tác tự nguyện, tạo ra một dạng đoàn kết đạo đức mới."
    },
    {
        question: "Loại hình pháp luật nào chiếm ưu thế trong các xã hội có \"Đoàn kết hữu cơ\"?",
        answers: { A: "Luật hình sự tàn khốc, hành quyết công cộng", B: "Luật phục hồi / bồi hoàn (Restitutive law - dân sự, hành chính, thương mại)", C: "Các giáo lý luật lệ tôn giáo khắt khe", D: "Luật phong kiến phân phong đất đai" },
        correct: "B",
        explain: "Trong xã hội hiện đại, mục đích của luật pháp không phải là trừng phạt tàn bạo thể xác để trả thù, mà là khôi phục lại trạng thái bình thường của các quan hệ hợp đồng bị vi phạm và bồi thường thiệt hại."
    },
    {
        question: "Theo Émile Durkheim, sự chuyển dịch từ đoàn kết cơ học sang đoàn kết hữu cơ trong lịch sử được thúc đẩy trực tiếp bởi hai nhân tố nào?",
        answers: { A: "Sự suy gia tăng của tôn giáo và sự phát triển của công nghệ máy hơi nước", B: "Sự gia tăng mật độ vật chất (quy mô dân số) và mật độ đạo đức/mật độ động (mức độ tương tác giữa người với người)", C: "Sự biến đổi khí hậu toàn cầu và sự khan hiếm tài nguyên đất đai", D: "Sự sụp đổ của các triều đại phong kiến chuyên chế" },
        correct: "B",
        explain: "Khi dân số đông lên và con người tương tác, cạnh tranh sinh tồn với nhau nhiều hơn, họ bắt buộc phải phân công lao động (chuyên môn hóa) để cùng tồn tại thay vì tiêu diệt lẫn nhau."
    },
    {
        question: "Hiện tượng \"Phi chuẩn mực\" (Anomie) được Émile Durkheim định nghĩa là gì?",
        answers: { A: "Trạng thái xã hội bình ổn, mọi người đều tự giác tuân thủ luật pháp", B: "Trạng thái hỗn loạn, suy yếu hoặc đổ vỡ của các chuẩn mực đạo đức xã hội điều tiết hành vi cá nhân, khiến con người mất đi phương hướng hành động", C: "Sự thống trị tuyệt đối của các giáo lý tôn giáo khắt khe", D: "Việc bãi bỏ hoàn toàn hệ thống phân công lao động trong xã hội" },
        correct: "B",
        explain: "Anomie xảy ra khi các chuẩn mực cũ đã mất hiệu lực nhưng chuẩn mực mới chưa kịp hình thành, dẫn đến việc cá nhân không còn giới hạn cho các khát vọng của mình và rơi vào khủng hoảng đạo đức."
    },
    {
        question: "Trong nghiên cứu về \"Tự tử\" (1897), Émile Durkheim đã chỉ ra mối quan hệ giữa hành vi tự tử và yếu tố nào?",
        answers: { A: "Trình độ học vấn của dòng họ", B: "Mức độ tích hợp xã hội (Social integration) và mức độ kiểm soát/điều tiết xã hội (Social regulation)", C: "Cấu tạo gen và các rối loạn tâm thần bẩm sinh của cá nhân", D: "Sự biến động nhiệt độ thời tiết của các mùa trong năm" },
        correct: "B",
        explain: "Durkheim chứng minh tự tử không chỉ là hành vi cá nhân hay tâm lý thuần túy, mà tỷ lệ tự tử của các nhóm xã hội chịu sự chi phối mạnh mẽ bởi mức độ gắn kết và kiểm soát đạo đức của tập thể đối với cá nhân đó."
    },
    {
        question: "Kiểu tự tử nào xảy ra khi cá nhân có mức độ \"Tích hợp xã hội\" quá thấp, cảm thấy bị cô lập, cô đơn và không thuộc về bất kỳ cộng đồng nào?",
        answers: { A: "Tự tử vị tha (Altruistic suicide)", B: "Tự tử vị kỷ (Egoistic suicide)", C: "Tự tử phi chuẩn mực (Anomic suicide)", D: "Tự tử định mệnh (Fatalistic suicide)" },
        correct: "B",
        explain: "Tự tử vị kỷ xuất hiện khi mối liên kết giữa cá nhân và xã hội bị lỏng lẻo; cá nhân bị bỏ mặc cho chính mình và mất đi chỗ dựa tinh thần từ nhóm (ví dụ người độc thân có tỷ lệ tự tử cao hơn người có gia đình)."
    },
    {
        question: "Kiểu tự tử nào xảy ra khi cá nhân có mức độ \"Tích hợp xã hội\" quá cao, sẵn sàng hy sinh mạng sống của mình vì lợi ích, danh dự và mục tiêu chung của tập thể?",
        answers: { A: "Tự tử vị kỷ", B: "Tự tử vị tha (Altruistic suicide)", C: "Tự tử phi chuẩn mực", D: "Tự tử định mệnh" },
        correct: "B",
        explain: "Tự tử vị tha diễn ra khi cá nhân bị đồng hóa hoàn toàn vào tập thể, coi nghĩa vụ đối với nhóm cao hơn mạng sống của bản thân (ví dụ: binh sĩ cảm tử, nghi lễ tự thiêu nhảy vào đống lửa của người góa phụ)."
    },
    {
        question: "Kiểu tự tử nào xảy ra khi xã hội trải qua các cuộc biến động đột ngột (khủng hoảng kinh tế hoặc tăng trưởng kinh tế quá nhanh), làm sụp đổ các chuẩn mực điều tiết đạo đức thông thường?",
        answers: { A: "Tự tử vị kỷ", B: "Tự tử vị tha", C: "Tự tử phi chuẩn mực / vô chuẩn mực (Anomic suicide)", D: "Tự tử định mệnh" },
        correct: "C",
        explain: "Khi trật tự kinh tế - xã hội bị đảo lộn đột ngột, giới hạn ước muốn của con người bị phá vỡ, sự mất cân bằng giữa phương tiện và mục đích sống khiến họ rơi vào trạng thái trống rỗng đạo đức và tự tử."
    },
    {
        question: "Kiểu tự tử nào xảy ra khi cá nhân chịu mức độ \"Kiểm soát/Điều tiết xã hội\" quá cao, bị bóp nghẹt mọi tự do cá nhân và không nhìn thấy tương lai giải thoát nào ngoài cái chết?",
        answers: { A: "Tự tử vị kỷ", B: "Tự tử vị tha", C: "Tự tử phi chuẩn mực", D: "Tự tử định mệnh (Fatalistic suicide)" },
        correct: "D",
        explain: "Tự tử định mệnh xuất hiện khi cá nhân bị kiểm soát khắt khe đến mức tuyệt vọng tuyệt đối (ví dụ: nô lệ trong các xã hội cổ đại, tù nhân bị giam cầm chung thân không lối thoát)."
    },
    {
        question: "Theo số liệu nghiên cứu của Émile Durkheim, tại sao những tín đồ đạo Tin lành lại có tỷ lệ tự tử cao hơn những tín đồ đạo Công giáo?",
        answers: { A: "Vì đạo Tin lành khuyến khích tinh thần tự do tư tưởng, tự do lựa chọn cá nhân cao hơn, làm giảm mức độ tích hợp xã hội của giáo hội đối với tín đồ", B: "Vì các nhà thờ Tin lành bắt buộc tín đồ phải tự tử trong các nghi lễ", C: "Vì tín đồ Công giáo có sức khỏe thể chất tốt hơn tín đồ Tin lành", D: "Vì đạo Tin lành cấm đoán tuyệt đối các hoạt động kinh doanh kinh tế" },
        correct: "A",
        explain: "Đạo Công giáo có cấu trúc thứ bậc chặt chẽ và thống nhất tư tưởng cao hơn, giúp bảo vệ tín đồ trước sự cô lập cá nhân tốt hơn so với tinh thần tự do mang tính cá nhân chủ nghĩa của đạo Tin lành."
    },
    {
        question: "Nghiên cứu về Tôn giáo của Émile Durkheim khẳng định rằng hiện tượng cốt lõi nhất của mọi tôn giáo là sự phân chia thế giới thành hai lĩnh vực đối lập nào?",
        answers: { A: "Thiêng liêng (The Sacred) và Phàm tục (The Profane)", B: "Thiện (Good) và Ác (Evil)", C: "Linh hồn (Soul) và Thể xác (Body)", D: "Thiên đàng (Heaven) và Địa ngục (Hell)" },
        correct: "A",
        explain: "Durkheim cho rằng tôn giáo không nhất thiết phải tin vào Thượng đế, mà điểm chung nhất của tôn giáo là sự phân tách rạch ròi giữa thế giới thiêng liêng (được tôn kính, kiêng kỵ) và thế giới phàm tục (đời sống vật chất hàng ngày)."
    },
    {
        question: "Theo luận điểm độc đáo của Émile Durkheim, bản chất thực sự của đối tượng được sùng bái và tôn thờ trong mọi tôn giáo là gì?",
        answers: { A: "Một đấng sáng tạo siêu nhiên có hình dáng con người", B: "Chính xã hội loài người (tập thể xã hội) được thiêng liêng hóa", C: "Các hiện tượng thời tiết nguy hiểm như sấm sét, bão lũ", D: "Các loài động vật hoang dã có sức mạnh thể chất lớn" },
        correct: "B",
        explain: "Khi tôn thờ các vị thần hay vật tổ, thực chất là con người đang bày tỏ lòng tôn kính và sự phụ thuộc của mình đối với sức mạnh tinh thần to lớn của chính cộng đồng xã hội mà họ là thành viên."
    },
    {
        question: "Durkheim chọn tôn giáo cổ xưa nào của các bộ tộc thổ dân Úc làm đối tượng nghiên cứu thực nghiệm trong \"Những hình thức sơ đẳng của đời sống tôn giáo\"?",
        answers: { A: "Phật giáo đại thừa", B: "Thiên chúa giáo chính thống", C: "Thuyết vật tổ (Totemism)", D: "Hồi giáo Sunni" },
        correct: "C",
        explain: "Thuyết vật tổ được Durkheim coi là hình thức tôn giáo nguyên thủy, đơn giản nhất, nơi hình ảnh vật tổ đại diện cho biểu tượng của thị tộc và đồng thời là biểu tượng của thần linh."
    },
    {
        question: "Vai trò xã hội quan trọng nhất của các nghi lễ tôn giáo tập thể theo Émile Durkheim là gì?",
        answers: { A: "Giúp các cá nhân tích lũy được nhiều tiền bạc hơn", B: "Khẳng định, củng cố ý thức tập thể và tăng cường đoàn kết, gắn kết xã hội", C: "Trừng phạt bạo lực thể xác những người không tuân thủ đạo đức", D: "Giải thích các hiện tượng thiên văn học một cách chính xác" },
        correct: "B",
        explain: "Các buổi lễ tế, họp mặt định kỳ tạo ra cơ hội để mọi người cùng chia sẻ cảm xúc, tái khẳng định các giá trị, niềm tin chung, từ đó phục hồi sức mạnh liên kết của cộng đồng xã hội."
    },
    {
        question: "Khi nghiên cứu về hiện tượng \"Tội phạm\" trong xã hội học, Émile Durkheim đã đưa ra quan điểm bất ngờ nào?",
        answers: { A: "Tội phạm là hiện tượng hoàn toàn bệnh lý cần được tiêu diệt 100% để xã hội phát triển", B: "Tội phạm là một hiện tượng bình thường, tất yếu tồn tại trong mọi xã hội và thậm chí có chức năng xã hội tích cực", C: "Tội phạm chỉ xuất hiện trong xã hội tư bản chủ nghĩa bị tha hóa", D: "Tội phạm do sự cấu tạo gen xấu bẩm sinh của một số sắc tộc quyết định" },
        correct: "B",
        explain: "Tội phạm là tất yếu vì không thể có sự đồng thuận tuyệt đối của mọi cá nhân về chuẩn mực đạo đức. Chức năng tích cực của tội phạm là giúp xã hội xác định rõ ranh giới chuẩn mực và thúc đẩy sự biến đổi đạo đức, luật pháp tiến bộ hơn."
    },
    {
        question: "Theo Durkheim, tại sao sự tồn tại của tội phạm lại giúp củng cố đoàn kết xã hội?",
        answers: { A: "Vì nó tạo ra nhiều việc làm cho cảnh sát và thẩm phán", B: "Vì phản ứng căm phẫn chung của cộng đồng trước tội phạm giúp tái khẳng định và làm mạnh mẽ thêm ý thức tập thể, ranh giới đạo đức của xã hội", C: "Vì nó làm giảm bớt số lượng dân số dư thừa của quốc gia", D: "Vì tội phạm giúp phân phối lại của cải từ người giàu sang người nghèo" },
        correct: "B",
        explain: "Khi một tội ác xảy ra, sự đồng lòng lên án và trừng trị của xã hội chứng minh các giá trị đạo đức chung vẫn đang được tôn trọng và bảo vệ nghiêm túc bởi cả tập thể."
    },
    {
        question: "Nghiên cứu xã hội học của Émile Durkheim thuộc về cấp độ tiếp cận nào trong xã hội học?",
        answers: { A: "Xã hội học vi mô (tập trung vào tương tác cá nhân)", B: "Xã hội học vĩ mô (tập trung vào cấu trúc, thiết chế và hệ thống xã hội)", C: "Tâm lý học xã hội thực nghiệm hành vi", D: "Triết học hiện sinh cá nhân" },
        correct: "B",
        explain: "Durkheim luôn nhấn mạnh vai trò quyết định của cấu trúc xã hội đối với hành vi cá nhân; các hiện tượng xã hội phải được nghiên cứu ở cấp độ toàn hệ thống chứ không thể quy giản về tâm lý cá nhân."
    },
    {
        question: "Durkheim phê phán quan điểm xã hội học của Herbert Spencer ở điểm nào sau đây?",
        answers: { A: "Phê phán chủ nghĩa cá nhân ích kỷ và cho rằng xã hội không thể duy trì trật tự chỉ dựa trên các hợp đồng kinh tế tư lợi cá nhân nếu thiếu đi nền tảng đạo đức chung", B: "Phê phán việc Spencer sử dụng các dữ liệu lịch sử để nghiên cứu", C: "Phê phán việc Spencer đề cao vai trò kiểm soát tuyệt đối của nhà nước", D: "Phê phán thuyết tiến hóa xã hội từ đơn giản đến phức tạp của Spencer" },
        correct: "A",
        explain: "Durkheim chỉ ra rằng trong mỗi bản hợp đồng kinh tế luôn có \"những yếu tố phi hợp đồng\" mang tính đạo đức và luật pháp do xã hội quy định trước; nếu không có sự tin tưởng đạo đức chung, các giao dịch kinh tế sẽ sụp đổ."
    },
    {
        question: "Trạng thái \"Anomie\" (Phi chuẩn mực) thường xuất hiện phổ biến nhất ở kiểu đoàn kết xã hội nào khi quá trình chuyển đổi xã hội diễn ra quá nhanh và thiếu đồng bộ?",
        answers: { A: "Đoàn kết cơ học truyền thống", B: "Đoàn kết hữu cơ hiện đại (trong giai đoạn phát triển bất bình thường)", C: "Đoàn kết quân sự phong kiến cổ xưa", D: "Đoàn kết huyết thống nguyên thủy" },
        correct: "B",
        explain: "Khi xã hội công nghiệp phát triển quá nhanh, sự phân công lao động diễn ra mạnh mẽ nhưng các thiết chế điều tiết đạo đức, pháp lý tương ứng chưa kịp thiết lập, dẫn đến phân công lao động phi chuẩn mực."
    },
    {
        question: "Émile Durkheim đề xuất giải pháp nào để hạn chế tình trạng phi chuẩn mực và xung đột trong xã hội công nghiệp Pháp thời đại ông?",
        answers: { A: "Quay trở lại lối sống làng xã và sùng bái tôn giáo cổ xưa", B: "Thiết lập và phát triển các tổ chức nghề nghiệp, nghiệp đoàn đạo đức (Professional groups / Corporations) để liên kết và giáo dục cá nhân", C: "Thực hiện cuộc cách mạng bạo lực xóa bỏ hoàn toàn nhà nước tư bản", D: "Tự do hóa hoàn toàn thị trường kinh tế không cần bất kỳ luật lệ nào" },
        correct: "B",
        explain: "Durkheim tin rằng các nghiệp đoàn nghề nghiệp là thiết chế trung gian lý tưởng nằm giữa nhà nước và cá nhân, có khả năng xây dựng các chuẩn mực đạo đức nghề nghiệp và gắn kết người lao động hiệu quả."
    },
    {
        question: "Phương pháp luận nghiên cứu xã hội học của Durkheim được xếp vào trường phái triết học xã hội nào sau đây?",
        answers: { A: "Chủ nghĩa cá nhân phương pháp luận", B: "Chủ nghĩa duy thực xã hội (Social realism) / Chủ nghĩa duy xã hội", C: "Chủ nghĩa duy tâm chủ quan", D: "Chủ nghĩa hiện sinh cá nhân" },
        correct: "B",
        explain: "Durkheim theo chủ nghĩa duy thực xã hội, khẳng định xã hội là một thực thể độc đáo (sui generis) có tính chất và quy luật riêng biệt, lớn hơn tổng số các cá nhân cấu thành cộng lại."
    },
    {
        question: "Khái niệm \"Năng động tập thể\" (Collective effervescence) trong nghiên cứu tôn giáo của Durkheim dùng để chỉ hiện tượng gì?",
        answers: { A: "Trạng thái mệt mỏi, chán nản của đám đông khi làm việc mệt nhọc", B: "Trạng thái hưng phấn, thăng hoa tinh thần của các cá nhân khi cùng tụ họp và tham gia vào các nghi lễ tập thể thiêng liêng", C: "Sự tranh giành của cải vật chất giữa các bộ tộc khác nhau", D: "Sự suy giảm nghiêm trọng về số lượng người tham gia vào giáo hội" },
        correct: "B",
        explain: "Khi tập hợp lại trong các nghi lễ, sự cộng hưởng năng lượng tinh thần của đám đông tạo ra một sức mạnh cảm xúc mãnh liệt, khiến cá nhân cảm thấy có một thế lực siêu việt đang hiện diện nâng đỡ họ."
    },
    {
        question: "Theo Émile Durkheim, chức năng cơ bản nhất của Giáo dục trong xã hội hiện đại là gì?",
        answers: { A: "Giúp các cá nhân tìm kiếm công việc có mức lương cao nhất", B: "Truyền tải các giá trị đạo đức chung của xã hội cho thế hệ sau, thực hiện quá trình xã hội hóa để biến cá nhân sinh học thành cá nhân xã hội", C: "Duy trì sự phân chia giai cấp bất bình đẳng trong đời sống xã hội", D: "Dạy cho học sinh cách thức chế tạo các công cụ vũ khí chiến tranh" },
        correct: "B",
        explain: "Giáo dục là phương tiện xã hội hóa một cách có hệ thống, giúp thế hệ trẻ tiếp thu các chuẩn mực, giá trị đạo đức chung để hòa nhập và đóng góp vào sự đoàn kết hữu cơ của xã hội."
    },
    {
        question: "Thuật ngữ \"Bệnh lý xã hội\" (Social pathology) được Durkheim dùng để chỉ trạng thái nào của xã hội?",
        answers: { A: "Trạng thái khỏe mạnh bình thường của mọi thiết chế xã hội", B: "Trạng thái mất cân bằng, rối loạn chức năng hoặc suy yếu các sợi dây liên kết đạo đức của hệ thống xã hội", C: "Sự lây lan của các dịch bệnh sinh học ngoài đời thực", D: "Sự biến mất hoàn toàn của các hoạt động kinh tế thương mại" },
        correct: "B",
        explain: "Durkheim phân biệt giữa hiện tượng \"bình thường\" (duy trì sự tồn tại) và hiện tượng \"bệnh lý\" (đe dọa sự sống còn, gây rối loạn cho cơ thể xã hội)."
    },
    {
        question: "Trong các nghiên cứu của mình, Durkheim sử dụng chỉ báo thực chứng nào để đo lường và đánh giá các hình thức đoàn kết xã hội vô hình?",
        answers: { A: "Chỉ số tăng trưởng tổng sản phẩm quốc nội (GDP)", B: "Hệ thống luật pháp và các quy tắc chế tài tương ứng", C: "Số lượng các công trình đền thờ tôn giáo được xây dựng", D: "Tỷ lệ biết chữ của người dân trong xã hội" },
        correct: "B",
        explain: "Vì đoàn kết xã hội là hiện tượng phi vật chất vô hình, Durkheim đã thông minh sử dụng luật pháp (hiển hiện vật chất qua các văn bản và chế tài) làm chỉ báo khách quan để nghiên cứu đoàn kết xã hội."
    },
    {
        question: "Biểu tượng vật tổ (Totem) trong các tôn giáo sơ khai đại diện cho điều gì theo phân tích của Durkheim?",
        answers: { A: "Đại diện cho tài sản cá nhân của tộc trưởng thị tộc", B: "Biểu tượng hữu hình của cả vị thần linh lẫn của chính thị tộc đó", C: "Một món đồ chơi giải trí cho trẻ em trong bộ tộc", D: "Công cụ dùng để săn bắt các loài thú rừng lớn" },
        correct: "B",
        explain: "Vật tổ là biểu tượng cụ thể hóa sức mạnh thiêng liêng vô hình của thị tộc; thông qua việc sùng bái vật tổ, các thành viên bày tỏ lòng trung thành với cộng đồng của mình."
    },
    {
        question: "Điều nào sau đây KHÔNG phải là một quy tắc nghiên cứu sự kiện xã hội của Émile Durkheim?",
        answers: { A: "Loại bỏ hoàn toàn các tiền kiến, định kiến cá nhân trước khi nghiên cứu", B: "Chỉ định nghĩa sự kiện xã hội bằng các dấu hiệu khách quan bên ngoài", C: "Giải thích sự kiện xã hội bằng ý chí chủ quan hoặc tâm lý cá nhân của nhà nghiên cứu", D: "Giải thích sự kiện xã hội bằng các sự kiện xã hội khác đi trước nó" },
        correct: "C",
        explain: "Durkheim phản đối việc quy giản xã hội học về tâm lý học; xã hội học phải giải thích các sự kiện xã hội bằng các nguyên nhân mang tính xã hội."
    },
    {
        question: "Tại sao Durkheim cho rằng phân công lao động trong xã hội hiện đại không dẫn đến sự sụp đổ của đạo đức?",
        answers: { A: "Vì nó thúc đẩy một dạng đạo đức mới - đạo đức của sự tôn trọng sự khác biệt, tự do cá nhân và tinh thần trách nhiệm tương hỗ", B: "Vì nó bắt buộc mọi người phải từ bỏ các ước muốn cá nhân của mình", C: "Vì nó khôi phục lại các hình phạt tàn khốc của pháp luật cổ xưa", D: "Vì nó biến mọi cá nhân thành những người hoàn toàn giống nhau" },
        correct: "A",
        explain: "Phân công lao động xã hội tạo ra đoàn kết hữu cơ, đòi hỏi một hệ thống đạo đức mới đề cao sự công bằng, tôn trọng quyền cá nhân và sự hợp tác chặt chẽ giữa các chuyên ngành."
    },
    {
        question: "Trong nghiên cứu về Tự tử, nhóm xã hội nào sau đây được Durkheim chỉ ra là có tỷ lệ tự tử THẤP hơn trong các giai đoạn lịch sử?",
        answers: { A: "Những người đàn ông độc thân, sống một mình", B: "Những người đã kết hôn và có đông con cái", C: "Những người sống trong thời kỳ hòa bình, ổn định kinh tế cực thịnh", D: "Những tín đồ thuộc giáo phái Tin lành tự do" },
        correct: "B",
        explain: "Gia đình đông con cái là một thiết chế có tính tích hợp xã hội rất cao; sự ràng buộc trách nhiệm và tình cảm gia đình giúp bảo vệ các thành viên trước nguy cơ tự tử vị kỷ."
    },
    {
        question: "Khái niệm \"Mật độ động\" (Dynamic density) của Durkheim đề cập đến khía cạnh nào?",
        answers: { A: "Tốc độ di chuyển vật lý của các phương tiện giao thông trên đường phố", B: "Tần suất tương tác xã hội và mức độ liên kết đạo đức giữa các thành viên trong xã hội", C: "Tổng số lượng của cải vật chất được sản xuất ra trong một năm", D: "Tỷ lệ sinh của người dân sống tại các khu vực nông thôn" },
        correct: "B",
        explain: "Mật độ động hay mật độ đạo đức đo lường mức độ tương tác và liên kết tinh thần giữa các cá nhân; mật độ động tăng lên là động lực thúc đẩy phân công lao động xã hội phát triển."
    },
    {
        question: "Durkheim định nghĩa như thế nào về mối quan hệ giữa Cá nhân và Xã hội?",
        answers: { A: "Cá nhân hoàn toàn tự do tạo ra xã hội theo ý muốn chủ quan bất cứ lúc nào", B: "Xã hội là một thực thể đi trước cá nhân, định hình, kiểm soát và tạo điều kiện cho sự tồn tại nhân bản của cá nhân", C: "Xã hội chỉ là một cái tên gọi trống rỗng, không có thực lực tác động nào đối với cá nhân", D: "Cá nhân và xã hội luôn đối kháng sinh tử không thể dung hòa" },
        correct: "B",
        explain: "Đối với Durkheim, con người chỉ trở thành người thực sự (có ngôn ngữ, đạo đức, tư duy khoa học) nhờ vào quá trình xã hội hóa và tiếp thu các di sản văn hóa do xã hội trao truyền."
    },
    {
        question: "Đóng góp quan trọng nhất của Émile Durkheim trong việc xây dựng phương pháp luận xã hội học thực nghiệm là gì?",
        answers: { A: "Việc chứng minh triệt để rằng các hiện tượng xã hội phức tạp hoàn toàn có thể nghiên cứu được một cách khách quan bằng phương pháp thống kê thực nghiệm", B: "Việc đề cao các suy luận triết học trừu tượng thay thế cho các cuộc khảo sát thực tế", C: "Việc đồng nhất hoàn toàn xã hội học với vật lý học thiên văn", D: "Việc bãi bỏ hoàn toàn vai trò của các số liệu thống kê nhà nước" },
        correct: "A",
        explain: "Công trình nghiên cứu \"Tự tử\" của Durkheim đã chứng minh rực rỡ rằng ngay cả một hành vi riêng tư nhất của con người cũng chịu sự chi phối của các quy luật xã hội khách quan và hoàn toàn có thể đo lường, phân tích được bằng số liệu thống kê khoa học."
    }
];
