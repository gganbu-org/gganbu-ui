import { genComponentStyle } from './base';
import type {
  GganbuComponent,
  DOMElements,
  GganbuComponents,
  Factory,
} from './base.types';

const createGganbuComponentFactory = () => {
  const cache = new Map<DOMElements, GganbuComponent<DOMElements>>();

  const proxyComp = new Proxy(genComponentStyle, {
    get(_target, tag: DOMElements) {
      if (!cache.has(tag)) cache.set(tag, genComponentStyle(tag));

      return cache.get(tag);
    },
  }) as Factory & GganbuComponents;

  return proxyComp;
};

export const gb = createGganbuComponentFactory();
