import { CounterTwoController } from "./CounterTwoController";
export class CounterTwoView {
    constructor(root) {
        this.onIncrementClick = () => {
            this.updateTitle(this.controller.handleIncrement());
        };
        this.onDecrementClick = () => {
            this.updateTitle(this.controller.handleDecrement());
        };
        this.onMultiplyClick = () => {
            this.updateTitle(this.controller.handleMultiply());
        };
        this.root = root;
        this.controller = new CounterTwoController();
        this.title = document.createElement('h1');
        this.title.innerText = 'Value = 0';
        this.incrementButton = document.createElement('button');
        this.incrementButton.innerText = 'increment';
        this.decrementButton = document.createElement('button');
        this.decrementButton.innerText = 'decrement';
        this.multipleButton = document.createElement('button');
        this.multipleButton.innerText = 'multiply';
        this.bindListeners();
    }
    bindListeners() {
        this.incrementButton.addEventListener('click', this.onIncrementClick);
        this.decrementButton.addEventListener('click', this.onDecrementClick);
        this.multipleButton.addEventListener('click', this.onMultiplyClick);
    }
    updateTitle(value) {
        this.title.innerText = `Value = ${value}`;
    }
    mount() {
        this.root.appendChild(this.title);
        this.root.appendChild(this.incrementButton);
        this.root.appendChild(this.decrementButton);
        this.root.appendChild(this.multipleButton);
    }
}
//# sourceMappingURL=CounterTwoView.js.map