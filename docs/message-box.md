---
id: message-box
title: MessageBox
---

## Examples {#examples}

### Basic {#example-basic}

```tsx {11-18}
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
                        const result = await commonUi.Message(
                            'Message',
                            'This is a message',
                            MessageIcon.Infomation,
                            MessageButton.YesNo,
                            'Title',
                        );
                        console.log(
                            `message result: ${result}(${MessageResult[result]})`,
                        );
                    }}
                ></Button>
            </DemoLayout>
        </Window>
    );
}
```

Usage:

![message box basic](./assets/message-box-basic.gif)

In console:

```bash
message result: 2(Yes)
message result: 3(No)
message result: 0(Default)
```

#### API {#api-basic}

```ts
export interface IWindow extends IControl {
    GetCommonUi(): ICommonUi;
}

export interface ICommonUi {
    Message(
        sMain: string,
        sDetail: string,
        nIcon: MessageIcon,
        nButton: MessageButton,
        sTitle: string,
    ): Promise<MessageResult>;
}

export enum MessageIcon {
    None,
    Infomation,
    Warning,
    Error,
}

export enum MessageButton {
    Ok = 0x01,
    Yes = 0x02,
    No = 0x04,
    Retry = 0x08,
    Cancel = 0x10,
    Close = 0x20,
    OkCancel = Ok | Cancel,
    YesNo = Yes | No,
    YesNoCancel = Yes | No | Cancel,
    RetryCancel = Retry | Cancel,
}

export enum MessageResult {
    Failed,
    Ok,
    Yes,
    No,
    Retry,
    Cancel,
    Close,
    Button,
    Default = Failed,
}
```
