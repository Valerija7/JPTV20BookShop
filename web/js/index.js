var isDebugdebug=true;
function isDebug(message){
    if (isDebugdebug) console.log(message);
}
const menuAddAuthor = document.getElementById("menu_add_author");
const menuAddBook = document.getElementById("menu_add_book");
const menuPurchases = document.getElementById("menu_purchaces");
const menuProfile = document.getElementById("menu_profile");
const menuAdminPanel = document.getElementById("menu_admin_panel");
const infoElement = document.getElementById("info");
const menuLogin = document.getElementById("menu_login");
menuLogin.addEventListener('click',toggleBtnLogin);
const menuLogout = document.getElementById("menu_logout");
menuLogout.addEventListener('click',toggleBtnLogin);

function toggleBtnLogin(){
    isDebug ("Переключаем кнопку");
    if(menuLogin.classList.contains("d-none")){
        showBtnLogin();
        toggleShowMenu();
        infoElement.innerHTML = "Вы вышли";
    }else{
        hiddenBtnLogin();
        toggleShowMenu();
        infoElement.innerHTML = "Вы вошли";
    }
}

function showBtnLogin (){
    isDebug("Показываем кнопку Выйти");
    menuLogin.classList.remove("d-none");
    menuLogout.classList.add("d-none"); 
}

function hiddenBtnLogin (){
    isDebug ("Показываем кнопку Войти");
    menuLogin.classList.add("d-none");
    menuLogout.classList.remove("d-none");
}

function toggleShowMenu(){
    if (menuAddAuthor.classList.contains("d-none")){
        showBtnsMenu();
    }else{
        hiddenBtnsMenu();
    }
}

function showBtnsMenu(){
    menuAddAuthor.classList.remove("d-none");
    menuAddBook.classList.remove("d-none");
    menuPurchases.classList.remove("d-none");
    menuProfile.classList.remove("d-none");
    menuAdminPanel.classList.remove("d-none");
}

function hiddenBtnsMenu (){
    menuAddAuthor.classList.add ("d-none");
    menuAddBook.classList.add ("d-none");
    menuPurchases.classList.add ("d-none");
    menuProfile.classList.add ("d-none");
    menuAdminPanel.classList.add ("d-none");
}

menuAddBook.addEventListener('click', function () {
    addActiveClass(this);
});
menuAddAuthor.addEventListener('click', function () {
    addActiveClass(this);
});
menuPurchases.addEventListener('click', function () {
    addActiveClass(this);
});
menuProfile.addEventListener('click', function () {
    addActiveClass(this);
});
menuAdminPanel.addEventListener('click', function () {
    addActiveClass(this);
});

function clearMenuActiveClass() {
    menuAddBook.classList.remove("active");
    menuAddAuthor.classList.remove("active");
    menuPurchases.classList.remove("active");
    menuProfile.classList.remove("active");
    menuAdminPanel.classList.remove("active");
}

function addActiveClass(element) {
    clearMenuActiveClass();
    element.classList.add("active");
    element.preventDefault();
}