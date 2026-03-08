import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../shared/classes/base-component.class';
import { LogService } from '../shared/services/log.service';
import { ICarouselConfig } from './interfaces/carousel-config.interface';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent extends BaseComponent implements OnInit {
  @Input() config!: ICarouselConfig<unknown>;

  constructor(logService: LogService) {
    super(logService);
    this.logTraceFrame();
  }

  ngOnInit(): void {
    this.logTraceFrame();

    this.logService.debug('config', this.config);
  }
}
