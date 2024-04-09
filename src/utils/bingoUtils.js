import { BOARDGEOMETRY, COLORS } from "../constants/BingoConstants";

export const shuffleArray = (array = []) => {
  for (let i = 0; i < array.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const initializeBoardSquares = (array = [], size) => {
  const selectedDictionary = shuffleArray([...new Set(array)]).slice( 0, size * size );
  return selectedDictionary.map((text) => {
    return {
      word: text,
      color: COLORS.WHITE,
    };
  });
};

export const getWordPosition = (
  clickedIndex = 0,
  i = 0,
  size = 0,
  geometry = BOARDGEOMETRY.ROW
) => {
  switch (geometry) {
    case BOARDGEOMETRY.ROW:
      return size * Math.floor(clickedIndex / size) + i;
    case BOARDGEOMETRY.COLUMN:
      return size * i + Math.floor(clickedIndex % size);
    case BOARDGEOMETRY.LEFTDIAGONAL:
      return size * i + i;
    case BOARDGEOMETRY.RIGHTDIAGONAL:
      return size * i + (size - i - 1);
    default:
      return 0;
  }
};

export const checkGeometricalBingo = (
  squares = [],
  index = 0,
  geometry = BOARDGEOMETRY.ROW
) => {
  const size = Math.sqrt(squares.length);
  const squarePositions = [];
  for (let i = 0; i < size; i++) {
    const position = getWordPosition(index, i, size, geometry);
    squarePositions.push(position);
  }
  
  if (
    squarePositions.every((position) =>
      [COLORS.BLUE, COLORS.GREEN]?.includes(squares[position].color)
    )
  ) {
    squarePositions.forEach(
      (position) => (squares[position].color = COLORS.GREEN)
    );
  }
};

export const checkAndMarkBingo = (squares = [], index = 0) => {
  squares[index] = { ...squares[index], color: COLORS.BLUE };

  // geometrical positions to look 
  [
    BOARDGEOMETRY.ROW,
    BOARDGEOMETRY.COLUMN,
    BOARDGEOMETRY.LEFTDIAGONAL,
    BOARDGEOMETRY.RIGHTDIAGONAL,
  ].forEach((geometry) => checkGeometricalBingo(squares, index, geometry));

  return squares;
};

export const checkIfGameOver = (squares = []) => {
  return squares.some((square) => square.color == COLORS.GREEN);
};
