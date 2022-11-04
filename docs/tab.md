---
id: tab
title: Tab
---

## Examples {#examples}

### Basic {#example-basic}

```tsx
export function App() {
    return (
        <Window>
            <DemoLayout width="300dpx" height="150dpx">
                <Tab
                    items={[
                        { id: 1, name: 'tab1' },
                        { id: 2, name: 'tab2' },
                    ]}
                ></Tab>
            </DemoLayout>
        </Window>
    );
}
```

Switch between `tab1` and `tab2`:

![tab basic](./assets/tab-basic.gif)

#### API {#api-basic}

```ts
export interface ITabComponentProps extends IComponentProps {
    items: ITabItem[];
}

export interface ITabItem {
    // 0 is reserved, don't use it as your tab id
    id: number;
    // title of tab
    name: string;
}
```

### Set Content {#set-content}

We should put grid in tab as root content:

```tsx
export function App() {
    return (
        <Window>
            <DemoLayout width="300dpx" height="150dpx">
                <Tab
                    items={[
                        { id: 1, name: 'tab1' },
                        { id: 2, name: 'tab2' },
                    ]}
                >
                    <Grid
                        style={{
                            backgroundColor: new Vec4(0, 146, 255, 255 * 0.75),
                        }}
                    ></Grid>
                    <Grid
                        style={{ backgroundColor: new Vec4(238, 39, 70, 255) }}
                    ></Grid>
                </Tab>
            </DemoLayout>
        </Window>
    );
}
```

Usage:

![tab set content](./assets/tab-set-content.gif)
