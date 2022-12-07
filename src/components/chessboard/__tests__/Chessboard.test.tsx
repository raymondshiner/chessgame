import { screen, render } from "@testing-library/react"
import { Chessboard } from "../Chessboard"

describe("Chessboard", () => {
  it("Renders a chessboard with the correct number of squares", () => {
    render(<Chessboard />)

    //8x8grid => 64 square -> 32 w 32 b
    expect(screen.getAllByTestId("square-black")).toHaveLength(32)
    expect(screen.getAllByTestId("square-white")).toHaveLength(32)
  })
})
