import { Timer } from "./Timer.mjs";

initScreen();
setInterval(changePracticGifs, 6000);


function initScreen() {
    const $nextScreenBtn: HTMLButtonElement | null = document.querySelector('.screen_timer .next-screen-btn');
    const timer = new Timer(".screen_timer .timer");

    timer.onEnd = () => {
        if ($nextScreenBtn) {
            $nextScreenBtn.removeAttribute("disabled");
        }
    }
}


function changePracticGifs(): void {
    const $activeGif: HTMLDivElement | null = document.querySelector(".practic-preview._active");

    if (!$activeGif) return;

    const $nextGif: Element | null = $activeGif.nextElementSibling;

    if ($nextGif) {
        $activeGif.classList.remove("_active");
        $nextGif.classList.add("_active");
    }
}