---
id: mouse
title: 鼠标
---

## 例子 {#examples}

### 基本用法 {#example-basic}

![mouse event basic](./assets/mouse-event-basic.gif)

这个例子演示了对以下事件的处理：

-   Enter & Leave
-   Press & Release
-   Move
-   Hover

```tsx
function formatMessagePointer(mp: MessagePointer) {
    return `pos: (${mp.Position.x}, ${mp.Position.y})`;
}

export function App() {
    const [text, setText] = useState('out');
    const refEntered = useRef(false);
    const refPos = useRef(new Vec2(0, 0));

    const updateButton = () => {
        setText(
            `${
                refEntered.current
                    ? `at ${refPos.current.x}, ${refPos.current.y}`
                    : 'out'
            }`,
        );
    };

    const onPointerEnter: IButtonComponentProps['onPointerEnter'] = () => {
        refEntered.current = true;
        updateButton();
    };

    const onPointerLeave: IButtonComponentProps['onPointerLeave'] = () => {
        refEntered.current = false;
        updateButton();
    };

    const onPointerMove: IButtonComponentProps['onPointerMove'] = (
        sender,
        mp,
    ) => {
        refPos.current = mp.Position;
        updateButton();
    };

    const onPointerHover: IButtonComponentProps['onPointerHover'] = (
        sender,
        mp,
    ) => {
        console.log('on hover');
    };

    const onPointerPress: IButtonComponentProps['onPointerPress'] = (
        sender,
        mp,
    ) => {
        console.log(`on press: ${formatMessagePointer(mp)}`);
    };

    const onPointerRelease: IButtonComponentProps['onPointerRelease'] = (
        sender,
        mp,
    ) => {
        console.log(`on release: ${formatMessagePointer(mp)}`);
    };

    return (
        <Window>
            <DemoLayout>
                <Button
                    text={text}
                    onPointerRelease={onPointerRelease}
                    onPointerPress={onPointerPress}
                    onPointerHover={onPointerHover}
                    onPointerMove={onPointerMove}
                    onPointerEnter={onPointerEnter}
                    onPointerLeave={onPointerLeave}
                ></Button>
            </DemoLayout>
        </Window>
    );
}
```

#### API {#api-basic}

```ts
export interface IControl extends IControlExtension {
    //
    OnPointerEnter(
        fn: (sender: IControl, mp: MessagePointer) => void,
    ): IControl;
    OnPointerLeave(
        fn: (sender: IControl, mp: MessagePointer) => void,
    ): IControl;

    //
    OnPointerPress(
        fn: (sender: IControl, mp: MessagePointer) => void,
    ): IControl;
    OnPointerRelease(
        fn: (sender: IControl, mp: MessagePointer) => void,
    ): IControl;

    //
    OnPointerMove(fn: (sender: IControl, mp: MessagePointer) => void): IControl;
    OnPointerHover(
        fn: (sender: IControl, mp: MessagePointer) => void,
    ): IControl;
}

export class MessagePointer {
    // Common
    Id: number;
    Type: PointerType;
    Position: Vec2;
    Modifier: InputModifier;
    Button: PointerButton;
    Count: number;

    ...
}
```
