import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MODE, Mode } from 'src/app/models/mode.model';

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
  start = new EventEmitter<Mode>();

  selectedMode!: Mode;

  onStart() {
    this.start.emit(this.selectedMode);
  }
}
