import { CarouselItem } from '../classes/carousel-item.class';

export interface ICarouselConfig<T> {
  items: CarouselItem<T>[];
}
