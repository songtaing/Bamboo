import { HttpStatusCode } from "@angular/common/http";

export interface IBambooPluginEvent {
    name: string;
    timestamp: string;
    message: string;
    httpStatusCode: HttpStatusCode;
}