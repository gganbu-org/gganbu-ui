import { useEffect, useState } from 'react';

export const getMatches = (query: string) =>
  typeof window !== 'undefined' ? window.matchMedia(query).matches : false;

export const useMatchMedia = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(getMatches(query));

  const handleChange = () => setMatches(getMatches(query));

  useEffect(() => {
    handleChange();
    const matchMedia = window.matchMedia(query);
    matchMedia.addEventListener('change', handleChange);

    return () => {
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
};

export const useMediaQuery = (
  query: string,
  onChange?: (matches: boolean) => void,
) => {
  const matches = useMatchMedia(query);

  useEffect(() => {
    if (!onChange) return;

    onChange(matches);
  }, [matches]);

  return matches;
};
