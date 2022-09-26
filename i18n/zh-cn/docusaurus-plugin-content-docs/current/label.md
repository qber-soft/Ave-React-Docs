---
id: label
title: Label 标签
---

<!-- ## 简介 {#introduction}

TODO：以后添加对标签的整体介绍。 -->

## 例子 {#examples}

### 设置文案 {#example-set-text}

```tsx {10}
export function App() {
    return (
        <Window>
            <DemoLayout>
                <Grid
                    style={{
                        backgroundColor: new Vec4(0, 146, 255, 255 * 0.75),
                    }}
                >
                    <Label text="Label"></Label>
                </Grid>
            </DemoLayout>
        </Window>
    );
}
```

我们使用`SetText`来设置标签上的文案，运行之后：

![label set text](./assets/label-set-text.png)

从这个例子中我们可以看出，默认情况下，标签上的文案是左对齐的（为了突出这一点，我们给标签所在网格设置了背景颜色）。

#### API {#api-label-set-text}

```ts
export interface ILabelComponentProps extends IComponentProps {
    text?: string;
}
```

### 设置背景颜色 {#example-set-background-color}

```tsx {8}
export function App() {
    return (
        <Window>
            <DemoLayout>
                <Label
                    text="Label"
                    style={{
                        backgroundColor: new Vec4(0, 146, 255, 255 * 0.75),
                    }}
                ></Label>
            </DemoLayout>
        </Window>
    );
}
```

在[设置文案](#example-set-text)的例子中，我们设置的是标签所在网格的背景色，在这个例子中，我们演示了直接设置标签的背景色，效果是一样的，因为默认情况下，标签的背景色会填满标签所在网格。

#### API {#api-label-set-background-color}

```ts
export interface ILabelComponentProps extends IComponentProps {
    style?: ILabelStyle;
}

export interface ILabelStyle extends IComponentStyle {
    backgroundColor?: Vec4;
}
```

### 设置文字对齐方式 {#example-text-align}

```tsx {8,14,19}
export function App() {
    const backgroundColor = new Vec4(0, 146, 255, 255 * 0.75);
    return (
        <Window>
            <DemoLayout>
                <Label
                    text="Label"
                    style={{ backgroundColor, horizontalAlign: AlignType.Near }}
                ></Label>
                <Label
                    text="Label"
                    style={{
                        backgroundColor,
                        horizontalAlign: AlignType.Center,
                    }}
                ></Label>
                <Label
                    text="Label"
                    style={{ backgroundColor, horizontalAlign: AlignType.Far }}
                ></Label>
            </DemoLayout>
        </Window>
    );
}

interface IDemoLayoutProps {
    children?: any[] | any;
    width?: string;
    height?: string;
}

function DemoLayout(props: IDemoLayoutProps) {
    const width = props?.width ?? '120dpx';
    const height = props?.height ?? '32dpx';

    const demoLayout = {
        columns: `1 ${width} ${width} ${width} ${width} ${width} 1`,
        rows: `1 ${height} 1`,
        areas: {
            left: { row: 1, column: 1 },
            middle: { row: 1, column: 3 },
            right: { row: 1, column: 5 },
        },
    };
    const [left, middle, right] = props.children;

    return (
        <Grid style={{ layout: demoLayout }}>
            <Grid style={{ area: demoLayout.areas.left }}>{left}</Grid>
            <Grid style={{ area: demoLayout.areas.middle }}>{middle}</Grid>
            <Grid style={{ area: demoLayout.areas.right }}>{right}</Grid>
        </Grid>
    );
}
```

在这个例子中，我们演示了 3 种不同的文字对齐方式：

![label text align](./assets/label-text-align.png)

`AlignType.Center`是居中对齐，`AlignType.Near`在从左向右书写的文字系统中（例如中文、英文）就是我们常说的左对齐，`AlignType.Far`则对应右对齐。

#### API {#api-label-text-align}

```ts
export interface ILabelStyle extends IComponentStyle {
    horizontalAlign?: AlignType;
}
```

### 设置文字颜色 {#example-set-text-color}

```tsx {10}
export function App() {
    return (
        <Window>
            <DemoLayout>
                <Label
                    text="Label"
                    style={{
                        horizontalAlign: AlignType.Center,
                        backgroundColor: new Vec4(0, 146, 255, 255 * 0.75),
                        color: new Vec4(255, 255, 255, 255),
                    }}
                ></Label>
            </DemoLayout>
        </Window>
    );
}
```

在这个例子中，我们演示了怎样设置文字颜色：

![label text color](./assets/label-text-color.png)

#### API {#api-label-set-text-color}

```ts
export interface ILabelStyle extends IComponentStyle {
    color?: Vec4;
}
```
