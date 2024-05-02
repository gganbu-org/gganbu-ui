import { useEffect, useState } from 'react';

interface QueryOptions {
  triggerFirstLoad?: boolean;
}

export const getMatches = (query: string) =>
  typeof window !== 'undefined' ? window.matchMedia(query).matches : false;

export const useMatchMedia = (
  query: string,
  options: QueryOptions,
): boolean => {
  const { triggerFirstLoad } = options;
  const [matches, setMatches] = useState<boolean>(getMatches(query));

  useEffect(() => {
    const handleChange = () => setMatches(getMatches(query));

    if (triggerFirstLoad) handleChange();

    const matchMedia = window.matchMedia(query);
    matchMedia.addEventListener('change', handleChange);

    return () => {
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [query, triggerFirstLoad]);

  return matches;
};

export const useMediaQuery = (
  query: string,
  { triggerFirstLoad = true }: QueryOptions,
  onChange?: (matches: boolean) => void,
) => {
  const matches = useMatchMedia(query, {
    triggerFirstLoad,
  });

  useEffect(() => {
    if (!onChange) return;

    onChange(matches);
  }, [matches]);

  return matches;
};
