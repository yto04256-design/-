// 今日の日付を取得

const today = new Date();

const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();

const weekdays = [
    "日曜日",
    "月曜日",
    "火曜日",
    "水曜日",
    "木曜日",
    "金曜日",
    "土曜日"
];

const weekday = weekdays[today.getDay()];

document.getElementById("today-date").textContent =
    year + "年" + month + "月" + day + "日 " + weekday;

const topButton = document.getElementById("top-button");

topButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// スクロール位置を確認する
window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

});