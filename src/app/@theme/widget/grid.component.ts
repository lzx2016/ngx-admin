import {
  Component,
  ComponentFactoryResolver,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { NgxGridConfig, NgxGridsterService, NgxWidgetBoundingRect } from './gridster.service';

@Component({
  selector: 'ngx-widget-stub',
  template: `
    <nb-card style="height: 100%;">
      <nb-card-header>Widget Stub</nb-card-header>
      <nb-card-body>
        <div style="height: 100%; background-color: green"></div>
      </nb-card-body>
    </nb-card>
  `,
})

export class NgxWidgetStubComponent {
}

@Component({
  selector: 'ngx-grid',
  template: `
    <ng-template></ng-template>
  `,
  host: { 'class': 'gridster' },
})

export class NbGridComponent implements OnInit {
  @ViewChild(TemplateRef, { read: ViewContainerRef }) anchor: ViewContainerRef;

  constructor(protected gridster: NgxGridsterService,
              protected elementRef: ElementRef,
              protected cfr: ComponentFactoryResolver) {
  }

  ngOnInit() {
    const config = this.createGridConfig();
    this.gridster.createGrid(config);
    this.gridster.load()
      .forEach(this.addWidget.bind(this));
  }

  addWidget(rect: Partial<NgxWidgetBoundingRect>) {
    const factory = this.cfr.resolveComponentFactory(NgxWidgetStubComponent);
    const componentRef = this.anchor.createComponent(factory);
    this.gridster.addWidget(
      componentRef.location.nativeElement,
      rect.width,
      rect.height,
      rect.left,
      rect.top,
    );
  }

  protected createGridConfig(): NgxGridConfig {
    return new NgxGridConfig({
      gridElement: this.elementRef.nativeElement,
    });
  }
}
