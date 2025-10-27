const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    switch (button) {
      case "e.target.id === 'grey'":
        body.style.backgroundColor = e.target.id;
        break;
      case "e.target.id === 'white'":
        body.style.backgroundColor = e.target.id;
        break;
      case e.target.id === 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case e.target.id === 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
      default:
        body.style.backgroundColor = e.target.id;
        break;
    }
  });
});
