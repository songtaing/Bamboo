import { InjectionToken } from '@angular/core';
import { LogLevels } from '../enums/log-level.enum';
import { IEnvironment } from './environment.interface';

export interface IBambooSharedLibConfig {
  environment: IEnvironment;
}

export const LIB_CONFIG = new InjectionToken<IBambooSharedLibConfig>('LIB_CONFIG');
