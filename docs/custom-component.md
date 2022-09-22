---
id: custom-component
title: Custom Component
---

## Examples {#examples}

### Basic {#example-basic}

You can create your own component using `Placeholder` Component:

```tsx {13}
export function App() {
    const onPaintPost = useCallback<IPlaceholderComponentProps['onPaintPost']>(
        (sender: IPlaceholder, painter: IPainter, rect: Rect) => {
            painter.SetPenColor(new Vec4(255, 0, 0, 255));
            painter.DrawRectangle(0, 0, rect.w, rect.h);
        },
        [],
    );

    return (
        <Window>
            <DemoLayout width="500dpx" height="500dpx">
                <Placeholder onPaintPost={onPaintPost} />
            </DemoLayout>
        </Window>
    );
}

export interface IDemoLayoutProps {
    children?: any[] | any;
    width?: string;
    height?: string;
}

export function DemoLayout(props: IDemoLayoutProps) {
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

This gives us a red rectangle:

![placeholder basic](./assets/placeholder-basic.png)

Custom UI is achieved by painter API, which is similar to canvas API.

#### API {#api-basic}

```ts
export interface IPlaceholderComponentProps extends IComponentProps {
    onPaintPost?: Parameters<IControl["OnPaintPost"]>[0];
    onPointerEnter?: Parameters<IControl["OnPointerEnter"]>[0];
    onPointerLeave?: Parameters<IControl["OnPointerLeave"]>[0];
    onPointerPress?: Parameters<IControl["OnPointerPress"]>[0];
    onPointerRelease?: Parameters<IControl["OnPointerRelease"]>[0];
    onPointerMove?: Parameters<IControl["OnPointerMove"]>[0];
}

export interface IPainter {
    SetPenColor(vColor: Vec4): void;
    DrawRectangle(x: number, y: number, w: number, h: number): void;
	...
}
```

### Custom Button {#example-button}

This example shows how to listen to event, and finally get this custom button:

![custom button](./assets/custom-button.gif)

```tsx
export function App() {
	return (
		<Window>
			<DemoLayout>
				<Button text="Primary Button" />
			</DemoLayout>
		</Window>
	);
}

export interface IDemoLayoutProps {
	...
}

export function DemoLayout(props: IDemoLayoutProps) {
	...
}

interface IButtonStyle {
	border: {
		radius: number;
	};
	color: Vec4;
	backgroundColor: Vec4;
	font: {
		size: number;
		family: string[];
	};
}

interface IButtonProps {
	text: string;
	style?: IButtonStyle;
}

const colors = {
	normal: new Vec4(24, 144, 255, 255),
	hover: new Vec4(64, 169, 255, 255),
	active: new Vec4(9, 109, 217, 255),
	white: new Vec4(255, 255, 255, 255),
};

const defaultButtonStyle = {
	border: {
		radius: 3,
	},
	color: colors.white,
	backgroundColor: colors.normal,
	font: {
		size: 9,
		family: ["Segoe UI", "Microsoft YaHei UI", "Meiryo UI", "SimSun-ExtB"],
	},
};

