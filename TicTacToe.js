var turn = document.getElementById("turn"), box = document.querySelectorAll("#main div"),  num = 0;
document.getElementById("replay").onclick = function() {
  window.location.reload();
}

function Win() {
  var box1 = document.getElementById("b1"), box2 = document.getElementById("b2"), box3 = document.getElementById("b3"),
    box4 = document.getElementById("b4"), box5 = document.getElementById("b5"),  box6 = document.getElementById("b6"),
    box7 = document.getElementById("b7"), box8 = document.getElementById("b8"),  box9 = document.getElementById("b9");
  if (box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML)
    winningBox(box1, box2, box3);
  else if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML)
    winningBox(box4, box5, box6);
  else  if (box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML)
    winningBox(box7, box8, box9);
  else  if (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML)
    winningBox(box1, box4, box7);
  else  if (box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML)
    winningBox(box2, box5, box8);
  else  if (box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML)
    winningBox(box3, box6, box9);
  else  if (box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML)
    winningBox(box1, box5, box9);
  else  if (box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML)
    winningBox(box3, box5, box7);
}

function winningBox(a,b,c) {
  a.className +=" win";
  b.className +=" win";
  c.className +=" win";
  turn.innerHTML=b.innerHTML + " Won";
  var delay = 1000;
  setTimeout(function() {
    if(!alert(b.innerHTML + " Won. The game will restart on clicking OK.")){window.location.reload();}
  }, delay);
}

for (var i = 0; i < box.length; i++) {
  box[i].onclick = function() {
    if (this.innerHTML !== "X" && this.innerHTML !== "O") {
      if (num % 2 === 0) {
        this.innerHTML = "X";
        turn.innerHTML = "O's Turn";
        Win();
        num += 1;
      }
      else {
        this.innerHTML = "O";
        turn.innerHTML = "X's Turn";
        Win();
        num+= 1;
      }
    }
  };
}
