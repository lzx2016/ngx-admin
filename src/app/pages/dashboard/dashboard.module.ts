import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { NgxWidgetModule } from '../../@theme/widget/widget.module';


@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
    NgxWidgetModule,
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule {
}
