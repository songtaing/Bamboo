import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BaseService } from '../classes/base-service.class';
import {
  IBambooSharedLibConfig,
  LIB_CONFIG,
} from '../interfaces/bamboo-shared-lib-config.interface';
import { IMenuService } from '../interfaces/menu-service.interface';
import { IMenu } from '../interfaces/menu.interface';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root',
})
export class MenuService extends BaseService<IMenu, number> implements IMenuService {
  private _mockRepo: IMenu[] = [];

  constructor(
    @Inject(LIB_CONFIG) protected override LIB_CONFIG: IBambooSharedLibConfig,
    logService: LogService,
    http: HttpClient
  ) {
    super(LIB_CONFIG, logService, `${LIB_CONFIG.environment.apiDomainUri}/menus`, http);

    this.logTraceFrame();
    this.generateMockRepo();
  }

  generateMockRepo(): void {
    this.logTraceFrame();

    this._mockRepo.push(
      {
        menuId: 1,
        key: 'news',
        title: 'News',
        expanded: false,
        children: [
          {
            menuId: 2,
            key: 'latest_news',
            title: 'Latest News',
            expanded: false,
          },
        ],
      },
      {
        menuId: 3,
        key: 'project-management',
        title: 'Project Management',
        expanded: false,
      },
      {
        menuId: 4,
        key: 'maps',
        title: 'Maps',
        expanded: false,
      },
      {
        menuId: 5,
        key: 'reminders',
        title: 'Reminders',
        expanded: false,
      }
    );

    // for (let x = 10; x <= 50; x++) {
    //   this._mockRepo.push({
    //     menuId: x,
    //     key: `key_${x}`,
    //     title: `Menu ${x}`,
    //     expanded: false,
    //   });
    // }
  }

  // todo: remove after testing
  override getAll(): Observable<IMenu[]> {
    return of(this._mockRepo);
  }
}
