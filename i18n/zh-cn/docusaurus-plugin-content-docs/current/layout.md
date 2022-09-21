---
id: layout
title: 布局
---

## 简介 {#introduction}

Ave 只支持 grid 的布局方式（web 中 flex 布局也可以基于此封装，不过 grid 其实是更灵活、强大的布局方式），所有控件都需要放在 grid 之中，因此组件部分首先从 grid 开始介绍。

Ave 中 grid 的含义和 web 中的（[A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)）差不多，但是更加底层，也就是说，web 里的 grid css 也可以基于此实现。

## 例子 {#examples}

### 背景色 {#example-grid-background}

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

在 Ave 中我们使用`Vec4`类来表示颜色，其中每个颜色的取值范围都是`[0,255]`，然后使用 grid 的`backgroundColor`设置背景颜色。

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

### 添加组件 {#example-grid-add-control}

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

这里我们创建了一个 grid，并设置它为 3 行、3 列，也就是说，现在我们的界面相当于一个 3x3 的网格。然后我们在中间那格添加了另一个设置了背景色的格子，运行后界面如下：

![add control](./assets/grid-add-control.png)

`rows`和`columns`分别是为 grid 添加行和列，`slice`表明这里添加的行、列是成比例的，也就是说，添加的行和列都是 1：1：1，这样可以适应窗口大小变化：

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

#### 练习: grid {#grid-practice-grid}

这个练习的目的是实现类似 web 中的 24 栅格系统，例如 [Ant Design Grid](https://ant.design/components/grid-cn/#components-grid-demo-basic) 。在 Ave 中怎样实现如下效果呢？

![grid practice grid](./assets/grid-practice-grid.gif)

#### 练习: offset {#grid-practice-offset}

这个练习的目的是实现 grid 的偏移，例如 [Ant Design Grid: Offset](https://ant.design/components/grid-cn/#components-grid-demo-offset) 。在 Ave 中怎样实现如下效果呢？

![grid practice offset](./assets/grid-practice-offset.png)

### 边距 {#example-grid-margin}

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

在这个例子中，我们设置了蓝色方块的边距，它本身位于窗口的左上角，在设置了左边距和上边距之后，可以发现它不再紧贴窗口边缘：

![set margin](./assets/grid-set-margin.png)

#### API {#api-margin}

```ts {3}
export interface IComponentStyle {
    ...
    margin?: string;
}
```

#### 练习: gutter {#grid-practice-gutter}

这个练习的目的是实现类似 web 中的 grid gutter，例如 [Ant Design Grid: Gutter](https://ant.design/components/grid-cn/#components-grid-demo-gutter) 。在 Ave 中怎样实现如下效果呢？

![grid practice 2](./assets/grid-practice-gutter.png)

<!-- ### 相对位置 {#example-set-post}

如果我们不想将控件放进 grid 的格子中（调用`SetGrid`），那么还可以采取设置相对位置的方式来设置它的位置。

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

    // 与调用SetGrid时控件会充满整个格子不同，设置位置的同时，我们还需要设置它的大小
    const size = new DpiSize_2(
        DpiSize.FromPixelScaled(200),
        DpiSize.FromPixelScaled(100),
    );
    gridControl.SetSize(size);
    window.SetContent(container);
}
```

和 [边距](#example-grid-margin) 中的例子中类似，我们将一个蓝色矩形放在了左上角：

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

### 透明度 {#example-grid-opacity}

要想实现半透明的效果，有两种方式，一种是调整背景颜色的 alpha 值，另一种是设置`opacity`：

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

在这个例子中，我们采取了两种不同的方式，画出了相同效果的半透明蓝色方块。

![grid opacity](./assets/grid-opacity.png)

两种方式的区别如下：

-   opacity：设置整体透明度，包括放在里面的控件全部都会半透明
-   backgroundColor：就只有 grid 本身的背景部分有影响

## 练习答案 {#practice-solutions}

### grid {#practice-solution-grid}

> [练习描述](#grid-practice-grid)

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

> [练习描述](#grid-practice-offset)

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

> [练习描述](#grid-practice-gutter)

我们使用边距来实现区块间隔的效果：

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
