import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { TasksService } from './app/tasks/tasks.service';
import { LoggingService } from './app/logging.service';
import { InjectionToken } from '@angular/core';

export const loggingServiceToken = new InjectionToken<LoggingService>('logging-service-token');

bootstrapApplication(AppComponent, {
  providers: [{ provide: loggingServiceToken, useClass: LoggingService }],
}).catch((err) => console.error(err));

// bootstrapApplication(AppComponent).catch((err) => console.error(err));
