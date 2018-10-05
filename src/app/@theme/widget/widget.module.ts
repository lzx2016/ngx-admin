import { ModuleWithProviders, NgModule } from '@angular/core';

import { NbWidgetDirective } from './widget.directive';
import { NbGridComponent } from './grid.component';
import { NgxGridsterService } from './gridster.service';
import { NgxWidgetLibComponent } from './widget-lib.component';


@NgModule({
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
