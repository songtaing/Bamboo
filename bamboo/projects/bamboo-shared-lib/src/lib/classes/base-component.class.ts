import { IBambooSharedLibConfig } from '../interfaces/bamboo-shared-lib-config.interface';
import { LogService } from '../services/log.service';
import { BaseRoot } from './base-root.class';

export class BaseComponent extends BaseRoot {
  constructor(LIB_CONFIG: IBambooSharedLibConfig, logService: LogService) {
    super(LIB_CONFIG, logService);
  }
}
