import {  ModuleWithProviders, NgModule } from '@angular/core';
import { NgGridColumnComponent } from './components/ng-grid-column/ng-grid-column.component';
import { NgGridContainerComponent } from './components/ng-grid-container/ng-grid-container.component';
import { NgGridRowComponent } from './components/ng-grid-row/ng-grid-row.component';

@NgModule({
  declarations:[NgGridRowComponent, NgGridColumnComponent, NgGridContainerComponent, ],
  imports: [],
  exports: [NgGridRowComponent, NgGridColumnComponent, NgGridContainerComponent,]
})
export class NgAngularGridModule { 
   static forRoot(configuration:{
      paddingUnit?:"mm"|"cm"|"in"|"px"|"pt"|"pc"|"em"|"ex"|"ch"|"rem"|"vw"|"vh"|"vmin"|"vmax"|"%",
      marginUnit?:"mm"|"cm"|"in"|"px"|"pt"|"pc"|"em"|"ex"|"ch"|"rem"|"vw"|"vh"|"vmin"|"vmax"|"%"
   }): ModuleWithProviders<NgAngularGridModule>{
    return {
      ngModule: NgAngularGridModule,
      providers: [
        NgGridRowComponent,
        NgGridColumnComponent,
        NgGridContainerComponent
        ,{provide: 'config', useValue: configuration}]
    };
  }

}
