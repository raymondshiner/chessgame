import { render, screen } from "@testing-library/react"
import { Pawn } from "../Pawn"

describe("Pawn", () => {
  it("Renders a light pawn when color is light", () => {
    render(<Pawn color="light" />)
    expect(screen.getByTestId("pawn-light")).toBeInTheDocument()
  })

  it("Renders a black pawn when color is dark", () => {
    render(<Pawn color="dark" />)
    expect(screen.getByTestId("pawn-dark")).toBeInTheDocument()
  })
})
