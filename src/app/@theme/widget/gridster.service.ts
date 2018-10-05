import { ElementRef, Injectable } from '@angular/core';

export class NgxWidgetBoundingRect {
  top: number;
  left: number;
  height: number;
  width: number;
}

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

  createGrid(config: NgxGridConfig) {
    this.grid = $(config.gridElement)
      .gridster({
        widget_base_dimensions: [config.gridColumnHeight, config.gridColumnWidth],
        widget_margins: [config.widgetMarginX, config.widgetMarginY],
        draggable: {
          stop: this.serialize.bind(this),
        },
        resize: {
          enabled: true,
          stop: this.serialize.bind(this),
        },
        widget_selector: '[ngxWidget]',
      })
      .data('gridster');
  }

  addWidget(elementRef: ElementRef, sizex?, sizey?, col?, row?) {
    this.grid.add_widget(elementRef, sizex, sizey, col, row);
  }

  enable() {
    this.grid.enable();
    this.grid.enable_resize();
  }

  disable() {
    this.grid.disable();
    this.grid.disable_resize();
  }

  protected serialize() {
    const serialized = this.grid.serialize()
      .map(this.cast.bind(this));
    this.persist(serialized);
  }

  load(): NgxWidgetBoundingRect[] {
    return JSON.parse(localStorage.getItem('widgets'));
  }

  protected persist(widgetsData: NgxWidgetBoundingRect) {
    localStorage.setItem('widgets', JSON.stringify(widgetsData));
  }

  protected cast({ col, row, size_x, size_y }): NgxWidgetBoundingRect {
    return { top: row, left: col, width: size_x, height: size_y };
  }
}
