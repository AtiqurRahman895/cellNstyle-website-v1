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
    sliderContent.forEach((eachSliderContent)=>{
      eachSliderContent.classList.remove("container");
    })

  }else{
    heroWrapper.classList.remove("container");
    sliderContent.forEach((eachSliderContent)=>{
      eachSliderContent.classList.add("container");
    })

  }
}, 1000);


// slider

let slider = document.querySelectorAll(`.slider`);
let firstCardWidth = document.querySelectorAll(`.firstCard`);
let prevButton = document.querySelectorAll(`.prevButton`);
let nextButton = document.querySelectorAll(`.nextButton`);

// console.log(slider[0].scrollWidth)
// console.log(slider[0].clientWidth)

nextButton.forEach((eachNextButton, index) => {
  setInterval(() => {
    if (slider[index].scrollWidth <= slider[index].clientWidth) {
      nextButton[index].style.display = `none`;
    } else {
      nextButton[index].style.display = `inline-block`;
    }
  }, 1000);

  eachNextButton.addEventListener(`click`, (e) => {
    slider[index].scrollLeft += firstCardWidth[index].offsetWidth;
  });
});
prevButton.forEach((eachPrevButton, index) => {
  setInterval(() => {
    if (slider[index].scrollWidth <= slider[index].clientWidth) {
      prevButton[index].style.display = `none`;
    } else {
      prevButton[index].style.display = `inline-block`;
    }
  }, 1000);
  eachPrevButton.addEventListener(`click`, (e) => {
    slider[index].scrollLeft += -firstCardWidth[index].offsetWidth;
  });
});
