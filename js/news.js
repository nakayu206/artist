
var access = $.cookie('access')
if (!access) {
    flag = true;
    $.cookie('access', false);
} else {
    flag = false
}

// モーダル表示設定
function setupModal(className) {
    return $(className).modaal({
        start_open: flag,
        overlay_close: true,
        before_open: function () {
            $('html').css('overflow-y', 'hidden');
        },
        after_close: function () {
            $('html').css('overflow-y', 'scroll');
        }
    });
}

setupModal(".modal-open01");
setupModal(".modal-open02");
setupModal(".modal-open03");
setupModal(".modal-open04");
setupModal(".modal-open05");
setupModal(".modal-open06");
setupModal(".modal-open07");
setupModal(".modal-open08");
setupModal(".modal-open09");
setupModal(".modal-open10");

// スクロールイベントリスナーを追加
window.addEventListener("scroll", function () {
    var topLink = document.getElementById("top-link");
    if (window.scrollY > 500) {
      topLink.style.display = "block";
    } else {
      topLink.style.display = "none";
    }
  });