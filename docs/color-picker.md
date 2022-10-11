---
id: color-picker
title: ColorPicker
---

## Examples {#examples}

### Basic {#example-basic}

```tsx {11-15}
export function App() {
    return (
        <Window>
            <DemoLayout>
                <Button
                    text="Button"
                    onClick={async (sender) => {
                        const context = getAppContext();
                        const window = context.getWindow();

                        const commonUi = window.GetCommonUi();
                        const result = await commonUi.PickColor(
                            new Vec4(255, 255, 255, 255),
                            false,
                        );
                        sender.SetTextColor(result);
                    }}
                ></Button>
            </DemoLayout>
        </Window>
    );
}
```

Get selected color and use it to set color of button text:

![color picker basic](./assets/color-picker-basic.gif)

#### API {#api-basic}

```ts
export interface ICommonUi {
    PickColor(vColor: Vec4, bAllowAlpha: boolean): Promise<Vec4>;
}
```

In the above example, we set `vColor` to white(`new Vec4(255, 255, 255, 255)`):

![color picker default color](./assets/color-picker-default-color.png)

If we want to use the last used color as default, modify code in this way:

```tsx {2,14,16}
export function App() {
    const [color, setColor] = useState(new Vec4(255, 255, 255, 255));

    return (
        <Window>
            <DemoLayout>
                <Button
                    text="Button"
                    onClick={async (sender) => {
                        const context = getAppContext();
                        const window = context.getWindow();

                        const commonUi = window.GetCommonUi();
                        const result = await commonUi.PickColor(color, false);
                        sender.SetTextColor(result);
                        setColor(result);
                    }}
                ></Button>
            </DemoLayout>
        </Window>
    );
}
```

![color picker default color 2](./assets/color-picker-default-color-2.gif)

If `bAllowAlpha` is false, returned alpha of color is always 255, if it's true, we can select not only RGB, bug also alpha channel.
