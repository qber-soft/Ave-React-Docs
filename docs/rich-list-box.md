---
id: rich-list-box
title: RichListBox
---

## Examples {#examples}

### Basic {#example-basic}

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

This example shows the basic usage of rich list box:

![rich list box basic](./assets/rich-list-box-basic.gif)

In console:

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
