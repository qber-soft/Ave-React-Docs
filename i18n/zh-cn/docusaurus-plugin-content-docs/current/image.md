---
id: image
title: Image 图片
---

<!-- ## 简介 {#introduction}

TODO：以后添加对图片的整体介绍。 -->

## 例子 {#examples}

### 基本用法 {#example-basic}

```tsx {2,6}
export function App() {
    const src = assetsPath('Clock#6.png');
    return (
        <Window>
            <DemoLayout width="1" height="1">
                <Image src={src} />
            </DemoLayout>
        </Window>
    );
}
```

这个例子演示了如何显示一张图片：

![picture basic](./assets/picture-basic.png)

#### API {#api-basic}

```ts
export interface IImageComponentProps extends IComponentProps {
	/**
	 * 图片文件的绝对路径 或 AveImage
	 */
	src: string | AveImage;
}
```
