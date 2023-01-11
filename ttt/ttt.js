// Restart
var restart = document.querySelector("button");

// Grabs all the squares

var squares = document.querySelectorAll('td');

// Clear function

function clearBoard(){
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
  }
}

restart.addEventListener('click', clearBoard);

// Check

function checkMarker(){
  if(this.textContent === ''){
    this.textContent = 'X';
  } else if (this.textContent === 'X'){
    this.textContent = 'O';
  } else {
    this.textContent = '';
  }
}

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', checkMarker)
}
