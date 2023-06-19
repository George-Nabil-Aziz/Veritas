const nav = document.querySelector("nav");
const progress = document.querySelectorAll(".skills .progress .skill-content span");
const navigations = document.querySelectorAll("nav li");
let progressStart = false;

const sections = document.querySelectorAll(".section")

window.onscroll = function () {
  /* Start Navbar Background */
  if (nav.offsetTop > document.documentElement.clientHeight) {
    nav.style.backgroundColor = "rgb(40, 50, 50, .6)"
  } else {
    nav.style.backgroundColor = "rgb(40, 50, 50)"
  }
  /* End Navbar Background */

  /* Start Navigation Scroll */
  sections.forEach(function (section, index) {
    if ((document.documentElement.scrollTop + nav.offsetHeight) >= section.offsetTop) {
      navigations.forEach(function (navigation) {
        navigation.classList.remove("active");
      });
      navigations[index].classList.add("active");
    }
  })
  /* End Navigation Scroll */

  /* Start Skills Counting */
  // if (window.scrollY >= document.querySelector(".skills").offsetTop + nav.clientHeight) {
  if ((document.documentElement.scrollTop + nav.clientHeight) >= document.querySelector(".skills").offsetTop) {
    progress.forEach(function (prog) {
      prog.style.width = prog.dataset.goal + "%";
    });
    
    if (!progressStart) {
      progressStart = true;
      progress.forEach(function (prog) {
        let counter = setInterval(function () {
          prog.innerHTML++;
          if (prog.innerHTML == prog.dataset.goal) {
            clearInterval(counter);
          }
        }, 3000 / prog.dataset.goal);
      });
    }
  }
  /* End Skills Counting */
};

/* Start Navigation Click */
let currentItemN = 0;
navigations.forEach(function (navigation, index) {
  navigation.onclick = function () {
    document.documentElement.scrollTop = sections[index].offsetTop - nav.offsetHeight;
  }
});
/* End Navigation Click */

/* Start Testemonials */
const testemonialsContent = document.querySelectorAll(".testemonials .testemonials-box");
const testemonialsBullets = document.querySelectorAll(".testemonials ul li");
let currentItemT = 0;

setInterval(function () {
  index = (currentItemT + 1) % testemonialsContent.length;
  showTestemonials(index);
}, 2000);

testemonialsBullets.forEach(function (bullet, index) {
  bullet.onclick = function () {
    showTestemonials(index);
  }
})

function showTestemonials(index) {
  testemonialsContent[currentItemT].classList.remove("active");
  testemonialsBullets[currentItemT].classList.remove("active");
  currentItemT = index;
  testemonialsContent[currentItemT].classList.add("active");
  testemonialsBullets[currentItemT].classList.add("active");
}
/* End Testemonials */

/* Start Dark Theme */
const darkButton = document.querySelector(".dark-theme");
darkButton.onclick = function () {
  this.classList.toggle("night");
  document.body.classList.toggle("dark-theme")
}
/* End Dark Theme */