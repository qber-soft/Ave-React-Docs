---
id: text-box
title: TextBox
---

## Examples {#examples}

### Basic {#example-basic}

```tsx {6-9}
export function App() {
    return (
        <Window>
            <DemoLayout>
                <TextBox
                    onChange={(sender, reason) => {
                        console.log(reason);
                        console.log(sender.GetText());
                    }}
                ></TextBox>
            </DemoLayout>
        </Window>
    );
}
```

Usage:

![text box basic](./assets/text-box-basic.gif)

Log in console:

```bash
0
a
0
ab
0
abc
0
abc1
0
abc12
0
abc123
```

As we set callback using `onChange`, text content will be printed in log together with the reason for text change.

#### API {#api-text-box-basic}

```ts
export interface ITextBoxComponentProps extends IComponentProps {
    onChange?: Parameters<ITextBox['OnChange']>[0];
}
```

### IME {#example-use-ime}

By default, we can only enter text in English characters or number. To use Chinese or other characters, we must set IME(input method):

```tsx {5-6}
export function App() {
	return (
		<Window>
			<DemoLayout>
				<TextBox></TextBox>
				<TextBox ime></TextBox>
			</DemoLayout>
		</Window>
	);
}

function DemoLayout(props: { children?: any[] }) {
	const demoLayout = {
		columns: `1 120dpx 120dpx 120dpx 1`,
		rows: `1 32dpx 1`,
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

![text box ime](./assets/text-box-ime.gif)

#### API {#api-text-box-ime}

```ts
export interface ITextBoxComponentProps extends IComponentProps {
  ime?: boolean;
}
```
