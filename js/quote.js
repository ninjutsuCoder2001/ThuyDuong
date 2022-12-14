var quote = [
    "Sinh nhật Thùy Dương là 08/01 tui vẫn nhớ nè ^_^",
    "Bật dân ca lâu phai đi mờ >_<",
    "Thi đại học nhớ phải 28 điểm trở lên đó nhen",
    "Nhớ ra Hà Nội nghen",
    "2 vé mời tham dự sinh nhật ngày 15/01 nè, cầm đi. Một cho bạn một cho anh Đại nha. Heo mập tham gia phải mua vé",
    "Mượn má bánh bao cái coi",
    "Noel này hông rủ Thùy Dương đi chơi cùng được rồi, nếu đủ duyên xin khất sang Noel sau nhé",
    "Nha sĩ, võ sĩ, ca sĩ, ... còn gì nữa hông ta"
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quote.length));
    document.getElementById('quotedisplay').innerHTML = quote[randomNumber];
}