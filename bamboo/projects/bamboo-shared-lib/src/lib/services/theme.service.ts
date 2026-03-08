import { HostBinding, inject, Injectable, DOCUMENT, Inject } from '@angular/core';
import { BaseRoot } from '../classes/base-root.class';
import { BambooThemes } from '../enums/bamboo-themes.enum';
import { CacheManagerService } from './cache-manager.service';
import { LogService } from './log.service';
import { CacheKeys } from '../enums/cache-keys.enum';
import {
  IBambooSharedLibConfig,
  LIB_CONFIG,
} from '../interfaces/bamboo-shared-lib-config.interface';

@Injectable({
  providedIn: 'root',
})
export class ThemeService extends BaseRoot {
  @HostBinding('class') currentClass: string = 'light-theme';

  readonly THEME_LINK: string = 'site-theme';
  readonly document = inject(DOCUMENT);

  constructor(
    @Inject(LIB_CONFIG) protected override LIB_CONFIG: IBambooSharedLibConfig,
    logService: LogService,
    readonly cacheService: CacheManagerService
  ) {
    super(LIB_CONFIG, logService);
    this.logTraceFrame();
  }

  changeTheme(theme: BambooThemes, isDarkTheme: boolean = false): void {
    this.logTraceFrame();

    this.currentClass = `${isDarkTheme ? 'dark' : 'light'}-theme`;
    const head = this.document.getElementsByTagName('head')[0];
    let themeLink = this.document.getElementById(this.THEME_LINK) as HTMLLinkElement;

    if (themeLink) {
      themeLink.href = `${theme}-theme.css`;
    } else {
      const style = this.document.createElement('link');
      style.id = this.THEME_LINK;
      style.rel = 'stylesheet';
      style.href = `${theme}-theme.css`;

      head.appendChild(style);
    }

    this.cacheService.set(CacheKeys.CurrentTheme, theme);
  }
}
