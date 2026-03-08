import { LogLevels } from '../enums/log-level.enum';
import { IBambooSharedLibConfig } from '../interfaces/bamboo-shared-lib-config.interface';
import { ILogService } from '../interfaces/log-service.interface';

export class BaseRoot {
  constructor(protected LIB_CONFIG: IBambooSharedLibConfig, protected logService: ILogService) {}

  protected logTraceFrame(): void {
    if (this.LIB_CONFIG.environment.logLevel >= LogLevels.trace) {
      const err = new Error();
      let traces: string[] = err.stack?.split('\t')![0].split('    ')!;
      this.logService.trace(traces[2]);
    }
  }
}
