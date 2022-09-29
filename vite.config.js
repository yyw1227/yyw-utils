const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/index.js'),
      name: 'yywUtils',
      fileName: (format) => `yywUtils.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['lodash-es'],
      // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
      // output: {
      //   globals: {
      //     'lodash-es': '_'
      //   }
      // }
    }
  }
})
