import { AfterViewInit, Component } from '@angular/core';


@Component({
  selector: 'ngx-grid',
  template: `
    <ng-content>
    </ng-content>
  `,
  host: { 'class': 'gridster' },
})

export class NbGridComponent implements AfterViewInit {
  ngAfterViewInit() {
    $('ngx-grid').gridster({
      widget_base_dimensions: [16, 16],
      widget_margins: [32, 32],
      resize: { enabled: true },
      widget_selector: '[ngxWidget]',
    });
  }
}
