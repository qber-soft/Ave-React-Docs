---
id: tree
title: Tree 树形控件
---

<!-- ## 简介 {#introduction}

TODO：以后添加对树形控件的整体介绍。 -->

## 例子 {#examples}

### 基本用法 {#example-basic}

```tsx
export function App() {
    const nodes: ITreeComponentProps['nodes'] = [
        {
            text: 'A',
            children: [
                { text: 'C', children: [{ text: 'D', children: [] }] },
                { text: 'B', children: [] },
            ],
        },
    ];
    return (
        <Window>
            <DemoLayout width="500dpx" height="300dpx">
                <Tree
                    nodes={nodes}
                    onSelect={(sender, selected) => {
                        console.log(`select ${selected.text}`);
                    }}
                ></Tree>
            </DemoLayout>
        </Window>
    );
}
```

在这个例子中，我们演示了树形控件的基本用法：显示一系列节点并响应点击事件:

![tree basic](./assets/tree-basic.gif)

同时控制台还有以下输出：

```bash
select A
select C
select D
select B
```

#### API {#api-basic}

```ts
export interface ITreeComponentProps extends IComponentProps {
    nodes: ITreeNode[];
    onSelect?: (sender: NativeTree, selected: ITreeNode) => void;
}

export interface ITreeNode {
    text: string;
    children: ITreeNode[];
}
```
