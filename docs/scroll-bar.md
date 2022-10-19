---
id: scroll-bar
title: ScrollBar
---

## Examples {#examples}

### Basic {#example-basic}

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

In this example, we demonstrate the basic usage of scroll bar.

Drag it and get the current positon:

![scroll bar basic](./assets/scroll-bar-basic.gif)

Log in console:

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

In the above example, by default `shrink` is `false`, which gives us a fixed size scroll bar. To be dynamically sized, set it to `true`:

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
