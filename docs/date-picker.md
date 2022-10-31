---
id: date-picker
title: DatePicker
---

## Examples {#examples}

### Basic {#example-basic}

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

In this example, we demonstrate the basic usage of date picker: pick a date :)

![date picker basic](./assets/date-picker-basic.gif)

In console:

```bash
Date: 2022-3-27
Date: 2022-3-28
```

#### API {#api-basic}

```ts
export interface IDatePickerComponentProps extends IComponentProps {
    onChange?: Parameters<IDatePicker['OnChange']>[0];
}
```

### Set Date {#example-set}

Just like that in [Calendar: Set Date](./calendar#example-set):

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

Display the last selected date:

![date picker set](./assets/date-picker-set.gif)

#### API {#api-set}

```ts
export interface IDatePickerComponentProps extends IComponentProps {
    date?: number;
    dateMark?: number;
}
```
