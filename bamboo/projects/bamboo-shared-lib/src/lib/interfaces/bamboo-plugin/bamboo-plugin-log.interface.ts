import { LogLevels } from "../enums/log-level.enum";

export interface IBambooPluginLog {
    id: string;
    timestamp: Date;
    message: string;
    logLevel: LogLevels;
}