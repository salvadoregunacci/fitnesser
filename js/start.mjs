const tg = window.Telegram.WebApp;
tg.ready();
const expandApp = () => {
    var _a, _b;
    tg.expand();
    (_b = (_a = document.documentElement).requestFullscreen) === null || _b === void 0 ? void 0 : _b.call(_a).catch(() => { });
};
expandApp();
tg.onEvent("viewport_changed", expandApp);
setTimeout(expandApp, 500);
export {};
