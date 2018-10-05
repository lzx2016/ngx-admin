import { Component } from '@angular/core';
import { range } from '@nebular/theme/components/calendar-kit/helpers';

@Component({
  selector: 'ngx-widget-lib',
  styles: [`
    :host /deep/ div.stub {
      width: 100%;
      height: 10rem;
      background-color: lightgray;
    }
  `],
  template: `
    <nb-list>
      <nb-list-item *ngFor="let comp of comps">
        <nb-card>
          <nb-card-header>{{ comp }}</nb-card-header>
          <nb-card-body>
            <div class="stub"></div>
          </nb-card-body>
        </nb-card>
      </nb-list-item>
    </nb-list>
  `,
})

export class NgxWidgetLibComponent {
  comps = range(20).map(i => `Widget type #${i}`);
}
