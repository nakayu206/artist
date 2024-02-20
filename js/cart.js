document.addEventListener("DOMContentLoaded", function () {
    // DOMのコンテンツが読み込まれたときのイベントリスナー

    // ローカルストレージから商品データを取得
    let items = JSON.parse(localStorage.getItem("items"));

    // カート内の商品一覧を表示する要素を取得
    let ele = document.getElementById('js_shopping_list');

    // DOMの追加処理用のフラグメントを作成
    let fragment = document.createDocumentFragment();

    // 購入確定ボタンを取得
    let confirm_btn = document.getElementById('js_confirm');

    // 合計金額の初期化
    let total = 0;

    if (items) {
        // カート内の商品情報を表示
        for (let i = 0; i < items.length; i++) {
            let li = document.createElement('li'),
                h2 = document.createElement('h2'),
                img = document.createElement('img'),
                quantity = document.createElement('div'),
                price = document.createElement('div'),
                singlePrice = document.createElement('div'),
                removeBtn = document.createElement('button');

            // 商品情報を要素に設定
            h2.appendChild(document.createTextNode(items[i].name));
            img.src = items[i].imgSrc;
            quantity.appendChild(document.createTextNode("個数：" + items[i].quantity + " 個"));
            singlePrice.appendChild(document.createTextNode("小計: " + (items[i].price * items[i].quantity).toLocaleString() + " 円"));
            removeBtn.appendChild(document.createTextNode("削除"));

            // 要素をli要素に追加
            li.appendChild(h2);
            li.appendChild(img);
            li.appendChild(quantity);
            li.appendChild(price);
            li.appendChild(singlePrice);
            li.appendChild(removeBtn);

            // フラグメントにli要素を追加
            fragment.appendChild(li);

            // 合計金額を計算
            total += items[i].price * items[i].quantity;

            // 削除ボタンのクリックイベント
            removeBtn.addEventListener('click', function () {
                items.splice(i, 1); // 配列からアイテムを削除
                localStorage.setItem('items', JSON.stringify(items)); // ローカルストレージを更新
                li.remove(); // 該当の商品要素を削除
                calculateTotal(); // 合計金額を更新
            });
        }
    }

    // 合計金額を表示する要素を取得して表示
    const total_ele = document.getElementById('js_total');
    total_ele.textContent = "合計金額：" + total.toLocaleString() + " 円";
    
    // フラグメントをカート内要素に追加
    ele.appendChild(fragment);

    // 購入確定ボタンのクリックイベント
    confirm_btn.addEventListener('click', function () {
        window.alert('購入が確定しました。');
        localStorage.removeItem('items'); // カート内の商品を削除
    });
});

// 合計金額を更新する関数
function calculateTotal() {
    // この関数の中身が提供されていないため、上記コード中の `calculateTotal()` を正しく実装してください
}