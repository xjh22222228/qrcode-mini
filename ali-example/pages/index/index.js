import qrcode from 'qrcode-mini';

Page({
  data: {},
  onLoad() {
    my.createSelectorQuery()
      .select('#myCanvas')
      .node()
      .exec((res) => {
        const canvas = res[0].node;
        const w = 100
        const h = 100
        canvas.width = w;
        canvas.height = h;
        qrcode({
          width: w,
          height: h,
          node: canvas,
          text: 'asdf',
        });
      });
  },
});
