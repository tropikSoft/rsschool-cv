const btn = document.querySelector("#button");
const jump = document.querySelector("#jump");
const body = document.body;

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector("#menu").cloneNode(1);

// При клике на иконку button вызываем ф-ию buttonHandler
btn.addEventListener("click", btnHandler);

// Выполняем действия при клике ..
function btnHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  jump.classList.toggle("open");
  btn.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderJump();
}

// Здесь мы рендерим элементы в наш jump
function renderJump() {
  jump.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  jump.classList.remove("open");
  btn.classList.remove("active");
  body.classList.remove("noscroll");
}