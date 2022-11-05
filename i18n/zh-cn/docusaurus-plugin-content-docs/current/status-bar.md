---
id: status-bar
title: StatusBar 状态栏
---

<!-- ## 简介 {#introduction}

TODO：以后添加对状态栏的整体介绍。 -->

## 例子 {#examples}

### 基本用法 {#example-basic}

```tsx
export function App() {
    const parts: IStatusBarComponentProps['parts'] = [
        { size: '120dpx', text: 'feature/status-bar', clickable: true },
        { size: '100dpx', text: 'Git Graph', clickable: true },
        { size: '1' },
    ];

    return (
        <Window>
            <DemoLayout>
                <StatusBar
                    parts={parts}
                    onClick={(sender, index) => {
                        console.log(`index: ${index}`);
                    }}
                ></StatusBar>
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
    const height = props?.height ?? '32dpx';

    const demoLayout = {
        columns: `1`,
        rows: `1 ${height}`,
        areas: {
            control: { row: 1, column: 0 },
        },
    };
    return (
        <Grid style={{ layout: demoLayout }}>
            <Grid style={{ area: demoLayout.areas.control }}>
                {props.children}
            </Grid>
        </Grid>
    );
}
```

在这个例子中，我们演示了状态栏的基本用法：在底部放置一些可点击的区块，并响应点击事件。

![status bar basic](./assets/status-bar-basic.gif)

同时，控制台将会有这样的输出：

```bash
index: 1
index: 0
```

#### API {#api-basic}

```ts
export interface IStatusBarComponentProps extends IComponentProps {
    parts: IStatusBarPart[];
    onClick?: Parameters<IStatusBar['OnClick']>[0];
}

export interface IStatusBarPart {
    size: string;
    text?: string;
    clickable?: boolean;
}
```
