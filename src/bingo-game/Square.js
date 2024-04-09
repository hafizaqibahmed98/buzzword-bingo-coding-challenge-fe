import React from "react";
import { Button } from "@mui/material";

// Constants
import { COLORS } from "../constants/BingoConstants";

const Square = ({ square, isGameOver, onClick }) => {
  const { word, color } = square;
  const containedColors = [COLORS.BLUE, COLORS.GREEN];

  return (
    <Button
      className={`square ${isGameOver ? 'disabled' : ''}`}
      color={color === COLORS.GREEN ? "success" : "primary"}
      onClick={onClick}
      variant={containedColors.includes(color) ? "contained" : "outlined"}
    >
      {word}
    </Button>
  );
};

export default Square;