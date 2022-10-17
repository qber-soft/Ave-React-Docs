---
id: check-box
title: CheckBox
---

## Examples {#examples}

### Basic {#example-basic}

```tsx
export function App() {
    return (
        <Window>
            <DemoLayout>
                <CheckBox
                    text="Apple"
                    onCheck={(sender) => {
                        const checkValue = sender.GetValue();
                        console.log(
                            `check value: ${checkValue}(${CheckValue[checkValue]})`,
                        );
                    }}
                ></CheckBox>
            </DemoLayout>
        </Window>
    );
}
```

Usage:

![check box basic](./assets/check-box-basic.gif)

In console:

```bash
check value: 1(Checked)
check value: 0(Unchecked)
check value: 1(Checked)
check value: 0(Unchecked)
```

Return false in `onChecking` to cancel action. `onCheck` will not be invoked in this case.

```tsx {14}
export function App() {
    return (
        <Window>
            <DemoLayout>
                <CheckBox
                    text="Apple"
                    onCheck={(sender) => {
                        const checkValue = sender.GetValue();
                        console.log(
                            `check value: ${checkValue}(${CheckValue[checkValue]})`,
                        );
                    }}
                    onChecking={(sender) => {
                        return false;
                    }}
                ></CheckBox>
            </DemoLayout>
        </Window>
    );
}
```

![check box on checking](./assets/check-box-on-checking.gif)

#### API {#api-basic}

```ts
export interface ICheckBoxComponentProps extends IComponentProps {
    text: string;
    onCheck?: Parameters<ICheckBox['OnCheck']>[0];
    onChecking?: Parameters<ICheckBox['OnChecking']>[0];
}

export enum CheckValue {
    Unchecked,
    Checked,
    Mixed,
}
```

### Style {#example-style}

```tsx {8,14}
export function App() {
    return (
        <Window>
            <DemoLayout>
                <CheckBox
                    text="Apple"
                    style={{
                        visualStyle: CheckBoxStyle.Checking,
                    }}
                ></CheckBox>
                <CheckBox
                    text="Apple"
                    style={{
                        visualStyle: CheckBoxStyle.Pushing,
                    }}
                ></CheckBox>
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
        columns: `1 ${width} ${width} ${width} 1`,
        rows: `1 ${height} 1`,
        areas: {
            left: { row: 1, column: 1 },
            right: { row: 1, column: 3 },
        },
    };
    const [left, right] = props.children;
    return (
        <Grid style={{ layout: demoLayout }}>
            <Grid style={{ area: demoLayout.areas.left }}>{left}</Grid>
            <Grid style={{ area: demoLayout.areas.right }}>{right}</Grid>
        </Grid>
    );
}
```

Check box in button style:

![check box style](./assets/check-box-style.gif)

#### API {#api-style}

```ts
export interface ICheckBoxComponentProps extends IComponentProps {
    style?: ICheckBoxStyle;
}

export interface ICheckBoxStyle extends IComponentStyle {
    visualStyle?: CheckBoxStyle;
}

export enum CheckBoxStyle {
    Checking,
    Pushing,
}
```

### Status {#example-triple}

```tsx
export function App() {
    return (
        <Window>
            <DemoLayout>
                <CheckBox text="Apple" triple></CheckBox>
                <CheckBox
                    text="Apple"
                    triple
                    style={{ visualStyle: CheckBoxStyle.Pushing }}
                ></CheckBox>
            </DemoLayout>
        </Window>
    );
}
```

Mixed status:

![check box triple](./assets/check-box-triple.gif)

#### API {#api-style}

```ts {9}
export interface ICheckBoxComponentProps extends IComponentProps {
    triple?: boolean;
}
```

#### Practice: select all {#practice-select-all}

In this practice, we will implement select-all: [Ant Design: CheckBox](https://ant.design/components/checkbox/).

![check box practice select all](./assets/check-box-practice-select-all.gif)

### Text Color {#example-text-color}

```tsx
export function App() {
    return (
        <Window>
            <DemoLayout>
                <CheckBox
                    text="Apple"
                    style={{ color: new Vec4(0, 146, 255, 255 * 0.75) }}
                ></CheckBox>
            </DemoLayout>
        </Window>
    );
}
```

![check box text color](./assets/check-box-text-color.gif)

#### API {#api-text-color}

```ts
export interface ICheckBoxComponentProps extends IComponentProps {
    style?: ICheckBoxStyle;
}

export interface ICheckBoxStyle extends IComponentStyle {
    color?: Vec4;
}
```

## Practice Solutions {#practice-solutions}

### select all {#solution-select-all}

> [Practice description](#practice-select-all)

```tsx
export function App() {
    const options = ['React', 'Vue', 'Svelte'];
    const [checkedSet, setCheckedSet] = useState(new Set<string>());
    const [valueCheckAll, setValueCheckAll] = useState(CheckValue.Unchecked);

    const onCheck: ICheckBoxComponentProps['onCheck'] = (sender) => {
        const text = sender.GetText();
        const checkValue = sender.GetValue();
        const clone = new Set(checkedSet);

        if (checkValue === CheckValue.Checked) {
            clone.add(text);
        } else if (checkValue === CheckValue.Unchecked) {
            clone.delete(text);
        }

        setCheckedSet(clone);
    };

    const onCheckingAll: ICheckBoxComponentProps['onChecking'] = (sender) => {
        const next = sender.GetNextValue();
        if (
            valueCheckAll === CheckValue.Unchecked &&
            next === CheckValue.Checked
        ) {
            setCheckedSet(new Set(options));
        } else if (
            valueCheckAll === CheckValue.Checked &&
            next === CheckValue.Mixed
        ) {
            setCheckedSet(new Set());
        } else if (
            valueCheckAll === CheckValue.Mixed &&
            next === CheckValue.Unchecked
        ) {
            setCheckedSet(new Set(options));
        }

        return false;
    };

    useEffect(() => {
        if (checkedSet.size === options.length) {
            setValueCheckAll(CheckValue.Checked);
        } else if (checkedSet.size === 0) {
            setValueCheckAll(CheckValue.Unchecked);
        } else {
            setValueCheckAll(CheckValue.Mixed);
        }
    }, [checkedSet]);

    return (
        <Window>
            <DemoLayout>
                <CheckBox
                    text="Use all"
                    triple
                    value={valueCheckAll}
                    onChecking={onCheckingAll}
                ></CheckBox>
                {...options.map((each) => (
                    <CheckBox
                        key={each}
                        text={each}
                        onCheck={onCheck}
                        value={
                            checkedSet.has(each)
                                ? CheckValue.Checked
                                : CheckValue.Unchecked
                        }
                    ></CheckBox>
                ))}
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
        columns: `1 ${width} ${width} ${width} 1`,
        rows: `1 ${height} ${height} 1`,
        areas: {
            useAll: { row: 1, column: 1 },
            react: { row: 2, column: 1 },
            vue: { row: 2, column: 2 },
            svelte: { row: 2, column: 3 },
        },
    };
    const [useAll, react, vue, svelte] = props.children;

    return (
        <Grid style={{ layout: demoLayout }}>
            <Grid style={{ area: demoLayout.areas.useAll }}>{useAll}</Grid>
            <Grid style={{ area: demoLayout.areas.react }}>{react}</Grid>
            <Grid style={{ area: demoLayout.areas.vue }}>{vue}</Grid>
            <Grid style={{ area: demoLayout.areas.svelte }}>{svelte}</Grid>
        </Grid>
    );
}
```
