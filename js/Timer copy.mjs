export class Timer {
    constructor(selector) {
        this.intervalId = null;
        this.$timerEl = document.querySelector(selector);
        if (!this.$timerEl) {
            throw new Error("Timer element not found");
        }
        let m = this.$timerEl.dataset.minutes;
        let s = this.$timerEl.dataset.seconds;
        this.minutes = Number(m) || 0;
        this.seconds = Number(s) || 0;
        this.$timerLabelEl = this.$timerEl.querySelector(".timer__text");
        if (!this.$timerLabelEl) {
            throw new Error("Timer element label not found");
        }
        this.$timerLabelEl.textContent = this.getFormattedValue();
        this.onEnd = () => { };
        this.onUpdate = () => { };
    }
    start() {
        this.intervalId = setInterval(() => {
            if (this.seconds <= 0 && this.minutes <= 0) {
                this.__end();
            }
            else {
                if (this.seconds <= 0) {
                    if (this.minutes > 0) {
                        this.minutes--;
                        this.seconds = 60;
                    }
                }
                this.seconds--;
            }
            if (this.$timerLabelEl) {
                this.$timerLabelEl.textContent = this.getFormattedValue();
            }
        }, 1000);
    }
    getFormattedValue(delimetr = ":") {
        let m = String(this.minutes);
        let s = String(this.seconds);
        if (m.length < 2) {
            m = "0" + m;
        }
        if (s.length < 2) {
            s = "0" + s;
        }
        return m + delimetr + s;
    }
    getValue() {
        return {
            minutes: this.minutes,
            seconds: this.seconds,
        };
    }
    __end() {
        var _a;
        if (this.onEnd) {
            this.onEnd();
        }
        (_a = this.$timerEl) === null || _a === void 0 ? void 0 : _a.classList.add("_completed");
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }
}
