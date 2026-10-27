import type { View } from "../../types/view";
import { CounterTwoController } from "./CounterTwoController";
export declare class CounterTwoView implements View {
    controller: CounterTwoController;
    root: HTMLElement;
    private title;
    private incrementButton;
    private decrementButton;
    private multipleButton;
    constructor(root: HTMLElement);
    private onIncrementClick;
    private onDecrementClick;
    private onMultiplyClick;
    private bindListeners;
    updateTitle(value: number): void;
    mount(): void;
}
//# sourceMappingURL=CounterTwoView.d.ts.map