// 设置左侧多出的蓝色背景
// 初始化左侧多出的蓝色背景
const leftBg = document.querySelector('.left-background')
const rightBg = document.querySelector('.right-background');
function setLeftBg() {
  if (document.body.clientWidth > 1200) {
    const width = (document.body.clientWidth - 1200) / 2;
    leftBg.style.width = width + 'px';
  } else {
    leftBg.style.width = '0px';
  }
}
function setRightBg() {
  if (document.body.clientWidth > 1200) {
    const width = (document.body.clientWidth - 1200) / 2;
    rightBg.style.width = width + 'px';
  } else {
    rightBg.style.width = '0px';
  }
}
setLeftBg();
setRightBg();
// 右侧空白
// 添加resize事件，事实变化
window.addEventListener('resize', setLeftBg);
window.addEventListener('resize', setRightBg);