import { EventEmitter, Injectable } from "@angular/core";


export class LoggingService {
    notifyParents:EventEmitter<string> = new EventEmitter<string>();
    log(message:string){
        console.log(message+" : "+ new Date().toLocaleDateString());
    }
}