---
id: getting-started
title: 快速上手
---

## 安装 {#install}

```bash
> npm i ave-react
```

## 简单窗口 {#hello-window}

以下例子来自模板项目：[Ave-React-Template](https://github.com/qber-soft/Ave-React-Template)，目的是简要介绍：使用 Ave React 开发，代码大致是怎样的：

> clone 模板项目，然后运行： `npm run dev`

```tsx title="https://github.com/qber-soft/Ave-React-Template/blob/main/src/app.tsx"
import React from "react";
import { AveRenderer, Window, Grid } from "ave-react";
import { Vec4 } from "ave-ui";

export function App() {
  return (
    <Window title="Ave React Template">
      <Grid style={{ backgroundColor: new Vec4(100, 149, 237, 255) }}></Grid>
    </Window>
  );
}

AveRenderer.render(<App />);
```

运行成功后会弹出一个窗口，背景为浅蓝色：

![template basic](./assets/template-basic.png)

## 基本按钮 {#hello-button}

创建窗口后，就可以根据各组件的文档来组合打造成桌面应用了，比如这个基本按钮的使用:

```tsx
import React from "react";
import { AveRenderer, Window, Grid, Button } from "ave-react";

export function App() {
  return (
    <Window title="Button Basic">
      <DemoLayout>
        <Button text="Button" onClick={() => console.log("click")}></Button>
      </DemoLayout>
    </Window>
  );
}

interface IDemoLayoutProps {
  children?: any[] | any;
  width?: string;
  height?: string;
}

function DemoLayout(props: IDemoLayoutProps) {
  const width = props?.width ?? "120dpx";
  const height = props?.height ?? "32dpx";

  const demoLayout = {
    columns: `1 ${width} 1`,
    rows: `1 ${height} 1`,
    areas: {
      center: { row: 1, column: 1 },
    },
  };
  return (
    <Grid style={{ layout: demoLayout }}>
      <Grid style={{ area: demoLayout.areas.center }}>{props.children}</Grid>
    </Grid>
  );
}

AveRenderer.render(<App />);

```

就只是替换了 `app.tsx` 里面的代码，运行后有一个可以点击的按钮：

<video src={require('./assets/getting-started-template-project.mp4').default} controls autoplay style={{width: 800}}/>

## 调试 {#debug}

Ave React 应用只是普通的 node 应用，所以就像通常那样调试就行了。我们在模板项目中已经添加了 vscode 配置：

```json
{
    "configurations": [
        {
            "name": "Launch",
            "type": "node",
            "request": "launch",
            "args": [
                "./src/app.tsx"
            ],
            "runtimeArgs": [
                "--nolazy",
                "-r",
                "ts-node/register"
            ],
            "sourceMaps": true,
            "cwd": "${workspaceRoot}",
            "protocol": "inspector"
        }
    ]
}
```

这样下好断点，直接点 `Launch` ，就能调了：

<video src={require('./assets/vscode-debug.mp4').default} controls autoplay style={{width: 800}}/>

## 打包 {#package}

clone 模板项目，然后运行 `npm run release`, 会产出单个 exe 文件:

> 大小构成：40M = 30M node 运行时 + 10M ave sdk 大小（那个 node 插件）

![package](./assets/template-package.png)

在`ave.config.ts`中可以配置各种 app 的信息：

```ts
import { IPackConfig } from "ave-pack";

const config: IPackConfig = {
  build: {
    projectRoot: __dirname,
    target: "node14-win-x64",
    input: "./build/src/app.js",
    output: "./bin/ave-react-app.exe",
  },
  resource: {
    icon: "./assets/ave.ico",
    productVersion: "0.0.1",
    productName: "Ave React Template App",
    fileVersion: "0.0.1",
    companyName: "QberSoft",
    fileDescription: "The Template App of Ave React",
    LegalCopyright: `© ${new Date().getFullYear()} Ave React Copyright.`,
  },
};

export default config;
```