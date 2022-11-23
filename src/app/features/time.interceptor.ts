import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

@Injectable()
export class TimeInterceptor implements HttpInterceptor {

  constructor(public datePipe: DatePipe) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let currentTime = this.datePipe.transform((new Date), 'dd/MM/yyyy h:mm:ss') ?? "time-error";
    const clonedRequest = request.clone({ headers: request.headers.append("Time", currentTime) });
    return next.handle(clonedRequest);
  }
}
