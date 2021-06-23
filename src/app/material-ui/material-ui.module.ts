import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';

const MATERIAL_COMPONENTS = [
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
];

@NgModule({
  declarations: [],
  imports: MATERIAL_COMPONENTS,
  exports: MATERIAL_COMPONENTS,
})
export class MaterialUiModule { }
