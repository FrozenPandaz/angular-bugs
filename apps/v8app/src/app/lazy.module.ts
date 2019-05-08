import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lazy',
  template: 'Im Lazy'
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
