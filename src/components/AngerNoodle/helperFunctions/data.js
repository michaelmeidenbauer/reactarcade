export const makeTreatLocation = (board) => {
  const boardCopy = [...board];
  const getRandomBoardIndex = () => Math.floor(Math.random() * board.length);
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
export const getAngryMessage = () => {
  const angryMessages = [
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
  let messageCopies = [...angryMessages];
  let splicedQuote = [];
  const getRandomMessage = () => {
    const getrandomNumber = () => Math.floor(Math.random() * messageCopies.length);
    splicedQuote = messageCopies.splice(getrandomNumber(), 1);
    if (messageCopies.length === 0) {
      messageCopies = [...angryMessages];
    }
    console.log('original length: ', angryMessages.length, 'copies length: ', messageCopies.length);
    return splicedQuote;
  };
  return getRandomMessage();
};
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

export const copySnake = (snake) => {
  const snakeCopy = snake.map(segment => {
    const segmentArray = [...segment];
    return segmentArray;
  });
  return snakeCopy;
}
