import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { BaseComponent } from '../classes/base-component.class';
import {
  IBambooSharedLibConfig,
  LIB_CONFIG,
} from '../interfaces/bamboo-shared-lib-config.interface';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService extends BaseComponent implements HttpInterceptor {
  constructor(
    @Inject(LIB_CONFIG) protected override LIB_CONFIG: IBambooSharedLibConfig,
    logService: LogService
  ) {
    super(LIB_CONFIG, logService);
    this.logTraceFrame();
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.logTraceFrame();

    return next.handle(req).pipe(
      catchError((err) => {
        this.logService.error(err);
        return throwError(err);
      })
    );
  }
}
