import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, share, tap, catchError, finalize, retry, of } from 'rxjs';
import { Mode } from '../models/mode.model';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root'
})
export class FieldService {
  private readonly apiUrl: string = 'https://60816d9073292b0017cdd833.mockapi.io/modes';
  private _field: BehaviorSubject<boolean[]> = new BehaviorSubject<boolean[]>([]);

  constructor(
    private readonly http: HttpClient,
    private readonly spinnerService: SpinnerService
  ) { }

  get field(): Observable<boolean[]> { return this._field.asObservable(); }

  public loadModes(): Observable<Mode[]> {
    this.spinnerService.show();
    return this.http.get<Mode[]>(this.apiUrl)
      .pipe(
        retry(1),
        share(),
        tap(() => this.spinnerService.hide()),
        catchError(err => {
          console.log('Connection error:', err);
          return of([]);
        }),
        finalize(() => this.spinnerService.hide())
      );
  }

  public createField(fieldSize: number): void {
    this.setStore(new Array(fieldSize).fill(false));
  }

  public invertCell(id: number): void {
    const field = this._field.getValue();
    field[id] = !field[id];
    this.setStore([...field]);
  }

  private setStore(store: boolean[]): void {
    this._field.next(store);
  }
}
