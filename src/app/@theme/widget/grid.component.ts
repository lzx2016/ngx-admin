import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { NgxGridsterService } from './gridster.service';


@Component({
  selector: 'ngx-grid',
  template: `
    <ng-content>
    </ng-content>
  `,
  host: { 'class': 'gridster' },
})

export class NbGridComponent implements AfterViewInit {
  constructor(protected gridster: NgxGridsterService,
              protected elementRef: ElementRef) {
  }

  ngAfterViewInit() {
    this.gridster.createGrid(this.elementRef);
  }
}
