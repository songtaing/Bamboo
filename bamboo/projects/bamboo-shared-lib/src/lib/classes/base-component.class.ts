import { LogService } from '../services/log.service';
import { BaseRoot } from './base-root.class';

export class BaseComponent extends BaseRoot {
  constructor(logService: LogService) {
    super(logService);
  }
}
