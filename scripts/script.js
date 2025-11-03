// 1. Находим элемент картинки по его ID, который мы указали в HTML
var myImage = document.getElementById("github-pic");

// 2. Добавляем "слушателя" события (event listener) на клик
myImage.addEventListener("click", function() {
    
    // 3. Когда происходит клик, выполняем этот код:
    // Открываем новую страницу в текущем окне (можно использовать window.open() для нового окна)
    window.location.href = "https://github.com/MaximOvch/first-html-project-git";

});
