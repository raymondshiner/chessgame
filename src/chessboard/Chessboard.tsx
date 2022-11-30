import { FC } from "react"
import styled from "styled-components"

export const Chessboard: FC = () => {
  const squareGrid = [...Array(8)].map((_, rowIndex) => {
    const rowNumber = rowIndex + 1
    const isEvenRow = rowNumber % 2 === 0

    const rowOfSquares = [...Array(8)].map((_, columnIndex) => {
      const columnNumber = columnIndex + 1
      const isEvenColumn = columnNumber % 2 === 0
      const squareIsBlack = onlyOneIsTrue(isEvenRow, isEvenColumn)

      const squareColor = squareIsBlack ? "black" : "white"
      return <ChessSquare color={squareColor} />
    })

    return rowOfSquares
  })

  return <ChessBoardWrapper>{squareGrid}</ChessBoardWrapper>
}

const onlyOneIsTrue = (a: boolean, b: boolean): boolean => {
  return (a && !b) || (!a && b)
}

const ChessBoardWrapper = styled.div`
  display: grid;
  width: fit-content;
  grid-template-columns: repeat(8, 50px);
  grid-template-rows: repeat(8, 50px);
  border: 3px solid blue;
`

const ChessSquare = ({ color }: { color: "white" | "black" }) => (
  <Square data-testId={`square-${color}`} color={color} />
)

const Square = styled.div`
  width: 50px;
  height: 50px;
  background: ${(props) => props.color};
`
