window.addEventListener("DOMContentLoaded", () => {
    let dataFromLocalStorage = [];
    let inputDates = [];
    document
        .querySelector(".section-date__button")
        .addEventListener("click", () => {
            console.log("click");

            //renderTimer();

            let sectionMain = document.querySelector(".section-main");
            console.log(sectionMain);


            sectionMain.innerHTML += `<div class="section-counter">
                <div class="section-counter__day"><p></p><span>DNI</span></div>
                <div class="section-counter__hour"><p></p><span>GODZ</span></div>
                <div class="section-counter__minute"><p></p><span>MIN</span></div>
                <div class="section-counter__second"><p></p><span>SEC</span></div>
                <button class="section-counter__button">
                  <i class="fas fa-times"></i>
                </button>
              </div>`;

            // currentTime();
            let inputDate = document.querySelector('.section-date__input').value;
            console.log(document.querySelector('.section-date__input'))
            console.log(inputDate);
            inputDates.push('test');
            console.log(inputDates);

            let dateObject = {
                day: 0,
                hour: 0,
                minute: 0,
                second: 0
            };
            // setInterval(() => {
            //     let timeDifference = new Date(inputDate).getTime() - Date.now();
            //     let test
            //     let days = Math.floor(timeDifference / 86400000);
            //     let hours = Math.floor((timeDifference - (days * 86400000)) / 3600000);
            //     let minutes = Math.floor((timeDifference - (days * 86400000) - (hours * 3600000)) / 60000);
            //     let seconds = Math.floor((timeDifference - (days * 86400000) - (hours * 3600000) - (minutes * 60000)) / 1000);

            //     dateObject.day = days;
            //     dateObject.hour = hours;
            //     dateObject.minute = minutes;
            //     dateObject.second = seconds;

            //     var dataFromLocalStorage = [];
            //     if (localStorage.getItem("dates") != null) {
            //         dataFromLocalStorage = JSON.parse(localStorage.getItem("dates"));
            //         dataFromLocalStorage.shift();
            //         dataFromLocalStorage.push(dateObject);
            //         localStorage.setItem("dates", JSON.stringify(dataFromLocalStorage));
            //     } else {
            //         dataFromLocalStorage.shift();
            //         dataFromLocalStorage.push(dateObject);
            //         localStorage.setItem("dates", JSON.stringify(dataFromLocalStorage));
            //     }
            //     console.log(dataFromLocalStorage);

            // }, 1000);
        });
});