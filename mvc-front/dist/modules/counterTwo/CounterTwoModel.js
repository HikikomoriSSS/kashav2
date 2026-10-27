export class CounterTwoModel {
    constructor() {
        this.value = 0;
    }
    increment() {
        this.value += 1;
        return this.value;
    }
    decrement() {
        this.value -= 1;
        return this.value;
    }
    multipleAndDivide() {
        this.value *= 5;
        this.value /= 3;
        this.value = Math.ceil(this.value);
        return this.value;
    }
}
//# sourceMappingURL=CounterTwoModel.js.map