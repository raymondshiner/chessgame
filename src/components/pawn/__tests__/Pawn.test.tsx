import { render, screen } from "@testing-library/react"
import { Pawn } from "../Pawn"

describe("Pawn", () => {
  it("Renders a pawn", () => {
    render(<Pawn />)
    expect(screen.getByTestId("pawn")).toBeInTheDocument()
  })
})
