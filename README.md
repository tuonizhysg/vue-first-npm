# vue-first-npm

一个用于练习发布 npm 包的 Vue 3 组件库项目。

## 项目简介

这个项目是一个基于 Vue 3 和 Vite 的组件库，主要用于学习和练习如何开发并发布 npm 包。项目包含了完整的开发、测试和构建流程。

## 特性

- 基于 Vue 3 和 Vite 构建
- 支持 TypeScript
- 包含单元测试配置
- 自动化的构建和压缩流程
- ESLint 代码规范检查
- 完整的开发文档
- 支持 ES Module 和 UMD 格式
- 按需引入组件

## 更新日志

### 1.0.2 (2025-09-01)

- 优化包体积，现在只发布编译后的文件
- 新增 ES Module 和 UMD 格式支持
- 支持按需引入组件
- 添加 CSS 样式文件独立引入支持
- 重构构建配置，优化输出文件结构

## 安装

```bash
# 使用 npm
npm install vue-first-npm

# 使用 pnpm
pnpm add vue-first-npm

# 使用 yarn
yarn add vue-first-npm
```

## 使用方式

### ES Module 方式

```javascript
// 按需引入组件
import { HelloWorld, TheWelcome } from 'vue-first-npm'
// 引入样式
import 'vue-first-npm/style.css'

export default {
  components: {
    HelloWorld,
    TheWelcome
  }
}
```

### CommonJS 方式

```javascript
const { HelloWorld } = require('vue-first-npm')
require('vue-first-npm/style.css')
```

### 通过 CDN 使用（UMD 格式）

```html
<!-- 引入 Vue -->
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<!-- 引入组件库 -->
<script src="https://unpkg.com/vue-first-npm/dist/vue-first-npm.umd.js"></script>
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/vue-first-npm/dist/style.css">

<script>
  // 组件可以通过 VueFirstNpm.组件名 访问
  const { HelloWorld } = VueFirstNpm
</script>
```

### uni-app 环境下引用

一个在uni-app 环境下引用 npm发布的包工程示例

[vuefirstnpm-simple](https://github.com/tuonizhysg/vuefirstnpm-simple)

## 可用组件

目前包含以下组件：

- `HelloWorld`: 欢迎组件
- `TheWelcome`: 欢迎页面组件
- `WelcomeItem`: 欢迎页面项目组件
- `IconCommunity`: 社区图标组件
- `IconDocumentation`: 文档图标组件
- `IconEcosystem`: 生态系统图标组件
- `IconSupport`: 支持图标组件
- `IconTooling`: 工具图标组件

## 开发指南

### 开发环境设置

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 运行单元测试
pnpm test:unit

# 运行代码检查
pnpm lint
```

### 构建发布

```bash
# 构建库文件
pnpm build

# 预览构建结果
pnpm preview

# 发布到 npm
npm publish
```

### 项目结构

```
src/
  ├── lib/         # 库入口文件
  ├── components/  # 组件源码
  ├── assets/      # 静态资源
  └── ...
dist/              # 构建输出目录
  ├── vue-first-npm.es.js   # ES Module 格式
  ├── vue-first-npm.umd.js  # UMD 格式
  └── style.css            # 样式文件
```

### 构建配置说明

#### Vite 配置

`vite.config.js` 中的库构建配置：

```javascript
export default defineConfig({
  build: {
    lib: {
      // 库模式入口文件
      entry: fileURLToPath(new URL('./src/lib/index.js', import.meta.url)),
      // 暴露到全局的变量名
      name: 'VueFirstNpm',
      // 输出文件名格式
      fileName: (format) => `vue-first-npm.${format}.js`
    },
    rollupOptions: {
      // 将 Vue 设置为外部依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为外部依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        },
        // 导出模式为命名导出
        exports: 'named'
      }
    }
  }
})
```

配置说明：
- `build.lib`: 库模式构建配置
  - `entry`: 指定库的入口文件
  - `name`: 库暴露的全局变量名（用于 UMD/IIFE 格式）
  - `fileName`: 输出文件名生成函数，根据不同格式生成对应文件名
- `rollupOptions`: Rollup 打包配置
  - `external`: 外部依赖，不会被打包进库文件
  - `output.globals`: UMD 格式下外部依赖的全局变量名映射
  - `output.exports`: 使用命名导出模式，支持按需引入

#### Package 配置

`package.json` 中的关键配置：

```json
{
  "files": [
    "dist"
  ],
  "main": "./dist/vue-first-npm.umd.js",
  "module": "./dist/vue-first-npm.es.js",
  "exports": {
    ".": {
      "import": "./dist/vue-first-npm.es.js",
      "require": "./dist/vue-first-npm.umd.js"
    },
    "./style.css": "./dist/style.css"
  }
}
```

配置说明：
- `files`: 指定发布到 npm 时包含的文件，这里只包含 `dist` 目录
- `main`: 指定 CommonJS/UMD 格式的入口文件
- `module`: 指定 ES Module 格式的入口文件
- `exports`: 配置包的导出规则
  - `"."`: 主入口配置
    - `import`: ES Module 导入时使用的文件
    - `require`: CommonJS 导入时使用的文件
  - `"./style.css"`: 样式文件的子路径导出配置

## 贡献指南

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 许可证

[MIT](LICENSE)

## 作者

tuonizhysg

## 致谢

- [Vue.js](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [所有贡献者](../../contributors)
```

## 使用方法

```javascript
// 引入组件
import { MyComponent } from 'vue-first-npm'
import 'vue-first-npm/dist/style.css'

// 在 Vue 组件中使用
export default {
  components: {
    MyComponent
  }
}
```

## 开发指南

### 环境准备

推荐使用 [VSCode](https://code.visualstudio.com/) 作为开发工具，并安装以下插件：
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (记得禁用 Vetur)
- ESLint
- TypeScript Vue Plugin (Volar)

### 开发流程

1. 安装依赖：
```bash
pnpm install
```

2. 启动开发服务器：
```bash
pnpm dev
```

3. 构建生产版本：
```bash
pnpm build
```

4. 运行单元测试：
```bash
pnpm test:unit
```

5. 代码规范检查：
```bash
pnpm lint
```

### 自定义配置

如需自定义 Vite 配置，请参考 [Vite 配置文档](https://vitejs.dev/config/)。

## 发布流程

1. 更新版本号：
```bash
# 补丁版本，解决 bug (1.0.0 -> 1.0.1)
npm version patch

# 次要版本，新功能向后兼容 (1.0.0 -> 1.1.0)
npm version minor

# 主要版本，不兼容的 API 更改 (1.0.0 -> 2.0.0)
npm version major

# 也可以直接指定版本号
npm version 1.2.3
```

注意：执行 npm version 命令会：
- 自动修改 package.json 中的版本号
- 创建一个新的 git commit
- 创建一个新的 git tag
- 注意一定要在提交新版本号时，git commit 一下

2. 构建项目：
```bash
pnpm build
```

3. 发布到 npm：
```bash
npm publish
```

## 需要切换github子账号来提交远程的仓库
```bash
git config user.name "tuonizhysg"
git config user.email "zhysg1001@163.com"
git remote rm origin
git remote add origin git@github.com-tuonizhysg:tuonizhysg/vue-first-npm.git
git push --set-upstream origin main
```
## 贡献指南

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的修改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 发起 Pull Request

## 许可证

[MIT](LICENSE)
