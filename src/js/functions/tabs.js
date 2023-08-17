export const tabs = () => {
  const tabs = document.querySelectorAll(".tabs__btn");
  const tabsBody = document.querySelectorAll(".tabs__body");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", (e) => {
      tabs.forEach((tab) => {
        tab.classList.remove("tab-active");
      });
      tab.classList.add("tab-active");

      let tabsLine = document.querySelector(".tabs__line");
      tabsLine.style.width = e.target.offsetWidth + "px";
      tabsLine.style.left = e.target.offsetLeft + "px";

      tabsBody.forEach((content) => {
        content.classList.remove("tab-active");
      });
      tabsBody[index].classList.add("tab-active");
    });
  });
};
