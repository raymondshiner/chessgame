import WhitePawn from "./white_pawn.svg"
import BlackPawn from "./black_pawn.svg"

export const Pawn = ({ color }: { color: "light" | "dark" }) => {
  const pawnSvg = color === "light" ? WhitePawn : BlackPawn

  return <img src={pawnSvg} data-testid={`pawn-${color}`} alt="pawn" />
}
