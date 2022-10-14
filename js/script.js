function id(i) {
  return document.getElementById(i);
}

function load() {
  document.querySelector("body").classList.remove("preload");
}

function loadBar() {
  const data = {
    progress: id("progress"),
    progressBar: id("progressBar"),
    progressStat: id("progressStat"),
    images: document.images,
    cur: 0,
    tot: document.images.length,
    perc: 0,
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

  function pageLoad() {
    data.progress.style.opacity = 0;
    setTimeout(function () {
      data.progress.style.display = "none";
    }, 1200);
  }
}

document.addEventListener("DOMContentLoaded", loadBar);
let burgerBtn = document.querySelector(".burger");
let burgerMenu = document.querySelector(".burgerMenu");

burgerBtn.onclick = showBurgerMenu;

function showBurgerMenu() {
  burgerMenu.style.left = "-2%";
}
