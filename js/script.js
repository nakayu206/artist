
const swiper = new Swiper(".swiper", {
  // ページネーションが必要なら追加
  pagination: {
    el: ".swiper-pagination"
  },
  // ナビボタンが必要なら追加
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

function 順番に遅れて表示(画像リスト, インデックス, 遅延時間) {
  if (インデックス >= 画像リスト.length) {
    return;
  }
  setTimeout(() => {
    画像リスト[インデックス].style.opacity = "1"; // 透明度を1に設定して表示
    画像リスト[インデックス].style.transform = "translateX(0)"; // スライドインさせる
    順番に遅れて表示(画像リスト, インデックス + 1, 遅延時間);
  }, 遅延時間);
}

// 遅延時間（ミリ秒）を指定して関数を呼び出す
const 画像リスト = document.querySelectorAll("img");
const 画像表示間隔 = 400;
順番に遅れて表示(画像リスト, 0, 画像表示間隔);

const musicItems = document.querySelectorAll(".music-item");
let currentIndex = 0;

function showNextItem() {
  musicItems[currentIndex].classList.remove("show");
  currentIndex = (currentIndex + 1) % musicItems.length;
  musicItems[currentIndex].classList.add("show");
}

function startSlideshow() {
  showNextItem();
  setInterval(showNextItem, 10000); //10秒ごとに次のアイテムを表示
}

startSlideshow();


const profileWrapper = document.querySelector('.profile-wrapper');
const textElements = profileWrapper.querySelectorAll('.animated-text');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 要素が画面に表示されたらアニメーションを開始
      profileWrapper.style.opacity = '1'; // 要素の不透明度を1に設定して表示
      animateText();
      observer.unobserve(entry.target);
    }
  });
}, {
  root: null, // ルート要素をブラウザのビューポートに設定
  rootMargin: '0px', // アニメーションを開始する位置を微調整するためのマージン設定
  threshold: 0.5 // 要素が画面の50%以上表示されたらコールバックを呼び出す
});

observer.observe(profileWrapper);

function animateText() {
  let delay = 1000; // 最初の遅延時間を設定

  textElements.forEach((element) => {
    setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, delay);
    delay += 1000; // 各テキストのアニメーションの遅延時間を調整するには、この数値を変更します
  });
}

//初回のみモーダルをすぐ出す判定。flagがモーダル表示のstart_open後に代入される
var access = $.cookie('access');
if (!access) {
  flag = false; // Set flag to false if it's the user's first visit
  $.cookie('access', true); // Set the access cookie to true
} else {
  flag = false; // Set flag to false for subsequent visits
}

// Rest of your code...

setupModal(".modal-open01");
setupModal(".modal-open02");
setupModal(".modal-open03");
setupModal(".modal-open04");

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



let nav = document.querySelector("#navArea");
let btn = document.querySelector(".toggle-btn");
let mask = document.querySelector("#mask");

btn.onclick = () => {
  nav.classList.toggle("open");
};

mask.onclick = () => {
  nav.classList.toggle("open");
};

window.addEventListener('scroll', () => {
  const scrollLink = document.getElementById('scroll-link');
  if (scrollLink) {
    if (window.scrollY > 500) { // スクロール位置が500pxを超えたら非表示に
      scrollLink.classList.add('hidden');
    } else {
      scrollLink.classList.remove('hidden');
    }
  }
});
// スクロールイベントリスナーを追加
window.addEventListener("scroll", function () {
  var topLink = document.getElementById("top-link");
  if (window.scrollY > 800) {
    topLink.style.display = "block";
  } else {
    topLink.style.display = "none";
  }
});
