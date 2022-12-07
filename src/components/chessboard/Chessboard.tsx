import { FC, PropsWithChildren } from "react"
import styled from "styled-components"
import { Pawn } from "../pawn/Pawn"

export const Chessboard: FC = () => {
  const chessBoardRows = [...Array(8)].map((_, rowIndex) => {
    const rowNumber = rowIndex + 1
    const isEvenRow = rowNumber % 2 === 0

    const rowOfSquares = [...Array(8)].map((_, columnIndex) => {
      const columnNumber = columnIndex + 1
      const isEvenColumn = columnNumber % 2 === 0
      const squareIsLight = onlyOneIsTrue(isEvenRow, isEvenColumn)

      const squareColor = squareIsLight ? "light" : "dark"
      const isVeryFirstSquare = rowNumber === 1 && columnNumber === 1
      const isVerySecondSquare = rowNumber === 1 && columnNumber === 2

      return (
        <ChessSquare color={squareColor}>
          {isVeryFirstSquare && <Pawn color="light" />}
          {isVerySecondSquare && <Pawn color="dark" />}
        </ChessSquare>
      )
    })

    return <ChessRowWrapper>{rowOfSquares}</ChessRowWrapper>
  })

  return <ChessBoardWrapper>{chessBoardRows}</ChessBoardWrapper>
}

const onlyOneIsTrue = (a: boolean, b: boolean): boolean => {
  return (a && !b) || (!a && b)
}

const ChessBoardWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: fit-content;
  border: 3px solid black;
`

const ChessRowWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

interface ChessSquareProps extends PropsWithChildren {
  color: "light" | "dark"
}

const ChessSquare = ({ color, children }: ChessSquareProps) => {
  const squareColor = color === "light" ? "#eeeed2" : "#769656"

  return (
    <Square data-testid={`square-${color}`} color={squareColor}>
      {children}
    </Square>
  )
}

const Square = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: ${(props) => props.color};
`
