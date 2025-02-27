const tg = window.Telegram.WebApp;
const $closeAppBtn = document.querySelector('.btn-close');
$closeAppBtn === null || $closeAppBtn === void 0 ? void 0 : $closeAppBtn.addEventListener("click", () => {
    console.log("++++");
    tg.close();
});
export {};
