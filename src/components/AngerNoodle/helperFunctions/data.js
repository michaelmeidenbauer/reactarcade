export const makeTreatLocation = (board) => {
  const boardCopy = [...board];
  const getRandomBoardIndex = () => Math.floor(Math.random() * board.length);
  let randomRowIndex = getRandomBoardIndex();
  let randomCellIndex = getRandomBoardIndex();
  let randomCell = boardCopy[randomRowIndex][randomCellIndex];
  while (randomCell.classString !== 'cell'){
    randomRowIndex = getRandomBoardIndex();
    randomCellIndex = getRandomBoardIndex();
    randomCell = boardCopy[randomRowIndex][randomCellIndex];
  }
  return [randomRowIndex, randomCellIndex];
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
