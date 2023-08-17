export const select = () => {
  const selectedAll = document.querySelectorAll(".select__selected");

  selectedAll.forEach((selected) => {
    const selectBox = selected.previousElementSibling;
    const optionsList = selectBox.querySelectorAll(".select__option");

    selected.addEventListener("click", () => {
      if (selectBox.classList.contains("select-active")) {
        selectBox.classList.remove("select-active");
      } else {
        let currentActive = document.querySelector(
          ".select__box.select-active"
        );

        if (currentActive) {
          currentActive.classList.remove("select-active");
        }

        selectBox.classList.add("select-active");
      }
    });

    optionsList.forEach((o) => {
      o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector(".select__label").innerHTML;
        selectBox.classList.remove("select-active");
      });
    });
  });
};
