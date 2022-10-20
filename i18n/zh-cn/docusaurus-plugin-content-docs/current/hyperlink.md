---
id: hyperlink
title: Hyperlink 超链接
---

<!-- ## 简介 {#introduction}

TODO：以后添加对超链接的整体介绍。 -->

## 例子 {#examples}

### 基本用法 {#example-basic}

```tsx
export function App() {
    return (
        <Window>
            <DemoLayout>
                <Hyperlink
                    text="<https://github.com/>"
                    onClick={() => {
                        console.log('hyperlink clicked');
                    }}
                />
            </DemoLayout>
        </Window>
    );
}
```

在这个例子中，我们演示了超链接的基本用法，通常就是一个网络链接，点击它会跳转到对应网页。当然，在例子中我们只是简单输出了 log。

![hyperlink basic](./assets/hyperlink-basic.gif)

控制台中有这样的输出：

```bash
hyperlink clicked
```

#### API {#api-basic}

```ts
export interface IHyperlinkComponentProps extends IComponentProps {
    // text的格式: 超链接内容需要包裹在<>之中，如<https://github.com/>
    text: string;
    onClick?: Parameters<IHyperlink['OnClick']>[0];
}
```
