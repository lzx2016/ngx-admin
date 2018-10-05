import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbCardModule, NbListModule } from '@nebular/theme';

import { NbWidgetDirective } from './widget.directive';
import { NbGridComponent } from './grid.component';
import { NgxGridsterService } from './gridster.service';
import { NgxWidgetLibComponent } from './widget-lib.component';


@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    NbListModule,
  ],
  exports: [NbWidgetDirective, NbGridComponent, NgxWidgetLibComponent],
  declarations: [NbWidgetDirective, NbGridComponent, NgxWidgetLibComponent],
})
export class NgxWidgetModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: NgxWidgetModule,
      providers: [NgxGridsterService],
    };
  }
}
