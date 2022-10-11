---
id: message-box
title: MessageBox 消息框
---

<!-- ## 简介 {#introduction}

TODO：以后添加对消息框的整体介绍。 -->

## 例子 {#examples}

### 基本用法 {#example-basic}

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

在这个例子中，我们演示了消息框的基本用法：点击其中的按钮，并获得相应结果。

![message box basic](./assets/message-box-basic.gif)

同时控制台有这样的输出：

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
    /**
     * sMain: 消息的概要
     * sDetail：消息的详细内容
     * nIcon：消息的图标
     * nButton：消息框中的按钮类型
     * sTitle：消息框的标题
     */
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
