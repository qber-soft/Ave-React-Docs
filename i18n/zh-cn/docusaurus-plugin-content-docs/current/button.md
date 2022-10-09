---
id: button
title: Button 按钮
---

<!-- ## 简介 {#introduction}

TODO：以后添加对按钮的整体介绍。 -->

## 例子 {#examples}

### 设置文案 {#example-set-text}

```tsx {5}
export function App() {
    return (
        <Window>
            <DemoLayout>
                <Button text="Button"></Button>
            </DemoLayout>
        </Window>
    );
}

// boilerplate code: place control at the center of window
interface IDemoLayoutProps {
    children?: any[] | any;
    width?: string;
    height?: string;
}

function DemoLayout(props: IDemoLayoutProps) {
    const width = props?.width ?? '120dpx';
    const height = props?.height ?? '32dpx';

    const demoLayout = {
        columns: `1 ${width} 1`,
        rows: `1 ${height} 1`,
        areas: {
            center: { row: 1, column: 1 },
        },
    };
    return (
        <Grid style={{ layout: demoLayout }}>
            <Grid style={{ area: demoLayout.areas.center }}>
                {props.children}
            </Grid>
        </Grid>
    );
}
```

我们使用`text`来设置按钮上的文案，运行之后：

![button set text](./assets/button-set-text.png)

#### API {#api-button-set-text}

```ts
export interface IButtonComponentProps extends IComponentProps {
    text?: string;
    ...
}
```

### 设置文字颜色 {#example-set-text-color}

```tsx {7}
export function App() {
    return (
        <Window>
            <DemoLayout>
                <Button
                    text="Button"
                    style={{ color: new Vec4(0, 146, 255, 255 * 0.75) }}
                ></Button>
            </DemoLayout>
        </Window>
    );
}
```

运行之后：

![button text color](./assets/button-text-color.png)

#### API {#api-button-text-color}

```ts
export interface IButtonComponentProps extends IComponentProps {
  style?: IButtonStyle;
  ...
}

export interface IButtonStyle extends IComponentStyle {
  color?: Vec4;
  ...
}
```

### 外观样式 {#example-button-visual-style}

```tsx {7,11}
export function App() {
    return (
        <Window>
            <DemoLayout>
                <Button
                    text="Button"
                    style={{ visualStyle: ButtonStyle.Command }}
                ></Button>
                <Button
                    text="Button"
                    style={{ visualStyle: ButtonStyle.Push }}
                ></Button>
            </DemoLayout>
        </Window>
    );
}
```

这两种样式在功能上没有任何区别，只是外观上看起来不同。push 的意思是说这个按钮是有按下弹起的样式（比较有层次感那种），command 就是有点类似超链接那种的样式。以下是点击的效果：

![button style](./assets/button-style.gif)

#### API {#api-button-style}

```ts
export interface IButtonStyle extends IComponentStyle {
  visualStyle?: ButtonStyle;
  ...
}

export enum ButtonStyle {
    Push,
    Command,
}
```

### 点击事件 {#example-button-event-click}

```tsx {9}
export function App() {
    const [text, setText] = useState('Button');

    return (
        <Window>
            <DemoLayout>
                <Button
                    text={text}
                    onClick={() => setText('Button Clicked')}
                ></Button>
            </DemoLayout>
        </Window>
    );
}
```

以下演示点击按钮之后修改按钮上的文案：

![button event click](./assets/button-event-click.gif)

#### API {#api-button-event-click}

```ts
export interface IButtonComponentProps extends IComponentProps {
  onClick?: Parameters<IButton["OnClick"]>[0];
}
```

### 设置图标 {#example-set-icon}

```tsx {14}
import { iconResource } from './icon-resource';

function onInit(app: App) {
    const context = getAppContext();
    context.setIconResource(iconResource as unknown as IIconResource);
}

export function App() {
    return (
        <Window onInit={onInit}>
            <DemoLayout>
                <Button
                    text="Open"
                    iconInfo={{ name: 'open-file', size: 16 }}
                ></Button>
            </DemoLayout>
        </Window>
    );
}
```

```tsx title="icon-resource.ts"
const iconResource = {
    size: [16],
    path: {
        'open-file': [assetsPath('open-file#0.png')],
    },
} as const;

export { iconResource };

export type IconResourceMapType = Record<
    keyof typeof iconResource.path,
    number
>;
```

可以在文字旁边设置一个[图标](icon#introduction):

![button set icon](./assets/button-set-icon.png)

#### API {#api-set-icon}

```ts
export interface IButtonComponentProps extends IComponentProps {
    iconInfo?: {
        name: string;
        size?: number;
    };
    ...
}
```
