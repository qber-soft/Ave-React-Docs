---
id: color-picker
title: ColorPicker 颜色选择器
---

<!-- ## 简介 {#introduction}

TODO：以后添加对颜色选择器的整体介绍。 -->

## 例子 {#examples}

### 基本用法 {#example-basic}

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

在这个例子中，我们演示了颜色选择器的基本用法: 获取用户选择的颜色，然后用它设置按钮上的文字颜色。

![color picker basic](./assets/color-picker-basic.gif)

#### API {#api-basic}

```ts
export interface ICommonUi {
    PickColor(vColor: Vec4, bAllowAlpha: boolean): Promise<Vec4>;
}
```

在例子中我们设置的`vColor`（每次打开取色器时候的默认颜色）是白色（`new Vec4(255, 255, 255, 255)`）:

![color picker default color](./assets/color-picker-default-color.png)

如果希望每次打开取色器都是上一次的颜色，可以这样修改代码：

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

`bAllowAlpha` 则控制是否能选择颜色 alpha 值，值为 `false` 的时候最后返回的颜色 alpha 始终是 255。
