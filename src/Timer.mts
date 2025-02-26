import { ITime } from "./types.mjs";


export class Timer {
    private minutes: number;
    private seconds: number;
    private intervalId: number | null;
    private $el: HTMLElement | null;
    private $labelEl: HTMLElement | null;

    public onEnd: () => void;
    public onUpdate: (minutes: number, seconds: number) => void;


    constructor(selector: string) {
        this.intervalId = null;
        this.$el = document.querySelector(selector);

        if (!this.$el) {
            throw new Error("Timer element not found");
        }

        let m = this.$el.dataset.minutes;
        let s = this.$el.dataset.seconds;

        this.minutes = Number(m) || 0;
        this.seconds = Number(s) || 0;
        this.$labelEl = this.$el.querySelector(".timer__text");
        this.$el.addEventListener("click", this.__start.bind(this));

        if (!this.$labelEl) {
            throw new Error("Timer element label not found");
        }

        this.$labelEl.textContent = this.getFormattedValue();

        this.onEnd = () => { };
        this.onUpdate = () => { };
    }


    private __start() {
        this.$el?.classList.add("_started");
        
        this.intervalId = setInterval(() => {
            if (this.seconds <= 0 && this.minutes <= 0) {
                this.__end();
            } else {
                if (this.seconds <= 0) {
                    if (this.minutes > 0) {
                        this.minutes--;
                        this.seconds = 60;
                    }
                }

                this.seconds--;
            }

            if (this.$labelEl) {
                this.$labelEl.textContent = this.getFormattedValue();
            }
        }, 1000);
    }


    public getFormattedValue(delimetr: string = ":"): string {
        let m: string = String(this.minutes);
        let s: string = String(this.seconds);

        if (m.length < 2) {
            m = "0" + m;
        }

        if (s.length < 2) {
            s = "0" + s;
        }

        return m + delimetr + s;
    }


    public getValue(): ITime {
        return {
            minutes: this.minutes,
            seconds: this.seconds,
        }
    }
    

    private __end() {
        if (this.onEnd) {
            this.onEnd();
        }

        this.$el?.classList.add("_completed");

        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }
}