var vntk = require('vntk');
var tokenizer = vntk.tokenizer;

console.log(tokenizer.tokenize('Giá khuyến mãi: 140.000đ / kg  ==> giảm được 20%'))
// [ 'Giá', 'khuyến', 'mãi', ':', '140.000', 'đ', '/', 'kg', '==>', 'giảm', 'được', '20', '%' ]

console.log(tokenizer.stokenize('Giá khuyến mãi: 140.000đ / kg  ==> giảm được 20%'))
// Giá khuyến mãi : 140.000 đ / kg ==> giảm được 20 %

var word_sent = vntk.word_sent;

console.log(word_sent.tag('Chào mừng các bạn trẻ tới thành phố Hà Nội'));
// [ 'Chào mừng', 'các', 'bạn', 'trẻ', 'tới', 'thành phố', 'Hà Nội' ]

console.log(word_sent.tag('Chào mừng các bạn trẻ tới thành phố Hà Nội', 'text'));
// Chào_mừng các bạn trẻ tới thành_phố Hà_Nội

var pos_tag = vntk.pos_tag;

console.log(pos_tag.tag('Chợ thịt chó nổi tiếng ở TP Hồ Chí Minh bị truy quét'))
// [ [ 'Chợ', 'N' ],
//   [ 'thịt', 'N' ],
//   [ 'chó', 'N' ],
//   [ 'nổi tiếng', 'A' ],
//   [ 'ở', 'E' ],
//   [ 'TP', 'N' ],
//   [ 'Hồ', 'Np' ],
//   [ 'Chí', 'Np' ],
//   [ 'Minh', 'Np' ],
//   [ 'bị', 'V' ],
//   [ 'truy quét', 'V' ] ]

var chunking = vntk.chunking;

console.log(chunking.tag('Nhật ký SEA Games ngày 21/8: Ánh Viên thắng giòn giã ở vòng loại.'))
// [ [ 'Nhật ký', 'N', 'B-NP' ],
//   [ 'SEA', 'N', 'B-NP' ],
//   [ 'Games', 'Np', 'B-NP' ],
//   [ 'ngày', 'N', 'B-NP' ],
//   [ '21/8', 'M', 'B-NP' ],
//   [ ':', 'CH', 'O' ],
//   [ 'Ánh', 'Np', 'B-NP' ],
//   [ 'Viên', 'Np', 'I-NP' ],
//   [ 'thắng', 'V', 'B-VP' ],
//   [ 'giòn giã', 'N', 'B-NP' ],
//   [ 'ở', 'E', 'B-PP' ],
//   [ 'vòng', 'N', 'B-NP' ],
//   [ 'loại', 'N', 'B-NP' ],
//   [ '.', 'CH', 'O' ] ]

var ner = vntk.ner;

console.log(ner.tag('Chưa tiết lộ lịch trình tới Việt Nam của Tổng thống Mỹ Donald Trump'))
// [ [ 'Chưa', 'R', 'O', 'O' ],
//   [ 'tiết lộ', 'V', 'B-VP', 'O' ],
//   [ 'lịch trình', 'V', 'B-VP', 'O' ],
//   [ 'tới', 'E', 'B-PP', 'O' ],
//   [ 'Việt Nam', 'Np', 'B-NP', 'B-LOC' ],
//   [ 'của', 'E', 'B-PP', 'O' ],
//   [ 'Tổng thống', 'N', 'B-NP', 'O' ],
//   [ 'Mỹ', 'Np', 'B-NP', 'B-LOC' ],
//   [ 'Donald', 'Np', 'B-NP', 'B-PER' ],
//   [ 'Trump', 'Np', 'B-NP', 'I-PER' ] ]

var dictionary = vntk.dictionary;

dictionary.has('chào');
// true

var senses = dictionary.lookup('chào');

console.log(senses);
/* Output
[ { example: 'chào thầy giáo ~ con chào mẹ',
    sub_pos: 'Vt',
    definition: 'tỏ thái độ kính trọng hoặc quan tâm đối với ai bằng lời nói hay cử chỉ, khi gặp nhau hoặc khi từ biệt',
    pos: 'V' },
    { example: 'đứng nghiêm làm lễ chào cờ',
    sub_pos: 'Vu',
    definition: 'tỏ thái độ kính cẩn trước cái gì thiêng liêng, cao quý',
    pos: 'V' },
    { example: 'chào hàng ~ lời chào cao hơn mâm cỗ (tng)',
    sub_pos: 'Vu',
    definition: 'mời ăn uống hoặc mua hàng',
    pos: 'V' }]
*/ 

var util = vntk.util;

console.log(util.clean_html('<span style="color: #4b67a1;">Xin chào!!!</span>'));


var tfidf = new vntk.TfIdf();

tfidf.addDocument('Đại tướng Trần Đại Quang - Ủy viên Bộ Chính trị, Bí thư Đảng ủy Công an Trung ương, Bộ trưởng Bộ Công an.');
tfidf.addDocument('Thượng tướng Tô Lâm - Ủy viên Bộ Chính trị - Thứ trưởng Bộ Công an.');
tfidf.addDocument('Thượng tướng Lê Quý Vương - Ủy viên Trung ương Đảng - Thứ trưởng Bộ Công an.');
tfidf.addDocument('Thiếu tướng Bùi Mậu Quân - Phó Tổng cục trưởng Tổng cục An ninh');

console.log('Bộ Công an --------------------------------');
tfidf.tfidfs('Bộ Công an', function (i, measure) {
    console.log('document #' + i + ' is ' + measure);
});

console.log('Tổng cục An ninh --------------------------------');
tfidf.tfidfs('Tổng cục An ninh', function (i, measure) {
    console.log('document #' + i + ' is ' + measure);
});


var classifier = new vntk.BayesClassifier();

classifier.addDocument('khi nào trận chiến đã kết thúc?', 'when');
classifier.addDocument('tàu rời đi lúc mấy giờ?', 'when');
classifier.addDocument('trận đấu diễn ra vào thời gian nào?', 'when');
classifier.addDocument('anh ấy rời đi vào lúc mấy giờ?', 'when');
classifier.addDocument('bao giờ thì đến lễ hội hóa trang?', 'when');
classifier.addDocument('ai phát hiện ra điện ?', 'who');
classifier.addDocument('người sáng lập ra microsoft là ai?', 'who');
classifier.addDocument('ai kiếm được tiền của họ một cách chăm chỉ ?', 'who');
classifier.addDocument('người phát minh tạo ra.', 'who');
classifier.addDocument('gia đình bạn gồm những ai?', 'who');

classifier.train();


console.log(classifier.classify('chiến tranh thế giới bắt đầu vào lúc nào?'));
// output: when

console.log(classifier.classify('kẻ thù của luffy là ai?'));
// output: who