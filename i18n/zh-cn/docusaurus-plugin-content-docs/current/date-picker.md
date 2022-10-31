---
id: date-picker
title: DatePicker 日期选择器
---

<!-- ## 简介 {#introduction}

TODO：以后添加对日期选择器的整体介绍。 -->

## 例子 {#examples}

### 基本用法 {#example-basic}

```tsx
export function App() {
    return (
        <Window>
            <DemoLayout width="250dpx">
                <DatePicker
                    onChange={(sender) => {
                        const timePoint = sender.GetDate();
                        console.log(
                            `Date: ${timePoint.Year}-${timePoint.Month}-${timePoint.Day}`,
                        );
                    }}
                ></DatePicker>
            </DemoLayout>
        </Window>
    );
}
```

在这个例子中，我们演示了日期选择器的基本用法：选择并显示日期、响应点击事件获取日期。

![date picker basic](./assets/date-picker-basic.gif)

控制台有如下输出：

```bash
Date: 2021-11-3
Date: 2021-11-4
```

#### API {#api-basic}

```ts
export interface IDatePickerComponentProps extends IComponentProps {
    onChange?: Parameters<IDatePicker['OnChange']>[0];
}
```

### 设置日期 {#example-set}

设置日期与[日历](./calendar#example-set)中类似：

```tsx
export function App() {
    const [date, setDate] = useState(Date.now());
    const [dateMark, setDateMark] = useState(Date.now());

    return (
        <Window title="DatePicker Set">
            <DemoLayout width="250dpx">
                <DatePicker
                    date={date}
                    dateMark={dateMark}
                    onChange={(sender) => {
                        const timePoint = sender.GetDate();
                        const timestamp = timePoint.JsDateTime;
                        setDate(timestamp);
                        setDateMark(timestamp);
                    }}
                ></DatePicker>
            </DemoLayout>
        </Window>
    );
}
```

在这个例子中，我们使用获取到的日期来设置，效果就是，之后每次打开选择器，默认显示的就是上一次我们选择的日期：

![date picker set](./assets/date-picker-set.gif)

#### API {#api-set}

```ts
export interface IDatePickerComponentProps extends IComponentProps {
    date?: number;
    dateMark?: number;
}
```
