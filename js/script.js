function id(i) {
  return document.getElementById(i);
}

function loadBar() {
  const data = {
    progress: id("progress"),
    progressBar: id("progressBar"),
    progressStat: id("progressStat"),
    images: document.images,
    cur: 0,
    perc: 0,
    tot: document.images.length,
  };

  function imgLoad() {
    data.cur++;
    data.perc = (100 / data.tot) * data.cur;
    data.progressBar.style.width = `${data.perc.toString()}%`;
    data.progressStat.innerHTML = `Chargement ${data.perc}%`;
    if (data.cur == data.tot)
      return setTimeout(pageLoad, data.tot > 5 ? 0 : 750);
  }

  for (var i = 0; i < data.tot; i++) {
    var tImg = new Image();
    tImg.onload = imgLoad;
    tImg.onerror = imgLoad;
    tImg.src = data.images[i].src;
  }

  copyBurgerMenu();

  function pageLoad() {
    data.progress.style.opacity = 0;
    setTimeout(function () {
      data.progress.style.display = "none";
    }, 1200);
  }
}

function showBurgerMenu() {
  burgerData.menu.style.left = "-2%";
}

function closeBurgerMenu() {
  burgerData.menu.style.left = "100%";
}

function copyBurgerMenu() {
  burgerData.menu.innerHTML =
    `<div class="">` +
    burgerData.pages.outerHTML.replace("pages", "burgerPages") +
    burgerData.buying.outerHTML.replace("buying", "burgerBuying") +
    `</div>` +
    burgerData.menu.innerHTML;
}

document.addEventListener("DOMContentLoaded", loadBar);

let burgerData = {
  btn: document.querySelector(".burger"),
  menu: document.querySelector(".burgerMenu"),
  close: document.querySelector(".burgerCloseMenu"),
  pages: document.querySelector(".pages"),
  buying: document.querySelector(".buying"),
};
