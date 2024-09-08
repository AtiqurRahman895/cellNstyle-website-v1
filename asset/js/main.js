(function ($) {
  "use strict";
  $(window).on("load", function () {
    $("#preloader-active").delay(500).fadeOut("");
    $("body").delay().css({
      overflow: "visible",
    });
  });
})(jQuery);

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
  });
  // copyrights Year Auto-update
  function newDate() {
    return new Date().getFullYear();
  }
  document.onload = document.getElementById("autodate").innerHTML = +newDate();
});

$(document).ready(function () {});

// change the background of nav bar

window.addEventListener(`scroll`, () => {
  if (window.scrollY >= 20) {
    document
      .querySelector(`.headerSection`)
      .classList.add(`headerSectionAnimation`);
  } else {
    document
      .querySelector(`.headerSection`)
      .classList.remove(`headerSectionAnimation`);
  }
});

// hero section

let heroSection = document.querySelector(`.heroSection`);
let heroWrapper = document.querySelector(`.heroWrapper`);
let sliderContent = document.querySelectorAll(`.sliderContent`);

// console.log(heroSection.scrollWidth);
// console.log(heroSection.offsetWidth);
// console.log(heroSection.clientWidth);

setInterval(() => {
  if (heroSection.clientWidth >= 768) {
    heroWrapper.classList.add("container");
    sliderContent.forEach((eachSliderContent) => {
      eachSliderContent.classList.remove("container");
    });
  } else {
    heroWrapper.classList.remove("container");
    sliderContent.forEach((eachSliderContent) => {
      eachSliderContent.classList.add("container");
    });
  }
}, 1000);

// slider

let slider = document.querySelectorAll(`.slider`);
let firstCardWidth = document.querySelectorAll(`.firstCard`);
let sliderPrevButton = document.querySelectorAll(`.sliderPrevButton`);
let sliderNextButton = document.querySelectorAll(`.sliderNextButton`);

// console.log(slider[0].scrollWidth)
// console.log(slider[0].clientWidth)

sliderNextButton.forEach((eachSliderNextButton, index) => {
  setInterval(() => {
    if (slider[index].scrollWidth <= slider[index].clientWidth) {
      sliderNextButton[index].style.display = `none`;
    } else {
      sliderNextButton[index].style.display = `inline-block`;
    }
  }, 1000);

  eachSliderNextButton.addEventListener(`click`, (e) => {
    slider[index].scrollLeft += firstCardWidth[index].offsetWidth;
  });
});
sliderPrevButton.forEach((eachSliderPrevButton, index) => {
  setInterval(() => {
    if (slider[index].scrollWidth <= slider[index].clientWidth) {
      sliderPrevButton[index].style.display = `none`;
    } else {
      sliderPrevButton[index].style.display = `inline-block`;
    }
  }, 1000);
  eachSliderPrevButton.addEventListener(`click`, (e) => {
    slider[index].scrollLeft += -firstCardWidth[index].offsetWidth;
  });
});
