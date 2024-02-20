document.addEventListener("DOMContentLoaded", function () {
    // DOMのコンテンツが読み込まれたときのイベントリスナー

    // 商品のコンテナを取得
    let container = document.querySelectorAll(".item");

    // カートボタンと関連する要素を取得
    let cart_btns = document.querySelectorAll('.js_cart_btn'),
        cart_cnt_icon = document.getElementById('js_cart_cnt'),
        cart_cnt = 0,
        clicked = [],
        save_items = [],
        items = JSON.parse(localStorage.getItem("items"));

    // ローカルストレージから商品情報を取得してカートの状態を復元
    if (items) {
        let id;
        for (let i = 0; i < items.length; i++) {
            id = items[i].id;
            save_items.push(items[i]);
            clicked.push(id);
            activate_btn(id);
        }
        if (items.length != 0) {
            cart_cnt_icon.parentNode.classList.remove('hidden');
            cart_cnt_icon.innerHTML = cart_cnt;
        }
    }

    // カートボタンにイベントリスナーを追加
    cart_btns.forEach(function (cart_btn, index) {
        cart_btn.addEventListener('click', function () {
            if (clicked.indexOf(index) >= 0) {
                // カートから商品を削除
                for (let i = 0; i < clicked.length; i++) {
                    if (clicked[i] == index) {
                        clicked.splice(i, 1);
                        save_items.splice(i, 1);
                    }
                }
                inactivate_btn(index);
            } else if (clicked.indexOf(index) == -1) {
                // カートに商品を追加
                let name = cart_btn.dataset.name,
                    price = Number(cart_btn.dataset.price),
                    imgSrc = container[index].querySelector('.item_img img').src, 
                    quantitySelect = container[index].querySelector('.js_quantity_select'),
                    quantity = parseInt(quantitySelect.value);

                clicked.push(index);
                save_items.push({
                    id: index,
                    name: name,
                    price: price,
                    quantity: quantity,
                    imgSrc: imgSrc 
                });
                activate_btn(index);
            }

            localStorage.setItem("items", JSON.stringify(save_items));
            calculateTotal();
        });
    });

    // カートボタンをアクティブ化する関数
    function activate_btn(index) {
        cart_cnt++;
        if (cart_cnt >= 1) {
            cart_cnt_icon.parentNode.classList.remove('hidden');
        }
        cart_cnt_icon.innerHTML = cart_cnt;
    
        cart_btns[index].classList.add('item_cart_btn_active'); 
        cart_btns[index].innerHTML = "削除";
        container[index].classList.add("selected");
    }

    // カートボタンを非アクティブ化する関数
    function inactivate_btn(index) {
        cart_cnt--;
        if (cart_cnt == 0) {
            cart_cnt_icon.parentNode.classList.add('hidden');
        }
        cart_cnt_icon.innerHTML = cart_cnt;
        cart_btns[index].classList.remove('item_cart_btn_active');
        cart_btns[index].innerHTML = "カートに入れる";
        container[index].classList.remove("selected");
    }

    // 合計金額を計算して表示する関数
    function calculateTotal() {
        let total = 0;
        for (let i = 0; i < save_items.length; i++) {
            total += save_items[i].price * save_items[i].quantity;
        }
        const total_ele = document.getElementById('js_total');
        total_ele.textContent = "合計金額：" + total.toLocaleString() + " 円";
    }

    // 初期表示時に合計金額を計算して表示
    calculateTotal();
});

// カートに追加ボタンのクリック時の処理
function addToCart(button) {
    button.classList.add('added'); // クラスを追加して背景色を変更
    button.innerText = '追加済み'; // テキストを変更
    button.disabled = true; // ボタンを無効化
}


// スクロールイベントリスナーを追加
window.addEventListener("scroll", function () {
    var topLink = document.getElementById("top-link");
    if (window.scrollY > 200) {
      topLink.style.display = "block";
    } else {
      topLink.style.display = "none";
    }
  });