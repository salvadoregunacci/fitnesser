import { Stopwatch } from "./Stopwatch.mjs";

initScreen();

function initScreen() {
    const stopwatch = new Stopwatch(".screen_plank .stopwatch");
    const $modal = document.querySelector('.plank-complete-modal');

    stopwatch.onEnd = () => {
        $modal?.classList.add("_active");
    }
}