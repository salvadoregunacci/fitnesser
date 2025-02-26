export class Stopwatch {
    constructor(selector) {
        this.isStarted = false;
        this.intervalId = null;
        this.$el = document.querySelector(selector);
        if (!this.$el) {
            throw new Error("Stopwatch element not found");
        }
        this.seconds = 0;
        this.$label = this.$el.querySelector(".stopwatch__value");
        this.endTime = Number(this.$el.dataset.end) || 0;
        this.$el.addEventListener("click", this.__start.bind(this));
        if (!this.$label) {
            throw new Error("Stopwatch element label not found");
        }
        this.$label.textContent = String(this.seconds);
        this.onEnd = () => { };
        this.onUpdate = () => { };
    }
    getValue() {
        return this.seconds;
    }
    __start() {
        var _a;
        if (this.isStarted)
            return;
        this.isStarted = true;
        (_a = this.$el) === null || _a === void 0 ? void 0 : _a.classList.add("_started");
        this.intervalId = setInterval(() => {
            if (this.seconds >= this.endTime) {
                this.__end();
            }
            else {
                this.seconds++;
            }
            if (this.$label) {
                this.$label.textContent = String(this.seconds);
            }
        }, 1000);
    }
    __end() {
        var _a;
        if (this.onEnd) {
            this.onEnd();
        }
        (_a = this.$el) === null || _a === void 0 ? void 0 : _a.classList.add("_completed");
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }
}
