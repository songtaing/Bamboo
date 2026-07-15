import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import {
  MAT_DATE_FORMATS,
  MAT_NATIVE_DATE_FORMATS,
  provideNativeDateAdapter,
} from '@angular/material/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { provideToastr } from 'ngx-toastr';
import { routes } from './app.routes';
import { NewsService } from './news/services/news.service';
import { CacheManagerService } from './shared/services/cache-manager.service';
import { ErrorHandlerService } from './shared/services/error-handler.service';
import { LogService } from './shared/services/log.service';
import { MenuService } from './shared/services/menu.service';
import { ThemeService } from './shared/services/theme.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    provideToastr(),
    provideNativeDateAdapter(),
    { provide: MAT_DATE_FORMATS, useValue: MAT_NATIVE_DATE_FORMATS },
    LogService,
    MenuService,
    CacheManagerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerService,
      multi: true,
    },
    LogService,
    NewsService,
    ThemeService,
  ],
};
