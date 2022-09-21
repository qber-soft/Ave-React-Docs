---
id: layout
title: Layout
---

The solution of layout in Ave is Grid, we put all controls in grid, so this document begins with it.

The concept of grid is almost the same as that in [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/), the difference is that the implementation in Ave is more flexible.

## Examples {#examples}

### Background Color {#example-grid-background}

```tsx {6}
export function App() {
    return (
        <Window>
            <Grid
                style={{
                    backgroundColor: new Vec4(0, 146, 255, 255 * 0.75),
                }}
            ></Grid>
        </Window>
    );
}
```

In Ave, we use `Vec4` class to represent color, the range of each component(rgba) is `[0,255]`.

Use `backgroundColor` to set background color:

![grid background](./assets/grid-background.png)

#### API {#api-background}

```ts {7}
export interface IGridComponentProps extends IComponentProps {
    style?: IGridStyle;
    ...
}

export interface IGridStyle extends IComponentStyle {
    backgroundColor?: Vec4;
    ...
}
```

### Add Control {#example-grid-add-control}

```tsx {1}
const layout = {
    columns: '1 1 1',
    rows: '1 1 1',
    areas: {
        center: { row: 1, column: 1 },
    },
};

const backgroundColor = new Vec4(0, 146, 255, 255 * 0.75);

export function App() {
    return (
        <Window>
            <Grid style={{ layout }}>
                <Grid
                    style={{ backgroundColor, area: layout.areas.center }}
                ></Grid>
            </Grid>
        </Window>
    );
}
```

In this example, we create a 3x3 grid and place another grid at the center:

![add control](./assets/grid-add-control.png)

`rows`/`columns` is used to add row/column, `slice` makes it responsive, as shown below:

![resize](./assets/grid-resize.gif)

#### API {#api-add-control}

```ts {3}
export interface IGridStyle extends IComponentStyle {
    ...
    layout?: IGridLayout;
}

export interface IGridLayout {
    /**
     * whitespace sperated sizes, eg. "1 50px 100dpx"
     *
     * 1: slice 1
     * 50px: unit is px
     * 100dpx: unit is dpx
     */
    columns?: string;
    rows?: string;
    areas?: Record<string, IGridArea>;
}

export interface IComponentStyle {
    area?: IGridArea;
    ...
}
```

#### Practice: grid {#grid-practice-grid}

