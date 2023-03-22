import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-field-list',
  templateUrl: './field-list.component.html',
  styleUrls: ['./field-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldListComponent {

  @Input()
  field!: boolean[];

  @Input()
  sideSize!: number;

  trackByFn(index: number) {
    return index;
  }
}
