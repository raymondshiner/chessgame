import { FC } from "react"
import WhitePawn from "./white_pawn.svg"

export const Pawn: FC = () => {
  return <img src={WhitePawn} data-testid="pawn" alt="pawn" />
}
