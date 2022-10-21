---
id: knob
title: Knob
---

## Examples {#examples}

### Basic {#example-basic}

```tsx
export function App() {
    return (
        <Window>
            <DemoLayout height="80dpx">
                <Knob
                    text="volume"
                    style={{ ringColor: new Vec4(0, 146, 255, 255 * 0.75) }}
                    onChange={(sender) => {
                        console.log(`value: ${sender.ValueGet()}`);
                    }}
                ></Knob>
            </DemoLayout>
        </Window>
    );
}
```

Usage:

![knob basic](./assets/knob-basic.gif)

In console:

```bash
value: 0.004
value: 0.013000000000000001
value: 0.019000000000000003
...
```

Note: The value range is [0,1].

#### API {#api-basic}

```ts
export interface IKnobComponentProps extends IComponentProps {
    text: string;
    style?: IKnobStyle;
    onChange?: Parameters<IKnob['OnChange']>[0];
}

export interface IKnobStyle extends IComponentStyle {
    ringColor?: Vec4;
}
```
