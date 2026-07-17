declare module "splitting" {
    interface SplitResult {
        el: Element;
        chars?: HTMLElement[];
        words?: HTMLElement[];
        lines?: HTMLElement[];
    }

    interface SplittingOptions {
        target?: string | Element | NodeListOf<Element>;
        by?: "chars" | "words" | "lines" | string;
    }

    function Splitting(options?: SplittingOptions): SplitResult[];

    export = Splitting;
}
