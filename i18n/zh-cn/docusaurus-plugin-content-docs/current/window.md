---
id: window
title: 窗口
---

<!-- ## 简介 {#introduction}

TODO：以后添加对窗口的说明 -->

## 例子 {#examples}

### 基本窗口 {#example-window-basic}

```tsx
import React from 'react';
import { AveRenderer, Window } from 'ave-react';

export function App() {
    return <Window></Window>;
}

AveRenderer.render(<App />);
```

运行之后会弹出这样的窗口：

![window basic](./assets/window-basic.png)

#### API {#api-window-basic}

```ts
export interface IWindowComponentProps extends IComponentProps {
    title?: string;
    withBackground?: boolean;
    withCaption?: boolean;
    onInit?: (app: App) => void;
    onLanguageChange?: (app: App) => void;
}
```

### 半透明窗口 {#example-window-opacity}

![window opacity](./assets/window-opacity.png)

代码中可以这样实现：

```tsx {24,33}
export function App() {
    return (
        <Window withBackground={false}>
            <Grid>
                <Grid
                    dockMode={DockMode.Fill}
                    style={{
                        opacity: 0.3,
                        backgroundColor: new Vec4(100, 149, 237, 255),
                    }}></Grid>
            </Grid>
        </Window>
    );
}
```

关于 grid 透明度，见：[半透明 Grid](layout#example-grid-opacity)。
