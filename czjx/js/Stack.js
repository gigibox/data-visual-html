
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')
var img = document.getElementById('img1')
// img.src="yl.png";
var img2 = document.getElementById('img2')
// img2.src="back.png";
var img3 = document.getElementById('img3')
// img3.src="xtp.png";
var img4 = document.getElementById('img4')
// img4.src="dtp.png";
var maxh = 164
var maxw = 62
ctx.lineWidth = 1
var textcolor = '#FFF'// 正式工程应为#FFF
// 此函数模拟java的fillOval
function jfillOval (x, y, w, h) {
  ctx.beginPath()
  ctx.fillStyle = 'rgba(0,0,255,0.6)'
  ctx.ellipse(x + w / 2, y + h / 2, w / 2, h / 2, Math.PI / 180, 0, 2 * Math.PI)
  ctx.fill()

  ctx.beginPath()
  ctx.fillStyle = 'rgba(0,0,255,0.6)'
  ctx.ellipse(x + w / 2, y + h / 2, w / 2, h / 2, Math.PI / 180, 0, 1 * Math.PI)
  ctx.fill()
}
// 此函数模拟java的fillOval
function jfillOval2 (x, y, w, h) {
  ctx.beginPath()
  ctx.fillStyle = 'rgba(0,0,255,0.5)'
  ctx.ellipse(x + w / 2, y + h / 2, w / 2, h / 2, 180 * Math.PI / 180, 0, 1 * Math.PI)
  ctx.fill()
}

// 此函数模拟java的fillrect
function jfillRect (x, y, w, h) {
  ctx.beginPath()
  ctx.fillStyle = 'rgba(0,0,255,0.5)'
  ctx.rect(x, y, w, h)
  ctx.fill()
}
// 此函数模拟java的fillrect不透明
function jfillRect_Test (x, y, w, h) {
  ctx.beginPath()
  ctx.fillStyle = 'rgb(255,255,255)'
  ctx.rect(x, y, w, h)
  ctx.fill()
}
function gdrawText (str, x, y) {
  ctx.font = '12px bold 黑体'// 设置字体
  ctx.fillStyle = textcolor// 正式工程应为#FFF
  ctx.textAlign = 'right'
  ctx.fillText(str, x, y)
}
class pillar_blue {
  constructor (x, y, w, h, ovalh, father) {
    this.x = x
    this.y = y
    this.w = w
    this.h = maxh * (h * 0.01).toFixed(2)
    this.text = h
    this.ovalh = ovalh
    this.f = father
  }
  mfillRect (x, y, w, h) {
    ctx.beginPath()
    if (this.f.sel == true) {
      ctx.fillStyle = 'rgba(14,189,255,0.9)'
    } else {
      ctx.fillStyle = 'rgba(14,189,255,0.5)'
    }
    ctx.rect(x, y, w, h)
    ctx.fill()
  }
  mfillOval (x, y, w, h) {
    ctx.beginPath()
    if (this.f.sel == true) {
      ctx.fillStyle = 'rgba(14,189,255,1)'
    } else {
      ctx.fillStyle = 'rgba(14,189,255,0.6)'
    }
    ctx.ellipse(x + w / 2, y + h / 2, w / 2, h / 2, Math.PI / 180, 0, 2 * Math.PI)
    ctx.fill()
    ctx.beginPath()
    ctx.ellipse(x + w / 2, y + h / 2, w / 2, h / 2, Math.PI / 180, 0, 1 * Math.PI)
    ctx.fill()
  }
  mfillOval2 (x, y, w, h) {
    ctx.beginPath()
    if (this.f.sel == true) {
      ctx.fillStyle = 'rgba(14,189,255,0.9)'
    } else {
      ctx.fillStyle = 'rgba(14,189,255,0.5)'
    }
    ctx.ellipse(x + w / 2, y + h / 2, w / 2, h / 2, 180 * Math.PI / 180, 0, 1 * Math.PI)
    ctx.fill()
  }
  draw () {
    this.mfillRect(this.x - this.w / 2, this.y - this.h, this.w + 1, this.h)
    this.mfillOval(this.x - this.w / 2, this.y - this.ovalh / 2, this.w + 1, this.ovalh)
    this.mfillOval2(this.x - this.w / 2, this.y - this.h - this.ovalh / 2, this.w + 1, this.ovalh)
    // gdrawText('' + this.text, this.x - 60, this.y - this.h)
  }
}

