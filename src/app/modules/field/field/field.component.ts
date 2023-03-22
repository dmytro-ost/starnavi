import { ChangeDetectionStrategy, Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Mode } from 'src/app/models/mode.model';
import { FieldService } from 'src/app/services/field.service';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldComponent implements OnInit, OnDestroy {
  @HostBinding('style.--cells-column')
  column!: string;
  fieldSize!: number;
  field!: boolean[];
  modes$: Observable<Mode[]> = this.fieldService.loadModes();
  subscription!: Subscription;

  constructor(private readonly fieldService: FieldService) { }

  ngOnInit(): void {
    this.subscription = this.fieldService.field.subscribe(field => this.field = field);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onMouseOver(event: Event) {
    const target = event.target as HTMLElement;
    this.fieldService.invertCell(+target.id);
  }

  onStart(mode: Mode) {
    this.initFieldArray(mode.field * mode.field);
    this.setColumnVar(mode.field);
    this.fieldSize = mode.field;
  }

  trackByFn(index: number) {
    return index;
  }

  private initFieldArray(fieldSize: number) {
    this.fieldService.createField(fieldSize);
  }

  private setColumnVar(fieldSize: number) {
    this.column = fieldSize + 'px';
  }
}
