import { ModuleWithProviders, NgModule } from '@angular/core';

import { NbWidgetDirective } from './widget.directive';
import { NbGridComponent } from './grid.component';
import { NgxGridsterService } from './gridster.service';


@NgModule({
  exports: [NbWidgetDirective, NbGridComponent],
  declarations: [NbWidgetDirective, NbGridComponent],
})
export class NgxWidgetModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: NgxWidgetModule,
      providers: [NgxGridsterService],
    };
  }
}
