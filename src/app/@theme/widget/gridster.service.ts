import { Injectable } from '@angular/core';

export class NgxGridConfig {
  widgetMarginX: number = 32;
  widgetMarginY: number = 32;
  gridColumnHeight: number = 140;
  gridColumnWidth: number = 140;
  gridElement: HTMLElement;

  constructor(config: Partial<NgxGridConfig>) {
    Object.assign(this, config);
  }
}

@Injectable()
export class NgxGridsterService {

  grid;

  constructor() {
  }

  createGrid(config: NgxGridConfig) {
    this.grid = $(config.gridElement)
      .gridster({
        widget_base_dimensions: [config.gridColumnHeight, config.gridColumnWidth],
        widget_margins: [config.widgetMarginX, config.widgetMarginY],
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
