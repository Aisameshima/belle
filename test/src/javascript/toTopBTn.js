function toTopBtn() {
  return (window.pageYOffset !== undefined) ? window.pageYOffset : document.documentElement.scrollTop;
}

//トップに戻るボタンの要素を取得
var topButton = document.getElementById('to-top');

//ボタンの表示・非表示
window.onscroll = function () {
  (toTopBtn() > 500) ? topButton.classList.add('is-show') : topButton.classList.remove('is-show');
};

//トップに移動する関数
function scrollToTop() {
  var scrolled = toTopBtn();
  window.scrollTo(0, Math.floor(scrolled / 2));
  if (scrolled > 0) {
    window.setTimeout(scrollToTop, 30);
  }
};

//イベント登録
topButton.onclick = function () {
  scrollToTop();
};