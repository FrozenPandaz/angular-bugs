import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'test-lazy',
  template: 'lazy component'
})
export class LazyComponent {}

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: LazyComponent
      }
    ])
  ],
  declarations: [LazyComponent]
})
export class LazyModule {}
