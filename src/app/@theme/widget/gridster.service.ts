import { ElementRef, Injectable } from '@angular/core';

@Injectable()
export class NgxGridsterService {

  grid;

  constructor() {
  }

  createGrid(elementRef: ElementRef) {
    this.grid = $(elementRef.nativeElement)
      .gridster({
        widget_base_dimensions: [16, 16],
        widget_margins: [32, 32],
        resize: { enabled: true },
        widget_selector: '[ngxWidget]',
      })
      .data('gridster');
  }

  enable() {
    this.grid.enable();
    this.grid.enable_resize();
  }

  disable() {
    this.grid.disable();
    this.grid.disable_resize();
  }
}
