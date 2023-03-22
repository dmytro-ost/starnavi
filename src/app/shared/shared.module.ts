import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { SpinnerComponent } from './spinner/spinner.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoordinatesPipe } from './pipes/coordinates.pipe';


@NgModule({
  declarations: [
    NotFoundComponent,
    SpinnerComponent,
    CoordinatesPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    MaterialModule,
    SpinnerComponent,
    NotFoundComponent,
    CoordinatesPipe
  ]
})
export class SharedModule { }
