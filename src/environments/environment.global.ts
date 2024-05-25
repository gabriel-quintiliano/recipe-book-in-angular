// This data will be the same in every environment (dev, prod and others...):

export const globalEnvironment = {
  brandName: $localize`Gabriel's Recipe Book`,
  routePath: {
    auth: $localize`:this will be part of a URL - CANNOT contain accents - All lowercase - No spaces:auth`,
    recipes: $localize`:this will be part of a URL - CANNOT contain accents - All lowercase - No spaces:recipes`,
    shoppingList: {
      default: $localize`:this will be part of a URL - CANNOT contain accents - All lowercase - No spaces:shopping-list`,
      variant1: $localize`:this will be part of a URL - CANNOT contain accents - All lowercase - No spaces:shoppinglist`,
      variant2: $localize`:this will be part of a URL - CANNOT contain accents - All lowercase - No spaces:shoppingList`,
    },
    edit: $localize`:this will be part of a URL - CANNOT contain accents - All lowercase - No spaces:edit`,
  }
} as const;

/* This type will make sure all environments have the same keys as globalEnvironment
 * along with default keys which have specific values for that environment. */
export type Environment = {
  production: boolean,
} & typeof globalEnvironment;