let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let winnerMsg = document.querySelector("#msg");

let turnO = true;

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  disableBox(false);
  msgContainer.classList.add("hide");
  boxes.forEach((box) => {
    box.innerText = "";
  });
};

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.classList.remove("x-color");
      box.classList.add("o-color");
      box.innerText = "O";
      turnO = false;
    } else {
      box.classList.remove("o-color");
      box.classList.add("x-color");
      box.innerText = "X";
      turnO = true;
    }

    box.disabled = true;

    checkWinner();
  });
});

const disableBox = (flag) => {
  boxes.forEach((box) => {
    box.disabled = flag;
  });
};

const showWinner = (winner) => {
  msg.innerText = `Congratulation, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBox(true);
};

const checkWinner = () => {
  winPattern.forEach((trio) => {
    let t1 = boxes[trio[0]].innerText;
    let t2 = boxes[trio[1]].innerText;
    let t3 = boxes[trio[2]].innerText;

    if (t1 != "" && t2 != "" && t3 != "") {
      if (t1 === t2 && t2 === t3) {
        if (t1 === "O") showWinner("Player 1");
        else showWinner("Player 2");
      }
    }

    // console.log(trio[0], trio[1], trio[2]);
  });
};
