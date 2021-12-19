"use strict";
console.dir(window);

/////////////////////// 1 js section ///////////////////////

const serviceTab = document.querySelectorAll(".service-tab");
const tabsItems = document.querySelectorAll(".service-content");

serviceTab.forEach(onServiceTabClick);

function onServiceTabClick(item) {
  item.addEventListener("click", function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains("active")) {
      serviceTab.forEach(function (item) {
        item.classList.remove("active");
      });

      tabsItems.forEach(function (item) {
        item.classList.remove("active");
      });

      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}
document.querySelector(".service-tab").click();

/////////////////////// 2 js section ///////////////////////

const workBar = document.querySelector(".works-bar");
let workItem = document.querySelectorAll(".example-img");
const workImg = document.querySelector(".all-img");
const workBtn = document.querySelectorAll(".work-tab");
const loadBtn = document.querySelector(".load-btn");

workBar.addEventListener("click", (event) => {
  let workItemId = event.target.dataset.id;
  let target = event.target;

  if (target.classList.contains("work-tab")) {
    workBtn.forEach((workBtn) => workBtn.classList.remove("work-tab-onclick"));
    target.classList.add("work-tab-onclick");
  }
  const categoryObj = {
    all: "all",
    LP: "LP",
    WD: "WD",
    WP: "WP",
    GD: "GD",
  };

  for (let identificator in categoryObj) {
    if (categoryObj[identificator] === workItemId) {
      workItem.forEach((item) => {
        item.style.display = "none";
        if (item.getAttribute("data-id") === workItemId) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
        if (workItemId === "all") {
          item.style.display = "block";
        }
      });
    }
  }
});

document.querySelector(".work-tab").click();

const category = [
  "WD",
  "GD",
  "WP",
  "LP",
  "WD",
  "GD",
  "WP",
  "LP",
  "WD",
  "GD",
  "WP",
  "LP",
];

const hoverText = [
  "Web Design",
  "Graphic Design",
  "Wordpress",
  "Landing Pages",
  "Web Design",
  "Graphic Design",
  "Wordpress",
  "Landing Pages",
  "Web Design",
  "Graphic Design",
  "Wordpress",
  "Landing Pages",
  "Web Design",
  "Graphic Design",
  "Wordpress",
  "Landing Pages",
];
const imgArray = [
  "./img/web-design/web-design1.jpg",
  "./img/web-design/web-design2.jpg",
  "./img/web-design/web-design3.jpg",
  "./img/graphic-design/graphic-design4.jpg",
  "./img/graphic-design/graphic-design5.jpg",
  "./img/graphic-design/graphic-design6.jpg",
  "./img/wordpress/wordpress5.jpg",
  "./img/wordpress/wordpress6.jpg",
  "./img/wordpress/wordpress7.jpg",
  "./img/landing-page/landing-page5.jpg",
  "./img/landing-page/landing-page6.jpg",
  "./img/landing-page/landing-page7.jpg",
];

loadBtn.addEventListener("click", () => {
  loadBtn.style.display = "none";
  const loader = document.querySelector(".loader");
  loader.style.display = "block";
  setTimeout(() => {
    loader.style.display = "none";

    for (let i = 0; i < imgArray.length; i++) {
      const newDiv = document.querySelector(".example-img").cloneNode(true);
      newDiv.dataset.id = category[i];
      const newImg = newDiv.querySelector(".work-img");
      const workHover = newDiv.querySelector(".hover-subtitle");
      workHover.textContent = hoverText[i];
      newImg.src = imgArray[i];
      workImg.append(newDiv);
    }

    const clickWorkTab = document.querySelector(".work-tab-onclick");
    const clickWorkTabId = clickWorkTab.dataset.id;
    let newWorkItem = document.querySelectorAll(".example-img");
    const categoryObj = {
      all: "all",
      LP: "LP",
      WD: "WD",
      WP: "WP",
      GD: "GD",
    };
    for (let identificator in categoryObj) {
      if (categoryObj[identificator] === clickWorkTabId) {
        newWorkItem.forEach((item) => {
          item.style.display = "none";
          if (item.getAttribute("data-id") === clickWorkTabId) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
          if (clickWorkTabId === "all") {
            item.style.display = "block";
          }
        });
      }
    }

    workBar.addEventListener("click", (event) => {
      let workItemId = event.target.dataset.id;
      for (let identificator in categoryObj) {
        if (categoryObj[identificator] === workItemId) {
          newWorkItem.forEach((item) => {
            item.style.display = "none";
            if (item.getAttribute("data-id") === workItemId) {
              item.style.display = "block";
            } else {
              item.style.display = "none";
            }
            if (workItemId === "all") {
              item.style.display = "block";
            }
          });
        }
      }
    });
  }, 1000);
});

/////////////////////// 3 js section ///////////////////////

const prev = document.querySelector(".left-slider-btn");
const next = document.querySelector(".right-slider-btn");
const slides = document.querySelectorAll(".slider-card");
const imgDots = document.querySelectorAll(".small-img-slide");

let index = 2;

const activeSlide = (n) => {
  for (const slide of slides) {
    slide.classList.remove("active");
  }
  slides[n].classList.add("active");
};
const activeImgDot = (n) => {
  for (const imgDot of imgDots) {
    imgDot.classList.remove("active");
  }
  imgDots[n].classList.add("active");
};

const prepareCurrentSlide = (ind) => {
  activeSlide(ind);
  activeImgDot(ind);
};

const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index++;
    prepareCurrentSlide(index);
  }
};
const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1;
    prepareCurrentSlide(index);
  } else {
    index--;
    prepareCurrentSlide(index);
  }
};

imgDots.forEach((item, indexDot) => {
  item.addEventListener("click", () => {
    index = indexDot;
    prepareCurrentSlide(index);
  });
});

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
