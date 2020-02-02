function initLocalStorage() {
  localStorage.setItem("dates", JSON.stringify([]));
}

function saveDateInStorage(inputDate) {
  let dataFromLocalStorage = JSON.parse(localStorage.getItem("dates"));
  dataFromLocalStorage.push(inputDate);
  localStorage.setItem("dates", JSON.stringify(dataFromLocalStorage));
}

function renderSectionCounter(days, hours, minutes, seconds) {
  return `<div class="section-counter">
                <div class="section-counter__element"><p>${days}</p><span>DNI</span></div>
                <div class="section-counter__element"><p>${hours}</p><span>GODZ</span></div>
                <div class="section-counter__element"><p>${minutes}</p><span>MIN</span></div>
                <div class="section-counter__element"><p>${seconds}</p><span>SEC</span></div>
                <button class="section-counter__button">
                  <i class="fas fa-times"></i>
                </button>
              </div>`;
}

function clearSection(section) {
  section.innerHTML = '<div></div>';
}

initLocalStorage();

document.addEventListener("DOMContentLoaded", function () {
  let dataFromLocalStorage = [];

  document
    .querySelector(".section-date__button")
    .addEventListener("click", function () {
      let inputDate = this.nextElementSibling.value;
      saveDateInStorage(inputDate);
    });

  setInterval(() => {
    let sectionMain = document.querySelector(".section-main");
    clearSection(sectionMain);

    dataFromLocalStorage = JSON.parse(localStorage.getItem("dates"));

    dataFromLocalStorage.forEach(inputDate => {

      let timeDifference = new Date(inputDate).getTime() - Date.now();
      let days = Math.floor(timeDifference / 86400000);
      let hours = Math.floor((timeDifference - days * 86400000) / 3600000);
      let minutes = Math.floor(
        (timeDifference - days * 86400000 - hours * 3600000) / 60000
      );
      let seconds = Math.floor(
        (timeDifference -
          days * 86400000 -
          hours * 3600000 -
          minutes * 60000) /
        1000
      );

      sectionMain.innerHTML += renderSectionCounter(days, hours, minutes, seconds);

    })
  }, 1000);
});