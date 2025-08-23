import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BaseComponent } from '../../shared/classes/base-component.class';
import { BambooThemes } from '../../shared/enums/bamboo-themes.enum';
import { LogService } from '../../shared/services/log.service';
import { ThemeService } from '../../shared/services/theme.service';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatToolbarModule,
  ],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss',
})
export class MainHeaderComponent extends BaseComponent {
  @Output() menuOpen = new EventEmitter();
  @Output() menuClose = new EventEmitter();
  @Output() themeChange = new EventEmitter<string>();

  themes = BambooThemes;
  isLoggedIn: boolean = false;
  isMenuOpen: boolean = true;
  availableThemes: string[] = [];

  constructor(logService: LogService, readonly themeService: ThemeService) {
    super(logService);
    this.logTraceFrame();

    this.availableThemes = Object.keys(this.themes).sort();
  }

  onLogin(): void {
    this.logTraceFrame();

    this.isLoggedIn = true;
  }
  onLogout(): void {
    this.logTraceFrame();

    this.isLoggedIn = false;
  }

  onMenuToggle(): void {
    this.logTraceFrame();

    this.isMenuOpen = !this.isMenuOpen;

    if (this.isMenuOpen) {
      this.menuOpen.emit();
    } else {
      this.menuClose.emit();
    }
  }

  onThemeChange(themeValue: string): void {
    this.logTraceFrame();

    this.themeService.changeTheme(
      BambooThemes[themeValue as keyof typeof BambooThemes]
    );
  }
}
