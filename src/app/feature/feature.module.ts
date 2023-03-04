import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import {NgbModule } from '@ng-bootstrap/ng-bootstrap'



@NgModule({
  declarations: [
    FeatureComponent,
    StarRatingComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
  ],
  exports:[
    StarRatingComponent
  ]
})
export class FeatureModule { }
