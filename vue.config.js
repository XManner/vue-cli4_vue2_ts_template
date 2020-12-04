// vue.config.js
// 控制台输入 vue inspect > output.js 可打印当前webpack配置
console.log(process.env.VUE_APP_CURRENTMODE, "VUE_APP_CURRENTMODE")
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/production-sub-path/" : "/",
  productionSourceMap: false,
  devServer: {
    port: 3000, // 自定义端口
    open: true, // 启动时自动打开浏览器
    proxy: {
      // 请求的反向代理 解决跨域的问题
      "/api": {
        // 请求 接口 以 /api开头，自动匹配
        target: "", // 目标地址
        ws: false,
        changeOrigin: true, // 开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: {
          "^/api": "/api", // 路径重写
        },
      },
    },
  },
  chainWebpack: config => {
    // 配置路径别名
    config.resolve.alias
      .set("@", path.join(__dirname, "src"))
      .set("components", path.join(__dirname, "src/components"))
      .set("views", path.join(__dirname, "src/views"))
      .set("api", path.join(__dirname, "src/api"))
      .set("utils", path.join(__dirname, "src/utils"))
      .set("mixins", path.join(__dirname, "src/mixins"))
      .set("plugins", path.join(__dirname, "src/plugins"))
  },
  css: {
    // loaderOptions: {
    //   css: {
    //     // 这里的选项会传递给 css-loader
    //   },
    //   postcss: {
    //     // 这里的选项会传递给 postcss-loader
    //   }
    // }
  },
  pluginOptions: {
    // foo: {
    // 插件可以作为 `options.pluginOptions.foo` 访问这些选项。
    // }
  },

  // 链式操作  https://cli.vuejs.org/zh/guide/webpack.html#%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E9%AB%98%E7%BA%A7
  // 修改loader配置
  // 添加新的loader
  // 替换一个规则里的loader
  // 修改插件选项

  // 修改loader
  chainWebpack: config => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap(options => {
        // 修改它的选项...
        return options
      })
  },

  // 调整webpack配置
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  },
}
