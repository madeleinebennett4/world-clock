setInterval(function () {
  let sanDiegoElement = document.querySelector("#san-diego");
  let sanDiegoDateElement = sanDiegoElement.querySelector(".date");
  let sanDiegoTimeElement = sanDiegoElement.querySelector(".time");
  let sanDiegoTime = moment().tz("America/Los_Angeles");
  sanDiegoDateElement.innerHTML = moment().format("Do MMMM YYYY");
  sanDiegoTimeElement.innerHTML = sanDiegoTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let romeElement = document.querySelector("#rome");
  let romeDateElement = romeElement.querySelector(".date");
  let romeTimeElement = romeElement.querySelector(".time");
  let romeTime = moment().tz("Europe/Rome");
  romeDateElement.innerHTML = moment().format("Do MMMM YYYY");
  romeTimeElement.innerHTML = romeTime.format("h:mm:ss [<small>]A[</small>]");
}, 1000);
