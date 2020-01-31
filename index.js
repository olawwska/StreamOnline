window.addEventListener("DOMContentLoaded", event => {
    //   renderTimer = () => {
    //     console.log("uruchamia się render timer");
    //     let sectionMain = document.querySelector(".section-main");

    //     sectionMain.innerHTML += `<div class="section-counter">
    //             <div class="section-counter__day"><p></p><span>DNI</span></div>
    //             <div class="section-counter__hour"><p></p><span>GODZ</span></div>
    //             <div class="section-counter__minute"><p></p><span>MIN</span></div>
    //             <div class="section-counter__second"><p></p><span>SEC</span></div>
    //             <button class="section-counter__button">
    //               <i class="fas fa-times"></i>
    //             </button>
    //           </div>`;
    //   };

    let currentTime = target => {
        let newDate = {
            day: 0,
            hour: 0,
            minute: 0,
            second: 0
        };
        setInterval(() => {

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
            console.log(target + 'target');
            let dateArray = [];
            let inputDateMs = moment(target, "YYYY-MM-DD HH:mm:ss");
            let now = moment();
            let timeDifferenceMs = moment.duration(inputDateMs.diff(now));
            let timeDifferenceDays = moment.duration(inputDateMs.diff(now, "days"));
            let timeDifferenceHours = moment.duration(inputDateMs.diff(now, "hours"));

            newDate.day = Math.floor(Math.abs(timeDifferenceDays.asDays()));
            newDate.hour = Math.floor(Math.abs(timeDifferenceHours.asHours()));
            newDate.minute = Math.abs(timeDifferenceMs.minutes());
            newDate.second = Math.abs(timeDifferenceMs.seconds());

            dateArray.push(newDate);

            let timerValues = document.querySelectorAll(".section-counter>div>p");

            //   let dates = dateArray.map(date => {
            //     return Object.values(date);
            //   });
            //   dates.map((value, i, dates) => {
            //     console.log(timerValues[i]);
            //     timerValues[i].innerHTML = value;
            //   });
            //   dateArray.map(date => {
            //     return Object.values(date).map((value, i) => {
            //       console.log(timerValues[i]);
            //       //   console.log(value);
            //       //   timerValues[i].innerText = value;
            //     });
            //   });

            //   dateArray
            //     .map(date => {
            //       date = Object.values(date);
            //     })
            //     .map((value, i) => {
            //       timerValues[i].innerHTML = value;
            //     });

            //   console.log(timerValues);
            timerValues[0].innerHTML = dateArray[0].day;
            timerValues[1].innerHTML = dateArray[0].hour;
            timerValues[2].innerHTML = dateArray[0].minute;
            timerValues[3].innerHTML = dateArray[0].second;
        }, 1000);
    };

    saveDateToLocalStorage = newObject => {
        var dataFromLocalStorage = [];
        if (localStorage.getItem("dates") != null) {
            dataFromLocalStorage = JSON.parse(localStorage.getItem("dates"));
            dataFromLocalStorage.push(newObject);
            localStorage.setItem("dates", JSON.stringify(dataFromLocalStorage));
        } else {
            dataFromLocalStorage.push(newObject);
            localStorage.setItem("dates", JSON.stringify(dataFromLocalStorage));
        }
    };

    document
        .querySelector(".section-date__button")
        .addEventListener("click", () => {
            var inputDate = document.querySelector(".section-date__input").value;
            saveDateToLocalStorage(inputDate);
            //   renderTimer(inputDate);
            currentTime();
        });

    document
        .querySelector(".section-counter__button")
        .addEventListener("click", function () {
            this.parentElement.remove();
        });
});