import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeUs from '@angular/common/locales/es-US';
import localeDe from '@angular/common/locales/de';

registerLocaleData(localeFr, 'fr');
registerLocaleData(localeUs, 'us');
registerLocaleData(localeDe, 'de');

bootstrapApplication(AppComponent).catch((err) => console.error(err));
