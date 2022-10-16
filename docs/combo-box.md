---
id: combo-box
title: ComboBox
---

## Examples {#examples}

### Basic {#example-basic}

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

Select list item:

![combo box basic](./assets/combo-box-basic.gif)

In console:

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

There is no default selected item, remove `defaultSelectedKey` then we will get this:

![combo box default selection](./assets/combo-box-default-selection.gif)
