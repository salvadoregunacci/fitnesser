export class Stopwatch {
    private seconds: number;
    private intervalId: number | null;
    private $el: HTMLElement | null;
    private $label: HTMLElement | null;
    private endTime: number;
    private isStarted: boolean = false;

    public onEnd: () => void;
    public onUpdate: (minutes: number, seconds: number) => void;


    constructor(selector: string) {
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


    public getValue(): number {
        return this.seconds;
    }


    private __start() {
        if (this.isStarted) return;

        this.isStarted = true;
        this.$el?.classList.add("_started");        

        this.intervalId = setInterval(() => {
            if (this.seconds >= this.endTime) {
                this.__end();
            } else {
                this.seconds++;
            }

            if (this.$label) {
                this.$label.textContent = String(this.seconds);
            }
        }, 1000);
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