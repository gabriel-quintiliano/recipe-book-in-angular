import { globalEnvironment, Environment } from "./environment.global";

export const environment: Environment = {
  production: true,
  ...globalEnvironment,
}