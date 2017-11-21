import { INsCapabilities } from "./ins-capabilities";
export declare class Locator {
    private _args;
    private _elementsList;
    constructor(_args: INsCapabilities);
    readonly button: string;
    readonly listView: string;
    readonly image: string;
    readonly allELementsList: Map<string, string>;
    getElementByName(name: any): string;
    private loadAndroidElements();
    private loadIOSElements();
    private createIosElement(element);
}
