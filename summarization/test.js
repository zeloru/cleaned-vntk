const text = `Chân sút dội bom nhất U23 Việt Nam Nguyễn Quang Hải nhận được lời đề nghị hấp dẫn từ Nhật Bản, thay cho những lời mời mọc, quyến rũ từ Thai League.

Không có gì ngạc nhiên khi Quang Hải trở thành cái tên của U23 Việt Nam được nhiều CLB nước ngoài săn đón, mời mọc nhất, kể từ sau vụt sáng với ngôi Á quân U23 châu Á 2018. Từ Thái Lan, Á quân Thai-League SCG Muangthong United chìa ra lời đề nghị mượn Quang Hải 1 năm gửi đến Hà Nội FC.

Á quân Thai League, thông qua mối quan hệ thân thiết là SCG- nhà tài trợ cho Hà Nội FC lẫn SCG Muangthong United, muốn tác động đến lãnh đạo Hà Nội FC mượn tiền vệ có cái chân trái cực ngoan này. Quang Hải được ngắm cho vị trí thay thế Chanathip vốn chưa được lấp đầy, sau khi "Messi Thái" sang chơi bóng tại J-League từ giữa mùa bóng trước. Tất nhiên, mức lương dành cho Quang Hải nếu chấp nhận sang chơi bóng tại Thai League được xếp vào loại A, nhỉnh hơn cả tuyển thủ Thái Lan, ước chừng gần 30.000 USD/ tháng.

Trước SCG Muangthong United, Hải "con" cũng đã lọt vào tầm mắt săn đón của Buriram United. Nhà vô địch Thai- League mê mẩn Quang Hải từ ngay khi tiền vệ này chưa toả sáng tại VCK U23 châu Á. Buriram United đã mời mọc Hải "con" sau màn trình diễn rất ấn tượng trong màu áo U23 Việt Nam ngay trên sân I-mobile ở M150 Cup. Do không thuyết phục được Hà Nội FC nhả Quang Hải, Buriram United mới chuyển hướng chiêu mộ Hoàng Vũ Samson.

Giá trị của Quang Hải có thể còn được "đội" lên gấp đôi, gấp ba từ mùa 2019, một khi Thai- League cởi trói cho suất cầu thủ Đông Nam Á được ra sân như một cầu thủ Thái Lan. Mùa này, dù cho đăng ký 2 suất cầu thủ châu Á và Đông Nam Á, nhưng trên sân chỉ được ra sân 1.

Ngoài Thái Lan, Hà Nội FC còn "hồi đáp không hết" những lời mời mọc, đề nghị được chuyển nhượng Quang Hải từ các tay cò. Tuy nhiên, có lời đề nghị từ Nhật làm đội chủ sân Hàng Đẫy rơi vào trạng thái bối rối, khi Tokushima Vortis đề ra lời mời mọc "chuộc" Quang Hải. Đội bóng J-League 2 rất thiện chí đưa Hải "con" sang Nhật chơi bóng, với phí chuyển nhượng và mức lương hấp dẫn, đặc biệt là sự đảm bảo để tiền vệ vừa toả sáng với U23 Việt Nam được thường xuyên ra sân.

Chưa bán vì muốn gọt giũa thành "sao bự"

Việc Quang Hải nhận được sự quan tâm lớn từ những CLB nước ngoài cho thấy sức hút từ tài năng của tiền vệ này. Chủ tịch Hà Nội FC Nguyễn Quốc Hội cũng chẳng giấu giếm về khả năng, Hà Nội FC chuyển nhượng Quang Hải, tạo cơ hội cho tiền vệ này được ra nước ngoài thi đấu. Tuy nhiên, đến lúc này, đội chủ sân Hàng Đẫy chưa có ý định nhả Quang Hải cho bất cứ đội bóng nào, kể cả khi phải bỏ qua sự quyến rũ của rất... nhiều tiền.

"Chúng tôi chưa có ý định chuyển nhượng Quang Hải", ông Hội nói, "Cậu ấy có tiềm năng, vừa toả sáng với U23 Việt Nam, nhưng nói gì đi nữa, Hải vẫn là cầu thủ trẻ. Hải cần được gọt giũa, tích luỹ thêm kinh nghiệm để hoàn thiện hơn. Chuyển nhượng Quang Hải thời điểm này rất có giá, nhưng chúng tôi muốn cậu ấy thành ngôi sao lớn thực thụ chứ không chỉ là mới chớm nở như lúc này".

Giữ chân Quang Hải, Hà Nội FC muốn ngôi sao trẻ của mình cống hiến, đền đáp cho những gì CLB đã đầu tư đào tạo trong 10 năm qua. Quan trọng nhất, giống như trường hợp Chanathip có thể chơi bóng đĩnh đạc, toả sáng ở J-League lúc này, Hà Nội FC muốn Hải "con" được gọt giũa kỹ lưỡng hơn, hoàn thiện các kỹ năng trước khi bước ra biển lớn.

Ông Hội nói: "Quang Hải có lẽ trước sau cũng ra nước ngoài chơi bóng. Có điều CLB và Hải phải chọn thời điểm thích hợp nhất để cậu ấy đánh chuông xứ người. Thời điểm này là chưa thích hợp, và chúng ta phải hết sức tỉnh táo để Hải có thể được rèn giũa thêm, phát triển đúng như kỳ vọng".`

let tr = require('textrank');
let textRank = new tr.TextRank(text, { extractAmount: 4 });

console.log(textRank.summarizedArticle)
/*
output:
Chân sút dội bom nhất U23 Việt Nam Nguyễn Quang Hải nhận được lời đề nghị hấp dẫn từ Nhật Bản, thay cho những lời mời mọc, quyến rũ từ Thai League. Không có gì ngạc nhiên khi Quang Hải trở thành cái têncủa U23 Việt Nam được nhiều CLB nước ngoài săn đón, mời mọc nhất, kể từ sau vụt sáng với ngôi Á quân U23 châu Á 2018. Quang Hải được ngắm cho vị trí thay thế Chanathip vốn chưa được lấp đầy, sau khi "Messi Thái" sang chơi bóng tại J-League từ giữa mùa bóng trước. Giá trị của Quang Hải có thể còn được "đội" lên gấp đôi, gấp ba từ mùa 2019, một khi Thai- League cởi trói cho suất cầu thủ Đông Nam Á được ra sân như một cầu thủ Thái Lan.
*/