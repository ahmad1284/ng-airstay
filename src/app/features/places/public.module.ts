import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared';
import { PlacesComponent } from './places.component';

@NgModule({
  declarations: [PlacesComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: PlacesComponent,
      },
    ]),
  ]
})
export class PublicModule {}
