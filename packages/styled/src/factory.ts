import { genComponentStyle } from './base';
import { DjComponent, DOMElements, DjComponents, Factory } from './base.types';

const createDjComponentFactory = () => {
  const cache = new Map<DOMElements, DjComponent<DOMElements>>();

  return new Proxy(genComponentStyle, {
    get(_, tag: DOMElements) {
      if (!cache.has(tag)) cache.set(tag, genComponentStyle(tag));

      return cache.get(tag);
    },
  }) as Factory & DjComponents;
};

export const dj = createDjComponentFactory();
