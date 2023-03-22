import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldComponent } from './field/field.component';
import { FieldRoutingModule } from './field-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FieldModeSelectorComponent } from './field-mode-selector/field-mode-selector.component';
import { FormsModule } from '@angular/forms';
import { FieldListComponent } from './field-list/field-list.component';


@NgModule({
  declarations: [
    FieldComponent,
    FieldModeSelectorComponent,
    FieldListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    FieldRoutingModule
  ]
})
export class FieldModule { }
