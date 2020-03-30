var container = document.getElementsByClassName("container")[0];
var text = document.getElementsByClassName("container__text")[0];
var colorpicker = document.getElementsByClassName("color-picker")[0];
colorpicker.addEventListener("change", onColorChange);

//initializing the perceptron
//initializing with no of input count and learning rate
brain = new Perceptron(3, 0.1);
//training the nn.
for (let i = 0; i < 10; i++) {
  datas.forEach(function (data) {
    let rgb = data.input;
    //normalizing the rgb
    let input = [rgb.r / 255, rgb.b / 255, rgb.g / 255];
    let target = data.output;
    brain.train(input, target);
  })
}

function onColorChange() {
  let color = event.target.value;
  container.style.background = color
  let rgb = convertHextoRGB(color);
  console.log(rgb)
  let guess = brain.feedForward([rgb.r / 255, rgb.g / 255, rgb.b / 255]);
  console.log(guess);
  text.style.color = guess === 1 ? "white" : "black"
}

function convertHextoRGB(color) {
  let arr = color.match(/^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i);
  return {
    r: parseInt(arr[1], 16),
    g: parseInt(arr[2], 16),
    b: parseInt(arr[3], 16)
  }
}