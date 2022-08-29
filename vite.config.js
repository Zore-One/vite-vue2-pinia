import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import autoimport from 'unplugin-auto-import/vite'
import postcsspxtoviewport from 'postcss-px-to-viewport'
// const path = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    autoimport({
      imports:['vue','vue-router']
    })
],
  // 开发或生产环境服务的公共基础路径
  base:'./',
  // 别名配置
  resolve:{
    alias:{
      '@':resolve(__dirname,'./src')
    }
  },
 css:{
  postcss:{
    plugins:[
      new postcsspxtoviewport({
        unitToConvert: 'px', // 要转化的单位
        viewportWidth: 750, // UI设计稿的宽度
        unitPrecision: 6, // 转换后的精度，即小数点位数
        propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
        viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
        fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
        selectorBlackList: ['ignore-'], // 指定不转换为视窗单位的类名，
        minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
        mediaQuery: false, // 是否在媒体查询的css代码中也进行转换，默认false
        replace: true, // 是否转换后直接更换属性值
        // exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
        exclude: [],
        landscape: false // 是否处理横屏情况
      })
    ]
  }
 },
  server:{
    // cors:true,// 默认启用并允许任何源
    // host:'172.16.132.36',//指定服务器应该监听哪个 IP 地址
    port:3000,//指定开发服务器端口
    // open:true,//在开发服务器启动时自动在浏览器中打开应用程序
    https:false,
    //  选项写法
    //  proxy:{
    //   '/api': {
    //     target: 'https://qqlykm.cn',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   },
    //  }
  }
})
