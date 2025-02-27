const tg = window.Telegram.WebApp;
const $closeAppBtn = document.querySelector('.btn-close');

$closeAppBtn?.addEventListener("click", ()=> {
    console.log("++++");
    
    tg.close();
});