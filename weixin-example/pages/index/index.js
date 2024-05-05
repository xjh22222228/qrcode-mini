import qrcode from 'qrcode-mini';

Page({
  data: {},
  onLoad() {
    const query = wx.createSelectorQuery();
    query
      .select('#myCanvas')
      .fields({ node: true, size: true })
      .exec((res) => {
        const canvas = res[0].node;
        const dpr = wx.getSystemInfoSync().pixelRatio;
        canvas.width = res[0].width * dpr;
        canvas.height = res[0].height * dpr;
        qrcode({
          width: canvas.width,
          height: canvas.height,
          node: canvas,
          text: 'asdf',
        });
      });
  },
});
