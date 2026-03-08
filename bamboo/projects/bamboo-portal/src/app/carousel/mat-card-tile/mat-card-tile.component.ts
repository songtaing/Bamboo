import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BaseComponent } from '../../shared/classes/base-component.class';
import { LogService } from '../../shared/services/log.service';
import { CarouselItem } from '../classes/carousel-item.class';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-mat-card-tile',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './mat-card-tile.component.html',
  styleUrl: './mat-card-tile.component.scss',
})
export class MatCardTileComponent extends BaseComponent {
  @Input() item!: CarouselItem<unknown>;
  constructor(logService: LogService) {
    super(logService);
  }
}
