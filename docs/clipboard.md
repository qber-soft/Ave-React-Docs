---
id: clipboard
title: Clipboard
---

## Examples {#examples}

### Basic {#example-basic}

This example shows how to read from clipboard:

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

When the clipboard is empty, inspect it(press button), you will get this in console:

```bash
nothing found in clipboard
```

After you copy image to clipboard:

```bash
# something like this:
image found! width: 413 height: 169
```

After you copy file:

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