class pillar_red {
  constructor (x, y, w, h, ovalh, father) {
    this.x = x
    this.y = y
    this.w = w
    this.h = maxh * (h * 0.01).toFixed(2)
    this.text = h
    this.ovalh = ovalh
    this.f = father
  }
  mfillRect (x, y, w, h) {
    ctx.beginPath()
    if (this.f.sel == true) {
      ctx.fillStyle = 'rgba(243,58,0,0.9)'
    } else {
      ctx.fillStyle = 'rgba(243,58,0,0.5)'
    }
    ctx.rect(x, y, w, h)
    ctx.fill()
  }
  mfillOval (x, y, w, h) {
    ctx.beginPath()
    if (this.f.sel == true) {
      ctx.fillStyle = 'rgba(243,58,0,1)'
    } else {
      ctx.fillStyle = 'rgba(243,58,0,0.6)'
    }
    ctx.ellipse(x + w / 2, y + h / 2, w / 2, h / 2, Math.PI / 180, 0, 2 * Math.PI)
    ctx.fill()
    ctx.beginPath()
    ctx.ellipse(x + w / 2, y + h / 2, w / 2, h / 2, Math.PI / 180, 0, 1 * Math.PI)
    ctx.fill()
  }
  mfillOval2 (x, y, w, h) {
    ctx.beginPath()
    if (this.f.sel == true) {
      ctx.fillStyle = 'rgba(243,58,0,0.9)'
    } else {
      ctx.fillStyle = 'rgba(243,58,0,0.5)'
    }
    ctx.ellipse(x + w / 2, y + h / 2, w / 2, h / 2, 180 * Math.PI / 180, 0, 1 * Math.PI)
    ctx.fill()
  }
  draw () {
    this.mfillRect(this.x - this.w / 2, this.y - this.h, this.w + 1, this.h)
    this.mfillOval(this.x - this.w / 2, this.y - this.ovalh / 2, this.w + 1, this.ovalh)
    this.mfillOval2(this.x - this.w / 2, this.y - this.h - this.ovalh / 2, this.w + 1, this.ovalh)
    // gdrawText('' + this.text, this.x - 60, this.y - this.h)
  }
}

class pillar_green {
  constructor (x, y, w, h, ovalh, father) {
    this.x = x
    this.y = y
    this.w = w
    this.h = maxh * (h * 0.01).toFixed(2)
    this.text = h
    this.ovalh = ovalh
    this.f = father
  }
  mfillRect (x, y, w, h) {
    ctx.beginPath()
    if (this.f.sel == true) {
      ctx.fillStyle = 'rgba(199,255,124,0.9)'
    } else {
      ctx.fillStyle = 'rgba(199,255,124,0.5)'
    }
    ctx.rect(x, y, w, h)
    ctx.fill()
  }
  mfillOval (x, y, w, h) {
    ctx.beginPath()
    if (this.f.sel == true) {
      ctx.fillStyle = 'rgba(199,255,124,1)'
    } else {
      ctx.fillStyle = 'rgba(199,255,124,0.6)'
    }
    ctx.ellipse(x + w / 2, y + h / 2, w / 2, h / 2, Math.PI / 180, 0, 2 * Math.PI)
    ctx.fill()
    ctx.beginPath()
    ctx.ellipse(x + w / 2, y + h / 2, w / 2, h / 2, Math.PI / 180, 0, 1 * Math.PI)
    ctx.fill()
  }
  mfillOval2 (x, y, w, h) {
    ctx.beginPath()
    if (this.f.sel == true) {
      ctx.fillStyle = 'rgba(199,255,124,0.9)'
    } else {
      ctx.fillStyle = 'rgba(199,255,124,0.5)'
    }
    ctx.ellipse(x + w / 2, y + h / 2, w / 2, h / 2, 180 * Math.PI / 180, 0, 1 * Math.PI)
    ctx.fill()
  }
  draw () {
    this.mfillRect(this.x - this.w / 2, this.y - this.h, this.w + 1, this.h)
    this.mfillOval(this.x - this.w / 2, this.y - this.ovalh / 2, this.w + 1, this.ovalh)
    this.mfillOval2(this.x - this.w / 2, this.y - this.h - this.ovalh / 2, this.w + 1, this.ovalh)
    // gdrawText('' + this.text, this.x - 60, this.y - this.h)
  }
}

