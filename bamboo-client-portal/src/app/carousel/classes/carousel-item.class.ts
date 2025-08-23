export class CarouselItem<T> {
  id: string;
  title: string;
  data: T;
  html: string;

  constructor(id: string, title: string, image: string, data: T, html: string) {
    this.id = id;
    this.title = title;
    this.data = data;
    this.html = html;
  }
}
