// 设置左侧多出的蓝色背景
// 初始化左侧多出的蓝色背景
const leftBg = document.querySelector('.left-background')
function setLeftBg() {
  if (document.body.clientWidth > 1200) {
    const width = (document.body.clientWidth - 1200) / 2;
    leftBg.style.width = width + 'px';
  } else {
    leftBg.style.width = '0px';
  }
}
setLeftBg();
// 添加resize事件，事实变化
window.addEventListener('resize', setLeftBg)