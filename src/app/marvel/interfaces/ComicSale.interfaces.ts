import { ComicPrice } from './ComicPrice.interfaces';
import { Thumbnail } from './Thumbnail.interfaces';
export interface ComicSale {
  id: String;
  title?: String;
  prices: ComicPrice[];
  pathImg: Thumbnail;
}
