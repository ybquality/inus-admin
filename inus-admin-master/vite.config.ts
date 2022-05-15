import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
// elementPlus自动引入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    //port:8000,//端口号配置
    //跨域
    proxy: {
      "/api":"http://47.112.191.36:3001"
    }
  },
  resolve:{
    alias:{
      "@":path.resolve(__dirname,"src")//使用别名来定位
    }
  },
  css: {
    //css预处理
    preprocessorOptions: {
      //引入全局scss
      scss: {
        additionalData: `@import "./src/styles/variables.scss";`
      }
    }
  },
  plugins: [
    vue(),
    // elementPlus自动引入
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
