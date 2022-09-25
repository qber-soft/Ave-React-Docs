---
id: clipboard
title: 剪贴板
---

## 例子 {#examples}

### 基本用法 {#example-basic}

这个例子演示了怎样从剪贴板读取内容：

![clipboard basic](./assets/clipboard-basic.gif)

```tsx {3}
export function App() {
    const onInspectClipboard: IButtonComponentProps['onClick'] = () => {
        const clipboard = AveGetClipboard();
        if (clipboard.HasImage()) {
            const aveImage = clipboard.GetImage();
            const imageData = aveImage.GetImage(0, 0, 0);
            console.log(
                `image found! width: ${imageData.Width} height: ${imageData.Height}`,
            );
        } else if (clipboard.HasFile()) {
            const [file] = clipboard.GetFile();
            console.log(`file found! path: ${file}`);
        } else {
            console.log(`nothing found in clipboard`);
        }
    };

    return (
        <Window title="Clipboard Basic">
            <DemoLayout>
                <Button
                    text="Inspect Clipboard"
                    onClick={onInspectClipboard}
                ></Button>
            </DemoLayout>
        </Window>
    );
}
```

当剪贴板里面没东西的时候，点按钮，控制台会有如下输出：

```bash
nothing found in clipboard
```

当复制了图片到剪贴板（比如通过演示中截屏的方式）：

```bash
# 类似这样的log（忽略具体值）：
image found! width: 413 height: 169
```

当复制了文件的时候：

```bash
file found! path: D:\GitHub\docs\xxx
```

#### API {#api-basic}

```ts
// get global clipboard instance
export function AveGetClipboard(): IClipboard;

export interface IClipboard {
    SetImage(img: AveImage): boolean;
    GetImage(): AveImage;
    HasImage(): boolean;

    SetFile(file: string[]): boolean;
    GetFile(): string[]; // return file paths
    HasFile(): boolean;
}
```
