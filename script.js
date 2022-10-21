btnNode = document.querySelector("img");

function random(number) {
  return Math.floor(Math.random() * number);
}

btnNode.onclick = function () {
  acak = "rgb(" + random(255) + ", " + random(255) + ", " + random(255) + ")";
  //   document.body.style.backgroundColor = acak;
  document.getElementById("clr").style.backgroundColor = acak;
};
