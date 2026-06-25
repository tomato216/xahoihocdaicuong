// Bộ câu hỏi 3 (Độ khó: Dễ - Trung bình) - Tác giả: HERBERT SPENCER
const QUIZ_QUESTIONS = [
    {
        question: "Herbert Spencer sinh năm nào và mất năm nào?",
        answers: { A: "1798 – 1857", B: "1818 – 1883", C: "1820 – 1903", D: "1858 – 1917" },
        correct: "C",
        explain: "Herbert Spencer sinh ngày 27 tháng 4 năm 1820 tại Derby (Anh) và qua đời ngày 8 tháng 12 năm 1903 tại Brighton (Anh)."
    },
    {
        question: "Herbert Spencer là nhà triết học, nhà sinh học, nhà xã hội học nổi tiếng thuộc quốc gia nào?",
        answers: { A: "Pháp", B: "Anh", C: "Đức", D: "Mỹ" },
        correct: "B",
        explain: "Herbert Spencer sinh trưởng và dành trọn cuộc đời nghiên cứu khoa học, viết sách tại Vương quốc Anh trong thời kỳ trị vì của Nữ hoàng Victoria."
    },
    {
        question: "Tác phẩm nào sau đây là cuốn sách xã hội học đầu tiên của Herbert Spencer, xuất bản năm 1850?",
        answers: { A: "Tĩnh học xã hội (Social Statics)", B: "Các nguyên lý đầu tiên (First Principles)", C: "Các nguyên lý xã hội học (Principles of Sociology)", D: "Nghiên cứu xã hội học (The Study of Sociology)" },
        correct: "A",
        explain: "\"Tĩnh học xã hội\" (Social Statics) xuất bản năm 1850 là công trình đầu tiên đặt nền móng cho các quan điểm xã hội học và triết học chính trị của Spencer."
    },
    {
        question: "Bộ sách đồ sộ nào của Herbert Spencer (xuất bản nhiều tập từ 1876 đến 1896) được coi là bộ giáo trình xã hội học toàn diện đầu tiên trên thế giới?",
        answers: { A: "Cơ cấu xã hội học", B: "Các nguyên lý xã hội học (Principles of Sociology)", C: "Triết học thực chứng", D: "Khảo sát xã hội học đại cương" },
        correct: "B",
        explain: "Bộ sách \"Các nguyên lý xã hội học\" (Principles of Sociology) gồm 3 tập là bộ giáo trình xã hội học hệ thống đầu tiên, đóng vai trò quan trọng trong việc đưa xã hội học vào giảng dạy học đường."
    },
    {
        question: "Học thuyết triết học và xã hội học trung tâm xuyên suốt toàn bộ hệ thống tư tưởng của Herbert Spencer là học thuyết nào?",
        answers: { A: "Học thuyết duy vật lịch sử", B: "Học thuyết thực chứng hành vi", C: "Học thuyết tiến hóa (Evolutionary theory)", D: "Học thuyết hành động xã hội" },
        correct: "C",
        explain: "Spencer đã xây dựng một triết học tổng hợp dựa trên nguyên lý tiến hóa vũ trụ, áp dụng đồng thời cho cả vật lý, sinh học, tâm lý học và xã hội học."
    },
    {
        question: "Ai là người đã đưa ra thuật ngữ \"Sự sống sót của những cá thể thích nghi nhất\" (Survival of the fittest) trước khi Charles Darwin xuất bản cuốn sách \"Nguồn gốc các loài\"?",
        answers: { A: "Auguste Comte", B: "Karl Marx", C: "Herbert Spencer", D: "Max Weber" },
        correct: "C",
        explain: "Thuật ngữ \"Survival of the fittest\" do Spencer sáng tạo ra trong cuốn \"Các nguyên lý sinh học\" (1864) để giải thích quy luật cạnh tranh và sinh tồn, sau đó được Darwin mượn lại để mô tả chọn lọc tự nhiên."
    },
    {
        question: "Xu hướng lý thuyết xã hội học nào của Herbert Spencer áp dụng các quy luật sinh học của Charles Darwin vào việc giải thích sự phát triển và cạnh tranh giữa các nhóm xã hội?",
        answers: { A: "Chủ nghĩa cấu trúc xã hội", B: "Chủ nghĩa Darwin xã hội (Social Darwinism)", C: "Chủ nghĩa duy vật biên chứng", D: "Chủ nghĩa hiện tượng học" },
        correct: "B",
        explain: "Chủ nghĩa Darwin xã hội do Spencer đề xướng chủ trương rằng các quy luật chọn lọc tự nhiên và đấu tranh sinh tồn trong thế giới sinh vật hoàn toàn áp dụng được cho đời sống xã hội loài người."
    },
    {
        question: "Theo lý thuyết tiến hóa tổng quát của Herbert Spencer, sự tiến hóa là quá trình biến đổi có tính chất gì?",
        answers: { A: "Đi từ sự hỗn loạn phức tạp đến sự đơn giản đồng nhất", B: "Đi từ sự đồng nhất đơn giản, rời rạc đến sự dị biệt phức tạp, gắn kết (tích hợp)", C: "Diễn ra một cách ngẫu nhiên và không theo bất kỳ hướng nào", D: "Luôn đi thụt lùi và dẫn đến sự sụp đổ của hệ thống" },
        correct: "B",
        explain: "Tiến hóa theo Spencer là sự tích hợp vật chất và sự phân hóa chức năng đi kèm, chuyển từ trạng thái đồng nhất đơn giản, bất định sang trạng thái dị biệt phức tạp, xác định và gắn kết."
    },
    {
        question: "Lý thuyết xã hội học nào của Herbert Spencer so sánh cấu trúc và sự vận hành của xã hội loài người với cơ thể của một sinh vật sống?",
        answers: { A: "Thuyết hành động xã hội", B: "Thuyết tương tác biểu trưng", C: "Thuyết cơ thể xã hội / Thuyết hữu cơ (Organic analogy)", D: "Thuyết lựa chọn hợp lý" },
        correct: "C",
        explain: "Thuyết hữu cơ là một luận điểm cốt lõi của Spencer, trong đó ông tìm ra những điểm tương đồng sâu sắc giữa cơ thể sinh học và cơ thể xã hội (hay siêu cơ thể - super-organic)."
    },
    {
        question: "Điểm tương đồng đầu tiên giữa cơ thể sinh học và xã hội loài người theo phân tích của Herbert Spencer là gì?",
        answers: { A: "Cả hai đều có khả năng suy nghĩ bằng não bộ", B: "Cả hai đều liên tục tăng trưởng về quy mô kích thước trong quá trình tồn tại", C: "Cả hai đều không chịu tác động của môi trường xung quanh", D: "Cả hai đều có cấu trúc đơn giản không bao giờ thay đổi" },
        correct: "B",
        explain: "Spencer chỉ ra rằng cả sinh vật sống lẫn xã hội loài người đều bắt đầu từ những mầm mống nhỏ bé và liên tục tăng trưởng về thể tích, quy mô dân số theo thời gian."
    },
    {
        question: "Theo thuyết hữu cơ của Herbert Spencer, khi quy mô của cơ thể sinh học hoặc xã hội tăng lên thì cấu trúc của chúng sẽ biến đổi như thế nào?",
        answers: { A: "Trở nên lỏng lẻo và dễ bị tan rã hơn", B: "Giữ nguyên sự đơn giản ban đầu", C: "Trở nên phức tạp hơn thông qua sự phân hóa cấu trúc và chuyên môn hóa chức năng", D: "Biến mất hoàn toàn cấu trúc ban đầu" },
        correct: "C",
        explain: "Khi quy mô lớn lên, xã hội cũng như sinh vật sẽ xuất hiện sự phân chia thành các bộ phận khác nhau, mỗi bộ phận đảm nhận một nhiệm vụ chuyên biệt (phân hóa cấu trúc và chức năng)."
    },
    {
        question: "Trong thuyết hữu cơ, Herbert Spencer cho rằng các bộ phận cấu thành của xã hội (như gia đình, nhà nước, kinh tế) có mối quan hệ với nhau như thế nào?",
        answers: { A: "Hoàn toàn độc lập và không liên quan gì đến nhau", B: "Phụ thuộc lẫn nhau; sự thay đổi của bộ phận này kéo theo sự biến đổi của bộ phận khác", C: "Luôn luôn xung đột tiêu diệt lẫn nhau để sinh tồn", D: "Chỉ liên kết tạm thời và dễ dàng tách rời mà không ảnh hưởng đến hệ thống" },
        correct: "B",
        explain: "Giống như các cơ quan trong cơ thể sống (tim, phổi, gan) phụ thuộc vào nhau để duy trì sự sống, các thiết chế xã hội cũng có mối quan hệ tương hỗ và phụ thuộc lẫn nhau để duy trì trật tự xã hội."
    },
    {
        question: "Điểm khác biệt cơ bản nhất giữa cơ thể sinh học và xã hội loài người (siêu cơ thể) theo Herbert Spencer là gì?",
        answers: { A: "Cơ thể sinh học có thể di chuyển còn xã hội thì không", B: "Trong cơ thể sinh học, ý thức tập trung ở một bộ phận (não bộ); còn trong xã hội, ý thức lan tỏa và tồn tại ở tất cả các cá nhân cấu thành", C: "Cơ thể sinh học chịu sự chi phối của quy luật tự nhiên còn xã hội thì không", D: "Xã hội có quy mô nhỏ hơn cơ thể sinh học rất nhiều" },
        correct: "B",
        explain: "Trong cơ thể sinh học, các bộ phận tồn tại vì lợi ích của toàn cơ thể (não quyết định); còn trong xã hội, xã hội tồn tại vì lợi ích của các thành viên cá nhân (các cá nhân đều có ý thức riêng biệt và tự do)."
    },
    {
        question: "Dựa trên thuyết hữu cơ, Herbert Spencer chia hệ thống xã hội thành ba phân hệ chức năng chính nào?",
        answers: { A: "Phân hệ lập pháp, Phân hệ hành pháp, Phân hệ tư pháp", B: "Phân hệ sản xuất (nuôi dưỡng), Phân hệ phân phối (tuần hoàn), Phân hệ điều tiết (chỉ đạo)", C: "Phân hệ giáo dục, Phân hệ tôn giáo, Phân hệ gia đình", D: "Phân hệ nông nghiệp, Phân hệ công nghiệp, Phân hệ dịch vụ" },
        correct: "B",
        explain: "Ba phân hệ chức năng gồm: Hệ thống nuôi dưỡng (sản xuất của cải), Hệ thống phân phối (giao thông, thương mại vận chuyển của cải), và Hệ thống điều tiết (nhà nước, chính quyền quản lý bảo vệ)."
    },
    {
        question: "In hệ thống xã hội của Herbert Spencer, thiết chế nào đóng vai trò tương đương với \"Hệ thống điều tiết\" (não bộ và hệ thần kinh) của cơ thể sinh học?",
        answers: { A: "Các nhà máy công nghiệp", B: "Hệ thống giao thông đường sắt", C: "Nhà nước và quân đội (chính quyền)", D: "Các hộ gia đình nông dân" },
        correct: "C",
        explain: "Hệ thống điều tiết có chức năng kiểm soát, định hướng hành vi của các bộ phận và bảo vệ toàn bộ cơ thể xã hội trước các mối đe dọa bên ngoài, tương ứng với vai trò của chính phủ và quân đội."
    },
    {
        question: "Trong hệ thống xã hội của Herbert Spencer, hoạt động kinh tế, nông nghiệp và nhà máy xí nghiệp thuộc phân hệ chức năng nào?",
        answers: { A: "Hệ thống nuôi dưỡng (Sustaining system)", B: "Hệ thống phân phối (Distributing system)", C: "Hệ thống điều tiết (Regulating system)", D: "Hệ thống tái sản xuất (Reproductive system)" },
        correct: "A",
        explain: "Hệ thống nuôi dưỡng tương đương với cơ quan tiêu hóa của sinh vật, thực hiện nhiệm vụ sản xuất ra của cải vật chất để nuôi sống toàn bộ cơ thể xã hội."
    },
    {
        question: "Hệ thống giao thông, thương mại, chợ và các phương tiện truyền thông đóng vai trò gì trong cơ thể xã hội của Spencer?",
        answers: { A: "Hệ thống điều tiết thông tin", B: "Hệ thống phân phối / tuần hoàn (Distributing system)", C: "Hệ thống sản xuất thặng dư", D: "Hệ thống giáo dục đạo đức" },
        correct: "B",
        explain: "Hệ thống phân phối đóng vai trò như hệ tuần hoàn (mạch máu) giúp lưu thông, vận chuyển chất dinh dưỡng (hàng hóa, thông tin) đến tất cả các bộ phận khác nhau của xã hội."
    },
    {
        question: "Herbert Spencer chia xã hội loài người thành hai kiểu tổ chức xã hội lớn dựa trên phương thức quản lý và kiểm soát xã hội, đó là những kiểu nào?",
        answers: { A: "Xã hội nông nghiệp và Xã hội công nghiệp", B: "Xã hội quân sự (Militant society) và Xã hội công nghiệp (Industrial society)", C: "Xã hội phong kiến và Xã hội tư bản", D: "Xã hội dân chủ và Xã hội độc tài" },
        correct: "B",
        explain: "Đây là cách phân loại nổi tiếng của Spencer phản ánh hai xu hướng tổ chức xã hội đối lập nhau về mức độ kiểm soát của nhà nước và quyền tự do cá nhân."
    },
    {
        question: "Đặc trưng nổi bật nhất của \"Xã hội quân sự\" (Militant society) theo Herbert Spencer là gì?",
        answers: { A: "Sự tự nguyện hợp tác của các thành viên xã hội", B: "Sự kiểm soát tập trung, cưỡng bức của chính quyền đối với mọi hoạt động của cá nhân nhằm phục vụ cho mục tiêu chiến tranh hoặc tự vệ", C: "Sự phát triển mạnh mẽ của kinh tế thị trường tự do", D: "Việc bãi bỏ hoàn toàn quân đội và vũ khí" },
        correct: "B",
        explain: "Xã hội quân sự được tổ chức chủ yếu cho hoạt động chiến tranh, đòi hỏi sự phục tùng tuyệt đối, cấu trúc thứ bậc nghiêm ngặt và sự cưỡng bức đồng thuận từ trung ương."
    },
    {
        question: "Trong \"Xã hội quân sự\" của Herbert Spencer, mối quan hệ giữa Cá nhân và Nhà nước được quy định như thế nào?",
        answers: { A: "Nhà nước tồn tại để phục vụ cho các lợi ích riêng tư của cá nhân", B: "Cá nhân hoàn toàn độc lập và có quyền tự quyết tối cao", C: "Cá nhân tồn tại vì lợi ích của nhà nước; quyền lợi cá nhân bị hy sinh cho sự sống còn của tập thể", D: "Không có sự tồn tại của thiết chế nhà nước" },
        correct: "C",
        explain: "Trong xã hội quân sự, đời sống, tài sản và tự do của cá nhân hoàn toàn thuộc về nhà nước để phục vụ cho sức mạnh quốc phòng và chiến đấu chung."
    },
    {
        question: "Đặc trưng nổi bật nhất của \"Xã hội công nghiệp\" (Industrial society) theo phân tích của Herbert Spencer là gì?",
        answers: { A: "Sự cưỡng bức lao động quy mô lớn của nhà nước", B: "Sự tự nguyện hợp tác, tự do cá nhân, bảo vệ quyền tư hữu và hạn chế tối đa sự can thiệp của chính phủ", C: "Sự ưu tiên tuyệt đối cho các hoạt động quân sự, bành trướng lãnh thổ", D: "Việc tập trung mọi nguồn lực kinh tế vào tay các tướng lĩnh quân đội" },
        correct: "B",
        explain: "Xã hội công nghiệp hướng tới mục tiêu sản xuất, thương mại hòa bình, do đó đề cao tự do hợp đồng, tự nguyện liên kết và giảm thiểu vai trò kiểm soát của chính quyền."
    },
    {
        question: "Trong \"Xã hội công nghiệp\" của Herbert Spencer, vai trò tối thiểu của Nhà nước là gì?",
        answers: { A: "Định hướng và lập kế hoạch cho toàn bộ nền kinh tế quốc gia", B: "Giáo dục đạo đức và cung cấp cứu tế xã hội cho mọi người nghèo", C: "Bảo vệ quyền tự do cá nhân, bảo đảm thực thi hợp đồng và duy trì trật tự an ninh (nhà nước tối thiểu)", D: "Sở hữu toàn bộ các tư liệu sản xuất chủ yếu của xã hội" },
        correct: "C",
        explain: "Spencer ủng hộ mô hình nhà nước cực giản trong xã hội công nghiệp, chỉ làm nhiệm vụ bảo vệ an ninh và công lý để các cá nhân tự do cạnh tranh lành mạnh."
    },
    {
        question: "Herbert Spencer cực lực phản đối chính sách nào sau đây của chính phủ vì cho rằng nó vi phạm quy luật chọn lọc tự nhiên?",
        answers: { A: "Chính sách giảm thuế cho các doanh nghiệp tư nhân", B: "Các chương trình cứu tế, phúc lợi xã hội và hỗ trợ người nghèo của nhà nước", C: "Các chính sách bảo vệ quốc phòng và an ninh biên giới", D: "Việc khuyến khích tự do thương mại quốc tế" },
        correct: "B",
        explain: "Spencer tin rằng việc cứu trợ người nghèo và người yếu thế sẽ khuyến khích sự lười biếng, duy trì những cá thể không thích nghi và làm suy yếu nòi giống xã hội về lâu dài."
    },
    {
        question: "Quan điểm kinh tế và chính trị chủ đạo của Herbert Spencer ủng hộ nguyên tắc nào sau đây?",
        answers: { A: "Kinh tế kế hoạch hóa tập trung xã hội chủ nghĩa", B: "Nguyên tắc tự do can thiệp / Mặc kệ nó làm (Laissez-faire)", C: "Chủ nghĩa bảo hộ mậu dịch quốc gia nghiêm ngặt", D: "Chủ nghĩa phát-xít kiểm soát toàn diện đời sống xã hội" },
        correct: "B",
        explain: "Spencer là người ủng hộ triệt để chủ nghĩa cá nhân tự do và học thuyết kinh tế Laissez-faire, yêu cầu chính phủ không được can thiệp vào tiến trình phát triển tự nhiên của xã hội và thị trường."
    },
    {
        question: "Theo phân loại của Herbert Spencer về sự phát triển cấu trúc xã hội, mức độ tiến hóa đi từ đơn giản đến phức tạp bao gồm các nấc thang nào?",
        answers: { A: "Xã hội đơn giản -> Xã hội kép (compound) -> Xã hội kép hai lần -> Xã hội kép ba lần", B: "Xã hội nguyên thủy -> Xã hội cổ đại -> Xã hội trung đại -> Xã hội hiện đại", C: "Xã hội bầy đàn -> Xã hội bộ lạc -> Xã hội quốc gia -> Xã hội toàn cầu", D: "Xã hội thuần nhất -> Xã hội quân sự -> Xã hội phong kiến -> Xã hội công nghiệp" },
        correct: "A",
        explain: "Spencer phân loại xã hội theo mức độ phức tạp của cấu trúc (kép dần lên) do sự hợp nhất của các nhóm nhỏ thành các tập hợp lớn hơn qua các cuộc chiến tranh và liên kết."
    },
    {
        question: "\"Xã hội đơn giản\" (Simple society) theo định nghĩa của Herbert Spencer là xã hội có đặc điểm gì?",
        answers: { A: "Có sự phân chia giai cấp vô cùng phức tạp và sâu sắc", B: "Là một chỉnh thể độc lập, không có sự phân hóa cấu trúc, các bộ phận hoạt động giống nhau và không có chính quyền trung ương thường trực", C: "Được điều hành bởi một bộ máy quan liêu chuyên nghiệp đông đảo", D: "Dựa trên nền tảng công nghệ kỹ thuật số hiện đại" },
        correct: "B",
        explain: "Xã hội đơn giản là nấc thang tiến hóa thấp nhất, cấu trúc đồng nhất, chưa có sự chuyên môn hóa chức năng và vai trò lãnh đạo chỉ mang tính tạm thời."
    },
    {
        question: "Sự chuyển đổi từ \"Xã hội quân sự\" sang \"Xã hội công nghiệp\" đại diện cho xu hướng tiến hóa nào trong lịch sử tư tưởng của Spencer?",
        answers: { A: "Sự gia tăng quyền lực tuyệt đối của hoàng gia", B: "Xu hướng chuyển từ hợp tác cưỡng bức sang hợp tác tự nguyện và tôn trọng tự do cá nhân", C: "Sự suy giảm của nền kinh tế thương mại thế giới", D: "Xu hướng thần học hóa mọi hoạt động khoa học xã hội" },
        correct: "B",
        explain: "Sự tiến hóa từ quân sự sang công nghiệp đánh dấu sự giải phóng cá nhân khỏi xiềng xích kiểm soát cưỡng bức của nhà nước, chuyển sang cơ chế hợp đồng tự nguyện."
    },
    {
        question: "Phương pháp tiếp cận khoa học của Herbert Spencer đối với xã hội học mang tính chất gì?",
        answers: { A: "Chỉ dựa vào suy biện triết học thuần túy không cần số liệu", B: "Sử dụng các dữ liệu lịch sử và nhân chủng học phong phú để chứng minh cho các giả thuyết tiến hóa", C: "Thực hiện các cuộc phỏng vấn sâu tâm lý học cá nhân", D: "Tiến hành các thí nghiệm tâm lý học hành vi trong phòng kín" },
        correct: "B",
        explain: "Spencer đã thu thập một khối lượng khổng lồ các tài liệu dân tộc học, nhân chủng học từ các bộ lạc nguyên thủy trên thế giới để minh chứng cho các quy luật tiến hóa cấu trúc xã hội trong bộ sách của mình."
    },
    {
        question: "Herbert Spencer ví von hệ thống các thiết chế xã hội (như gia đình, tôn giáo, chính trị) đóng vai trò gì trong siêu cơ thể xã hội?",
        answers: { A: "Các tế bào thần kinh truyền dẫn cảm xúc cá nhân", B: "Các cơ quan chức năng chuyên biệt duy trì sự sống và ổn định của toàn hệ thống", C: "Những khối u kìm hãm sự tiến hóa tự nhiên của xã hội", D: "Những công cụ bóc lột của giai cấp thống trị kinh tế" },
        correct: "B",
        explain: "Các thiết chế xã hội đóng vai trò giống như các cơ quan sinh học của cơ thể, đảm nhiệm các chức năng chuyên biệt để đáp ứng các nhu cầu sống còn của xã hội."
    },
    {
        question: "Tại sao Herbert Spencer lại coi sự phát triển của xã hội là một quá trình tiến hóa \"khách quan\"?",
        answers: { A: "Vì nó hoàn toàn do con người thiết kế và lập kế hoạch từ trước", B: "Vì nó diễn ra theo các quy luật tiến hóa tự nhiên của vũ trụ, tự điều chỉnh và không cần đến sự can thiệp có ý thức của con người", C: "Vì nó phụ thuộc hoàn toàn vào các sắc lệnh pháp luật của nhà vua", D: "Vì nó chỉ diễn ra khi có sự can thiệp và chỉ đạo trực tiếp của các linh mục tôn giáo" },
        correct: "B",
        explain: "Spencer tin rằng xã hội tự vận động theo quy luật tiến hóa nội tại; mọi nỗ lực của con người nhằm cải tạo xã hội một cách áp đặt, duy ý chí đều có nguy cơ phá vỡ sự cân bằng tự nhiên và gây hại cho tiến trình tiến hóa."
    },
    {
        question: "Khi giải thích về \"sự tích hợp\" (integration) trong tiến hóa xã hội, Herbert Spencer muốn nói đến hiện tượng nào?",
        answers: { A: "Sự phân rã của các nhóm xã hội thành các cá nhân riêng rẽ", B: "Sự liên kết, hợp nhất của các nhóm xã hội nhỏ thành các cộng đồng lớn hơn, thống nhất hơn", C: "Sự di cư tự do của người dân ra nước ngoài làm việc", D: "Việc bãi bỏ hoàn toàn các ranh giới quốc gia để lập chính phủ toàn cầu" },
        correct: "B",
        explain: "Tích hợp là xu hướng hội tụ, hợp nhất các đơn vị xã hội đơn lẻ, rời rạc thành một chỉnh thể có quy mô lớn hơn và có sự gắn kết nội bộ chặt chẽ hơn."
    },
    {
        question: "Trạng thái \"đồng nhất bất định\" (indefinite homogeneity) thường đặc trưng cho kiểu xã hội nào trong lý thuyết tiến hóa của Spencer?",
        answers: { A: "Các xã hội công nghiệp hiện đại châu Âu", B: "Các xã hội sơ khai, bộ lạc nguyên thủy chưa phân hóa", C: "Các quốc gia phong kiến tập quyền thời trung cổ", D: "Các siêu đô thị thông minh thế kỷ XXI" },
        correct: "B",
        explain: "Xã hội nguyên thủy có cấu trúc đơn giản, các thành viên làm những công việc giống nhau (đồng nhất) và các bộ phận cấu thành chưa có ranh giới rõ ràng (bất định)."
    },
    {
        question: "Trạng thái \"dị biệt xác định\" (definite heterogeneity) đặc trưng cho kiểu xã hội nào trong lý thuyết của Spencer?",
        answers: { A: "Các bộ lạc săn bắt và hái lượm cổ xưa", B: "Các xã hội có trình độ tiến hóa cao, phân công lao động sâu sắc và cấu trúc phức tạp", C: "Các nhóm bầy đàn động vật cấp cao", D: "Các xã hội quân sự thời cổ đại chưa có chữ viết" },
        correct: "B",
        explain: "Xã hội tiến hóa cao có sự chuyên môn hóa nghề nghiệp rõ rệt (dị biệt) và các thiết chế xã hội được tổ chức với chức năng, ranh giới pháp lý rất rõ ràng (xác định)."
    },
    {
        question: "Triết lý \"Chủ nghĩa Darwin xã hội\" của Spencer thường bị các nhà xã hội học hiện đại phê phán nặng nề nhất ở điểm nào?",
        answers: { A: "Vì nó khuyến khích các chương trình bảo vệ môi trường tự nhiên quá mức", B: "Vì tính chất tàn nhẫn, thiếu nhân văn khi phản đối sự giúp đỡ của xã hội đối với những người nghèo đói và tàn tật", C: "Vì nó đề cao quá mức vai trò của nhà nước trong nền kinh tế", D: "Vì nó ủng hộ các cuộc cách mạng bạo lực lật đổ chính quyền tư sản" },
        correct: "B",
        explain: "Việc áp dụng máy móc quy luật \"mạnh được yếu thua\" của sinh học vào xã hội loài người để biện hộ cho sự thờ ơ trước nỗi đau khổ của người nghèo bị coi là thiếu đạo đức và phi nhân bản."
    },
    {
        question: "Herbert Spencer định nghĩa \"Thiết chế xã hội\" (Social Institution) là gì?",
        answers: { A: "Những tòa nhà chính phủ được xây dựng bằng gạch đá kiên cố", B: "Những khuôn mẫu hành vi và quan hệ được thiết lập để thực hiện các chức năng xã hội cơ bản", C: "Các cuộc hội họp tự phát của người dân ngoài đường phố", D: "Các ý tưởng sáng tạo nghệ thuật cá nhân của nghệ sĩ" },
        correct: "B",
        explain: "Thiết chế xã hội là các cấu trúc bền vững được hình thành để giải quyết các nhu cầu thiết yếu của đời sống tập thể, duy trì sự tồn tại lâu dài của xã hội."
    },
    {
        question: "Theo Spencer, loại thiết chế nào xuất hiện sớm nhất trong lịch sử loài người nhằm duy trì trật tự và kiểm soát hành vi của các thành viên?",
        answers: { A: "Thiết chế công nghiệp giáo dục", B: "Thiết chế nghi lễ (Ceremonial institutions) và chính trị sơ khai", C: "Thiết chế ngân hàng tài chính quốc tế", D: "Thiết chế nghiên cứu khoa học thực chứng" },
        correct: "B",
        explain: "Các nghi lễ, quy tắc ứng xử và sự sợ hãi quyền lực của thủ lĩnh hoặc người quá cố (tổ tiên) là những hình thức kiểm soát xã hội sơ khai nhất xuất hiện trước cả luật pháp thành văn."
    },
    {
        question: "Trong tác phẩm \"Tĩnh học xã hội\", Spencer đưa ra \"Luật tự do bình đẳng\" (Law of equal freedom) với nội dung cốt lõi là gì?",
        answers: { A: "Mọi người có quyền tự do làm bất cứ điều gì mình muốn, miễn là không xâm phạm đến quyền tự do tương tự của người khác", B: "Mọi người bắt buộc phải có mức thu nhập và tài sản bằng nhau trong xã hội", C: "Nhà nước có quyền can thiệp vào mọi hành vi riêng tư của công dân để đảm bảo bình đẳng", D: "Cá nhân không có quyền tự do nào ngoài những quyền được nhà nước ban phát" },
        correct: "A",
        explain: "Đây là nguyên lý đạo đức và chính trị nền tảng của Spencer đề cao tự do cá nhân tối đa trong mối tương quan hài hòa với tự do của những người xung quanh."
    },
    {
        question: "Sự khác biệt giữa quan điểm về \"Tĩnh học xã hội\" của Auguste Comte và Herbert Spencer là gì?",
        answers: { A: "Comte coi tĩnh học xã hội là nghiên cứu biến đổi xã hội còn Spencer thì ngược lại", B: "Comte dùng tĩnh học xã hội để nghiên cứu trật tự hiện tại, còn Spencer dùng nó để mô tả trạng thái xã hội lý tưởng mà sự tiến hóa sẽ đạt tới, nơi cá nhân và xã hội hoàn toàn thích nghi với nhau", C: "Spencer coi tĩnh học xã hội là một nhánh của vật lý học thiên văn", D: "Comte phản đối hoàn toàn khái niệm tĩnh học xã hội trong nghiên cứu" },
        correct: "B",
        explain: "Trong khi Comte tập trung vào trạng thái ổn định hiện tại, Spencer coi tĩnh học xã hội là sự thiết lập trạng thái cân bằng lý tưởng lâu dài của tiến trình tiến hóa loài người."
    },
    {
        question: "Theo thuyết hữu cơ của Spencer, tại sao một sinh vật hay một xã hội không thể duy trì mãi trạng thái đơn giản ban đầu?",
        answers: { A: "Vì sự can thiệp có chủ ý của các thế lực siêu nhiên bên ngoài", B: "Vì xu hướng tăng trưởng quy mô tự nhiên luôn đòi hỏi phải có sự phân hóa cấu trúc để thích nghi và tồn tại hiệu quả hơn", C: "Vì các nhà lãnh đạo xã hội luôn muốn làm cho cấu trúc phức tạp hơn", D: "Vì sự suy giảm của dân số bắt buộc xã hội phải thay đổi cấu trúc" },
        correct: "B",
        explain: "Sự gia tăng về lượng (quy mô, dân số) tất yếu đòi hỏi sự thay đổi về chất (phân công lao động, chuyên môn hóa chức năng) để hệ thống không bị sụp đổ dưới sức nặng của chính nó."
    },
    {
        question: "Kiểu xã hội nào của Herbert Spencer tương ứng với thời kỳ phát triển của các đô thị hiện đại, tự do thương mại toàn cầu và sự suy giảm của các cuộc chiến tranh bành trướng?",
        answers: { A: "Xã hội quân sự", B: "Xã hội công nghiệp", C: "Xã hội kép ba lần sơ khai", D: "Xã hội phong kiến tập quyền" },
        correct: "B",
        explain: "Xã hội công nghiệp đặc trưng bởi sự phát triển của công nghiệp, thương mại, sự trỗi dậy của giai cấp trung lưu và xu thế hòa bình, tự do trao đổi hàng hóa giữa các quốc gia."
    },
    {
        question: "Spencer gọi các hiện tượng xã hội siêu vượt lên trên cấp độ sinh học của cá thể đơn lẻ là gì?",
        answers: { A: "Hiện tượng tâm lý học hành vi", B: "Hiện tượng siêu hữu cơ (Super-organic)", C: "Hiện tượng siêu tự nhiên thần học", D: "Hiện tượng vật lý học xã hội" },
        correct: "B",
        explain: "Khái niệm \"siêu hữu cơ\" được Spencer dùng để chỉ cấp độ tiến hóa cao nhất - tiến hóa xã hội, nơi các thiết chế, văn hóa và ngôn ngữ tồn tại độc lập và vượt lên trên cơ thể sinh học của từng cá nhân riêng lẻ."
    },
    {
        question: "Khi phân tích về \"sự phân hóa\" (differentiation) trong tiến hóa xã hội, Spencer muốn chỉ quá trình nào?",
        answers: { A: "Sự đồng nhất hóa mọi lối sống của người dân trong xã hội", B: "Sự xuất hiện ngày càng nhiều các bộ phận, ngành nghề và thiết chế chuyên biệt đảm nhận các chức năng khác nhau trong xã hội", C: "Sự suy yếu hoàn toàn của hệ thống kiểm soát pháp luật của nhà nước", D: "Sự sáp nhập của các bộ tộc nhỏ thành một quốc gia lớn" },
        correct: "B",
        explain: "Phân hóa là quá trình chuyển đổi từ trạng thái các bộ phận làm những việc giống nhau sang trạng thái mỗi bộ phận đảm nhiệm một chức năng chuyên biệt khác nhau."
    },
    {
        question: "Trong xã hội quân sự của Spencer, rào cản lớn nhất đối với sự phát triển kinh tế tự do là gì?",
        answers: { A: "Sự thiếu hụt lao động chân tay trong nông nghiệp", B: "Sự kiểm soát, can thiệp quá sâu và độc quyền sản xuất của chính quyền nhà nước nhằm phục vụ quốc phòng", C: "Việc thiếu các phương tiện giao thông đường sắt hiện đại", D: "Sự thù địch giữa các nhà công nghiệp tư nhân với nhau" },
        correct: "B",
        explain: "Trong xã hội quân sự, mọi nguồn lực kinh tế đều bị nhà nước trưng dụng và quản lý tập trung, bóp nghẹt các sáng kiến cá nhân và sự phát triển của thị trường tự do cạnh tranh."
    },
    {
        question: "Spencer cho rằng sự tiến hóa xã hội có thể có những giai đoạn tạm thời đi thụt lùi hoặc dừng lại, hiện tượng này được gọi là gì?",
        answers: { A: "Sự phân rã tiến hóa", B: "Sự thoái lui / Sự tan rã (Dissolution)", C: "Sự bão hòa cấu trúc xã hội", D: "Sự cách mạng hóa triệt để" },
        correct: "B",
        explain: "Tiến trình phát triển không phải lúc nào cũng là đường thẳng liên tục; khi một xã hội không thích nghi được với môi trường hoặc bị tàn phá bởi chiến tranh, nó có thể trải qua quá trình thoái hóa hoặc tan rã cấu trúc."
    },
    {
        question: "Điều kiện cốt lõi để một xã hội công nghiệp có thể vận hành ổn định và thịnh vượng theo Herbert Spencer là gì?",
        answers: { A: "Sự áp đặt kỷ luật lao động sắt của chính phủ tối cao", B: "Sự bảo đảm quyền tự do cá nhân, quyền sở hữu tư sản và sự tôn trọng các hợp đồng dân sự tự nguyện", C: "Sự bãi bỏ hoàn toàn hệ thống giao thông đường thủy", D: "Việc nhà nước nắm độc quyền toàn bộ hoạt động thương mại quốc tế" },
        correct: "B",
        explain: "Xã hội công nghiệp vận hành dựa trên cơ chế tự điều chỉnh của thị trường và sự đồng thuận tự nguyện giữa các cá nhân tự do, do đó quyền sở hữu tư hữu và sự tự do hợp đồng là cực kỳ quan trọng."
    },
    {
        question: "Ai là người đã chịu ảnh hưởng lớn từ lý thuyết của Herbert Spencer và sau này tiếp tục phát triển thuyết chức năng trong xã hội học?",
        answers: { A: "Karl Marx", B: "Émile Durkheim", C: "Max Weber", D: "George Herbert Mead" },
        correct: "B",
        explain: "Émile Durkheim chịu ảnh hưởng lớn từ các phân tích của Spencer về sự phân công lao động, thuyết hữu cơ và chức năng của các thiết chế xã hội, dù Durkheim phê phán quan điểm chủ nghĩa cá nhân cực đoan của Spencer."
    },
    {
        question: "Điểm khác biệt lớn nhất giữa quan điểm tiến hóa của Herbert Spencer và Karl Marx là gì?",
        answers: { A: "Spencer coi tiến hóa dẫn đến xã hội công nghiệp hòa bình tự do cá nhân, còn Marx coi tiến hóa dẫn đến xã hội cộng sản chủ nghĩa thông qua đấu tranh giai cấp và cách mạng", B: "Marx ủng hộ chủ nghĩa Darwin xã hội còn Spencer thì phản đối", C: "Spencer coi kinh tế quyết định ý thức còn Marx thì ngược lại", D: "Cả hai ông đều phản đối việc nghiên cứu xã hội một cách khoa học khách quan" },
        correct: "A",
        explain: "Trong khi Spencer ủng hộ chủ nghĩa cá nhân tự do tư bản chủ nghĩa và sự tiến hóa tuần tiến hòa bình, Marx lại nhấn mạnh mâu thuẫn giai cấp, cách mạng bạo lực vô sản để lật đổ chế độ tư bản."
    },
    {
        question: "Tại sao Herbert Spencer lại đặt tên bộ giáo trình của mình là \"Các nguyên lý xã hội học\" thay vì \"Vật lý học xã hội\"?",
        answers: { A: "Vì ông muốn tỏ lòng kính trọng đối với Auguste Comte, người đã sáng tạo ra thuật ngữ \"Xã hội học\" trước đó", B: "Vì chính quyền nước Anh bắt buộc ông phải sử dụng thuật ngữ này", C: "Vì thuật ngữ \"Xã hội học\" đã trở nên phổ biến và phản ánh đúng bản chất nghiên cứu về các thiết chế xã hội của ông hơn", D: "Vì ông muốn phân biệt nghiên cứu của mình với các nghiên cứu sinh học thuần túy" },
        correct: "C",
        explain: "Spencer kế thừa thuật ngữ \"Xã hội học\" của Comte và sử dụng nó để đặt tên cho tác phẩm kinh điển của mình nhằm khẳng định vị thế độc lập của ngành khoa học này."
    },
    {
        question: "Spencer ví von \"Hệ thống mạch máu\" của cơ thể sinh học tương đương với bộ phận nào sau đây của xã hội loài người?",
        answers: { A: "Nhà tù và các đồn cảnh sát chính trị", B: "Hệ thống giao thông đường sá, chợ, ngân hàng và phương tiện phân phối hàng hóa", C: "Các trường học và viện nghiên cứu khoa học", D: "Các nghi lễ tôn giáo thờ cúng tổ tiên" },
        correct: "B",
        explain: "Hệ thống tuần hoàn phân phối có nhiệm vụ mang các sản phẩm dinh dưỡng từ nơi sản xuất (hệ thống nuôi dưỡng) đến nuôi sống các cơ quan khác, tương ứng với hoạt động thương mại và vận tải trong xã hội."
    },
    {
        question: "Đóng góp bền vững nhất của Herbert Spencer cho lý thuyết xã hội học hiện đại là gì?",
        answers: { A: "Việc phát minh ra các phương pháp điều tra bảng hỏi định lượng", B: "Việc đặt nền móng cho cách tiếp cận hệ thống, thuyết chức năng cấu trúc và phân tích sự chuyên môn hóa chức năng của các thiết chế xã hội", C: "Lý thuyết đấu tranh giai cấp triệt để xóa bỏ tư hữu", D: "Sự ủng hộ tuyệt đối đối với các chương trình bảo trợ xã hội của chính phủ" },
        correct: "B",
        explain: "Việc Spencer nhìn nhận xã hội như một hệ thống cấu trúc gồm các bộ phận phụ thuộc lẫn nhau và thực hiện các chức năng chuyên biệt để duy trì sự tồn tại của hệ thống chính là tiền đề trực tiếp cho sự ra đời của thuyết chức năng cấu trúc trong xã hội học thế kỷ XX."
    }
];
