export default {
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
      polyfills: ['ie9'],
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
}
