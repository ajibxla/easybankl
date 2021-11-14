let open = document.querySelector(".open");
let close = document.querySelector(".close");
let navlist = document.querySelector(".navlist");
let container = document.querySelector(".container");
let show = document.querySelector(".show");
let mockImg = document.querySelector(".mockup");
let header = document.querySelector("header");
let article1 = document.querySelector(".article1");
let article2 = document.querySelector(".article2");
let article3 = document.querySelector(".article3");
let article4 = document.querySelector(".article4");
let why1 = document.querySelector(".why-1");
let why2 = document.querySelector(".why-2");
let why3 = document.querySelector(".why-3");
let why4 = document.querySelector(".why-4");

const showNav = () => {
  open.addEventListener("click", () => {
    close.classList.add("show");
    open.classList.add("show");
    navlist.classList.add("show");
    container.classList.add("show");
    header.classList.add("show");
  });

  close.addEventListener("click", () => {
    close.classList.remove("show");
    open.classList.remove("show");
    navlist.classList.remove("show");
    container.classList.remove("show");
    header.classList.remove("show");
  });
};

showNav();

gsap.registerPlugin(ScrollTrigger);

gsap.to(article1, {
  scrollTrigger: {
    trigger: article1,
    toggleActions: "restart",
  },
  x: 00,
  duration: 2,
});

gsap.to(article2, {
  scrollTrigger: {
    trigger: article2,
    toggleActions: "restart",
  },
  x: 00,
  duration: 2,
});

gsap.to(article3, {
  scrollTrigger: {
    trigger: article3,
    toggleActions: "restart",
  },
  x: 00,
  duration: 2,
});

gsap.to(article4, {
  scrollTrigger: {
    trigger: article4,
    toggleActions: "restart",
  },
  x: 00,
  duration: 3,
});

gsap.to(why1, {
  scrollTrigger: {
    trigger: why1,
    toggleActions: "restart",
  },
  x: 00,
  duration: 2,
});

gsap.to(why2, {
  scrollTrigger: {
    trigger: why2,
    toggleActions: "restart",
  },
  x: 00,
  duration: 2,
});

gsap.to(why3, {
  scrollTrigger: {
    trigger: why3,
    toggleActions: "restart",
  },
  x: 00,
  duration: 2,
});

gsap.to(why4, {
  scrollTrigger: {
    trigger: why4,
    toggleActions: "restart",
  },
  x: 00,
  duration: 3,
});
