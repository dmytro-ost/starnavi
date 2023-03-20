import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { SpinnerComponent } from './spinner/spinner.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NotFoundComponent,
    SpinnerComponent
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
    NotFoundComponent
  ]
})
export class SharedModule { }
