import { Component, Input } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ILoadingIndicatorConfig } from '../../shared/interfaces/loading-indicator-config.interface';
import { LoadingIndicatorTypes } from '../../shared/enums/loading-indicator-types.enum';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BaseComponent } from '../../shared/classes/base-component.class';
import { LogService } from '../../shared/services/log.service';

@Component({
  selector: 'app-loading-indicator',
  standalone: true,
  imports: [MatProgressSpinnerModule, MatProgressBarModule],
  templateUrl: './loading-indicator.component.html',
  styleUrl: './loading-indicator.component.scss',
})
export class LoadingIndicatorComponent extends BaseComponent {
  @Input() config!: ILoadingIndicatorConfig;
  indicatorTypes = LoadingIndicatorTypes;

  constructor(logService: LogService) {
    super(logService);
    this.logTraceFrame();
  }
}
