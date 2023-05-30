import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoader';
import { buildPlugins } from './buildPlugins';
import { buildResolves } from './buildResolves';
import { BuildOptions } from './types/config';
import webpack from 'webpack'

export function buildWebpackConfig (options: BuildOptions): webpack.Configuration {
  const { paths, mode, isDev } = options

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true
    },

    plugins: buildPlugins(options),

    devtool: isDev ? 'inline-source-map' : undefined,

    module: {
      rules: buildLoaders(options)
    },

    devServer: isDev ? buildDevServer(options) : undefined,

    resolve: buildResolves(options)
  };
}
