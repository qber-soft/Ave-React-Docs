---
id: label
title: Label
---

## Examples {#examples}

### Set Text {#example-set-text}

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

Set label text:

![label set text](./assets/label-set-text.png)

As we can see, by default, the label text is aligned to the left.

#### API {#api-label-set-text}

```ts
export interface ILabelComponentProps extends IComponentProps {
    text?: string;
}
```

### Background Color {#example-set-background-color}

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

#### API {#api-label-set-background-color}

```ts
export interface ILabelComponentProps extends IComponentProps {
    style?: ILabelStyle;
}

export interface ILabelStyle extends IComponentStyle {
    backgroundColor?: Vec4;
}
```

### Alignment {#example-text-align}

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

There are 3 ways to align text:

![label text align](./assets/label-text-align.png)

-   `AlignType.Center`: align center
-   `AlignType.Near`: align left in LTR writing systems, such as English/Chinese
-   `AlignType.Far`: align right (LTR)

#### API {#api-label-text-align}

```ts
export interface ILabelStyle extends IComponentStyle {
    horizontalAlign?: AlignType;
}
```

### Text Color {#example-set-text-color}

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

Set text color:

![label text color](./assets/label-text-color.png)

#### API {#api-label-set-text-color}

```ts
export interface ILabelStyle extends IComponentStyle {
    color?: Vec4;
}
```
