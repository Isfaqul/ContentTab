const tabHeaders = document.querySelectorAll(".tab-header");
const tabContents = document.querySelectorAll(".tab-content");

for (let i = 0; i < tabHeaders.length; i++) {
  tabHeaders[i].addEventListener("click", function () {
    // toggling headers
    document
      .querySelector(".active-tab-header")
      .classList.remove("active-tab-header");
    tabHeaders[i].classList.add("active-tab-header");

    // toggling content
    document
      .querySelector(".active-tab-content")
      .classList.remove("active-tab-content");
    tabContents[i].classList.add("active-tab-content");
  });
}
