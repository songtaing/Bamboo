import { CommonModule } from '@angular/common';
import {
  Component,
  HostBinding,
  Inject,
  Renderer2,
  ViewChild,
  DOCUMENT
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {
  MatSidenavContainer,
  MatSidenavModule,
} from '@angular/material/sidenav';
import { MainHeaderComponent } from './layout/main-header/main-header.component';
import { MainSidenavComponent } from './layout/main-sidenav/main-sidenav.component';
import { BaseComponent } from './shared/classes/base-component.class';
import { CacheKeys } from './shared/enums/cache-keys.enum';
import { LoadingIndicatorTypes } from './shared/enums/loading-indicator-types.enum';
import { ILoadingIndicatorConfig } from './shared/interfaces/loading-indicator-config.interface';
import { CacheManagerService } from './shared/services/cache-manager.service';
import { LogService } from './shared/services/log.service';
import { LoadingIndicatorComponent } from './widgets/loading-indicator/loading-indicator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MainHeaderComponent,
    MainSidenavComponent,
    MatSidenavModule,
    LoadingIndicatorComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent extends BaseComponent {
  @HostBinding('class') currentClass: string = 'light-theme';
  @ViewChild('sidenav') sidenav!: MatSidenavContainer;
  readonly DEFAULT_THEME = 'blue-theme';

  private cssFile!: string;
  private styleLink!: HTMLLinkElement;

  liConfig: ILoadingIndicatorConfig = {
    displayText: 'Loading...',
    type: LoadingIndicatorTypes.Bar,
    mode: 'indeterminate',
  };

  title = 'Bamboo - Portal';
  menuOpen: boolean = true;
  currentTheme: string = this.DEFAULT_THEME;

  constructor(
    logService: LogService,
    private cache: CacheManagerService,
    @Inject(DOCUMENT) private document: Document,
    private renderer2: Renderer2
  ) {
    super(logService);
    this.logTraceFrame();

    this.cache.set(CacheKeys.CurrentTheme, this.currentTheme);
  }

  public onMainMenuOpen(): void {
    this.logTraceFrame();
    this.menuOpen = true;
  }

  public onMainMenuClose(): void {
    this.logTraceFrame();
    this.menuOpen = false;
  }
}
