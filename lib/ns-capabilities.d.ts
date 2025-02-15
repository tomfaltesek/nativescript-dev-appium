import { INsCapabilities } from "./interfaces/ns-capabilities";
import { INsCapabilitiesArgs } from "./interfaces/ns-capabilities-args";
import { AutomationName } from "./automation-name";
import { IDevice } from "mobile-devices-controller";
import { IDeviceManager } from "./interfaces/device-manager";
import { ITestReporter } from "./interfaces/test-reporter";
import { LogImageType } from "./enums/log-image-type";
export declare class NsCapabilities implements INsCapabilities {
    private _parser;
    private _automationName;
    private _testReporter;
    projectDir: string;
    projectBinary: string;
    pluginRoot: string;
    pluginBinary: string;
    port: number;
    verbose: boolean;
    appiumCapsLocation: string;
    appiumCaps: any;
    testFolder: string;
    storage: string;
    testReports: any;
    reuseDevice: boolean;
    devMode: boolean;
    runType: string;
    isSauceLab: boolean;
    wdaLocalPort: number;
    appName: string;
    appPath: string;
    path: string;
    emulatorOptions: string;
    sessionId: string;
    capabilitiesName: string;
    ignoreDeviceController: boolean;
    relaxedSecurity: boolean;
    cleanApp: boolean;
    attachToDebug: boolean;
    startSession: boolean;
    isValidated: boolean;
    device: IDevice;
    deviceManager: IDeviceManager;
    exceptions: Array<string>;
    imagesPath: string;
    deviceTypeOrPlatform: string;
    driverConfig: any;
    logImageTypes: Array<LogImageType>;
    constructor(_parser: INsCapabilitiesArgs);
    readonly isAndroid: any;
    readonly isIOS: boolean;
    automationName: AutomationName;
    setAutomationNameFromString(automationName: String): void;
    /**
     * Set testRoprter
     * @experimental
     */
    /**
    * Set testRoprter name like mochawesome
    * Set testRoprter context usually this
    * Set testRoprter log method like addContext in mochawesome
    * @experimental
    */
    testReporter: ITestReporter;
    private _imagesReportDir;
    /**
     * @exprimental
     * @param text to log in test report
     */
    testReporterLog(text: any): any;
    extend(args: INsCapabilities): this;
    validateArgs(): Promise<void>;
    private isAndroidPlatform;
    shouldSetFullResetOption(): void;
    private setAutomationName;
    tryGetAndroidApiLevel(): number;
    private resolveApplication;
    private checkMandatoryCapabilities;
    private throwExceptions;
}
