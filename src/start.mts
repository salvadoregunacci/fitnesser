const tg = window.Telegram.WebApp;

tg.ready();

const expandApp = () => {
    tg.expand();
    document.documentElement.requestFullscreen?.().catch(() => {});
};

expandApp();
tg.onEvent("viewport_changed", expandApp);
setTimeout(expandApp, 500);