//Random color Generate

const RandomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
// console.log(RandomColor());

let intervalID;

const startChangingColor = function () {
  if (!intervalID) {
    intervalID = setInterval(changebgColor, 1000);
  }

  function changebgColor() {
    document.body.style.background = RandomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalID);
  intervalID = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);
