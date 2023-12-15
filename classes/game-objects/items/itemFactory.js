import { Item, Candle, Ring, Sword } from './item.js';
import { titleCase } from '../../../utils/index.js';

const allItems = { Item, Candle, Ring, Sword };

export const ItemFactory = function(id) {
    return allItems[titleCase(id)];
}