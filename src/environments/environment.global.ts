// This data will be the same in every environment (dev, prod and others...):

export const globalEnvironment = { } as const;

/* This type will make sure all environments have the same keys as globalEnvironment
 * along with default keys which have specific values for that environment. */
export type Environment = {
  production: boolean,
} & typeof globalEnvironment;