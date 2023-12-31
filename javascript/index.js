setInterval(function () {
  let colomboElement = document.querySelector("#colombo");
  let colomboDateElement = colomboElement.querySelector(".date");
  let colomboTimeElement = colomboElement.querySelector(".time");
  let colomboTime = moment().tz("Asia/Colombo");
  colomboDateElement.innerHTML = moment().format("Do MMMM YYYY");
  colomboTimeElement.innerHTML = colomboTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = moment().format("Do MMMM YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let romeElement = document.querySelector("#rome");
  let romeDateElement = romeElement.querySelector(".date");
  let romeTimeElement = romeElement.querySelector(".time");
  let romeTime = moment().tz("Europe/Rome");
  romeDateElement.innerHTML = moment().format("Do MMMM YYYY");
  romeTimeElement.innerHTML = romeTime.format("h:mm:ss [<small>]A[</small>]");
}, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("Do MMMM YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>
        <small><a href="/"> Home Page </a></small>`;
}

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
