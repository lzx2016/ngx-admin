import { NgModule } from '@angular/core';

import { NbWidgetDirective } from './widget.directive';
import { NbGridComponent } from './grid.component';


@NgModule({
  exports: [NbWidgetDirective, NbGridComponent],
  declarations: [NbWidgetDirective, NbGridComponent],
})
export class NgxWidgetModule {
}
