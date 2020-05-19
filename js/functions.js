window.addEventListener('load', start);

var red = document.querySelector('#rangeRed');
var green = document.querySelector('#rangeGreen');
var blue = document.querySelector('#rangeBlue');

var textRed = document.querySelector('#textRed');
var textGreen = document.querySelector('#textGreen');
var textBlue = document.querySelector('#textBlue');

function start() {
  controlColors();
}

function controlColors() {
  red.addEventListener('change', function () {
    textRed.value = this.value;
    document.querySelector('.colorRGB').style.background =
      'rgb(' + this.value + ',' + green.value + ',' + blue.value + ')';
  });
  green.addEventListener('change', function () {
    textGreen.value = this.value;
    document.querySelector('.colorRGB').style.background =
      'rgb(' + red.value + ',' + this.value + ',' + blue.value + ')';
  });
  blue.addEventListener('change', function () {
    textBlue.value = this.value;
    document.querySelector('.colorRGB').style.background =
      'rgb(' + red.value + ',' + green.value + ',' + this.value + ')';
  });
}
