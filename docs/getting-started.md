---
id: getting-started
title: Getting Started
---

## Usage

```bash
> npm i ave-react
```

## Hello Window {#hello-window}

This example from [Ave-React-Template](https://github.com/qber-soft/Ave-React-Template) is designed to let us get a glimpse of Ave React:

> clone template project and `npm run dev`

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

You will get a light blue window:

![template basic](./assets/template-basic.png)

## Hello Button {#hello-button}

Replace code in `app.tsx`, which gives us a basic application with button:

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

<video src={require('./assets/getting-started-template-project.mp4').default} controls autoplay style={{width: 800}}/>

## Debug {#debug}

Ave React app is just node app, so you can debug it as usual. For convenience, we add this [launch config](https://github.com/qber-soft/Ave-React-Template/blob/main/.vscode/launch.json) in template project:

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

Set some breakpoints and press `Launch`, you are ready to go:

<video src={require('./assets/vscode-debug.mp4').default} controls autoplay style={{width: 800}}/>

## Package {#package}

Clone template project and `npm run release`, the output is a single `exe`:

> 40M = 30M node runtime + 10M sdk node addon

![package](./assets/template-package.png)

You can config app info in `ave.config.ts`:

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
