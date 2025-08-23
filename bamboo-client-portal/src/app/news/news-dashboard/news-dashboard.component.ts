import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CarouselComponent } from '../../carousel/carousel.component';
import { ICarouselConfig } from '../../carousel/interfaces/carousel-config.interface';
import { BaseComponent } from '../../shared/classes/base-component.class';
import { IDataFilter } from '../../shared/interfaces/filters/data-filter.interface';
import { LogService } from '../../shared/services/log.service';
import { INewsSearchFilter } from '../interfaces/news-search-filter.interface';
import { INews } from '../interfaces/news.interface';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news-dashboard',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    CarouselComponent,
  ],
  templateUrl: './news-dashboard.component.html',
  styleUrl: './news-dashboard.component.scss',
})
export class NewsDashboardComponent extends BaseComponent {
  news: INews[] = [];
  newsFilter: IDataFilter<INewsSearchFilter> = {
    pageIndex: 0,
    pageSize: 25,
  };
  carouselConfig: ICarouselConfig<INews> = {
    items: [],
  };

  constructor(logService: LogService, protected newsService: NewsService) {
    super(logService);
    this.logTraceFrame();
    this.refreshNews();
  }

  refreshNews(): void {
    this.logTraceFrame();

    this.newsService.search(this.newsFilter).subscribe((x) => {
      x.results.forEach((article) => {
        let el = document.createElement('div');
        let innerEl = document.createElement('p');
        innerEl.innerText = article.title;
        el.textContent = article.title;
        el.innerText = `hello ${article.title}`;
        el.appendChild(innerEl);

        this.carouselConfig.items.push({
          data: article,
          title: article.title,
          id: article.newsId.toString(),
          html: el.outerHTML,
        });
      });

      this.news = x.results;
    });
  }
}
