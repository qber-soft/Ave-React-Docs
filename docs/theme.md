---
id: theme
title: Theme
---

## Examples {#examples}

### Basic {#example-basic}

```tsx
export function App() {
    const [isDark, setIsDark] = useState(false);
    const switchTheme = () =>
        setIsDark((prevTheme: boolean) => {
            const isDarkTheme = !prevTheme;
            const context = getAppContext();
            const themeImage = context.getThemeImage();
            if (isDarkTheme) {
                const themeDark = new ThemePredefined_Dark();
                themeDark.SetStyle(themeImage, 0); // switch to dark theme
            } else {
                themeImage.ResetTheme(); // reset to light theme
            }
            return isDarkTheme;
        });

    return (
        <Window>
            <DemoLayout>
                <Button text="Toggling Themes" onClick={switchTheme}></Button>
            </DemoLayout>
        </Window>
    );
}
```

This example shows how to toggle theme:

![toggle theme](./assets/toggle-theme.gif)

#### API {#api-basic}

```ts
export interface IThemePredefined_Dark {
    SetStyle(theme: IThemeImage, nStyle: number): void;
}

export interface IThemeImage {
    ResetTheme(): void;
}
```
