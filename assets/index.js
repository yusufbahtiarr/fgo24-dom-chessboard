const chessboard = document.querySelector('.chessboard')
for (let i = 1; i<=8; i++){
  // const board = document.querySelector('.board')
  const board = document.createElement('div')
  board.classList.add('board')
  for (let j = 1; j<=8; j++){
    const box = document.createElement('div')
    box.classList.add('square')

    if ((i + j) % 2 === 0) {
      box.classList.add('white');
    } else {
      box.classList.add('black');
    }
    board.appendChild(box)
  }
  chessboard.appendChild(board)
}