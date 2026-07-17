// odometer.d.ts
declare module "odometer" {
    interface OdometerOptions {
        el: HTMLElement;
        value?: number;
        theme?: string;
        format?: string;
        duration?: number;
    }

    class Odometer {
        constructor(options: OdometerOptions);
        update(val: number): void;
    }

    export default Odometer;
}
