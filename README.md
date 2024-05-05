# qrcode-mini

支持微信、支付宝等小程序二维码生成

## 使用

```bash
$ npm i qrcode-mini
or
$ yarn add qrcode-mini
or
$ pnpm add qrcode-mini
```

#### view

```html
<canvas type="2d" id="myCanvas" style="width: 100px; height: 100px"></canvas>
```

#### js

示例微信小程序

```js
import qrcode from 'qrcode-mini';
Page({
  onReady() {
    const query = wx.createSelectorQuery();
    query
      .select('#myCanvas')
      .fields({ node: true, size: true })
      .exec((res) => {
        const canvas = res[0].node;
        const dpr = wx.getSystemInfoSync().pixelRatio;
        canvas.width = res[0].width * dpr;
        canvas.height = res[0].height * dpr;

        // 只需要简单的4行
        qrcode({
          width: canvas.width,
          height: canvas.height,
          node: canvas,
          text: 'hello world',
        });
      });
  },
});
```

## API

| 字段 | 说明 | 类型 |
| width | 节点宽度 | Number |
| height | 节点高度 | Number |
| node | canvas 节点，别名 `element` / `canvas` | Number |
| correctLevel | 容错级别默认 2，可选 0/1/2/3 | Number |
| foreground | 二维码颜色，默认 #000000 | String |
| background | 二维码背景色，默认 #ffffff | String |

## License

[LICENSE](./LICENSE)

该项目还部分包含从以下项目派生或复制的代码：
[jquery-qrcode](https://github.com/jeromeetienne/jquery-qrcode)
