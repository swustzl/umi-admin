import { resolve } from 'path';

export default {
  // theme: "./theme.config.js",
  es5ImcompatibleVersions: true,
  // 接口代理示例
  proxy: {
    "/api": {
      "target": "http://jsonplaceholder.typicode.com/",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    },
    "/bxs/api/v1": {
      "target": "http://139.199.4.236:9095",
      "changeOrigin": true,
      "pathRewrite": { "^/bxs/api/v1" : "/v1" }
    }
  },
  alias: {
    themes: resolve(__dirname, './src/themes'),
    components: resolve(__dirname,"./src/components"),
    utils: resolve(__dirname,"./src/utils"),
    config: resolve(__dirname,"./src/utils/config"),
    enums: resolve(__dirname,"./src/utils/enums"),
    services: resolve(__dirname,"./src/services"),
    models: resolve(__dirname,"./src/models"),
    routes: resolve(__dirname,"./src/routes")
  },
  urlLoaderExcludes: [
    /\.svg$/,
  ],
}
