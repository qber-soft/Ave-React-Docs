---
id: theme
title: 主题
---

<!-- ## 简介 {#introduction}

TODO：以后添加对主题的整体介绍。 -->

## 例子 {#examples}

### 基本用法 {#example-basic}

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

这个例子演示了如何切换主题，各组件的明/暗主题是内置的，只需要整体切换即可：

![toggle theme](./assets/toggle-theme.gif)

<!-- TODO: 完善类型定义 -->

#### API {#api-basic}

```ts
export interface IThemePredefined_Dark {
    SetStyle(theme: IThemeImage, nStyle: number): void;
}

export interface IThemeImage {
    ResetTheme(): void;
}
```
