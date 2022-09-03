// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

// grabbing my elements to manipulate later
const palettes = document.querySelectorAll("#palette .color");
const currentColor = document.querySelector("#current-color");
const cells = document.getElementsByClassName("cell");

// adding event listeners to each palette on the palletes class
for (let palette of palettes) {
  palette.addEventListener("click", (e) => {
    // assigning the background of the current color to match whatever
    // color is being clicked on from the .color class.
    currentColor.style.background = e.target.style.background;
  });
}

// doing the same thing here as line 16
for(let cell of cells) {
  cell.addEventListener('click', (e) => {
    e.target.style.background = currentColor.style.background
  })
}

// additional feature
const button = document.createElement('button')
const body = document.querySelector('body')
body.append(button)

button.textContent = 'reset'
button.addEventListener('click', () => {
  for (let cell of cells) {
    cell.style.background = 'white'
  }
})