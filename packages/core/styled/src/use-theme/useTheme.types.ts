import type {
  SpinnerRecipe,
  ButtonRecipe,
} from '@gganbu-org/styled-utils/recipes';

type WithVariantMap = { variantMap: any };

type ExtractIndividualVariant<T> = {
  [K in keyof T]: T[K] extends Array<infer U> ? U : T[K];
};

type RecipeVariant<R extends WithVariantMap> = ExtractIndividualVariant<
  R['variantMap']
>;

type Recipe<R extends WithVariantMap> = {
  [K in keyof RecipeVariant<R>]?: RecipeVariant<R>[K] | undefined;
};

export interface VariantMap {
  spinner: Recipe<SpinnerRecipe>;
  button: Recipe<ButtonRecipe>;
}

export type VariantProps<T extends keyof VariantMap> = VariantMap[T];
