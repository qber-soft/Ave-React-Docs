---
id: track-bar
title: TrackBar 轨道条
---

<!-- ## 简介 {#introduction}

TODO：以后添加对轨道条的整体介绍。 -->

## 例子 {#examples}

### 基本用法 {#example-basic}

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

在这个例子中，我们演示了轨道条的基本用法：拖动滑块以获取对应位置的值:

![track bar basic](./assets/track-bar-basic.gif)

同时控制台还有类似这样的输出：

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
