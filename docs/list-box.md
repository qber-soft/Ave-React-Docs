---
id: list-box
title: ListBox
---

## Examples {#examples}

### Basic {#example-basic}

```tsx
export function App() {
    return (
        <Window>
            <DemoLayout width="200dpx" height="300dpx">
                <ListBox
                    items={['a', 'b', 'c']}
                    onSelectionEnd={(sender) => {
                        console.log(sender.GetSelection());
                    }}
                ></ListBox>
            </DemoLayout>
        </Window>
    );
}
```

Display a list of items, and get index of selected item:

![list box basic](./assets/list-box-basic.gif)

In console:

```bash
0
1
2
```

#### API {#api-basic}

```ts
export interface IListBoxComponentProps extends IComponentProps {
    items?: string[];
    onSelectionEnd?: Parameters<IListBox['OnSelectionEnd']>[0];
}
```
