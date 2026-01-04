import { environment } from '../../../environments/environment';
import { LogLevels } from '../enums/log-level.enum';
import { LogService } from '../services/log.service';

export class BaseRoot {
  constructor(protected logService: LogService) {}

  protected logTraceFrame(): void {
    if (environment.logLevel >= LogLevels.trace) {
      const err = new Error();
      let traces: string[] = err.stack?.split('\t')![0].split('    ')!;
      this.logService.trace(traces[2]);
    }
  }
}
