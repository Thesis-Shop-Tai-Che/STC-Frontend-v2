import appConfig from "../../../app-config.json";

export function getConfig<T>(getter: (config: typeof appConfig) => T) {
  return getter(appConfig);
}

export const primaryColor = getConfig((config) => config.template.primaryColor);

export const secondaryColor = getConfig(
  (config) => config.template.secondaryColor,
);

export const tertiaryColor = getConfig(
  (config) => config.template.tertiaryColor,
);
