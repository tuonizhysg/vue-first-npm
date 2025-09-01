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

## 安装

```bash
# 使用 npm
npm install vue-first-npm

# 使用 pnpm
pnpm add vue-first-npm

# 使用 yarn
yarn add vue-first-npm
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

2. 构建项目：
```bash
pnpm build
```

3. 发布到 npm：
```bash
npm publish
```

## 切换github子账号以及远程的仓库分支
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
