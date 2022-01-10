// animation for button 
var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}

// js for the computer's answer 

var choose = document.getElementById('choose');
var warn = document.getElementById('warning');

function notice() {
  var choosen = Number(choose.value);
  var txt = '', text = '';
  switch (choosen) {
    case 1:
      txt = 'Bố';
      break;
    case 2:
      txt = 'Mẹ';
      break;
    case 3:
      txt = 'Anh Trai';
      break;
    case 4:
      txt = 'Em Gái';
      break;
  }
  if(choosen == 0){
    text = 'Hãy cho biết ai đang sử dụng máy tính ?'
  } else {
    text = 'Xin Chào ' + txt;
  }
  warn.innerText = text;
}

function reset() {
  var choosen = Number(choose.value);
  if(choosen == 0) {
    warn.innerText = '';
  }
}