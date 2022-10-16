---
id: combo-box
title: ComboBox 下拉列表
---

<!-- ## 简介 {#introduction}

TODO：以后添加对下拉列表的整体介绍。 -->

## 例子 {#examples}

### 基本用法 {#example-basic}

```tsx
export function App() {
    const options: IComboBoxComponentProps['options'] = [
        { key: '1', text: 'a' },
        { key: '2', text: 'b' },
        { key: '3', text: 'c' },
    ];
    return (
        <Window title="ComboBox Basic">
            <DemoLayout>
                <ComboBox
                    options={options}
                    defaultSelectedKey="1"
                    onChange={(sender) => {
                        console.log(`current index: ${sender.GetSelection()}`);
                    }}
                ></ComboBox>
            </DemoLayout>
        </Window>
    );
}
```

在这个例子中，我们演示了设置并选择下拉列表内容：

![combo box basic](./assets/combo-box-basic.gif)

同时，在控制台会有以下 log 输出：

```bash
current index: 1
current index: 2
current index: 0
```

#### API {#api-combo-box-basic}

```ts
export interface IComboBoxComponentProps extends IComponentProps {
    options: IComboBoxOption[];
    defaultSelectedKey?: string;
    onChange?: Parameters<IComboBox['OnSelectionChange']>[0];
}

export interface IComboBoxOption {
    key: string;
    text: string;
}
```

默认情况下，下拉列表不会默认选中任何列表项。所以，在以上例子中，如果没有设置`defaultSelectedKey`，下拉列表显示是这样的:

![combo box default selection](./assets/combo-box-default-selection.gif)
