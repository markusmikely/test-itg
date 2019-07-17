export class Vehicle {
  id: string;
  modelYear: string;
  url: string;
  media:any[];
  description:string;
  price:string;
  meta: any;

  constructor(options: {} = {}) {
    this.id = options['id'] || '';
    this.modelYear = options['modelYear'] || '';
    this.url = options['url'] || '';
    this.media = options['media'] || undefined;
    this.description = options['description'] || '';
    this.price = options['price'] || '';
    this.meta = options['meta'] || undefined;
  }
}
