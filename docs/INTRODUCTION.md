# 项目概况

此项目为移动端基本框架。包括了：

- 项目结构处理
- 路由
- 拦截器
- rem
- store
- service
- 移动切换页面动画处理

## 项目结构

```markdown
├── LICENSE
├── README.md
├── babel.config.js
├── commitlint.config.js
├── docs
│   ├── GIT.md
│   ├── INTRODUCTION.md
│   └── VUE.md
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── assets
│   ├── components
│   ├── main.ts
│   ├── router
│   ├── service
│   ├── shims-tsx.d.ts
│   ├── shims-vue.d.ts
│   ├── store
│   ├── utils
│   └── views
├── tsconfig.json
├── tslint.json
├── vue.config.js
└── yarn.lock
```

## 项目使用

### 安装

```shell
yarn install
```

## 运行

``` shell
yarn run serve
```

### 打包

```shell
yarn run build
```

### Lints 文件检查和修复

```shell
yarn run lint
```

### 生成项目tree 结构

`Mac` 和 `Linux` 可以使用`tree`列出项目结构；

#### 安装

`Mac`的安装方式

```shell
brew install tree
```





