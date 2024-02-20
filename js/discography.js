$('.slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    speed: 500,//スライドのスピード。初期値は300。
    slidesToShow: 3,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    centerMode: true,//要素を中央ぞろえにする
    variableWidth: true,//幅の違う画像の高さを揃えて表示
    dots: true,//下部ドットナビゲーションの表示
  });


  function GethashID(hashIDName) {
    if (hashIDName) {
        $('.tab li').find('a').each(function () {
            var idName = $(this).attr('href');
            if (idName == hashIDName) {
                var parentElm = $(this).parent();
                $('.tab li').removeClass("active");
                $(parentElm).addClass("active");
                $(".area").removeClass("is-active");
                $(hashIDName).addClass("is-active");
            }
        });
    }
}

$(document).ready(function () {
    $('.tab a').on('click', function () {
        var idName = $(this).attr('href');
        GethashID(idName);
        return false;
    });

    $('.tab li:first-of-type').addClass("active");
    $('.area:first-of-type').addClass("is-active");

    var hashName = location.hash;
    GethashID(hashName);
});

// スクロールイベントリスナーを追加
window.addEventListener("scroll", function () {
    var topLink = document.getElementById("top-link");
    if (window.scrollY > 100) {
      topLink.style.display = "block";
    } else {
      topLink.style.display = "none";
    }
  });






