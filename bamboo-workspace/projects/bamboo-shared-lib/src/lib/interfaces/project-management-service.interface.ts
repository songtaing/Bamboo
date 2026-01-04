import { IProjectManagementItem } from './project-management-item.interface';
import { IService } from './service.interface';

export interface IProjectManagementService
  extends IService<IProjectManagementItem, number> {}
