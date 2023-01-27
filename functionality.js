function func() {
  document.getElementById("rating").style.display = "none";
  document.getElementById("thankYou").style.display = "flex";
}

function getRating(value) {
  document.getElementsByClassName(
    "selection"
  )[0].innerHTML = `You selected ${value} out of 5`;
}
