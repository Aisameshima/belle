
  // ハンバーガーメニューのクリックイベント
  document.addEventListener('DOMContentLoaded', () => {
          const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('header-menu-nav');

  if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
      menu.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
          }
        });