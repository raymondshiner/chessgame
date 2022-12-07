import { screen, render } from "@testing-library/react"
import { Chessboard } from "../Chessboard"

describe("Chessboard", () => {
  it("Renders a chessboard with the correct number of squares", () => {
    render(<Chessboard />)

    //8x8grid => 64 square -> 32 w 32 b
    expect(screen.getAllByTestId("square-dark")).toHaveLength(32)
    expect(screen.getAllByTestId("square-light")).toHaveLength(32)
  })

  it("renders a white pawn", () => {
    render(<Chessboard />)
    expect(screen.getByTestId("pawn-light")).toBeInTheDocument()
  })
})
