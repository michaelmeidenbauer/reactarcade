export const copyBoard = (board) => {
  const boardCopy = board.map(row => {
    const cells = row.map(cell => ({
      classString: cell.classString,
      id: cell.id,
    }))
    return cells;
  }
  )
  return boardCopy;
};

export const makeRandomPositionIndex = (board) => {
  const boardCopy = copyBoard(board);
  const getRandomBoardIndex = () => Math.floor(Math.random() * boardCopy.length);
  let randomRowIndex = getRandomBoardIndex();
  let randomCellIndex = getRandomBoardIndex();
  let randomCell = boardCopy[randomRowIndex][randomCellIndex];
  while (randomCell.classString !== 'cell') {
    randomRowIndex = getRandomBoardIndex();
    randomCellIndex = getRandomBoardIndex();
    randomCell = boardCopy[randomRowIndex][randomCellIndex];
  }
  return [randomRowIndex, randomCellIndex];
};
export const angryMessages = ( () => {
  const allMessages = [
    "the anger noodle is displeased with your success",
    "the anger noodle would prefer that you lose",
    "your pain pleases the anger noodle",
    "how dare you do this to the anger noodle",
    "stop talking smack about anger noodle",
    "angrrrrrrr",
    "y tho",
    "hmmmmmm",
    "send noodles",
    "anger noodle delights in your suffering",
    "aw man you suck so baaaaaaaad",
    "everyone sucks but not anger noodle",
    "everyone sucks except for anger noodle",
    "everyone sucks who's not anger noodle",
    "don't look at anger noodle",
    "anger noodle hopes you fail",
    "delicious tears for anger noodle",
    "whoa i just kind of blacked out there for a second",
    "yyyyyyes destroy other kitteh"
  ];
  let messageCopies = [...allMessages];

  const pub = {};

  pub.getRandom = () => {
    const getrandomNumber = () => Math.floor(Math.random() * messageCopies.length);
    const splicedQuote = messageCopies.splice(getrandomNumber(), 1);
    if (messageCopies.length === 0) {
      messageCopies = [...allMessages];
    }
    // console.log('original length: ', allMessages.length, 'copies length: ', messageCopies.length);
    return splicedQuote;
  };
  pub.setDefault = () => '"must destroy other kitteh"';
  pub.setEvery25 = (score) => `"the anger noodle appreciates how you've destroyed other kitteh ${score} times"`;

  return pub;
})();

export const createDefaultBoard = (treatCoords) => {
  const gridSize = 15;
  const [treatRow, treatCell] = treatCoords;
  const returnArray = [];
  let rowNumber = 0;
  while (returnArray.length < gridSize) {
    const rowItem = [];
    for (let i = 0; i < gridSize; i += 1) {
      rowItem.push({
        classString: 'cell',
        id: `row${rowNumber}cell${i}`
      });
    }
    returnArray.push(rowItem);
    rowNumber += 1;
  }
  returnArray[treatRow][treatCell].classString = 'cell treat';
  return returnArray;
};
export const updateBoardData = (snake, direction, treatCoords) => {
  const boardCopy = createDefaultBoard(treatCoords);
  const snakeCopy = [...snake];
  snakeCopy.forEach((bodySegment) => {
    const [row, column] = bodySegment;
    const currentSegment = boardCopy[row][column];
    currentSegment.classString = `cell segment ${direction}`;
  });
  return boardCopy;
};

export const getCoords = (targetClass, board) => {
  let returnCoords = null;
  [...board].forEach((row, index) => {
    const rowIndex = index;
    row.forEach((cell, cellIndex) => {
      if (cell.classString.indcludes(targetClass)) {
        returnCoords = [rowIndex, cellIndex];
      }
    })
  })
  return returnCoords;
};
// export const rollForPortal = () => {
//   const getRandomIndex = () => Math.floor(Math.random() * 5);
//   const chance = getRandomIndex();
//   if (!this.gameState.portal.isOpen && chance === 2) {
//     this.openPortals();
//     this.gameState.portal.isOpen = true;
//   }
// };
// export const openPortals = (board) => {
//   const notSnakeOrTreatCells = $(".cell:not(.segment, .treat)");
//   const getRandomIndex = () => Math.floor(Math.random() * notSnakeOrTreatCells.length);
//   const orangeIndex = getRandomIndex();
//   let blueIndex = getRandomIndex();
//   while (orangeIndex === blueIndex) {
//     blueIndex = getRandomIndex();
//   };
//   $(notSnakeOrTreatCells[orangeIndex]).addClass('portal orange');
//   $(notSnakeOrTreatCells[blueIndex]).addClass('portal blue');
//   this.gameState.portal.blue = this.getCoords('blue');
//   this.gameState.portal.orange = this.getCoords('orange');
// }
export const copySnake = (snake) => {
  const snakeCopy = snake.map(segment => {
    const segmentArray = [...segment];
    return segmentArray;
  });
  return snakeCopy;
}
