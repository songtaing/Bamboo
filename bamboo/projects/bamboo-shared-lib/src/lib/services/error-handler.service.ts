import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { BaseComponent } from '../classes/base-component.class';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService
  extends BaseComponent
  implements HttpInterceptor
{
  constructor(logService: LogService) {
    super(logService);
    this.logTraceFrame();
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.logTraceFrame();

    return next.handle(req).pipe(
      catchError((err) => {
        this.logService.error(err);
        return throwError(err);
      })
    );
  }
}
