import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  // 版本1
  build: {
    lib: {
      entry: fileURLToPath(new URL('./src/lib/index.js', import.meta.url)),
      name: 'VueFirstNpm',
      fileName: (format) => `vue-first-npm.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        exports: 'named'
      }
    }
  }
  // 版本二
  // build: {
  //   lib: {
  //     entry: fileURLToPath(new URL('./src/lib/index.js', import.meta.url)),
  //     name: 'VueFirstNpm',
  //     fileName: (format) => `vue-first-npm.${format}.js`,
  //     // 支持多种格式输出
  //     formats: ['es', 'umd', 'cjs']
  //   },
  //   rollupOptions: {
  //     // 外部依赖 - uni-app 环境下需要的依赖
  //     external: [
  //       'vue',
  //       '@dcloudio/uni-app',
  //       '@dcloudio/uni-h5',
  //       '@dcloudio/uni-mp-weixin',
  //       '@dcloudio/uni-mp-alipay',
  //       '@dcloudio/uni-mp-baidu',
  //       '@dcloudio/uni-mp-toutiao',
  //       '@dcloudio/uni-mp-qq'
  //     ],
  //     output: [
  //       // ES 模块格式 - 现代打包工具使用
  //       {
  //         format: 'es',
  //         entryFileNames: 'vue-first-npm.es.js',
  //         exports: 'named',
  //         // 不压缩，保持可读性
  //         compact: false
  //       },
  //       // CommonJS 格式 - Node.js 环境
  //       {
  //         format: 'cjs',
  //         entryFileNames: 'vue-first-npm.cjs.js',
  //         exports: 'named',
  //         compact: false
  //       },
  //       // UMD 格式 - 浏览器直接引用
  //       {
  //         format: 'umd',
  //         entryFileNames: 'vue-first-npm.umd.js',
  //         name: 'VueFirstNpm',
  //         globals: {
  //           vue: 'Vue',
  //           '@dcloudio/uni-app': 'uni'
  //         },
  //         exports: 'named'
  //       }
  //     ]
  //   },
  //   // 小程序兼容性设置
  //   target: 'es2015', // 小程序支持的 ES 版本
  //   minify: false, // 不压缩，避免小程序解析问题
    
  //   // 确保样式文件也能正确处理
  //   cssCodeSplit: false,
    
  //   // 生成 sourcemap 便于调试
  //   sourcemap: true
  // },
  
  // // 开发服务器配置（开发时使用）
  // server: {
  //   port: 3000,
  //   open: true
  // },
  
  // // 预处理器配置
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import "@/styles/variables.scss";`
  //     }
  //   }
  // }
})
