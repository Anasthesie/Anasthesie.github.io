function api() {
  fetch("https://api.adviceslip.com/advice")
    .then((Response) => {
      return Response.json();
    })
    .then((advice) => {
      document.getElementById("p").innerHTML = `"${advice.slip.advice}"`;
    });
}
