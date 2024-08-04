import { recipeEntries } from './useTheme.constants';

export type RecipeMapKeys = (typeof recipeEntries)[number][0];

export type ExtractProps<T> = T extends { __type: infer P } ? P : never;

export type RecipeMap = {
  [K in RecipeMapKeys]: (typeof recipeEntries)[number][1];
};

export type RecipeProps<K extends keyof RecipeMap> = ExtractProps<RecipeMap[K]>;
