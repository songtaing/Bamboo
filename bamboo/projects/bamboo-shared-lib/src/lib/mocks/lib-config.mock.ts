import { LogLevels } from '../enums/log-level.enum';
import { IBambooSharedLibConfig } from '../interfaces/bamboo-shared-lib-config.interface';
import { IEnvironment } from '../interfaces/environment.interface';

export class LIB_CONFIG_MOCK implements IBambooSharedLibConfig {
  environment: IEnvironment = {
    apiDomainUri: '',
    logLevel: LogLevels.trace,
  };
}
