---
id: window
title: Window
---

## Examples {#examples}

### Basic {#example-window-basic}

```tsx
import React from 'react';
import { AveRenderer, Window } from 'ave-react';

export function App() {
    return <Window></Window>;
}

AveRenderer.render(<App />);
```

Run, and get this basic window:

![window basic](./assets/window-basic.png)

#### API {#api-window-basic}

```ts
export interface IWindowComponentProps extends IComponentProps {
    title?: string;
    withBackground?: boolean;
    withCaption?: boolean;
    onInit?: (app: App) => void;
    onLanguageChange?: (app: App) => void;
}
```

### Transparency {#example-window-opacity}

![window opacity](./assets/window-opacity.png)

You can implement it this way:

```tsx {24,33}
export function App() {
    return (
        <Window withBackground={false}>
            <Grid>
                <Grid
                    dockMode={DockMode.Fill}
                    style={{
                        opacity: 0.3,
                        backgroundColor: new Vec4(100, 149, 237, 255),
                    }}
                ></Grid>
            </Grid>
        </Window>
    );
}
```

About grid opacity, see [Transparent Grid](layout#example-grid-opacity).
