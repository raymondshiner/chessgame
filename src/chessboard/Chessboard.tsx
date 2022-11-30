import { FC } from "react"

export const Chessboard: FC = () => {
  const squares = [...Array(64)].map((_, index) => {
    const squareIsWhite = index % 2 === 0
    const squareColor = squareIsWhite ? "white" : "black"

    return <div data-testid={`square-${squareColor}`}>{squareColor} square</div>
  })

  return <div>{squares}</div>
}
