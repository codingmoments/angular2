import { Injectable } from '@angular/core';

export class LoggingService {
  log(message: string) {
    const timeStamp = new Date().toLocaleTimeString();
    console.log(`[${timeStamp}]: ${message}`);
  }
}
