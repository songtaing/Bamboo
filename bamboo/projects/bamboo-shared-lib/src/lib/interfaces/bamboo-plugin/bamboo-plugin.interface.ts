import { IBambooPluginAbout } from "./bamboo-plugin-about.interface";
import { IBambooPluginEvent } from "./bamboo-plugin-event.interface";
import { IBambooPluginLog } from "./bamboo-plugin-log.interface";

export interface IBambooPlugin {
    startAsync(): IBambooPluginEvent;
    stopAsync(): IBambooPluginEvent;    
    getStatusAsync(startDateTime: Date, endDateTime: Date): IBambooPluginLog[];
    about(): IBambooPluginAbout;
    ping(): boolean;
}