class pillar_purple {
  constructor (x, y, w, h, ovalh, father) {
    this.x = x
    this.y = y
    this.w = w
    this.h = maxh * (h * 0.01).toFixed(2)
    this.text = h
    this.ovalh = ovalh
    this.f = father
  }
  mfillRect (x, y, w, h) {
    ctx.beginPath()
    if (this.f.sel == true) {
      ctx.fillStyle = 'rgba(255,0,192,0.9)'
    } else {
      ctx.fillStyle = 'rgba(255,0,192,0.5)'
    }
    ctx.rect(x, y, w, h)
    ctx.fill()
  }
  mfillOval (x, y, w, h) {
    ctx.beginPath()
    if (this.f.sel == true) {
      ctx.fillStyle = 'rgba(255,0,192,1.0)'
    } else {
      ctx.fillStyle = 'rgba(255,0,192,0.6)'
    }
    ctx.ellipse(x + w / 2, y + h / 2, w / 2, h / 2, Math.PI / 180, 0, 2 * Math.PI)
    ctx.fill()
    ctx.beginPath()
    ctx.ellipse(x + w / 2, y + h / 2, w / 2, h / 2, Math.PI / 180, 0, 1 * Math.PI)
    ctx.fill()
  }
  mfillOval2 (x, y, w, h) {
    ctx.beginPath()
    if (this.f.sel == true) {
      ctx.fillStyle = 'rgba(255,0,192,0.9)'
    } else {
      ctx.fillStyle = 'rgba(255,0,192,0.5)'
    }
    ctx.ellipse(x + w / 2, y + h / 2, w / 2, h / 2, 180 * Math.PI / 180, 0, 1 * Math.PI)
    ctx.fill()
  }
  draw () {
    this.mfillRect(this.x - this.w / 2, this.y - this.h, this.w + 1, this.h)
    this.mfillOval(this.x - this.w / 2, this.y - this.ovalh / 2, this.w + 1, this.ovalh)
    this.mfillOval2(this.x - this.w / 2, this.y - this.h - this.ovalh / 2, this.w + 1, this.ovalh)
    // gdrawText('' + this.text, this.x - 60, this.y - this.h)
  }
}

class pillar_yellow {
  constructor (x, y, w, h, ovalh, father) {
    this.x = x
    this.y = y
    this.w = w
    this.h = maxh * (h * 0.01).toFixed(2)
    this.text = h
    this.ovalh = ovalh
    this.f = father
  }
  mfillRect (x, y, w, h) {
    ctx.beginPath()
    if (this.f.sel == true) {
      ctx.fillStyle = 'rgba(255,135,0,0.9)'
    } else {
      ctx.fillStyle = 'rgba(255,135,0,0.5)'
    }
    ctx.rect(x, y, w, h)
    ctx.fill()
  }
  mfillOval (x, y, w, h) {
    ctx.beginPath()
    if (this.f.sel == true) {
      ctx.fillStyle = 'rgba(255,135,0,1)'
    } else {
      ctx.fillStyle = 'rgba(255,135,0,0.6)'
    }
    ctx.ellipse(x + w / 2, y + h / 2, w / 2, h / 2, Math.PI / 180, 0, 2 * Math.PI)
    ctx.fill()
    ctx.beginPath()
    if (this.f.sel == true) { ctx.fillStyle = 'rgba(255,135,0,1)' } else { ctx.fillStyle = 'rgba(255,135,0,0.6)' }
    ctx.ellipse(x + w / 2, y + h / 2, w / 2, h / 2, Math.PI / 180, 0, 1 * Math.PI)
    ctx.fill()

    ctx.beginPath()
    ctx.ellipse(x + w / 2, y + h / 2, w / 2, h / 2, Math.PI / 180, 0, 1 * Math.PI)
    ctx.fill()
  }
  mfillOval2 (x, y, w, h) {
    ctx.beginPath()
    if (this.f.sel == true) {
      ctx.fillStyle = 'rgba(255,135,0,0.9)'
    } else {
      ctx.fillStyle = 'rgba(255,135,0,0.5)'
    }
    ctx.ellipse(x + w / 2, y + h / 2, w / 2, h / 2, 180 * Math.PI / 180, 0, 1 * Math.PI)
    ctx.fill()
  }
  draw () {
    // 用图片实现废弃
    // ctx.drawImage(img,this.x-this.w/2-1,this.y-this.h+8);
    this.mfillRect(this.x - this.w / 2, this.y - this.h, this.w + 1, this.h)
    this.mfillOval(this.x - this.w / 2, this.y - this.ovalh / 2, this.w + 1, this.ovalh)
    this.mfillOval2(this.x - this.w / 2, this.y - this.h - this.ovalh / 2, this.w + 1, this.ovalh)
    // 直接用颜色加上盖
    this.mfillOval(this.x - this.w / 2, this.y - this.h - this.ovalh / 2, this.w + 1, this.ovalh)
    // gdrawText('' + this.text, this.x - 60, this.y - this.h)
  }
}

