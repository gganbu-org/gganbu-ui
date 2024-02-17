import { genComponentStyle } from './base';
import { DjComponent, DOMElements, DjComponents, Factory } from './base.types';

const createDjComponentFactory = () => {
  const cache = new Map<DOMElements, DjComponent<DOMElements>>();

  const proxyComp = new Proxy(genComponentStyle, {
    get(_target, tag: DOMElements) {
      if (!cache.has(tag)) cache.set(tag, genComponentStyle(tag));

      return cache.get(tag);
    },
  }) as Factory & DjComponents;

  return proxyComp;
};

export const dj = createDjComponentFactory();
