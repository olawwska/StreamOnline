window.addEventListener("DOMContentLoaded", event => {
  renderTimer = () => {
    console.log("uruchamia się render timer");
    let sectionMain = document.querySelector(".section-main");

    sectionMain.innerHTML += `<div class="section-counter">
            <div class="section-counter__day"><p></p><span>DNI</span></div>
            <div class="section-counter__hour"><p></p><span>GODZ</span></div>
            <div class="section-counter__minute"><p></p><span>MIN</span></div>
            <div class="section-counter__second"><p></p><span>SEC</span></div>
            <button class="section-counter__button">
              <i class="fas fa-times"></i>
            </button>
          </div>`;
  };

  let currentTime = () => {
    console.log("uruchamia się current time");

    let newDate = {
      day: 0,
      hour: 0,
      minute: 0,
      second: 0
    };
    setInterval(() => {
      let dateArray = [];
      //pobiera wartość inputa
      let inputDate = document.querySelector(".section-date__input").value;

      //oblicza róznice dwóch czasów w milisekundy
      let inputDateMs = moment(inputDate, "YYYY-MM-DD HH:mm:ss");
      let now = moment(Date.now());
      let timeDifference = moment(now).diff(
        moment(inputDateMs, "YYYY-MM-DD HH:mm:ss")
      );

      let timeDifferenceDuration = moment.duration(timeDifference);

      //wylicza ile to godzin sekund dni i minut
      newDate.hour = Math.abs(timeDifferenceDuration.hours());
      newDate.seconds = Math.abs(timeDifferenceDuration.seconds());
      newDate.day = Math.abs(timeDifferenceDuration.days());
      newDate.minute = Math.abs(timeDifferenceDuration.minutes());

      //wypycha obiekt do tablicy
      dateArray.push(newDate);

      let timerValues = document.querySelectorAll(".section-counter>div>p");

      dateArray.map(date => {
        return Object.values(date).map((value, i) => {
          console.log(timerValues[i]);
          //   console.log(value);
          timerValues[i].innerText = value;
        });
      });

      //   dateArray
      //     .map(date => {
      //       date = Object.values(date);
      //     })
      //     .map((value, i) => {
      //       timerValues[i].innerHTML = value;
      //     });

      //   console.log(timerValues);
      // timerValues[0].innerHTML = dateArray[0].seconds;
    }, 1000);
  };

  document
    .querySelector(".section-date__button")
    .addEventListener("click", () => {
      renderTimer();
      currentTime();
    });
});