class pillar_back {
  constructor (x, y, w, h, ovalh, father) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.ovalh = ovalh
  }
  mfillRect (x, y, w, h) {
    ctx.beginPath()
    ctx.fillStyle = 'rgba(26,71,149,0.5)'
    ctx.rect(x, y, w, h)
    ctx.fill()
  }
  mfillOval (x, y, w, h) {
    ctx.beginPath()
    ctx.fillStyle = 'rgba(26,71,149,0.6)'
    ctx.ellipse(x + w / 2, y + h / 2, w / 2, h / 2, Math.PI / 180, 0, 2 * Math.PI)
    ctx.fill()
    ctx.beginPath()
    ctx.ellipse(x + w / 2, y + h / 2, w / 2, h / 2, Math.PI / 180, 0, 1 * Math.PI)
    ctx.fill()
  }
  mfillOval2 (x, y, w, h) {
    ctx.beginPath()
    ctx.fillStyle = 'rgba(26,71,149,0.5)'
    ctx.ellipse(x + w / 2, y + h / 2, w / 2, h / 2, 180 * Math.PI / 180, 0, 1 * Math.PI)
    ctx.fill()
  }
  // 直接用颜色实现容器的废弃
  draw2 () {
    this.mfillRect(this.x - this.w / 2, this.y - this.h, this.w, this.h)
    this.mfillOval(this.x - this.w / 2, this.y - this.ovalh / 2, this.w, this.ovalh)
    this.mfillOval2(this.x - this.w / 2, this.y - this.h - this.ovalh / 2, this.w, this.ovalh)
    // 加边框代码
    // ctx.strokeStyle="rgb(26,76,148)";
    ctx.strokeStyle = 'rgba(26,76,148,0.5)'
    ctx.moveTo(this.x - this.w / 2, this.y)
    ctx.lineTo(this.x - this.w / 2, this.y - this.h)
    ctx.stroke()
    ctx.moveTo(this.x + this.w / 2, this.y)
    ctx.lineTo(this.x + this.w / 2, this.y - this.h)
    ctx.stroke()
  }
  draw () {
    ctx.drawImage(img4, this.x - 105, this.y - 21)
    ctx.drawImage(img3, this.x - 71, this.y - 18)
    ctx.drawImage(img2, this.x - this.w / 2, this.y - this.h - 4)
  }
}

class pillarcontainer {
  constructor (x, y, rp1, rp2, rp3, rp4, rp5, title) {
    if (rp1 < 0) { rp1 = 0 };
    if (rp2 < 0) { rp2 = 0 };
    if (rp3 < 0) { rp3 = 0 };
    if (rp4 < 0) { rp4 = 0 };
    if (rp5 < 0) { rp5 = 0 };

    this.x = x
    this.y = y
    this.title = title
    this.sel = false

    this.p0 = new pillar_back(x, y, maxw, maxh, 16, this)
    this.p1 = new pillar_blue(x, y, maxw, rp1, 16, this)
    this.p2 = new pillar_green(x, y - this.p1.h, maxw, rp2, 16, this)
    this.p3 = new pillar_purple(x, y - this.p1.h - this.p2.h, maxw, rp3, 16, this)
    this.p4 = new pillar_red(x, y - this.p1.h - this.p2.h - this.p3.h, maxw, rp4, 16, this)
    this.p5 = new pillar_yellow(x, y - this.p1.h - this.p2.h - this.p3.h - this.p4.h, maxw, rp5, 16, this)
  }

  draw () {
    this.p0.draw()

    if (this.p1.text !== 0) {
      this.p1.draw()
      gdrawText('' + this.p1.text, this.x - 60, this.y - maxh * 0.18)
    }

    if (this.p2.text !== 0) {
      this.p2.draw()
      gdrawText('' + this.p2.text, this.x - 60, this.y - maxh * 0.32)
    }

    if (this.p3.text !== 0) {
      this.p3.draw()
      gdrawText('' + this.p3.text, this.x - 60, this.y - maxh * 0.46)
    }

    if (this.p4.text !== 0) {
      this.p4.draw()
      gdrawText('' + this.p4.text, this.x - 60, this.y - maxh * 0.60)
    }

    if (this.p5.text !== 0) {
      this.p5.draw()
      gdrawText('' + this.p5.text, this.x - 60, this.y - maxh * 0.74)
    }

    // 绘制字符串
    gdrawText('100', this.x - 60, this.y - maxh * 0.95)
    gdrawText('0', this.x - 60, this.y + 1)

    // 绘制传入的title字符串
    if (this.sel) {
      ctx.drawImage(img1, this.x - 53, this.y + 32)
      ctx.font = '20px bold 黑体'
    } else {
      ctx.font = '15px bold 黑体'
    }
    ctx.fillStyle = textcolor// 正式工程为#FFF
    ctx.textAlign = 'center'
    ctx.fillText(this.title, this.x, this.y + 75)
  }

  setSelect (sel) {
    this.sel = sel
  }

  getSelect () {
    return this.sel
  }
}
