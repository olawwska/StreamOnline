document.addEventListener("DOMContentLoaded", function() {
  let dataFromLocalStorage = [];
  let inputDates = [];
  document
    .querySelector(".section-date__button")
    .addEventListener("click", () => {
      //renderTimer();
      let sectionMain = document.querySelector(".section-main");
      sectionMain.innerHTML += `<div class="section-counter">
                <div class="section-counter__element"><p></p><span>DNI</span></div>
                <div class="section-counter__element"><p></p><span>GODZ</span></div>
                <div class="section-counter__element"><p></p><span>MIN</span></div>
                <div class="section-counter__element"><p></p><span>SEC</span></div>
                <button class="section-counter__button">
                  <i class="fas fa-times"></i>
                </button>
              </div>`;

      // currentTime();
      let inputDate = document.querySelector(".section-date__input").value;
      inputDates.push(inputDate);

      let dateObject = {
        day: 0,
        hour: 0,
        minute: 0,
        second: 0
      };

      setInterval(() => {
        //modifyDate();

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

        dateObject.day = days;
        dateObject.hour = hours;
        dateObject.minute = minutes;
        dateObject.second = seconds;

        if (localStorage.getItem("dates") != null) {
          dataFromLocalStorage = JSON.parse(localStorage.getItem("dates"));
          dataFromLocalStorage.shift();
          dataFromLocalStorage.push(dateObject);
          localStorage.setItem("dates", JSON.stringify(dataFromLocalStorage));
        } else {
          dataFromLocalStorage.shift();
          dataFromLocalStorage.push(dateObject);
          localStorage.setItem("dates", JSON.stringify(dataFromLocalStorage));
        }

        //insertDate();

        dataFromLocalStorage = JSON.parse(localStorage.getItem("dates"));
        let test = Object.values(dataFromLocalStorage[0]);

        let timerValues = [
          ...document.querySelectorAll(".section-counter>div>p")
        ];

        timerValues.map((timerValue, i) => {
          timerValue.innerText = test[i];
        });
      }, 1000);
    });
});
