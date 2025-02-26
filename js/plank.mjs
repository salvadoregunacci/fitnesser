import { Stopwatch } from "./Stopwatch.mjs";
initScreen();
function initScreen() {
    const stopwatch = new Stopwatch(".screen_plank .stopwatch");
    const $modal = document.querySelector('.plank-complete-modal');
    stopwatch.onEnd = () => {
        $modal === null || $modal === void 0 ? void 0 : $modal.classList.add("_active");
    };
}
