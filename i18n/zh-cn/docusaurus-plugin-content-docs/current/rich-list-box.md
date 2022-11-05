---
id: rich-list-box
title: RichListBox 多格式列表框
---

<!-- ## 简介 {#introduction}

TODO：以后添加对多格式列表框的整体介绍。 -->

## 例子 {#examples}

### 基本用法 {#example-basic}

```tsx
export function App() {
    const headers: IRichListBoxComponentProps['headers'] = [
        { name: 'ID', size: '200dpx', dataKey: 'id' },
        { name: 'Name', size: '200dpx', dataKey: 'name' },
    ];

    const data: IRichListBoxComponentProps['data'] = [
        { id: '1', name: 'a' },
        { id: '2', name: 'b' },
        { id: '3', name: 'c' },
        { id: '4', name: 'd' },
        { id: '5', name: 'e' },
        { id: '6', name: 'f' },
    ];

    return (
        <Window>
            <DemoLayout width="410dpx" height="300dpx">
                <RichListBox
                    headers={headers}
                    data={data}
                    onSelectionEnd={(sender) => {
                        const itemIndex = sender.ItemGetSelection();
                        console.log(itemIndex);
                    }}
                ></RichListBox>
            </DemoLayout>
        </Window>
    );
}
```

在这个例子中，我们演示了多格式列表框的基本用法：

![rich list box basic](./assets/rich-list-box-basic.gif)

同时，控制台有以下 log 打印：

```bash
0
2
4
```

#### API {#api-basic}

```ts
export interface IRichListBoxComponentProps extends IComponentProps {
    headers: IRichListBoxHeader[];
    data?: IRichListBoxData[];
    onSelectionEnd?: Parameters<IRichListBox['OnSelectionEnd']>[0];
}

export interface IRichListBoxHeader {
    name: string;
    size: string;
    dataKey: string;
    align?: HeaderItemFormat;
}

export type IRichListBoxData = Record<string, string>;
```
