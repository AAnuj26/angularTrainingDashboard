import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
// import { MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatCardModule,
    MatFormField,
    MatInput,
    MatLabel,
    MatIcon,
    MatHint,
    DashboardRoutingModule,
  ],
})
export class DashboardModule {}
