---
id: scroll-bar
title: ScrollBar 滚动条
---

<!-- ## 简介 {#introduction}

TODO：以后添加对滚动条的整体介绍。 -->

## 例子 {#examples}

### 基本用法 {#example-basic}

```tsx
export function App() {
    return (
        <Window>
            <DemoLayout width="240dpx" height="16dpx">
                <ScrollBar
                    value={50}
                    onScrolling={(sender) => {
                        console.log(sender.GetValue());
                    }}
                ></ScrollBar>
            </DemoLayout>
        </Window>
    );
}
```

在这个例子中，我们演示了滚动条的基本用法：设置当前值（`50`），拖动滑块，通过设置的回调获取变化的当前位置的值：

![scroll bar basic](./assets/scroll-bar-basic.gif)

控制台将会有这样的输出：

```bash
50
49
49
48
48
47
...
36
36
35
35
34
34
```

另外，在这个例子中，`shrink`默认为`false`，它的作用是使得滚动条大小不变，当设置为`true`时，效果如下：

```tsx {7}
export function App() {
    return (
        <Window>
            <DemoLayout width="240dpx" height="16dpx">
                <ScrollBar
                    value={50}
                    shrink
                    onScrolling={(sender) => {
                        console.log(sender.GetValue());
                    }}
                ></ScrollBar>
            </DemoLayout>
        </Window>
    );
}
```

![scroll bar shrink](./assets/scroll-bar-shrink.gif)

#### API {#api-basic}

```ts
export interface IScrollBarComponentProps extends IComponentProps {
    value: number;
    shrink?: boolean;
    onScrolling?: Parameters<IScrollBar['OnScrolling']>[0];
}
```
