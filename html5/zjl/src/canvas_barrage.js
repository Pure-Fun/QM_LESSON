import Barrage from "./barrage";

class CanvasBarrage {
  constructor(canvas, video, opts = {})
  {
    if (!canvas || !video) return;
    this.canvas = canvas;
    this.video = video;
    this.canvas.width = this.video.width;
    this.canvas.height = this.video.height;
    this.ctx = canvas.getContext('2d');
    let defOpts = {
      color: '#e91e63',
      speed: 1.5,
      opacity: 0.5,
      fontSize: 20,
      data: []
    }
    Object.assign(this, defOpts, opts);   // 将上述属性直接挂载到对象上
    console.log(this);
    this.isPaused = true;
    this.barrages = this.data.map(item => new Barrage(item, this));  
  }
  render() {
    this.clear();
    this.renderBarrage();
    if (!this.isPaused) {
      requestAnimationFrame(this.render.bind(this));
    }
  }
  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  renderBarrage() {
    let time = this.video.currentTime;
    console.log(time);
    this.barrages.forEach(barrage => {
      if (!barrage.flag && time >= barrage.time) {
        if (!barrage.isInit) {
          barrage.init();
          barrage.isInit = true;
        }
        barrage.x -= barrage.speed;
        barrage.render();
      }
      // barrage 超出了屏幕，当时间到了，最右边，走过整个canvas的宽度
      if (barrage.x < - barrage.width) {
        barrage.flag = true
      }
    });
  }
}


export default CanvasBarrage;