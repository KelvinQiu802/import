// 上半部分0-2
let lisTop = document.querySelectorAll(".topBanner .left li");
const commentsTop = document.querySelectorAll(".topBanner .right .comment_box");
lisTop = Array.from(lisTop).slice(0, 3);

// 给li添加hover事件
for (const li of lisTop) {
  li.addEventListener("mouseover", function () {
    const index = this.getAttribute("data-index");
    for (const comment of commentsTop) {
      comment.classList.add("hidden");
    }
    for (const li of lisTop) {
      li.firstElementChild.classList.remove("selected");
    }
    commentsTop[parseInt(index)].classList.remove("hidden");
    this.firstElementChild.classList.add("selected");
  });
}

// 下半部分3-5
let lisBottom = document.querySelectorAll(".bottomBanner .left li");
const commentsBottom = document.querySelectorAll(
  ".bottomBanner .right .comment_box"
);
lisBottom = Array.from(lisBottom).slice(0, 3);

// 给li添加hover事件
for (const li of lisBottom) {
  li.addEventListener("mouseover", function () {
    const index = this.getAttribute("data-index");
    for (const comment of commentsBottom) {
      comment.classList.add("hidden");
    }
    for (const li of lisBottom) {
      li.firstElementChild.classList.remove("selected");
    }
    commentsBottom[parseInt(index) - 3].classList.remove("hidden");
    this.firstElementChild.classList.add("selected");
  });
}