In this practice, we will implement something likes 24 Grids System in web: [Ant Design Grid](https://ant.design/components/grid/).

![grid practice grid](./assets/grid-practice-grid.gif)

#### Practice: offset {#grid-practice-offset}

In this practice, we will implement grid offset: [Ant Design Grid: Offset](https://ant.design/components/grid/#components-grid-demo-offset).

![grid practice offset](./assets/grid-practice-offset.png)

### Margin {#example-grid-margin}

```tsx {19}
const layout = {
    columns: '1 1 1',
    rows: '1 1 1',
    areas: {
        control: { row: 0, column: 0 },
    },
};

const backgroundColor = new Vec4(0, 146, 255, 255 * 0.75);

export function App() {
    return (
        <Window>
            <Grid style={{ layout }}>
                <Grid
                    style={{
                        backgroundColor,
                        area: layout.areas.control,
                        margin: '100dpx 50dpx 0 0',
                    }}
                ></Grid>
            </Grid>
        </Window>
    );
}
```

In this example, we set margin of the blue grid as shown below:

![set margin](./assets/grid-set-margin.png)

#### API {#api-margin}

```ts {3}
export interface IComponentStyle {
    ...
    margin?: string;
}
```

#### Practice: gutter {#grid-practice-gutter}

In this practice, we will implement grid gutter: [Ant Design Grid: Gutter](https://ant.design/components/grid/#components-grid-demo-gutter).

![grid practice 2](./assets/grid-practice-gutter.png)

<!-- ### Position {#example-set-post}

We can also manually set position of control, but remember to set size at the same time.

```ts {17,24}
import { Window, Grid, Vec4, DpiSize, DpiSize_2 } from 'ave-ui';

export function main(window: Window) {
    const container = new Grid(window);
    container.ColAddSlice(1, 1, 1);
    container.RowAddSlice(1, 1, 1);

    const center = new Grid(window);
    const lightBlue = new Vec4(0, 146, 255, 255 * 0.75);
    center.SetBackColor(lightBlue);

    const gridControl = container.ControlAdd(center);
    const pos = {
        x: DpiSize.FromPixelScaled(100),
        y: DpiSize.FromPixelScaled(50),
    };
    gridControl.SetPos(pos.x, pos.y);

    //
    const size = new DpiSize_2(
        DpiSize.FromPixelScaled(200),
        DpiSize.FromPixelScaled(100),
    );
    gridControl.SetSize(size);
    window.SetContent(container);
}
```

Put it at the top left corner:

![grid set pos](./assets/grid-set-pos.png)

#### API {#set-pos-size}

```ts
export interface IGridControl<T extends IControl = IControl> {
    SetPos(x: DpiSize, y: DpiSize): IGridControl<T>;
    SetSize(size: DpiSize_2): IGridControl<T>;
}

export class DpiSize {
    static FromPixelScaled(x: number): DpiSize;
}

export class DpiSize_2 {
    constructor(x: DpiSize, y: DpiSize);
}
``` -->

### Opacity {#example-grid-opacity}

There are two ways to get transparent grid, one way is to adjust alpha of background color, another is to set `opacity`.

```tsx {14-15}
const layout = {
	columns: "1 1 1 1 1",
	rows: "1 1 1 1 1",
	areas: {
		left: { row: 1, column: 1 },
		right: { row: 1, column: 3 },
	},
};

export function App() {
	return (
		<Window>
			<Grid style={{ layout }}>
				<Grid style={{ backgroundColor: new Vec4(0, 146, 255, 255 * 0.25), area: layout.areas.left }}></Grid>
				<Grid style={{ backgroundColor: new Vec4(0, 146, 255, 255), area: layout.areas.right, opacity: 0.25 }}></Grid>
			</Grid>
		</Window>
	);
}
```

As shown below:

![grid opacity](./assets/grid-opacity.png)

Differences are:

-   opacity: all controls in grid will be affected
-   backgroundColor: only background of grid will be affected

## Practice Solutions {#practice-solutions}

### grid {#practice-solution-grid}

> [Practice Description](#grid-practice-grid)

```tsx
const colors = {
	white: new Vec4(255, 255, 255, 255),
	darkBlue: new Vec4(0, 146, 255, 255),
	lightBlue: new Vec4(0, 146, 255, 255 * 0.75),
};

const layout = {
	columns: Array.from<number>({ length: 24 }).fill(1).join(" "),
	rows: [50, 25, 50, 25, 50, 25, 50, 25].map((r) => `${r}dpx`).join(" "),
	areas: {
		_24: { row: 0, column: 0, rowSpan: 1, columnSpan: 24 },
		_12_1: { row: 2, column: 0, rowSpan: 1, columnSpan: 12 },
		_12_2: { row: 2, column: 12, rowSpan: 1, columnSpan: 12 },
		_8_1: { row: 4, column: 0, rowSpan: 1, columnSpan: 8 },
		_8_2: { row: 4, column: 8, rowSpan: 1, columnSpan: 8 },
		_8_3: { row: 4, column: 16, rowSpan: 1, columnSpan: 8 },
		_6_1: { row: 6, column: 0, rowSpan: 1, columnSpan: 6 },
		_6_2: { row: 6, column: 6, rowSpan: 1, columnSpan: 6 },
		_6_3: { row: 6, column: 12, rowSpan: 1, columnSpan: 6 },
		_6_4: { row: 6, column: 18, rowSpan: 1, columnSpan: 6 },
	},
};

export function App() {
	return (
		<Window>
			<Grid style={{ layout }}>
				<Grid style={{ backgroundColor: colors.darkBlue, area: layout.areas._24 }}></Grid>
				<Grid style={{ backgroundColor: colors.lightBlue, area: layout.areas._12_1 }}></Grid>
				<Grid style={{ backgroundColor: colors.darkBlue, area: layout.areas._12_2 }}></Grid>
				<Grid style={{ backgroundColor: colors.lightBlue, area: layout.areas._8_1 }}></Grid>
				<Grid style={{ backgroundColor: colors.darkBlue, area: layout.areas._8_2 }}></Grid>
				<Grid style={{ backgroundColor: colors.lightBlue, area: layout.areas._8_3 }}></Grid>
				<Grid style={{ backgroundColor: colors.lightBlue, area: layout.areas._6_1 }}></Grid>
				<Grid style={{ backgroundColor: colors.darkBlue, area: layout.areas._6_2 }}></Grid>
				<Grid style={{ backgroundColor: colors.lightBlue, area: layout.areas._6_3 }}></Grid>
				<Grid style={{ backgroundColor: colors.darkBlue, area: layout.areas._6_4 }}></Grid>
			</Grid>
		</Window>
	);
}
```

### offset {#practice-solution-offset}

> [Practice Description](#grid-practice-offset)

```tsx
const colors = {
	darkBlue: new Vec4(0, 146, 255, 255),
};

const span1 = 8;
const offset_11 = 0;
const offset_12 = offset_11 + span1 + 8;

const span2 = 6;
const offset_21 = 6;
const offset_22 = offset_21 + span2 + 6;

const span3 = 12;
const offset_3 = 6;

const layout = {
	columns: Array.from<number>({ length: 24 }).fill(1).join(" "),
	rows: `1 50dpx 25dpx 50dpx 25dpx 50dpx 1`,
	areas: {
		_11: { row: 1, column: offset_11, rowSpan: 1, columnSpan: span1 },
		_12: { row: 1, column: offset_12, rowSpan: 1, columnSpan: span1 },
		_21: { row: 3, column: offset_21, rowSpan: 1, columnSpan: span2 },
		_22: { row: 3, column: offset_22, rowSpan: 1, columnSpan: span2 },
		_3: { row: 5, column: offset_3, rowSpan: 1, columnSpan: span3 },
	},
};

export function App() {
	return (
		<Window>
			<Grid style={{ layout }}>
				<Grid style={{ backgroundColor: colors.darkBlue, area: layout.areas._11 }}></Grid>
				<Grid style={{ backgroundColor: colors.darkBlue, area: layout.areas._12 }}></Grid>
				<Grid style={{ backgroundColor: colors.darkBlue, area: layout.areas._21 }}></Grid>
				<Grid style={{ backgroundColor: colors.darkBlue, area: layout.areas._22 }}></Grid>
				<Grid style={{ backgroundColor: colors.darkBlue, area: layout.areas._3 }}></Grid>
			</Grid>
		</Window>
	);
}
```

### gutter {#practice-solution-gutter}

> [Practice Description](#grid-practice-gutter)

We will use margin to simulate gutter:

```tsx
const colors = {
	lightBlue: new Vec4(0, 146, 255, 255 * 0.75),
	darkBlue: new Vec4(0, 146, 255, 255),
};

const gutter = 50;
const margin = `${gutter / 2}dpx 0 ${gutter / 2}dpx 0`;

const layout = {
	columns: Array.from<number>({ length: 24 }).fill(1).join(" "),
	rows: `1 50dpx 1`,
	areas: {
		_1: { row: 1, column: 0, rowSpan: 1, columnSpan: 6 },
		_2: { row: 1, column: 6, rowSpan: 1, columnSpan: 6 },
		_3: { row: 1, column: 12, rowSpan: 1, columnSpan: 6 },
		_4: { row: 1, column: 18, rowSpan: 1, columnSpan: 6 },
	},
};

export function App() {
	return (
		<Window>
			<Grid style={{ layout }}>
				<Grid style={{ backgroundColor: colors.lightBlue, area: layout.areas._1, margin }}></Grid>
				<Grid style={{ backgroundColor: colors.darkBlue, area: layout.areas._2, margin }}></Grid>
				<Grid style={{ backgroundColor: colors.lightBlue, area: layout.areas._3, margin }}></Grid>
				<Grid style={{ backgroundColor: colors.darkBlue, area: layout.areas._4, margin }}></Grid>
			</Grid>
		</Window>
	);
}
```
