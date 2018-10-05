import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { NgxGridConfig, NgxGridsterService } from './gridster.service';


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
    const config = this.createGridConfig();
    this.gridster.createGrid(config);
  }

  protected createGridConfig(): NgxGridConfig {
    return new NgxGridConfig({
      gridElement: this.elementRef.nativeElement,
    });
  }
}
