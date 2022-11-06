---
id: calendar
title: Calendar
---

## Examples {#examples}

### Basic {#example-basic}

```tsx
export function App() {
    return (
        <Window>
            <DemoLayout width="500dpx" height="500dpx">
                <Calendar
                    onChange={(sender) => {
                        const timePoint = sender.GetDate();
                        console.log(
                            `Date: ${timePoint.Year}-${timePoint.Month}-${timePoint.Day}`,
                        );
                    }}
                ></Calendar>
            </DemoLayout>
        </Window>
    );
}
```

In this example, we demonstrate the basic usage of calendar:

-   display current date: by default, current date is highlighted
-   get selected date

![calendar basic](./assets/calendar-basic.gif)

In console:

```bash
Date: 2022-3-10
Date: 2022-3-30
```

#### API {#api-basic}

```ts
export interface ICalendarComponentProps extends IComponentProps {
    onChange?: Parameters<ICalendar['OnChange']>[0];
}
```

### Set Date {#example-set}

By default, current date will be highlighted when you open it, we can customize selected date using `date` and `dateMark`.

```tsx
export function App() {
    const timestamp = new TimePoint(2021, 11, 5).JsDateTime;
    const [date, setDate] = useState(timestamp);
    const [dateMark, setDateMark] = useState(timestamp);

    return (
        <Window>
            <DemoLayout width="500dpx" height="500dpx">
                <Calendar
                    date={date}
                    dateMark={dateMark}
                    onChange={(sender) => {
                        const timePoint = sender.GetDate();
                        const timestamp = timePoint.JsDateTime;
                        setDate(timestamp);
                        setDateMark(timestamp);
                    }}
                ></Calendar>
            </DemoLayout>
        </Window>
    );
}
```

In this example, we set date to `2021/11/5`:

![calendar set](./assets/calendar-set.png)

-   `date`: outline
-   `dateMark`: filled background

The differences between them can be seen from this example:

```diff
-const timestamp = new TimePoint(2021, 11, 5).JsDateTime;
+const timestamp = new TimePoint(2021, 11, 6).JsDateTime;
```

![calendar set 2](./assets/calendar-set-2.png)

#### API {#api-set}

```ts
export interface ICalendarComponentProps extends IComponentProps {
    date?: number;
    dateMark?: number;
}
```
