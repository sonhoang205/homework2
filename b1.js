const buttonRandom = document.querySelectorAll(".box");

buttonRandom.forEach(element => {
    element.addEventListener("click", function (random) {

  random.target.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
});
});

