---
id: input
title: Input
---

## Examples {#examples}

### Basic {#example-basic}

```tsx {11-23}
export function App() {
    return (
        <Window>
            <DemoLayout>
                <Button
                    text="Button"
                    onClick={async () => {
                        const context = getAppContext();
                        const window = context.getWindow();

                        const commonUi = window.GetCommonUi();
                        const label = 'Please input:';
                        const placeHolder = 'input here';
                        const title = 'Title';
                        const value = 'default input';
                        const fallback = 'input cancelled';
                        const result = await commonUi.Input(
                            fallback,
                            label,
                            value,
                            placeHolder,
                            title,
                        );
                        console.log(`input result: "${result}"`);
                    }}
                ></Button>
            </DemoLayout>
        </Window>
    );
}
```

Get user input:

![input basic](./assets/input-basic.gif)

Click "Ok":

```bash
# in console
input result: "default"
```

Click "x":

```bash
# in console
input result: "input cancelled" # This value is the fallback we set in code.
```

#### API {#api-basic}

```ts
export interface ICommonUi {
    Input(
        s: string,
        sMain: string,
        sDetail: string,
        sCue: string,
        sTitle: string,
    ): Promise<string>;
}
```
