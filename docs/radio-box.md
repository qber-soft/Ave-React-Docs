---
id: radio-box
title: RadioBox
---

## Examples {#examples}

### Basic {#example-basic}

```tsx
export function App() {
    const [valueA, setValueA] = useState(false);
    const [valueB, setValueB] = useState(false);

    const onCheck: IRadioBoxComponentProps['onCheck'] = (sender) => {
        const option = sender.GetText();
        console.log(`${option} onCheck`);

        if (option === 'Option A') {
            setValueA(!valueA);
            setValueB(false);
        } else if (option === 'Option B') {
            setValueB(!valueB);
            setValueA(false);
        }
    };

    return (
        <Window>
            <DemoLayout>
                <RadioBox
                    text="Option A"
                    onCheck={onCheck}
                    value={valueA}
                ></RadioBox>
                <RadioBox
                    text="Option B"
                    onCheck={onCheck}
                    value={valueB}
                ></RadioBox>
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
        columns: `1 ${width} ${width} 1`,
        rows: `1 ${height} 1`,
        areas: {
            left: { row: 1, column: 1 },
            right: { row: 1, column: 2 },
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

Usage:

![radio-box basic](./assets/radio-box-basic.gif)

In console:

```bash
Option A onCheck
Option B onCheck
Option A onCheck
```

#### API {#api-basic}

```ts
export interface IRadioBoxComponentProps extends IComponentProps {
    text: string;
    value?: boolean;
    onCheck?: Parameters<IRadioBox['OnCheck']>[0];
}
```
