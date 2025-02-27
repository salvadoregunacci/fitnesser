
export enum Screen {
    start = "start",
    wormup = "wormup",
    press = "press",
    pushups = "pushups",
    plank = "plank",
    squats = "squats",
    stretch = "stretch",
    finish = "finish",
}

export type ITime = {
    minutes: number,
    seconds: number,
}

declare global {
    interface Window {
        Telegram: {
            WebApp: {
                ready: () => void;
                expand: () => void;
                close: () => void;
                initData: string;
                initDataUnsafe: object;
                MainButton: {
                    show: () => void;
                    hide: () => void;
                    setText: (text: string) => void;
                };
                onEvent: (event: string, callback: () => void) => void;
            };
        };
    }
}