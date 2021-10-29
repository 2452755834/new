
module.exports = {
  outputDir: process.env.VUE_APP_OUTPUT_DIR,
  lintOnSave: false,
  configureWebpack: {
    // output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.js】
    //   filename: `js/[name].${new Date().getTime()}.js`,
    //   chunkFilename: `js/[name].${new Date().getTime()}.js`
    // }
  },
    devServer: {
    proxy: {
      '/service': {
        target: 'http://localhost:9999', //对应自己的接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/service': '/backend'
        }
      }
    }
  }
}