function Button(props: IButtonProps) {
	const [style, setStyle] = useState(props.style ?? defaultButtonStyle);
	const text = props.text ?? "Button";

	const [isEntered, setIsEntered] = useState(false);
	const [isPressed, setIsPressed] = useState(false);

	const onPaintPost = useCallback<IPlaceholderComponentProps["onPaintPost"]>(
		(sender: IPlaceholder, painter: IPainter, rect: Rect) => {
			const { border, color, backgroundColor, font: fontStyle } = style;

			const fontDesc = new FontDescription();
			fontDesc.Name = fontStyle.family;
			fontDesc.Size = fontStyle.size;

			const context = getAppContext();
			const window = context.getWindow();
			const font = new Byo2Font(window, fontDesc);

			painter.SetFillColor(backgroundColor);
			painter.FillRoundedRectangle(rect.x, rect.y, rect.w, rect.h, border.radius, border.radius);
			painter.SetTextColor(color);
			painter.DrawString(font, rect, text, DrawTextFlag.Center | DrawTextFlag.VCenter, text.length);
		},
		[style, text]
	);

	const onPointerEnter = useCallback<IPlaceholderComponentProps["onPointerEnter"]>((sender: IPlaceholder) => {
		setIsEntered(true);
		setStyle({
			...style,
			backgroundColor: colors.hover,
		});
		sender.Redraw();
	}, []);

	const onPointerLeave = useCallback<IPlaceholderComponentProps["onPointerLeave"]>(
		(sender: IPlaceholder) => {
			setIsEntered(false);
			if (!isPressed) {
				setStyle({
					...style,
					backgroundColor: colors.normal,
				});
			}
			sender.Redraw();
		},
		[isPressed]
	);

	const onPointerPress = useCallback<IPlaceholderComponentProps["onPointerPress"]>((sender: IPlaceholder) => {
		setIsPressed(true);
		setStyle({
			...style,
			backgroundColor: colors.active,
		});
		sender.Redraw();
	}, []);

	const onPointerRelease = useCallback<IPlaceholderComponentProps["onPointerRelease"]>((sender: IPlaceholder) => {
		setIsPressed(false);
		setStyle({
			...style,
			backgroundColor: colors.normal,
		});
		sender.Redraw();
	}, []);

	return <Placeholder onPaintPost={onPaintPost} onPointerEnter={onPointerEnter} onPointerLeave={onPointerLeave} onPointerPress={onPointerPress} onPointerRelease={onPointerRelease} />;
}
```

#### UI {#button-ui}

A button is just a rectangle with text:

```tsx {13-29}
const onPaintPost = useCallback<IPlaceholderComponentProps['onPaintPost']>(
    (sender: IPlaceholder, painter: IPainter, rect: Rect) => {
        const { border, color, backgroundColor, font: fontStyle } = style;

        const fontDesc = new FontDescription();
        fontDesc.Name = fontStyle.family;
        fontDesc.Size = fontStyle.size;

        const context = getAppContext();
        const window = context.getWindow();
        const font = new Byo2Font(window, fontDesc);

        painter.SetFillColor(backgroundColor);
        painter.FillRoundedRectangle(
            rect.x,
            rect.y,
            rect.w,
            rect.h,
            border.radius,
            border.radius,
        );
        painter.SetTextColor(color);
        painter.DrawString(
            font,
            rect,
            text,
            DrawTextFlag.Center | DrawTextFlag.VCenter,
            text.length,
        );
    },
    [style, text],
);
```

#### Event {#button-event}

Enter & Leave, Press & Release:

```tsx {4-7}
return (
    <Placeholder
        onPaintPost={onPaintPost}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerPress={onPointerPress}
        onPointerRelease={onPointerRelease}
    />
);
```

#### Style {#button-style}

Yes, fully customizable:

```ts
interface IButtonStyle {
    border: {
        radius: number;
    };
    color: Vec4;
    backgroundColor: Vec4;
    font: {
        size: number;
        family: string[];
    };
}
```

#### API {#api-from-button-example}

```ts
export interface IControl extends IControlExtension {
    OnPointerEnter(
        fn: (sender: IControl, mp: MessagePointer) => void,
    ): IControl;
    OnPointerLeave(
        fn: (sender: IControl, mp: MessagePointer) => void,
    ): IControl;
    OnPointerPress(
        fn: (sender: IControl, mp: MessagePointer) => void,
    ): IControl;
    OnPointerRelease(
        fn: (sender: IControl, mp: MessagePointer) => void,
    ): IControl;
}

export interface IPainter {
    SetFillColor(vColor: Vec4): void;
    FillRoundedRectangle(
        x: number,
        y: number,
        w: number,
        h: number,
        rx: number,
        ry: number,
    ): void;

    SetTextColor(vColor: Vec4): void;
    DrawString(
        pFont: Byo2Font,
        rc: Rect,
        s: string,
        nFlag: DrawTextFlag,
        nCharCount: number,
    ): Rect;
}
```
