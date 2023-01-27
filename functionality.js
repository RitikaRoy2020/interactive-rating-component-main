function func() {
  document.getElementById("rating").style.display = "none";
  document.getElementById("thankYou").style.display = "flex";
}

function getRating(value) {
  document.getElementsByClassName("numbers")[0].childNodes[
    2 * value - 1
  ].style.backgroundColor = "hsl(217, 12%, 63%)";
  document.getElementsByClassName("numbers")[0].childNodes[
    2 * value - 1
  ].style.color = "hsl(0, 0%, 100%)";
  document.getElementsByClassName(
    "selection"
  )[0].innerHTML = `You selected ${value} out of 5`;
}
