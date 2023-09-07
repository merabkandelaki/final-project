// Opening and closing the burger menu
let burger = document.querySelector(".burger");
let burgerOpen = document.querySelector(".open_burger");
let burgerClose = document.querySelector(".close_burger");

let toggleBurgerMenu = () => {
  burger.classList.toggle("active");
};

burgerOpen.addEventListener("click", toggleBurgerMenu);
burgerClose.addEventListener("click", toggleBurgerMenu);


// Website navigation
let listItems = document.querySelectorAll(".menu_list_item");

let setActiveMenu = (el) => {
  let elClassList = Array.from(el.target.classList);
  let targetId = elClassList.includes("home_link")
    ? "heading"
    : elClassList.includes("about_link")
    ? "about"
    : elClassList.includes("rooms_link")
    ? "rooms"
    : elClassList.includes("restaurant_link")
    ? "restaurant"
    : elClassList.includes("conference_link")
    ? "conference"
    : "contacts";

  let targetEl = document.querySelector(`#${targetId}`);

  let distFromEl = window.scrollY + targetEl.getBoundingClientRect().top - 116;
  let top = targetId === "heading" ? 0 : distFromEl;
  window.scrollTo({
    top,
    left: 0,
    behavior: "smooth",
  });

  listItems.forEach((item) => item.classList.remove("link_active"));
  el.target.classList.add("link_active");
};

listItems.forEach((el) => el.addEventListener("click", setActiveMenu));





