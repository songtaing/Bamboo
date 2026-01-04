import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { LoadingIndicatorTypes } from '../enums/loading-indicator-types.enum';

export interface ILoadingIndicatorConfig {
  displayText?: string;
  type: LoadingIndicatorTypes;
  mode: ProgressSpinnerMode;
  progressValue?: number;
}
