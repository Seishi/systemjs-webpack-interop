declare module "systemjs-webpack-interop" {
  export function setPublicPath(
    moduleName: string,
    rootDirectoryLevel?: number
  ): void;
  export function modifyWebpackConfig(
    webpackConfig: WebpackConfig
  ): WebpackConfig;
  export function verifyWebpackConfig(webpackConfig): void;

  type WebpackConfig = object | WebpackConfigGetter;
  interface WebpackConfigGetter {
    (): void;
  }
}
