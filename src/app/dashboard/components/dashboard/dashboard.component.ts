import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  GridListColSize: number = 4;
  GridTileColSize: number = 1;
  userForm: FormGroup;

  constructor(
    private readonly BreakpointObserver: BreakpointObserver,
    private readonly FormBuilder: FormBuilder
  ) {
    this.userForm = this.FormBuilder.group({
      name: new FormControl(''),
      email: new FormControl(''),
      age: new FormControl(''),
      phone: new FormControl(''),
    });

    this.BreakpointObserver.observe([
      Breakpoints.Small,
      Breakpoints.XSmall,
    ]).subscribe((result) => {
      console.log('Active Breakpoints:', result.breakpoints);
      switch (true) {
        case result.breakpoints[Breakpoints.XSmall]:
          console.log('Small Screen');
          this.GridTileColSize = 4;
          break;
        case result.breakpoints[Breakpoints.Small]:
          console.log('Small Screen');
          this.GridTileColSize = 2;
          break;
        default:
          this.GridTileColSize = 1;
          break;
      }
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form Values:', this.userForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
