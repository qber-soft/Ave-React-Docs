---
id: track-bar
title: TrackBar
---

## Examples {#examples}

### Basic {#example-basic}

```tsx
export function App() {
    return (
        <Window>
            <DemoLayout width="500dpx" height="25dpx">
                <TrackBar
                    onThumbRelease={(sender) => {
                        console.log(
                            `on thumb release, current value: ${sender.GetValue()}`,
                        );
                    }}
                ></TrackBar>
            </DemoLayout>
        </Window>
    );
}
```

Drag it and get value:

![track bar basic](./assets/track-bar-basic.gif)

In console:

```bash
on thumb release, current value: 0
on thumb release, current value: 22
on thumb release, current value: 46
on thumb release, current value: 69
on thumb release, current value: 75
on thumb release, current value: 85
on thumb release, current value: 100
...
```

#### API {#api-basic}

```ts
export interface ITrackBarComponentProps extends IComponentProps {
    onThumbRelease?: Parameters<ITrackBar['OnThumbRelease']>[0];
}
```
