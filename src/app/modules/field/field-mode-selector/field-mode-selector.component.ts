import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Mode } from 'src/app/models/mode.model';

@Component({
  selector: 'app-field-mode-selector',
  templateUrl: './field-mode-selector.component.html',
  styleUrls: ['./field-mode-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldModeSelectorComponent {
  @Input()
  modes!: Mode[];

  @Output()
  begin = new EventEmitter<Mode>();

  selectedMode!: Mode;

  onStart() {
    this.begin.emit(this.selectedMode);
  }
}
