import {resolve} from "path";

export default {
  es5ImcompatibleVersions: true,
  hash: true,
  plugins: [
    ['umi-plugin-react', {
      dva: {
        immer: true,
      },
      antd: true,
      routes: {
        exclude: [
          /model\.(j|t)sx?$/,
          /service\.(j|t)sx?$/,
          /models\//,
          /components\//,
          /services\//,
        ],
      },
      locale: {},
      library: 'react',
      dynamicImport: {
        webpackChunkName: true,
        //loadingComponent: './components/Loading.js',
      },
      dll: {
        exclude: [],
        include: ["dva", "dva/router", "dva/saga", "dva/fetch", "antd/es"],
      },
      title: 'default title',
    }],
  ],
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
