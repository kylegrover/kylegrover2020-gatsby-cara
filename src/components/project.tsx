/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"

type ContentProps = {
  speed: number
  offset: number
  children: React.ReactNode
  className?: string
  factor?: number
}

const Project = ({ offset, factor = 2, title, children }: { children: React.ReactNode, offset: number; title: string; overview: string; factor?: number }) => (
  <div>
    <Content speed={0.4} offset={offset + 0.2} factor={factor}>
      <Inner>
        <h1><span className="small-text">Project Overview:</span> {title}</h1>
        { children }
      </Inner>
    </Content>
    <Divider
      bg="linear-gradient(to right, Salmon 0%, Gold 100%)"
      sx={{ clipPath: `polygon(0 15%, 100% 25%, 100% 85%, 0 75%)` }}
      speed={-0.2}
      offset={1}
      factor={factor}
    />
  </div>
)

export default Project